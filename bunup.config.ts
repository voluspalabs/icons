import { defineConfig } from "bunup";

export default defineConfig({
  clean: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  drop: ["debugger"],
  dts: {
    inferTypes: true,
    splitting: true,
  },
  emitDCEAnnotations: true,
  entry: ["src/index.ts", "src/*.tsx"],
  exports: true,
  format: "esm",
  jsx: {
    development: false,
    importSource: "react",
    runtime: "automatic",
    sideEffects: false,
  },
  sourceBase: "./src",
  sourcemap: "linked",
  splitting: true,
  target: "browser",
  unused: {
    level: "error",
  },
});
