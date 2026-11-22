const trustItems = [
  "🏆 INSPIRE Award Aligned",
  "📚 NCERT Curriculum Mapped",
  "🌐 2G Network Compatible",
  "🗣️ 8 Indian Languages",
  "📴 100% Offline Mode",
  "🧪 50+ Virtual Lab Experiments",
  "🎓 NSP Scholarship Integration",
  "🧑‍🤝‍🧑 Peer Study Circles",
  "📱 Works on 1GB RAM Phones",
  "👨‍🏫 Teacher Sahayak Reports",
];

export default function TrustBar() {
  const doubled = [...trustItems, ...trustItems];

  return (
    <div className="w-full bg-parchment border-y-2 border-charcoal py-4 overflow-hidden select-none">
      <div
        className="flex gap-10 animate-marquee whitespace-nowrap"
        aria-label="Platform credentials and features"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-body-sm text-charcoal font-hindi font-bold flex-shrink-0 flex items-center gap-2"
          >
            <span>{item}</span>
            <span className="text-stone opacity-50 ml-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
