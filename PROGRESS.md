# PROJECT PROGRESS — Iqra Desire English School Website

> Kal yeh file Kiro ko padhne ko bolna: "PROGRESS.md padho aur aage badho".
> Isi se sab context wapas aa jayega.

## Live site
- URL: https://iqra-desire-school.vercel.app
- GitHub: https://github.com/md-sabir-ali/iqra-desire-school
- Hosting: Vercel (free), auto-deploy on git push to `main`

## School details (confirmed)
- Name: Iqra Desire English School
- Classes: Nursery to Class 10
- Established: 2013 (from logo)
- Tagline: "Learn • Grow • Achieve"
- Motto: "Education, Providence, Honest Excellence"
- Address: Ramopatti, Simri, Buxar, Bihar 802135
- Phone: 083404 03400
- WhatsApp: +91 88091 48710
- Email: iqradesireenglishschool@gmail.com
- Facebook: https://www.facebook.com/IQRADESIREENGLISHSCHOOL/
- Logo colors: navy blue + gold

## Tech stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Node.js v24 installed. npm is at "C:\Program Files\nodejs\npm.cmd"
  (PowerShell blocks npm.ps1; use npm.cmd directly).
- Build: & "C:\Program Files\nodejs\npm.cmd" run build  (passes, 0 errors)
- Deploy: git add -A; git commit; git push  → Vercel auto-deploys
  (commit with: git -c user.email="iqradesireenglishschool@gmail.com" -c user.name="md-sabir-ali")

## DONE so far
- [x] Full site built: Home, About, Academics, Admissions (enquiry form), Gallery, Notices, Contact
- [x] SEO: sitemap, robots, metadata, 404 page
- [x] Deployed live on Vercel + pushed to GitHub
- [x] Real contact details (phone, whatsapp, email, address) + map
- [x] School LOGO added to Navbar + Footer (/images/galary/iqr.png)
- [x] Theme changed to navy-blue + gold (matches logo)
- [x] Animated HERO SLIDER on home page (auto-rotating photos) — user liked this
- [x] Gallery filled with real photos from /public/images/galary/

## ===== CURRENT STATE: WORKING ON "v2-animated" BRANCH =====
## >>> RESUME HERE when user says continue <<<
- Git branch `main` = current LIVE site (https://iqra-desire-school.vercel.app) — UNTOUCHED, safe.
- Git branch `v2-animated` = NEW animated version (we are here). Pushed to GitHub.
- v2 PREVIEW URL (Vercel): https://iqra-desire-school-git-v2-animated-sabir-tech.vercel.app/
  NOTE: Vercel "Deployment Protection / Vercel Authentication" is ON, so the preview
  asks for Vercel login. To view: open in a browser already logged into Vercel, OR
  turn it off at: Vercel → project → Settings → Deployment Protection → disable.

### What v2-animated adds (all built, builds pass, pushed):
- [x] Ken Burns slow-zoom on active hero slide (globals.css @keyframes kenburns + HeroSlider)
- [x] CountUp.tsx — stats count 0→target on scroll (IntersectionObserver)
- [x] Reveal.tsx — fade/slide-in on scroll for sections/cards
- [x] Animated stats band (2013 / 500+ / 25+ / 100%) on home
- [x] standApart data + "What Makes Us Stand Apart" 6 icon cards
- [x] PhotoBand.tsx — immersive full-width photo band (uses sport1.jpg)
- [x] Toppers/Achievers section (2026 topper.jpg + medal.jpg)
- [x] PillarsCarousel.tsx — auto-rotating "Our Core Pillars" carousel (arrows+dots)
      data: corePillars in src/data/academics.ts
- Home page (src/app/page.tsx) fully rewritten with these sections + Reveal wrappers.

### DECISION PENDING from user (after they view v2 preview):
- Does user like v2? If YES → merge v2-animated into main to make it LIVE:
    git checkout main; git merge v2-animated; git push
  (Vercel auto-deploys main.) Then optionally delete v2 branch.
- If changes wanted → stay on v2-animated, edit, push (preview auto-updates).

### Honest gap vs St. Mathews (design ~90% matched now). Remaining = content/photos:
- [ ] Professional/best photos (user will download from Facebook later)
- [ ] Principal real name + photo + message (About page, src/data/faculty.ts)
- [ ] Real Vision/Mission text (src/app/about/page.tsx)
- [ ] Real notices (src/data/notices.ts)
- [ ] Home stats real numbers (currently placeholder 500+/25+)

## Photos available (in public/images/galary/)
iqr.png (main logo), iqr0.png (alt logo), prayer.jpg, "2026 topper.jpg",
medal.jpg, st.jpg, sport1.jpg, sport2.jpg, sport3.jpg, sport4.jpg,
jg.jpg, p2.jpg, p5.jpg, p6.jpg

## TODO — pending (do next time)
- [ ] Home page STATS are placeholders ("500+ students", "25+ teachers").
      User said keep placeholder for now, but ASK if they want real numbers
      or safe values (e.g. "Est. 2013", "Nur–10").
- [ ] About page: real Principal name + message + photo (currently placeholder).
- [ ] About page: real Vision / Mission text (currently generic).
- [ ] Notices page: replace demo notices with real ones (src/data/notices.ts).
- [ ] (Optional) Use alt logo iqr0.png somewhere if user wants.
- [ ] (Optional, user's original goal) Make it even more "St. Mathews-like":
      core-pillars section, alumni/toppers highlight, more animations.
- [ ] (Optional, future phases per docs/ARCHITECTURE.md): database (Supabase),
      admin login, AI chatbot, Google Ads, online fee payment.

## Key files to edit
- src/config/site.ts        → name, contact, tagline, logo, feature flags
- src/data/notices.ts       → notices
- src/data/gallery.ts       → gallery photos + heroSlides (slider images)
- src/data/faculty.ts       → principal/teachers
- src/data/academics.ts     → class levels + "Why choose us" highlights
- src/app/about/page.tsx    → vision/mission/principal text
- src/app/page.tsx          → home (stats numbers are here)
- src/components/HeroSlider.tsx → the animated home slider
- tailwind.config.ts        → brand (navy) + accent (gold) colors
