"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function HowItWorksPage() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "mentor"; text: string; time: string }>>([
    {
      sender: "mentor",
      text: "Namaste! Main Mentorix AI Dost hoon. Physics, Chemistry, Biology ya Scholarship — jo bhi doubt ho Hindi mein bina jhijhak poocho! 🙏",
      time: "Abhi",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || chatInput;
    if (!textToSend.trim() || loading) return;

    const userMsg = {
      sender: "user" as const,
      text: textToSend,
      time: "Abhi",
    };
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/mentor-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "mentor",
          text: data.reply || "Shabaash! Is topic ko aur vistar se samjhein?",
          time: data.timestamp || "Abhi",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "mentor",
          text: "Bhai lagta hai network kamzor hai, lekin Mentorix app mein ye bina network ke bhi chalega!",
          time: "Abhi",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-cream pt-20">
        {/* Header */}
        <section className="section-wrapper py-16 bg-parchment border-b-2 border-charcoal">
          <div className="content-container text-left">
            <span className="badge bg-saffron text-white border-charcoal text-caption font-bold px-3 py-1 mb-4 shadow-hard-sm">
              Student Safar
            </span>
            <h1 className="text-display-lg sm:text-display-xl text-charcoal font-hindi mb-4">
              Kaise Kaam Karta Hai Mentorix?
            </h1>
            <p className="text-body-lg text-ink font-hindi max-w-2xl leading-relaxed">
              Gaon ke ek aam vidyarthi se lekar IIT, NEET ya zero-cost college tak ka safar — aasan, practical aur 100% offline.
            </p>
          </div>
        </section>

        {/* 4-Step Flow */}
        <section className="section-wrapper py-section">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
              {[
                {
                  step: "01",
                  titleHindi: "Ek Baar Download, Hamesha Padhai",
                  desc: "Haat ke bazaar ya school ke WiFi se Mentorix ka 15MB pack download karo. Uske baad bina SIM card ya bina internet ke sare chapters chalte hain.",
                  badge: "Zero Data Mode",
                  color: "#0EA5E9",
                },
                {
                  step: "02",
                  titleHindi: "Desi Udaharano se Concept Clear",
                  desc: "Formula ratne ki zaroorat nahi. Har physics aur chemistry niyam ko khet, kuan, bicycle aur tractor ke udaharan se samjhaya gaya hai.",
                  badge: "Desi Context",
                  color: "#F97316",
                },
                {
                  step: "03",
                  titleHindi: "Pocket Lab mein Khud Experiment Karo",
                  desc: "Screen par chemical mila kar rang badalte dekho, mitti ka pH test karo, aur lens ka focus adjust karo. Bina lab ke practical seekho.",
                  badge: "50+ Simulations",
                  color: "#22C55E",
                },
                {
                  step: "04",
                  titleHindi: "Scholarship Match & College Entry",
                  desc: "Aamdani aur marks ke aadhar par central aur state scholarships dhoondho. Form bharne se lekar admission tak pura margdarshan.",
                  badge: "Zero Fees Path",
                  color: "#8B5CF6",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-cream border-2 border-charcoal rounded-panel p-8 shadow-hard-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-display-md font-mono font-extrabold text-charcoal/[0.15]"
                        aria-hidden="true"
                      >
                        {item.step}
                      </span>
                      <span
                        className="badge text-xs font-bold text-white px-2.5 py-1"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-display-sm text-charcoal font-hindi mb-3">
                      {item.titleHindi}
                    </h3>
                    <p className="text-body-sm text-ink font-hindi leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* LIVE INTERACTIVE DEMO: AI MENTOR CHAT */}
            <div className="bg-parchment border-2 border-charcoal rounded-panel p-6 sm:p-10 shadow-hard-xl text-left">
              <div className="max-w-2xl mb-6">
                <span className="badge bg-amber/25 text-charcoal border-charcoal text-caption font-bold px-3 py-1 mb-2">
                  Live Try Karo
                </span>
                <h2 className="text-display-md text-charcoal font-hindi">
                  AI Mentor se Baat Karke Dekhein
                </h2>
                <p className="text-body-sm text-ink font-hindi mt-1">
                  Neeche diye gaye kisi bhi sawal par click karein ya apna sawal likhein:
                </p>
              </div>

              {/* Sample Quick Prompts */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {[
                  "Inertia (जड़त्व) kya hota hai?",
                  "Gravity aur khet mein paani ka kya lena-dena hai?",
                  "NMMSS scholarship kaise milegi?",
                  "Kheti ke baad padhai ka routine batao",
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="text-caption font-bold font-hindi bg-cream border-2 border-charcoal/40 hover:border-charcoal px-3 py-2 rounded-btn shadow-hard-sm transition-all"
                  >
                    💬 {prompt}
                  </button>
                ))}
              </div>

              {/* Chat Window */}
              <div className="bg-cream border-2 border-charcoal rounded-card p-4 sm:p-6 shadow-hard-md mb-4 max-h-[380px] overflow-y-auto space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-card p-3.5 shadow-hard-sm font-hindi text-body-sm ${
                        msg.sender === "user"
                          ? "bg-saffron text-white rounded-tr-none border border-saffron"
                          : "bg-parchment text-charcoal rounded-tl-none border border-border"
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                      <span className="text-[10px] opacity-70 block mt-1 text-right">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-parchment border border-border rounded-card p-3 text-caption font-hindi text-stone">
                      Mentorix AI soch raha hai...
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Apna doubt Hindi ya Hinglish mein likho..."
                  className="flex-1 px-4 py-3 rounded-btn border-2 border-charcoal bg-cream text-charcoal font-hindi text-body-sm focus:outline-none focus:border-saffron shadow-hard-sm"
                />
                <button
                  type="submit"
                  disabled={loading || !chatInput.trim()}
                  className="btn-primary py-3 px-6 whitespace-nowrap disabled:opacity-60"
                >
                  Poocho →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
