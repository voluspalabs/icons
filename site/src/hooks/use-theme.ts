import { useCallback, useEffect, useState } from "react";

export type ThemeChoice = "dark" | "light" | "system";

const STORAGE_KEY = "voluspa-icons-theme";
const CHOICES: ThemeChoice[] = ["system", "light", "dark"];

const readStoredChoice = (): ThemeChoice => {
  try {
    const stored = globalThis.localStorage?.getItem(STORAGE_KEY);

    return CHOICES.includes(stored as ThemeChoice)
      ? (stored as ThemeChoice)
      : "system";
  } catch {
    // Private browsing and blocked storage both throw on access; falling back
    // to the system preference is the correct behaviour either way.
    return "system";
  }
};

/**
 * Theme selection. The stylesheet resolves every colour with `light-dark()`,
 * so switching themes only has to set `color-scheme` — which `data-theme` on
 * the root element does. "system" removes the attribute and lets the media
 * preference win.
 */
export const useTheme = () => {
  const [choice, setChoice] = useState<ThemeChoice>(readStoredChoice);

  useEffect(() => {
    const root = document.documentElement;

    // Bracket access: `dataset` is an index signature and the project enables
    // noPropertyAccessFromIndexSignature.
    if (choice === "system") {
      delete root.dataset["theme"];
    } else {
      root.dataset["theme"] = choice;
    }

    try {
      globalThis.localStorage?.setItem(STORAGE_KEY, choice);
    } catch {
      // Persisting is a nicety; the applied theme above is what matters.
    }
  }, [choice]);

  const cycleTheme = useCallback(() => {
    setChoice(
      (current) =>
        CHOICES[(CHOICES.indexOf(current) + 1) % CHOICES.length] ?? "system"
    );
  }, []);

  return { choice, cycleTheme };
};
