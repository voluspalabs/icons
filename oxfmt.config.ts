import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    // Generated icon components and their barrel — see scripts/generate-index.mjs.
    "src/*.tsx",
    "src/index.ts",
  ],
  // bunup regenerates the exports map on every build, so sorting only churns it.
  sortPackageJson: false,
});
