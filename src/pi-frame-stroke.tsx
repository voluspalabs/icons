import type { JSX } from "react";

export function PiFrameStroke(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      aria-hidden="true"
      {...props}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 3V7M7.5 7V17M7.5 7L17.5 7M7.5 7L3.5 7M7.5 17V21M7.5 17L17.5 17M7.5 17H3.5M21.5 7L17.5 7M17.5 7V3M17.5 7V17M17.5 17V21M17.5 17H21.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
