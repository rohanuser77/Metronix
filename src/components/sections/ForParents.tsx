export default function ForParents() {
  return (
    <section className="w-full bg-charcoal text-cream py-section border-b-2 border-charcoal">
      <div className="content-container section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text column */}
          <div className="max-w-xl text-left">
            <span className="inline-block bg-saffron text-white text-caption font-bold px-3 py-1 rounded-badge uppercase tracking-wider mb-4 shadow-hard-saffron-sm">
              Parents Mode · Mata-Pita ke Liye
            </span>
            <h2 className="text-display-md sm:text-display-lg text-cream font-hindi mb-6 leading-tight">
              Aapke bacche ki padhai — aapki bhasha mein.
            </h2>
            <p className="text-body-lg text-cream/80 font-hindi mb-8 leading-relaxed">
              Agar aapne school nahi padha, toh bhi koi baat nahi! Har hafte ek aasan WhatsApp sandesh aur audio report aapko batayegi ki aapka baccha kitna aage badh raha hai.
            </p>

            <div className="space-y-5 text-body-sm font-hindi">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-saffron/20 border border-saffron flex items-center justify-center text-saffron font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base">Har Hafte WhatsApp Update</h4>
                  <p className="text-cream/70 text-caption mt-1">
                    Bina kisi app ko download kiye, seedha aapke saade phone ya WhatsApp par bhasha chunein: Hindi, Marathi, Bhojpuri, Tamil, ya Bangla.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-saffron/20 border border-saffron flex items-center justify-center text-saffron font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base">Audio Report Suvidha</h4>
                  <p className="text-cream/70 text-caption mt-1">
                    Padhna mushkil lage toh sirf ek button dabakar aawaz mein sunein ki bacche ne Science mein kitne experiment kiye.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-saffron/20 border border-saffron flex items-center justify-center text-saffron font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-cream text-base">Kharch aur Fees ki Jankari</h4>
                  <p className="text-cream/70 text-caption mt-1">
                    Sarkari polytechnic aur hostel ke bare mein sahi information taaki shehar ke dharle se bachein.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: WhatsApp Mockup with Saffron Bubble */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0F2F24] border-2 border-saffron rounded-[28px] p-4 shadow-hard-saffron-xl text-left">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-sm shadow-hard-sm">
                  M
                </div>
                <div>
                  <p className="text-white font-bold text-sm font-hindi">Mentorix Shiksha Sahayak</p>
                  <p className="text-[#25D366] text-caption font-hindi flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                    Online • Har Ravivar ki Report
                  </p>
                </div>
              </div>

              {/* Chat Message Bubble */}
              <div className="mt-4 space-y-3 font-hindi text-body-sm">
                <div className="bg-[#128C7E]/30 border border-[#25D366]/30 text-white rounded-card rounded-tl-none p-4 shadow-hard-sm">
                  <p className="font-bold text-amber text-xs mb-1">
                    📢 Ravi ki Saaptahik Report (Class 10)
                  </p>
                  <p className="text-xs text-white/95 leading-relaxed">
                    Pranaam Chachaji! 🙏 Pichhle 7 dinon mein Ravi ne:
                  </p>
                  <div className="my-2.5 space-y-1 text-xs bg-black/30 p-2.5 rounded-badge border border-white/10">
                    <p className="text-leaf font-bold">✓ 4 Physics Experiments poore kiye</p>
                    <p className="text-white">✓ Roz shaam 45 minute padhai ki</p>
                    <p className="text-amber">✓ 150 Naye Points (XP) kamaye</p>
                  </div>
                  <p className="text-xs text-white/90">
                    <strong>Agla Kadam:</strong> Ravi agle hafte INSPIRE Scholarship ka mock test dega. Uska hausla badhayein!
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10 text-[10px] text-white/60">
                    <span>10:45 AM</span>
                    <span className="text-[#34B7F1]">✓✓ Read</span>
                  </div>
                </div>

                {/* Audio Voice Note Simulation */}
                <div className="bg-saffron text-charcoal rounded-card rounded-tl-none p-3.5 shadow-hard-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-charcoal text-cream flex items-center justify-center font-bold text-xs flex-shrink-0 cursor-pointer shadow-hard-sm">
                      ▶
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-charcoal/20 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-charcoal" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-charcoal font-bold mt-1">
                        <span>Aawaz mein sunein (Hindi)</span>
                        <span>0:42</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
