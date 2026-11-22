# Mentorix


Offline-first, vernacular, gamified STEM learning platform built specifically for rural and semi-urban Indian students (Class 6–12).

---

## 🚀 Live Build Summary

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom editorial design tokens (`hard-*` shadows, `#F97316` Saffron, `#1C1A17` Charcoal, `#FAFAF7` Cream, `#F3EFE8` Parchment)
- **Typography**: Mukta (Hindi) + Plus Jakarta Sans (English)
- **Bundle Performance**: **< 100 kB First Load JS** on all routes (blazing fast on 2G/3G networks)
- **Zero AI-Slop**: Hard drop shadows, hand-drawn underlines, custom SVG icons, asymmetric bento layout, no soft purple gradients.

---

## 📂 Architecture & Routes

| Route | Description | Status |
|---|---|---|
| `/` | Landing page (Hero, TrustBar, ProblemSolution, SixPillars, HowItWorks, VirtualLabs, Testimonials, ScholarshipPreview, ForParents, EarlyAccessCTA) | ✅ Built & Static |
| `/features` | Complete 10-pillar architecture (Labs, AI Mentor, Scholarships, Routine, Radar, Parents Mode, Exam Command, Leaderboards, Teacher Sahayak, Kiosks) | ✅ Built & Static |
| `/how-it-works` | Student journey walkthrough + **Live Interactive AI Mentor Chat Demo** | ✅ Built & Interactive |
| `/scholarships` | Zero-Cost College matcher with category filters, income brackets, and document checklist | ✅ Built & Interactive |
| `/for-parents` | Vernacular WhatsApp update simulator in Hindi, audio report demo, and enrollment guide | ✅ Built & Static |
| `/for-schools` | Rural institutional partnership, Teacher Sahayak mode, and offline kiosk setup inquiry form | ✅ Built & Interactive |
| `/early-access` | VIP waitlist registration with live counter, student grade & state picker, and instant roll number | ✅ Built & Interactive |
| `/about` | Manifesto, principles, and mission for rural Bharat | ✅ Built & Static |
| `/api/waitlist` | Waitlist registration API (Supabase integration + local JSON fallback for zero-config run) | ✅ Built (Dynamic) |
| `/api/scholarships` | Scholarship database filtering API (NSP, state schemes, private trusts) | ✅ Built (Dynamic) |
| `/api/mentor-demo` | Interactive AI mentor reasoning API for real-time vernacular question answering | ✅ Built (Dynamic) |

---

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 🔐 Environment Variables (`.env.local`)

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

*Note: The app includes an automatic offline/local fallback for waitlist signups in `.waitlist_data.json` if Supabase credentials are not yet configured.*

---

## 🇮🇳 Built for Bharat
Designed with love for rural India, Class 6–12 students, teachers, and parents.
