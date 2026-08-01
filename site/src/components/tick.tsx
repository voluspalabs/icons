import type { ComponentType, JSX } from "react";

interface TickProps {
  icon: ComponentType<JSX.IntrinsicElements["svg"]>;
}

/**
 * The bracketed accent glyph that prefixes every mono microlabel. The brackets
 * are typographic; the glyph between them is a real icon from this package, so
 * the gallery's own chrome is drawn with the catalogue it documents.
 *
 * Decorative — the adjacent label always carries the meaning, so the whole unit
 * is hidden from assistive tech.
 */
export const Tick = ({ icon: Icon }: TickProps) => (
  <span aria-hidden="true" className="tick">
    <span className="tick-bracket">[</span>
    <Icon className="tick-icon" focusable="false" />
    <span className="tick-bracket">]</span>
  </span>
);
