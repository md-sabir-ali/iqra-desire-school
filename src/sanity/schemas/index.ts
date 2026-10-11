import type { SchemaTypeDefinition } from "sanity";

import { noticeType } from "./noticeType";
import { achievementType } from "./achievementType";
import { galleryItemType } from "./galleryItemType";
import { enquiryType } from "./enquiryType";

export const schemaTypes: SchemaTypeDefinition[] = [
  noticeType,
  achievementType,
  galleryItemType,
  enquiryType,
];
