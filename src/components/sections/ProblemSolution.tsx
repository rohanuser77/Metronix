export default function ProblemSolution() {
  const problems = [
    "Koi STEM lab nahi — sirf textbook ratna padta hai",
    "Career guidance ki kami — 12th ke baad kya karein, pata nahi",
    "English bolne mein hichkichahat aur darr lagta hai",
    "Hazaron scholarships hain, par form dhundhne aur bharne ka rasta nahi",
    "Internet slow ya mehenga hai — online video buffers",
    "Kota/Patna jaisi lakhon rupaye ki coaching fees gaon ka kisan nahi de sakta",
  ];

  const solutions = [
    "Virtual Pocket Lab — mobile pe Physics, Chemistry, Agriculture bina lab ke",
    "AI Career Counselor — 24/7 Hindi mein bade bhai jaisa margdarshan",
    "English Confidence Gym — roz 5 minute desi tareeqe se bolne ki aadat",
    "Smart Scholarship Matcher — aamdani aur category se direct eligible schemes",
    "100% Offline-First — ek baar download, bina net ya 2G pe bhi sab chalega",
    "Zero-Cost College Roadmap — government colleges, polytechnic, aur poorna scholarships",
  ];

  return (
    <section className="section-wrapper py-section bg-cream">
      <div className="content-container">
        {/* Section label */}
        <p className="text-caption text-saffron font-semibold uppercase tracking-widest mb-4 text-left">
          Sacchi Baat · Ground Reality
        </p>
        <h2 className="text-display-md text-charcoal font-hindi mb-10 text-left">
          Padhai aur Sapno ke beech ka fasla ab khatam hoga.
        </h2>

        {/* Split container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-panel overflow-hidden shadow-hard-xl border-2 border-charcoal">

          {/* PROBLEM SIDE — dark charcoal */}
          <div className="bg-charcoal p-8 lg:p-12 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-rose inline-block" />
              <h3 className="text-display-sm text-cream font-hindi">Aaj Ki Reality</h3>
            </div>
            <p className="text-stone text-body-sm font-hindi mb-8">
              Gaon aur chhote kasbo ke vidyarthi roz in mushkilon se ladte hain:
            </p>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3.5 text-cream/90 text-body-sm font-hindi leading-relaxed">
                  <span className="text-rose text-lg font-bold flex-shrink-0 leading-none mt-0.5">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTION SIDE — cream */}
          <div className="bg-cream p-8 lg:p-12 border-t-2 border-charcoal lg:border-t-0 lg:border-l-2 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-leaf inline-block" />
              <h3 className="text-display-sm text-charcoal font-hindi">Mentorix Ke Saath</h3>
            </div>
            <p className="text-stone text-body-sm font-hindi mb-8">
              Sab kuch tere phone par, tere gaon mein, bilkul muft:
            </p>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3.5 text-ink text-body-sm font-hindi leading-relaxed">
                  <span className="text-leaf text-base font-bold flex-shrink-0 leading-none mt-0.5">✓</span>
                  <span className="font-medium text-charcoal">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
