"use client";

/**
 * EMBEDDED SANITY STUDIO at /admin
 * Visit https://iqradesire.com/admin and log in with the Sanity account
 * to add/edit notices, achievements, and gallery photos — no coding needed.
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function AdminStudioPage() {
  return <NextStudio config={config} />;
}
