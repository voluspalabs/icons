import { createRoot } from "react-dom/client";

import { App } from "./app";

// Self-hosted so the interface never depends on a third-party font request.
// Both are variable faces, so the whole weight range costs one file per subset.
import "@fontsource-variable/sora";
import "@fontsource-variable/geist-mono";

import "./styles.css";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("Root element was not found.");
}

const appRoot = createRoot(root);
appRoot.render(<App />);

if (import.meta.hot) {
  import.meta.hot.dispose(() => appRoot.unmount());
}
