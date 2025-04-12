"use client";
// @ts-ignore
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { assist } from "@sanity/assist";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    internationalizedArray({
      languages: [
        {
          id: "ar",
          title: "Arabic",
        },
        {
          id: "tr",
          title: "turkish",
        },
      ],
      fieldTypes: ["string"],
    }),
    assist(),
  ],
});
