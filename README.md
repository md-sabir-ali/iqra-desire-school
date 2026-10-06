# Iqra Desire English School — Website

Official website for **Iqra Desire English School**, Simri, Buxar, Bihar.
Built with **Next.js + TypeScript + Tailwind CSS**. Designed to launch at **₹0**
on Vercel's free tier, and scale later (database, admin login, AI chatbot, ads,
online payments) **without rewriting the code**.

---

## 1. What you need (one-time)

You do NOT need to install anything if you deploy via GitHub + Vercel (cloud build).

| Need | Why | Free? |
|------|-----|-------|
| A GitHub account | To store the code | Yes — https://github.com |
| A Vercel account | To host the website | Yes — https://vercel.com |
| (Optional) Node.js 18+ | Only if you want to run/preview locally | Yes — https://nodejs.org |

> On Windows you can install Node later with: `winget install OpenJS.NodeJS.LTS`

---

## 2. Deploy for FREE (recommended path — no local build)

### Step A — Put the code on GitHub
1. Create a new **empty** repository on GitHub (e.g. `iqra-desire-school`). Do NOT add a README there.
2. In this project folder, run (Git is already installed):

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/iqra-desire-school.git
   git push -u origin main
   ```

### Step B — Deploy on Vercel
1. Go to https://vercel.com and **Log in with GitHub**.
2. Click **Add New → Project**.
3. Select your `iqra-desire-school` repository → **Import**.
4. Vercel auto-detects Next.js. Leave all settings as default → click **Deploy**.
5. Wait ~1–2 minutes. You get a live URL like:
   `https://iqra-desire-school.vercel.app`

**Done — your website is live and free, with HTTPS.**

### Step C — Future updates
Edit any file, then:
```bash
git add .
git commit -m "Update content"
git push
```
Vercel **automatically rebuilds and redeploys** on every push.

---

## 3. Run locally (optional — needs Node.js)

```bash
npm install      # installs dependencies (~400 MB in node_modules)
npm run dev      # open http://localhost:3000
npm run build    # production build check
```

---

## 4. ✅ TODO checklist — fill in your real content

All items below are marked with `TODO` comments in the code too.

### Must-do before launch
- [ ] **`src/config/site.ts`** — real phone, WhatsApp, email, exact address, pincode, established year.
- [ ] **`src/config/site.ts`** — after deploy, set `url` to your real Vercel/custom domain (needed for SEO).
- [ ] **Photos** — download best photos from the Facebook page
      (https://www.facebook.com/IQRADESIREENGLISHSCHOOL/), put them in
      `public/images/gallery/`, then update `src/data/gallery.ts` with the paths.
- [ ] **Home/About images** — replace `/images/placeholder.svg` usages with real photos.
- [ ] **`src/app/contact/page.tsx`** — replace the Google Maps embed `src` with your exact location
      (Google Maps → Share → Embed a map → copy the iframe src).

### Recommended
- [ ] **`src/data/notices.ts`** — put real notices/announcements.
- [ ] **`src/data/faculty.ts`** — real Principal name, message, photo, and teacher names.
- [ ] **`src/app/about/page.tsx`** — real school history, vision, mission.
- [ ] **`src/app/page.tsx`** — real stat numbers (students, teachers, years).
- [ ] **`src/data/academics.ts`** — adjust class descriptions to your curriculum.

---

## 5. Where things live

```
src/
  app/            → pages (home, about, academics, admissions, gallery, notices, contact)
  components/     → reusable UI (Navbar, Footer, Hero, cards, forms)
  config/
    site.ts       → ★ EDIT HERE: school name, contact, social, feature flags
    nav.ts        → menu links
  data/           → content: notices, gallery, faculty, academics
  lib/
    api.ts        → ★ data access layer (swap to a database here later)
    types.ts      → shared data shapes
public/images/    → images (placeholder now, your photos later)
docs/ARCHITECTURE.md → how to add future features (DB, auth, AI, ads, payments)
```

---

## 6. Scaling later

See **`docs/ARCHITECTURE.md`** for step-by-step on adding:
Database (Supabase) · Admin login · AI chatbot · Google Ads · Online fee payment.
Each is designed to switch on via a flag in `src/config/site.ts`.

---

## 7. Notes on images / content

The photos on the school's Facebook page are the school's own content and are
fine to use for the school's own website. For best quality and reliability,
download them manually and add them to `public/images/` rather than hotlinking.
