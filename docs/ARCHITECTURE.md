# Architecture & Scaling Guide

This website is built so you can **launch free (Phase 1)** and **add features
later without rewriting** anything. The key ideas:

- **All content** lives in `src/data/*` and `src/config/site.ts`.
- **All data access** goes through `src/lib/api.ts` (never read data directly in pages).
- **Feature flags** in `src/config/site.ts > features` turn future features on/off.

So when you move from static files to a database, you only change the *inside*
of `api.ts` — pages and components stay the same.

---

## Phase 1 — Static launch (current) · Cost: ₹0
- No database, no servers, no secrets.
- `api.ts` reads from local typed data files.
- Enquiry form validates and shows a success message (also nudges to call/WhatsApp).
- Hosted on Vercel free tier. Fast, SEO-friendly, always online.

---

## Phase 2 — Database + Admin login · Cost: ₹0 (free tiers)

**Goal:** Manage notices, gallery, and enquiries from an admin dashboard; store
enquiry submissions.

**Recommended tools (free tier):** Supabase (Postgres + Auth) or Neon + Clerk.

**Steps:**
1. Create a Supabase project. Create tables matching the types in `src/lib/types.ts`
   (`notices`, `gallery_items`, `faculty`, `enquiries`).
2. Add Supabase keys as Environment Variables in Vercel (Project → Settings → Env Vars).
3. In `src/lib/api.ts`, replace the function bodies to query Supabase, e.g.:
   ```ts
   export async function getNotices() {
     const { data } = await supabase.from("notices").select("*").order("date", { ascending: false });
     return data ?? [];
   }
   ```
4. Create a real `POST /api/enquiry` route (App Router: `src/app/api/enquiry/route.ts`)
   that inserts into the `enquiries` table and/or sends an email.
5. Set flags in `site.ts`: `enableDatabase: true`, `enableOnlineEnquiry: true`.
6. Build a protected `/admin` area using Supabase Auth; set `enableAuth: true`.

**UI changes needed:** none — the pages already call `api.ts`.

---

## Phase 3 — AI chatbot (Admission FAQ) · Cost: ₹0 (free API tiers)

**Goal:** A chat widget that answers admission/fee/timing questions.

**Tools:** Google Gemini API or Groq (both have free tiers). *(Tip: you already
have Python installed — you could also prototype the prompt logic in Python,
but in production put it behind a Next.js API route.)*

**Steps:**
1. Add an API route `src/app/api/chat/route.ts` that calls the AI provider using
   a server-side key (stored in Vercel Env Vars — never in client code).
2. Feed it a short "knowledge" string about the school (fees, timings, classes).
3. Build a floating `ChatWidget` component; render it in `layout.tsx` only when
   `features.enableChatbot` is true.
4. Set `enableChatbot: true`.

---

## Phase 4 — Google Ads (AdSense) · Earn from traffic

**Steps:**
1. Apply for Google AdSense once the site has real content and some traffic.
2. Create an `<AdSlot />` component that renders the AdSense script/unit.
3. Place `<AdSlot />` in chosen spots; render only when `features.enableAds` is true.
4. Set `enableAds: true`.

> Keep ads tasteful on a school site — avoid cluttering key pages.

---

## Phase 5 — Online fee payment / premium portal · Cost: pay-per-use

**Tools:** Razorpay (popular in India) or Stripe.

**Steps:**
1. Create a `/fees` page and a `POST /api/payment` route to create an order.
2. Use the provider's checkout on the client; verify payment on the server.
3. Store transactions in the database (Phase 2).
4. Optionally build a parent login portal for receipts/results.
5. Set `enablePayments: true`.

---

## Custom domain (optional, anytime) · ~₹700–900/year

1. Buy a domain (e.g. from Namecheap, GoDaddy, or Hostinger).
2. In Vercel: Project → Settings → Domains → add your domain → follow DNS steps.
3. Update `url` in `src/config/site.ts` to the new domain (for correct SEO).

Hosting stays free — you only pay for the domain name.

---

## Golden rules to keep it scalable
- Put new content in `src/data/*`, not hardcoded in pages.
- Fetch data only through `src/lib/api.ts`.
- Keep secrets in Vercel Environment Variables, never in the repo.
- Gate every new feature behind a flag in `site.ts`.
