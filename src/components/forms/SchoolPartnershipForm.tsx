"use client";
import { useState } from "react";

export default function SchoolPartnershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-leaf/10 border-2 border-leaf rounded-panel text-center font-hindi">
        <span className="text-4xl block mb-2">🎉</span>
        <h4 className="text-display-sm text-charcoal font-hindi mb-2">
          Dhanyawad! Request Darj Ho Gayi.
        </h4>
        <p className="text-body-sm text-ink">
          Hamare Gramin Shiksha Mitra aapse 24 ghante mein phone ya WhatsApp par sampark karenge.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-hindi text-left">
      <div>
        <label className="text-caption font-bold text-charcoal block mb-1">
          Aapka Naam aur Pad (Designation) *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Ramesh Chandra, Headmaster / NGO Coordinator"
          className="w-full px-4 py-3 rounded-btn border-2 border-charcoal bg-cream text-charcoal font-hindi text-body-sm focus:outline-none focus:border-saffron shadow-hard-sm"
        />
      </div>
      <div>
        <label className="text-caption font-bold text-charcoal block mb-1">
          School ya Sanstha ka Naam aur Zilla (District) *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Govt High School, Khunti, Jharkhand"
          className="w-full px-4 py-3 rounded-btn border-2 border-charcoal bg-cream text-charcoal font-hindi text-body-sm focus:outline-none focus:border-saffron shadow-hard-sm"
        />
      </div>
      <div>
        <label className="text-caption font-bold text-charcoal block mb-1">
          Phone Number / WhatsApp *
        </label>
        <input
          type="tel"
          required
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 rounded-btn border-2 border-charcoal bg-cream text-charcoal font-hindi text-body-sm focus:outline-none focus:border-saffron shadow-hard-sm"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-3.5 mt-2 text-body-md"
      >
        {loading ? "Bhej rahe hain..." : "Pilot Program ke Liye Request Bhejein →"}
      </button>
    </form>
  );
}
