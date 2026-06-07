import type { JSX } from "react";

export function PiMultipleCrossCancelDefaultStroke(
  props: JSX.IntrinsicElements["svg"]
) {
  return (
    <svg
      aria-hidden="true"
      {...props}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L12 12M12 12L18 6M12 12L6 6M12 12L18 18"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
