import type { JSX } from "react";

export function PiArrowDownDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 20V4"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6.5 14.1696C8.05556 16.273 9.87278 18.1621 11.9057 19.7904C12.0801 19.9301 12.29 20 12.5 20C12.71 20 12.9199 19.9301 13.0943 19.7904C15.1272 18.1621 16.9444 16.273 18.5 14.1696"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
