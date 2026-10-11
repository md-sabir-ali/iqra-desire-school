/**
 * ONE-TIME SEED SCRIPT — Iqra Desire English School
 * ---------------------------------------------------------------------------
 * Uploads the existing LOCAL gallery photos and notices into Sanity so that
 * the school can edit/add/delete them from the phone via /admin.
 *
 * Run (PowerShell), passing the write token as an env var (NOT committed):
 *   $env:SANITY_WRITE_TOKEN="sk...."; node scripts/seed-sanity.mjs
 *
 * Safe to re-run: it uses fixed _id values + createOrReplace, so re-running
 * updates the same documents instead of creating duplicates.
 */

import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("ERROR: SANITY_WRITE_TOKEN env var not set. Aborting.");
  process.exit(1);
}

const client = createClient({
  projectId: "hwulcwab",
  dataset: "production",
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

// --- Data to seed (mirrors src/data/gallery.ts + src/data/notices.ts) -------

const galleryItems = [
  { id: "g1", file: "prayer.jpg", alt: "Students at morning prayer assembly", caption: "Morning prayer assembly" },
  { id: "g2", file: "2026 topper.jpg", alt: "Toppers of the school felicitated", caption: "Our proud toppers" },
  { id: "g3", file: "medal.jpg", alt: "Students receiving medals", caption: "Celebrating achievements" },
  { id: "g4", file: "sport1.jpg", alt: "Students taking part in sports", caption: "Sports day" },
  { id: "g5", file: "sport2.jpg", alt: "Sports activities at school", caption: "Games and athletics" },
  { id: "g6", file: "sport3.jpg", alt: "Students playing sports", caption: "Team sports" },
  { id: "g7", file: "sport4.jpg", alt: "Sports event at school", caption: "Physical education" },
  { id: "g8", file: "st.jpg", alt: "Students at school", caption: "Our students" },
  { id: "g9", file: "jg.jpg", alt: "School activity", caption: "School life" },
  { id: "g10", file: "p2.jpg", alt: "School event", caption: "Events & activities" },
  { id: "g11", file: "p5.jpg", alt: "School gathering", caption: "Celebrations" },
  { id: "g12", file: "p6.jpg", alt: "School programme", caption: "Programmes" },
];

const notices = [
  {
    id: "n1",
    title: "Admissions Open for Session 2026-27",
    date: "2026-03-01",
    category: "Admission",
    body: "Admissions are now open for all classes from Nursery to Class 10. Limited seats available. Visit the school office or use the enquiry form to register your interest.",
    pinned: true,
  },
  {
    id: "n2",
    title: "Annual Sports Day",
    date: "2026-02-15",
    category: "Event",
    body: "Our Annual Sports Day will be held on the school grounds. All parents are cordially invited to cheer for our young athletes.",
    pinned: false,
  },
  {
    id: "n3",
    title: "Winter Break Holiday Notice",
    date: "2025-12-25",
    category: "Holiday",
    body: "The school will remain closed for the winter break. Classes will resume as per the academic calendar.",
    pinned: false,
  },
  {
    id: "n4",
    title: "Half-Yearly Examination Schedule",
    date: "2025-09-20",
    category: "Exam",
    body: "The half-yearly examinations will commence soon. Students are advised to check the detailed timetable available at the school office.",
    pinned: false,
  },
];

// --- Seed logic -------------------------------------------------------------

async function seedGallery() {
  console.log(`\nUploading ${galleryItems.length} gallery photos...`);
  let order = 10;
  for (const item of galleryItems) {
    const filePath = path.join(PROJECT_ROOT, "public", "images", "galary", item.file);
    const buffer = await readFile(filePath);
    const asset = await client.assets.upload("image", buffer, { filename: item.file });
    await client.createOrReplace({
      _id: `seed-gallery-${item.id}`,
      _type: "galleryItem",
      image: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
      alt: item.alt,
      caption: item.caption,
      order,
    });
    order += 10;
    console.log(`  ✓ ${item.file} -> "${item.caption}"`);
  }
}

async function seedNotices() {
  console.log(`\nCreating ${notices.length} notices...`);
  for (const n of notices) {
    await client.createOrReplace({
      _id: `seed-notice-${n.id}`,
      _type: "notice",
      title: n.title,
      date: n.date,
      category: n.category,
      body: n.body,
      pinned: n.pinned,
    });
    console.log(`  ✓ ${n.title}`);
  }
}

async function main() {
  console.log("Seeding Sanity (project hwulcwab / production)...");
  await seedGallery();
  await seedNotices();
  console.log("\n✅ Done. Check https://iqradesire.com/admin and the live gallery/notices.");
}

main().catch((err) => {
  console.error("\n❌ Seed failed:", err.message || err);
  process.exit(1);
});
