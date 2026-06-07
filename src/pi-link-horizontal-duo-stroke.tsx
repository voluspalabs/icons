import type { JSX } from "react";

export function PiLinkHorizontalDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M15 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H15M9 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H9"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M15 12H9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
