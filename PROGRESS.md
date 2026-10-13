# PROJECT PROGRESS — Iqra Desire English School Website

> Kal yeh file Kiro ko padhne ko bolna: "PROGRESS.md padho aur aage badho".
> Isi se sab context wapas aa jayega.

## ⏭️ RESUME NEXT SESSION (last worked 2026-10-13)
- Everything built so far is DONE, committed & pushed to main. Git clean.
- ✅ TIER 2 DONE (2026-10-13): Academics page visual upgrade + "Apply Now" CTA.
  (see P4e below). Commit f9afc4d on main.
- ✅ P5 POLISH DONE (2026-10-13): Gallery full-screen LIGHTBOX + About page upgrade
  (Vision/Mission gold cards, Core Values, Why-Choose-Us). (see P4f below).
  Commit 7d450f9 on main. All builds 0 errors, pages stay STATIC → zero perf impact.
- ✅ P5 "NEXT SESSION" DONE (2026-10-13): new /achievements (Toppers) page + Notices
  page upgrade (category filter + pinned highlight) + Contact page polish.
  (see P4g below). Commit 6ab6a2d on main.
- ✅ BATCH A DONE (2026-10-13): security headers + home toppers CMS-connected +
  breadcrumbs & BreadcrumbList schema on all inner pages. (see P4h below).
  Commit 34265cc on main. Build 0 errors, all 15 routes STATIC.
- ✅ BATCH B DONE (2026-10-13): loading.tsx skeletons for /notices /gallery
  /achievements + Footer enrichment (Admissions CTA strip, tagline+motto, WhatsApp
  pill, Est. year). (see P4i below). Commit 516c80a on main.
- ✅ AUDIT + FIXES DONE (2026-10-13): full pro audit of live site; fixed P0 "0%" stat
  bug + canonicals + hero LCP + NEW /privacy page + tel/keywords/grammar/breadcrumb.
  (see P4j below). Commit c350d7e on main; verified live.
- ✅ PAGESPEED VERIFIED (2026-10-13) — real lab scores, user confirmed:
    MOBILE : Performance 97, Accessibility 92, Best Practices 100, SEO 92
    DESKTOP: Performance 99, Accessibility 92, Best Practices 100, SEO 92  (+ Agentic Browsing 2/2)
    (CrUX field data = "No Data" — just means site is new/low-traffic, NOT a problem.)
    => Performance/Best-Practices essentially maxed. Hero q=70 fix worked.
- ⏭️ PENDING (user will provide): the exact Accessibility(92) + SEO(92) warning items
    from the PSI report so Kiro can push both 92 → 100. STRONG GUESS for A11y = color
    contrast (gold #d4a017 text — flagged in audit). Do NOT guess-fix; wait for the
    actual report items from the user. Likely SEO item = minor (crawlable links / alt).
- NEXT PLANNED: (a) do the 92→100 A11y/SEO fix once user sends report items;
  (b) REAL SCHOOL DATA (P4j open list): principal, confirm facilities + affordability
  claims, real office hours, exact map pin, real stats/toppers.
- PENDING USER ACTIONS (free): (a) enable Vercel Analytics in dashboard Analytics tab;
  (b) delete the "KIRO TEST" entry in /admin → Admission Enquiry + leftover test items
  (gallery "test" photo, duplicate "Admission Open" notice, empty Achievement);
  (c) delete the one-time Sanity "seed" write token (security);
  (d) later: fill real school data (principal, stats numbers, facilities details,
  vision/mission, photos) — see P4 list. SANITY_WRITE_TOKEN env var already set in
  Vercel (enquiry→CMS works).
- Reminder: Sanity "trial popup" = just click "Maybe later" (free plan fine).

## Live site
- URL: https://iqra-desire-school.vercel.app
- GitHub: https://github.com/md-sabir-ali/iqra-desire-school
- Hosting: Vercel (free), auto-deploy on git push to `main`
- NOTE: v2 animated version is now LIVE on main (merged 2026-10-08).

## =========================================================
## ★★★ PENDING BACKLOG — user's TODO list. Do ONE BY ONE. ★★★
## (User adds points as he remembers. Keep appending here.)
## =========================================================
### P1. Admission enquiry form — ✅ DONE (2026-10-09)
   - Form now EMAILS every enquiry via Web3Forms. Tested & working (user got the email).
   - Web3Forms access key stored in src/config/site.ts `web3formsKey`:
     6ed5b18c-6614-4e5e-b56f-467e2f3fc3ad
   - Enquiries currently go to: mdsabirali.tech@gmail.com (user's own email, temporary).
   - TODO later: when school Gmail (iqradesireenglishschool@gmail.com) access is available,
     change the recipient in Web3Forms dashboard (no code change needed), OR make a new key.
   - Free plan: 250 submissions/month.
   - Code: submitEnquiry() in src/lib/api.ts POSTs to api.web3forms.com.
   - (Optional future: also add WhatsApp notification.)

### P2. Domain iqradesire.com — ✅ DONE & LIVE (2026-10-10)
   - 🎉 SITE IS LIVE at https://iqradesire.com (and www.iqradesire.com) over HTTPS.
   - Domain India support set nameservers to ns1/ns2.vercel-dns.com; DNS propagated.
     Verified: NS=vercel-dns, A @ -> 216.198.79.1 (Vercel). www -> Vercel too.
   - ✅ Updated src/config/site.ts `url` to https://iqradesire.com; committed+pushed (main).
   - ✅ SEO REDIRECT (2026-10-11): old Vercel URL (iqra-desire-school.vercel.app) now
     308-permanent-redirects to https://iqradesire.com (path preserved). Avoids
     duplicate-content; one canonical domain. Implemented via `redirects()` in
     next.config.mjs (host-based `has` rule; custom domain itself is NOT redirected so
     no loop). Verified: old /notices -> 308 -> iqradesire.com/notices; custom = 200.
   - FUTURE (optional): add .edu.in later (needs recognition docs), redirect .com->.edu.in.
   - (history below kept for reference)
### P2. Domain iqradesire.com — 🟡 IN PROGRESS (purchased 2026-10-09)
   - ✅ BOUGHT at Domain India for 5 years (~Rs 5,750 + GST). Registrar: Domain India.
     (user has account email+password at domainindia.com — needed for DNS settings)
   - Decided: .com NOW; add .edu.in LATER (needs school recognition docs).
     Both can point to same Vercel site; later redirect .com → .edu.in for SEO.
   - ⏭ NEXT: connect to Vercel —
     1. ✅ DONE: added iqradesire.com + www.iqradesire.com in Vercel (both show "Invalid
        Configuration" until DNS is set — normal).
     2. EXACT DNS values Vercel assigned (set these in Domain India DNS manager):
        - A record:   Name = @    Value = 216.198.79.1
        - CNAME:      Name = www  Value = c9c01c43863d31ca.vercel-dns-017.com
        (legacy also works: A 76.76.21.21 / CNAME cname.vercel-dns.com, but use the above.)
     3. 🔴 BLOCKED (2026-10-09): Could NOT set DNS at Domain India yet.
        - "Switch to Free DNS" button did nothing (glitch).
        - Nameserver change to Vercel FAILED: "Could not update the nameservers"
          (likely because domain was registered the same day — 24-48h add-grace lock).
        - ✅ Raised Domain India SUPPORT TICKET #TK-905590 — waiting for their team.

   ⏭ WHEN SUPPORT RESPONDS / lock clears — use EITHER method (both end at same result):
     METHOD A (nameservers — preferred, Vercel auto-manages everything):
        Domain India → iqradesire.com → Nameservers tab → set to exactly:
           ns1.vercel-dns.com
           ns2.vercel-dns.com
        (remove the 4 domainindia.net ones). Then wait propagation.
     METHOD B (DNS records — if staying on Domain India nameservers):
        Domain India → DNS tab → add:
           A     @    216.198.79.1
           CNAME www  c9c01c43863d31ca.vercel-dns-017.com
     After either: in Vercel → Domains → click "Refresh" until green/Valid.
     Then update src/config/site.ts `url` to https://iqradesire.com and push.
   - Website meanwhile LIVE at iqra-desire-school.vercel.app (nothing broken).
     4. Update src/config/site.ts `url` to https://iqradesire.com (SEO/OG).
   - Hosting stays FREE on Vercel.

### P3. Self-service content management — ✅ DONE (2026-10-11)
   - User wants to add/change himself (phone, no-code, free):
     * notices / announcements (e.g. "Admission Open")
     * gallery photos (add/change)
     * awards & achievements
   - DECISION: use **Sanity.io** (free tier, big). Reasons: reliable (not a Google
     "publish-to-web" jugaad), great mobile editor, IMAGES upload built-in (CDN),
     fits our src/lib/api.ts abstraction (only change inside getNotices()/etc.).
     (Rejected: Google Sheets = fragile/undocumented; Decap = OAuth maintenance pain;
      Supabase+custom admin = too much work now, keep for P5.)
   - Reference site St. Mathews (stmathewsacademy.edu.in) = WordPress + agency (PAID).
     We give the SAME self-service capability but FREE + fast via Sanity.
   - NOTE: animation/design changes stay code-level — Kiro does those, NOT via CMS.

   PLAN (Kiro leads; user does only the 2 account steps):
     Step 1 (USER): create free Sanity account at sanity.io (Google login).
     Step 2 (KIRO): add Sanity Studio + schemas (notice, achievement, galleryItem)
                    inside the repo at /studio (or embedded at /admin route).
     Step 3 (USER): give Kiro the projectId + dataset name (+ a read token if needed).
     Step 4 (KIRO): wire src/lib/api.ts getNotices()/getGalleryItems()/achievements
                    to fetch from Sanity (ISR revalidate ~60s). Keep static fallback.
     Step 5 (KIRO): build + deploy; write user a short "how to add a notice from phone".
   - Env vars needed in Vercel later: NEXT_PUBLIC_SANITY_PROJECT_ID, DATASET, (token).
   - ✅ Sanity account: mdsabirali.tech@gmail.com | projectId = hwulcwab | dataset = production
   - ✅ CORS added in Sanity (iqradesire.com, www, localhost:3000, allow-credentials).
   - ✅ BUILT & LIVE: embedded Sanity Studio at https://iqradesire.com/admin (login w/ Google).
       Schemas: notice, achievement (topper), galleryItem (photo upload w/ CDN).
       Code: src/sanity/* , sanity.config.ts , src/app/admin/[[...tool]]/page.tsx .
       Wiring: src/lib/api.ts getNotices()/getGalleryItems() fetch Sanity, else static fallback.
       ISR revalidate=60 on /, /notices, /gallery. next.config allows cdn.sanity.io images.
       robots.ts disallows /admin.
   - ✅ TESTED by user: login + publish a notice worked. Content shows within ~1 min.

   ✅ RESOLVED (2026-10-11): Chose Option A (CMS-only + seed). As tech-lead decided
      and user agreed. Did a one-time SEED of the existing local content into Sanity:
        - 12 gallery photos (from public/images/galary/) uploaded to Sanity CDN
        - 4 notices (from src/data/notices.ts) created as editable documents
      Script: scripts/seed-sanity.mjs (idempotent — fixed _id seed-gallery-g1..g12 /
      seed-notice-n1..n4, uses createOrReplace, token via env SANITY_WRITE_TOKEN only,
      NOT committed). Dataset now: 13 galleryItem (12 seeded + 1 old "test"), 5 notice
      (4 seeded + 1 old "Admission Open 2026-27" test). The site is CMS-only: whatever
      is in Sanity shows; local static data is now only an emergency fallback.
      Also set src/sanity/client.ts useCdn:false so /admin edits appear within ~1 min.
      Build passed (0 errors). => P3 DONE.

      ⚠️ TWO SMALL REMINDERS FOR USER:
        1. SECURITY: delete the write token after seed —
           sanity.io/manage -> project -> API -> Tokens -> delete the "seed" token.
           (It's only needed for the one-time seed; site reads work without it.)
        2. CLEANUP: in /admin, delete the 2 leftover test items (gallery photo
           caption "test" + the duplicate "Admission Open 2026-27" notice + empty
           Achievement) so only the real 12 photos + 4 notices remain.

   >>> (history of the decision kept below for reference) <<<
   ⚠️ OPEN DECISION (user paused here 2026-10-10, will resume):
      Current behaviour (by design): if CMS has >=1 notice, site shows ONLY CMS notices;
      if CMS empty, shows the 4 static demo notices. So when user published 1 notice, the
      demo ones disappeared. User expected: "only the thing I edit changes, rest stays".
      Explained options:
        (A) CMS-only (recommended): demo was just a placeholder; user adds all real notices
            in CMS. Clean + full control. Optionally SEED the 3-4 demo notices into Sanity
            once so user can edit/delete them (best of both). <-- likely next action.
        (B) Always merge demo + CMS: rejected (demo notices are fake/hardcoded, can't be
            deleted from CMS, confusing).
      >>> RESUME P3: ask user A or B. If A+seed: create the existing src/data/notices.ts
          items as Sanity documents (one-time seed) so they're editable in /admin.
          Then P3 = DONE. Also same pattern available for gallery/achievements if wanted. <<<
   - GUIDE for user (how to add a notice): go to /admin -> login Google -> "Notice" -> "+"
     -> fill Title/Date/Category/Details, toggle Pin if needed -> PUBLISH (not just save)
     -> appears on site within ~1 min.

### P4. Real content polish (fill placeholders) — 🟡 IN PROGRESS
   ✅ (2026-10-11) Home stats FIXED: removed FAKE "500+ Students / 25+ Teachers".
      Now shows only TRUE values: Established 2013, Classes "Nursery–10",
      Medium "English", 100% Caring Support. (src/data/academics.ts `stats` +
      render in src/app/page.tsx handles number count-up vs plain text.)
      ⏳ PENDING — WHEN REAL DATA ARRIVES: replace the two text stats back with real
         animated numbers, e.g. { value: 500, suffix: "+", label: "Students" } and
         { value: 25, suffix: "+", label: "Teachers" }. Just need real approx counts.

   ✅ (2026-10-11) Added professional "Our Facilities" section on home page
      (St. Mathews-style icon cards, gold accent + hover lift). 6 facilities:
      Computer Lab, Library, Playground, Smart Classes, Transport/Bus, Science Lab.
      Data: `facilities` in src/data/academics.ts; rendered in src/app/page.tsx
      (after "What Makes Us Stand Apart"). Added accent-50 shade in tailwind.config.ts.
      Descriptions are general & true (no over-claims like exact book counts).
      ⏳ PENDING — WHEN REAL DATA ARRIVES: user will confirm which facilities actually
         exist (add/remove) and give specifics (e.g. library book count, lab details,
         smart-class count) so Kiro can enrich the descriptions.
   ✅ (2026-10-11) Principal's Message section REDESIGNED on About page — now a
      professional St.-Mathews-style card (navy bg + gold accents, rounded photo
      frame, quote icon, centered). Removed the amateur "Principal Name" / placeholder.svg.
      SMART PLACEHOLDER: faculty.ts entry f1 now has EMPTY fields; UI auto-handles —
      shows "Our Principal" + a clean general welcome message + graduation-cap icon
      until real data is filled. Added optional `qualifications` to FacultyMember type.
      Removed the 2 fake "Teacher Name" entries (f2,f3 — they were never rendered).
      Decided (2026-10-11): keep the SHORT general message for now (no name yet);
      a richer "Option B" welcome draft was offered but user chose to keep old.
      ⏳ WHEN REAL DATA ARRIVES — just fill src/data/faculty.ts f1:
         name (real Principal name) → auto-shows instead of "Our Principal"
         photo "/images/faculty/principal.jpg" → auto-replaces the icon
         qualifications "M.A., B.Ed." → auto-shows
         bio (real 2–4 line message) → auto-replaces the generic message
      (No code change needed — section fills itself.)

   Still TODO in P4 (fill with real content when school provides it):
     - Principal: real name + photo + qualifications + message (src/data/faculty.ts f1 —
       section redesigned & ready; just fill the empty fields).
     - About page: real school story + Vision + Mission (src/app/about/page.tsx — generic
       TODO text) + real campus image (currently placeholder.svg).
     - Enquiry email: switch recipient from personal mdsabirali.tech@gmail.com to school
       Gmail when access available (Web3Forms dashboard, no code change).
     - Social: Instagram / YouTube links if any (src/config/site.ts social{}).
     - Contact: verify/replace exact Google Maps pin.
     - Stats: real Students/Teachers counts (currently honest text placeholders).
     - Facilities: confirm which actually exist + specifics to enrich descriptions.

   ===== DETAILS TO COLLECT FROM SCHOOL (give to Kiro to fill the site) =====
   Priority order (most impact first): PHOTOS → Principal → Stats → Vision/Mission → Toppers.

   1. BASIC INFO
      [ ] Established year (confirm 2013 from logo)
      [ ] Board affiliation/recognition (BSEB/CBSE? recognition no.) — needed for .edu.in & trust
      [ ] UDISE code / official school ID (optional)
   2. STATS (home page numbers — currently "0+")
      [ ] No. of students (approx)
      [ ] No. of teachers/staff (approx)
      [ ] Any other proud number (classrooms etc.)
   3. PRINCIPAL / HEAD
      [ ] Principal name
      [ ] Principal photo (clear)
      [ ] Principal short message (2-4 lines)
   4. ABOUT (About page)
      [ ] School history/story (2-3 lines)
      [ ] Vision (1 line)
      [ ] Mission (1 line)
      [ ] Key facilities (computer lab? library? playground? bus? smart classes?)
   5. TEACHERS/STAFF (optional)
      [ ] Few senior teachers: name + photo + subject
   6. ACADEMICS
      [ ] Subjects taught
      [ ] School timings
      [ ] Special teaching methods/activities
   7. ADMISSION INFO
      [ ] Admission process + documents required
      [ ] Fees structure (put on site OR keep "ask office")
      [ ] When admissions open
   8. PHOTOS (biggest impact for "live" feel)
      [ ] School building (exterior)
      [ ] Classrooms
      [ ] Students studying / activities
      [ ] Events (annual function, sports day, celebrations)
      [ ] Awards/toppers photos
      [ ] Teachers/staff group photo
   9. ACHIEVEMENTS / TOPPERS
      [ ] Board toppers: name + marks + photo
      [ ] Any school awards/prizes
   10. CONTACT / SOCIAL (pending)
      [ ] Access to school Gmail iqradesireenglishschool@gmail.com
          (enquiries currently go to user's personal mdsabirali.tech@gmail.com)
      [ ] Instagram / YouTube links (if any)
      [ ] Exact Google Maps location pin
   ==========================================================================

   Files to fill: src/data/faculty.ts (principal/teachers), src/app/about/page.tsx
   (history/vision/mission), src/app/page.tsx (stats), src/data/notices.ts,
   src/data/gallery.ts + public/images/galary/ (photos), src/data/academics.ts.

### P4b. Professional "St. Mathews-beating" features — ✅ DONE (2026-10-11)
   Added 3 polished features (built, 0-error builds, pushed to main, verified live):
   1. GLOBAL WHATSAPP FLOATING BUTTON — src/components/WhatsAppButton.tsx, mounted in
      layout.tsx (every page). Official WA icon, #25D366, pulse-ring animation
      (globals.css @keyframes pulse-ring / .animate-pulse-ring; motion-reduce safe),
      "Chat with us" hover tooltip, prefilled admission message, opens wa.me/<number>.
      Uses siteConfig.contact.whatsapp (+91 88091 48710).
   2. FAQ SECTION on /admissions — src/components/FaqAccordion.tsx (native
      <details>/<summary>, keyboard-accessible, gold chevron rotate) + 7 honest general
      FAQs in src/data/faqs.ts. Also emits FAQPage JSON-LD structured data for Google
      rich results (SEO win over St. Mathews).
      ⏳ When school confirms: update fee/docs/session-date answers in src/data/faqs.ts.
   3. "A JOURNEY THROUGH THE CLASSES" on home — src/app/page.tsx, navy section with
      numbered gold step badges (1–4), desktop connecting line, cards from classLevels
      (Pre-Primary → Secondary), "Explore Academics" CTA. St.-Mathews "learning journey"
      style but cleaner.
   (Also earlier same day: honest home stats, Our Facilities section, redesigned
    Principal card, real About photo, old-domain SEO redirect.)

### P4c. Top-notch professional upgrades (ALL FREE, no paid service) — ✅ DONE (2026-10-11)
   Tech-lead ownership pass. Everything uses Next.js/Vercel built-ins → ₹0 running cost.
   All built, 0-error builds, pushed to main, verified live on iqradesire.com:
   1. SEO STRUCTURED DATA — src/components/StructuredData.tsx (rendered in layout):
      EducationalOrganization+School JSON-LD (name, logo, address, pincode, geo coords
      ~Simri/Buxar, phone, email, foundingDate 2013, social sameAs). Helps Google show
      the school as a rich entity. VERIFIED live (EducationalOrganization + GeoCoordinates).
      ⏳ geo lat/long are APPROXIMATE (25.5647, 84.0907) — update when exact pin known.
   2. BRANDED OPEN GRAPH IMAGE — src/app/opengraph-image.tsx (dynamic, 1200x630, navy+gold,
      name/tagline/classes/address). Rich preview when link shared on WhatsApp/FB/etc.
      VERIFIED: /opengraph-image returns HTTP 200 image/png.
      ⚠️ MUST keep `export const runtime = "edge"` (node runtime fails prerender).
   3. PWA / INSTALLABLE — src/app/manifest.ts (served at /manifest.webmanifest): standalone
      display, navy theme #152a54, logo icons. + viewport themeColor in layout. Site can be
      "Added to Home Screen" like an app. No service worker (keeps it free). VERIFIED live.
   4. SCROLL-TO-TOP button — src/components/ScrollToTop.tsx (global, appears after 500px,
      smooth, above WhatsApp button, accessible).
   5. BRANDED 404 — src/app/not-found.tsx (navy+gold, 4 quick nav links, school name/tagline).
      VERIFIED live.
   6. PERFORMANCE/A11Y — enabled AVIF/WebP image formats (next.config.mjs). Audit: no raw
      <img>, all alt texts present, hero LCP has priority+sizes+aria, slider dots aria-labelled,
      proper h1s, all 7 content pages have SEO metadata. Hero already optimised.
   (NOTE for user: Sanity CMS still has its separate free "trial popup" — just "Maybe later".)

### P4d. 360° Tier-1: lead capture + analytics + spam guard — ✅ DONE (code) (2026-10-11)
   All free. Built, 0-error build, pushed (commit 5db1404), /api/enquiry verified live.
   1. ENQUIRIES SAVED TO CMS (no lead lost) — new `enquiry` schema
      (src/sanity/schemas/enquiryType.ts). New SECURE server route
      src/app/api/enquiry/route.ts: validates, writes to Sanity (permanent record in
      /admin → "Admission Enquiry"), AND emails via Web3Forms. Success if EITHER channel
      works. submitEnquiry() (src/lib/api.ts) now POSTs to /api/enquiry — the Sanity
      write token stays SERVER-SIDE only (never in browser). Each enquiry has a
      "Contacted / Handled?" toggle for the office to track follow-ups.
   2. HONEYPOT SPAM GUARD — hidden `company` field in EnquiryForm; server silently drops
      any submission that fills it. VERIFIED live (bot POST returned ok but was not saved).
   3. VERCEL ANALYTICS — @vercel/analytics@2.0.1 + <Analytics/> in layout. Free visitor
      insights (page views, top pages, referrers).

   🔴🔴 TWO USER ACTIONS REQUIRED to fully activate (both FREE):
     A. SANITY WRITE TOKEN (so enquiries actually SAVE to CMS — else only email works):
        1. sanity.io/manage → project "Iqra Desire School" → API → Tokens → Add API token.
        2. Name: "website-write", Permission: **Editor**. Copy the token (sk...).
        3. Vercel → project → Settings → Environment Variables → add:
             Name  = SANITY_WRITE_TOKEN
             Value = <the token>
           Apply to Production (+ Preview). Save, then Redeploy (Deployments → ⋯ → Redeploy).
        (Token lives only in Vercel server env — never committed, never in browser.)
     B. ENABLE VERCEL ANALYTICS: Vercel → project → Analytics tab → Enable (free Hobby).
   After A: test the form once; the enquiry should appear in /admin → "Admission Enquiry".
   Until A is done, enquiries still EMAIL as before (nothing broken).

### P4e. Tier 2: Academics page visual upgrade + Apply Now CTA — ✅ DONE (2026-10-13)
   All free, pure CSS/HTML, ZERO new deps, server component → zero perf impact.
   Built 0 errors, committed f9afc4d, pushed to main (Vercel auto-deploy).
   /academics stays STATIC (○), First Load JS ~156 kB (unchanged).
   File: src/app/academics/page.tsx (full rewrite).
   1. ST.-MATHEWS-STYLE LEVEL CARDS — the 4 classLevels now render as a numbered
      "journey" grid: gold gradient number badge (1–4), big faded watermark step number
      (01–04), gold accent tag per level ("Foundation Years" / "Building Basics" /
      "Growing Minds" / "Board Preparation"), unique Lucide icon per level
      (Baby / BookOpen / Lightbulb / GraduationCap), hover: lift + gold border +
      icon color flip. Icon+tag mapped by level.id via `levelMeta` (presentational
      only — ClassLevel type unchanged; unknown ids fall back gracefully).
   2. "HOW WE TEACH" — added 4 gold CheckCircle2 bullet highlights under the prose.
   3. APPLY NOW CTA — full-width navy (brand-800) banner at page bottom with a bold
      gold (accent-500) "Apply Now" button → links to /admissions. Responsive
      (stacks on mobile, row on md+).
   ⏳ When real data arrives: level descriptions in src/data/academics.ts can be
      enriched (subjects, timings) — cards auto-reflect any text change.

### P4f. P5 polish: Gallery lightbox + About page upgrade — ✅ DONE (2026-10-13)
   All free, no new deps. Build 0 errors, committed 7d450f9, pushed to main.
   Both pages stay STATIC (○) → zero perf impact. /gallery 2.58 kB, /about 331 B.
   1. GALLERY FULL-SCREEN LIGHTBOX — new client component
      src/components/GalleryGrid.tsx (holds grid + lightbox). Click any photo →
      opens full-screen; prev/next on-screen arrows + keyboard (←/→), Esc or backdrop
      click to close, body-scroll lock, photo counter (n/total), caption shown.
      Videos NOT opened (just show play badge — behaviour unchanged). Pure React +
      Tailwind, next/image for optimisation. Gallery page (src/app/gallery/page.tsx)
      now imports GalleryGrid and passes items; still server component, revalidate=60.
   2. ABOUT PAGE UPGRADE (src/app/about/page.tsx) — added:
      (a) "Established" trust strip (2013 / Nursery–10 / English / Simri, gold icons);
      (b) Vision & Mission now rich gold-gradient-badge cards (hover lift, accent-50
          decorative blob) + a Core Values pill row (4 values);
      (c) new "Why Choose Us" 4-card grid (Personal Attention / Safe Campus /
          Board Exam Focus / Values First).
      Principal's Message section kept as-is (already redesigned in P4).
   ⏳ When real data arrives: Vision/Mission text + story still have TODO placeholders
      (src/app/about/page.tsx) — fill when school provides real text.

### P4g. P5 "next session": Achievements page + Notices/Contact upgrades — ✅ DONE (2026-10-13)
   All free, no new deps. Build 0 errors (15 routes), all affected pages STATIC (○)
   → zero perf impact. Committed 6ab6a2d, pushed to main.
   1. ACHIEVEMENTS / TOPPERS PAGE — new route /achievements
      (src/app/achievements/page.tsx). Header + highlights strip (Board Toppers /
      Sports & Medals / Awards) + responsive card grid (photo with gold year badge,
      trophy icon, name, detail, hover lift) + navy "Enquire Now" CTA → /admissions.
      Data wiring: added `Achievement` type (src/lib/types.ts), static fallback
      src/data/achievements.ts (3 placeholders using 2026 topper.jpg / medal.jpg /
      sport2.jpg), and getAchievements() in src/lib/api.ts (prefers Sanity via the
      pre-existing fetchAchievements(), falls back to static). revalidate=60.
      Added "Achievements" to nav (src/config/nav.ts, between Gallery and Notices)
      → auto-added to sitemap (derives from mainNav).
      ⏳ When school gives real toppers: add in /admin → "Achievement" (name = student,
      detail = marks, year, photo). Placeholders then auto-replaced; can delete
      src/data/achievements.ts entries later if desired.
   2. NOTICES PAGE UPGRADE — new client component src/components/NoticesClient.tsx:
      (a) PINNED HIGHLIGHT banner(s) at top (gold left-border gradient card, Pin badge);
      (b) CATEGORY FILTER chips (All + only categories actually present, ordered
          Admission/Event/Exam/Holiday/General); (c) filtered grid reusing NoticeCard.
      Notices page stays a server component (revalidate=60) that passes sorted notices
      to NoticesClient; empty-state handled server-side.
   3. CONTACT PAGE POLISH (src/app/contact/page.tsx) — 3 gold-gradient-icon info cards
      (Address/Phone/Email, phone+email clickable, hover lift), a quick-action button
      row (Call Now / WhatsApp / Facebook), an Office Hours card (Mon–Sat 8AM–2PM,
      Sun closed + "Good to know" note), and a bigger map with a "Get Directions" link
      (Google Maps directions API to the address).
      ⏳ TODO: confirm the school's REAL office hours (currently a sensible placeholder)
      and the exact Google Maps pin (still the approximate area search).

### P4h. Batch A: security headers + home toppers CMS-connect + breadcrumbs — ✅ DONE (2026-10-13)
   Tech-lead 360° audit → 3 free high-impact fixes. Build 0 errors (15 routes, all
   STATIC), committed 34265cc, pushed to main. Zero perf impact.
   1. SECURITY HEADERS (next.config.mjs headers(), applied to /:path*): HSTS
      (max-age 2yr, includeSubDomains, preload), X-Frame-Options SAMEORIGIN
      (deliberately not DENY — keeps Sanity Studio /admin same-origin iframes working),
      X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin,
      Permissions-Policy (camera/mic/geolocation/interest-cohort off), X-XSS-Protection.
      No CSP added (would risk breaking Sanity Studio) — can revisit later if needed.
      Improves securityheaders.com grade + trust/SEO signal. Verify after deploy with
      a header check on https://iqradesire.com.
   2. HOME TOPPERS NOW CMS-DRIVEN — the home "Celebrating Our Achievers" section was 2
      hardcoded images; now fetches getAchievements().slice(0,3) and renders a dynamic
      3-col grid (photo + gold year badge + name, hover scale, Trophy fallback) with a
      "View all achievements →" link to /achievements. Fully consistent with the
      /achievements page (same data source). revalidate=60 already on home.
   3. BREADCRUMBS + SCHEMA — new src/components/Breadcrumbs.tsx: visual trail
      (Home › Page) styled for the navy header + BreadcrumbList JSON-LD (absolute URLs
      from siteConfig.url) for Google breadcrumb rich-snippets. Added to all 7 inner
      pages (about, academics, achievements, admissions, gallery, notices, contact).
   NOTE from audit: Navbar already had active-link highlighting (no work needed).
   ⏳ Remaining free ideas (low priority): loading.tsx skeletons for CMS pages, footer
      enrichment, print-friendly notices, real sitemap lastModified dates.

### P4i. Batch B: loading skeletons + Footer enrichment — ✅ DONE (2026-10-13)
   All free, no new deps. Build 0 errors (15 routes, all STATIC), committed 516c80a,
   pushed to main. Zero perf impact.
   1. LOADING SKELETONS — added loading.tsx (Next.js App Router streaming) for the 3
      CMS-backed pages so they never flash blank while Sanity data loads:
      src/app/notices/loading.tsx (header + heading + 4 filter chips + 6-card grid),
      src/app/gallery/loading.tsx (header + heading + 8 square grid),
      src/app/achievements/loading.tsx (header + highlights strip + 3 image-cards).
      Pure Tailwind animate-pulse placeholders matching each real layout. No JS.
   2. FOOTER ENRICHMENT (src/components/Footer.tsx) — added a top "Admissions Open for
      Nursery–10" CTA strip (brand-900 bg + gold "Apply Now" → /admissions), the
      tagline (gold) + motto (italic, left-border) under the logo/description, a
      WhatsApp pill next to the Facebook pill, and "· Est. 2013" in the copyright line.
      Kept the clean 3-col layout.
   DECISION: left sitemap lastModified as build-time `now` — fine for a static site
   (reflects last deploy); no per-page modified-date source exists, so changing it
   would add complexity with no real SEO benefit.
   >>> Free, no-data polish is now largely EXHAUSTED. Next meaningful work needs real
       school data — see P4 list. <<<

### P4j. Professional audit + fixes (expert recommendation batch) — ✅ DONE (2026-10-13)
   Ran a full multidisciplinary audit of the LIVE site (verified via curl headers +
   raw HTML, no guessing). Then implemented the P0 + all no-data fixes. Build 0 errors
   (16 routes incl new /privacy), committed c350d7e, pushed to main, verified live.
   FIXED:
   - I-01 (P0): "0% Caring Support" bug — CountUp now useState(end) so SSR/no-JS/crawlers
     see 100%; animation runs only after client mount (reduced-motion safe).
     src/components/CountUp.tsx.
   - I-05: NEW /privacy page (src/app/privacy/page.tsx) — data collected, use, children's
     info, storage, cookies, contact. Linked in footer + enquiry form. Added to sitemap.
   - I-06: per-page <link rel=canonical> on all 7 inner pages + default "/" in layout.
   - I-07: removed obsolete <meta keywords> from layout.
   - I-08: hero images quality=70 + non-first slides loading=lazy (LCP).
   - I-09: Breadcrumbs now take `path` prop; last crumb JSON-LD item = own URL.
   - I-10: added contact.phoneHref (digits only); all tel: links use it (no space).
   - I-11: "a English" → "an English" in description.
   AUDIT FINDINGS STILL OPEN (need REAL school data — can't fix without it):
   - Principal name/photo/message; real Vision/Mission text (placeholders).
   - CONFIRM every facility (Computer/Science Lab, Smart Classes, Transport, Library)
     + the "Quality, Affordable" / "Small Class Sizes" claims — remove any untrue ones.
   - Real office hours (currently Mon–Sat 8–2 placeholder) + exact Google Maps pin
     (currently approximate area search; geo in schema also approximate 25.5647,84.0907).
   - Real stats numbers; real notices/toppers in CMS.
   AUDIT: things CONFIRMED GOOD (don't redo): security headers live, SSR+static+fast,
   SEO metadata/OG/sitemap/robots, EducationalOrganization+BreadcrumbList+FAQPage JSON-LD,
   www→apex 308, PWA manifest, honeypot spam guard, Navbar active-link, 404 returns 404.
   NOT TESTED (no tooling): Lighthouse/PSI scores, real-device, screen-reader, contrast
   ratios, Search Console indexing, live form end-to-end delivery. Recommend running
   PageSpeed Insights + a contrast check before final sign-off.

### P5. (future) more "St. Mathews-like" polish + Phase 2+ (DB, auth, AI chatbot, ads, payments) + Phase 2+ (DB, auth, AI chatbot, ads, payments)

## (user will add more points below as he remembers)
## ---------------------------------------------------------


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

## ===== DOMAIN: iqradesire.com (user wants to use this) =====
- User owned/used this domain before via free hosting; it expired.
- Checked status (2026-10-07): Verisign RDAP 404, rdap.org 404, DNS "non-existent".
  => Domain is currently NOT registered = AVAILABLE to re-register.
- PLAN when user is ready:
  1. User must RE-REGISTER (buy) iqradesire.com — now PAID (~Rs 900-1200/yr .com).
     Suggested registrars (India, UPI): GoDaddy, Hostinger, Namecheap, BigRock.
     (Cheaper alt: .in ~Rs 500-700. But user wants the .com brand name.)
  2. Add domain in Vercel → project → Settings → Domains (iqradesire.com + www).
     Vercel gives A record 76.76.21.21 + CNAME for www. Set these at registrar DNS.
  3. Wait for DNS propagate (10 min - few hrs), HTTPS auto by Vercel (free).
  4. Update src/config/site.ts `url` to https://iqradesire.com (for SEO).
- Hosting stays FREE on Vercel; user only pays for the domain name.
- OPEN QUESTION: do domain first, or make v2 live first? (user to decide)

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
