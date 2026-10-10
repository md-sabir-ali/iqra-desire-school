import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemas";

/**
 * SANITY STUDIO CONFIG
 * The editing panel served at /admin on the website.
 * Log in with the Sanity account that owns this project.
 */
export default defineConfig({
  name: "iqra-desire-studio",
  title: "Iqra Desire School — Content",
  basePath: "/admin",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
