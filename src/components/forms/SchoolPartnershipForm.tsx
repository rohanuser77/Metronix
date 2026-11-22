"use client";
import { useState } from "react";
import { CheckCircleIcon } from "@/components/icons/MetronixIcons";

export default function SchoolPartnershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <div className="w-10 h-10 rounded-full bg-emerald-soft text-emerald flex items-center justify-center mx-auto mb-3">
          <CheckCircleIcon size={24} />
        </div>
        <h4 className="text-base font-bold text-slate-900 mb-1">
          Inquiry Successfully Registered
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Our institutional deployment coordinator will review your school&apos;s requirements and reach out within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-1">
          Full Name & Institutional Designation *
        </label>
        <input
          type="text"
          required
          placeholder="e.g., Dr. Ramesh Chandra, Principal / Science Head"
          className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            School / Organization Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Govt Model Senior Secondary School"
            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            District & State *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Khunti, Jharkhand"
            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            Official Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="principal@school.edu.in"
            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            Contact Number (Phone / WhatsApp) *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-1">
          Deployment Scope
        </label>
        <select className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-600">
          <option>Single School Classroom (100–300 Students)</option>
          <option>District School Cluster (1,000+ Students)</option>
          <option>NGO / CSR Education Initiative</option>
          <option>Vocational / Polytechnic Training Center</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-3 text-xs font-semibold"
      >
        {loading ? "Submitting Request..." : "Submit Institutional Inquiry"}
      </button>
    </form>
  );
}
