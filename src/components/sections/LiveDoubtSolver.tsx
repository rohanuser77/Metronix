"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChatBotIcon, SparklesIcon, CheckCircleIcon } from "@/components/icons/MetronixIcons";

interface Message {
  sender: "user" | "assistant";
  content: string;
  time: string;
}

export default function LiveDoubtSolver() {
  const { t, locale } = useLanguage();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      content:
        locale === "hi"
          ? "नमस्ते। मैं मेट्रोनिक्स एआई अध्ययन सहायक हूँ। भौतिकी, रसायन विज्ञान, गणित अथवा छात्रवृत्ति से संबंधित अपना प्रश्न पूछें।"
          : "Hello. I am the Metronix AI Study Assistant. Type any question from your STEM syllabus to receive an immediate structured explanation.",
      time: "Ready",
    },
  ]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      sender: "user",
      content: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/mentor-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, locale }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          content: data.reply,
          time: data.timestamp || "Just now",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          content:
            locale === "hi"
              ? "नेटवर्क त्रुटि। कृपया पुनः प्रयास करें। मेट्रोनिक्स ऐप में यह सुविधा पूर्णतः ऑफलाइन भी कार्य करती है।"
              : "Unable to reach server. Please try again. On the native Metronix application, this tutor operates fully offline.",
          time: "Offline",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    t("ai_solver_sample_1"),
    t("ai_solver_sample_2"),
    t("ai_solver_sample_3"),
  ];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden">
      {/* Top Bar */}
      <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
            <ChatBotIcon size={18} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {t("ai_solver_title")}
            </h3>
            <p className="text-xs text-slate-300">
              {locale === "hi" ? "कक्षा 6–12 पाठ्यक्रम सक्षम" : "NCERT Class 6–12 Aligned"}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-soft text-emerald border border-emerald-border">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          {locale === "hi" ? "सक्रिय" : "Active Tutor"}
        </span>
      </div>

      {/* Preset Curriculum Pills */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500 mr-1">
          {locale === "hi" ? "त्वरित विषय:" : "Sample Inquiries:"}
        </span>
        {sampleQuestions.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(q)}
            className="text-xs font-medium px-3 py-1.5 rounded-md bg-white border border-slate-300 text-slate-700 hover:border-brand-500 hover:text-brand-600 transition-colors shadow-subtle text-left"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Message History */}
      <div className="p-6 max-h-[360px] min-h-[240px] overflow-y-auto space-y-4 bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-4 text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-brand-600 text-white rounded-tr-none font-medium"
                  : "bg-slate-50 text-slate-800 border border-slate-200 rounded-tl-none whitespace-pre-line"
              }`}
            >
              <p>{msg.content}</p>
              <span
                className={`block text-[11px] mt-2 text-right ${
                  msg.sender === "user" ? "text-brand-200" : "text-slate-400"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 flex items-center gap-2">
              <SparklesIcon size={14} className="animate-spin text-brand-600" />
              {locale === "hi" ? "विश्लेषण हो रहा है..." : "Analyzing concept..."}
            </div>
          </div>
        )}
      </div>

      {/* Query Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-4 bg-slate-50 border-t border-slate-200 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("ai_solver_placeholder")}
          className="flex-1 px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="btn-primary px-5 py-2.5"
        >
          {t("ai_solver_button")}
        </button>
      </form>
    </div>
  );
}
