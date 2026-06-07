import type { JSX } from "react";

export function PiArrowRightDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M21.5 12H3.5"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M15.6697 6C17.7731 7.55556 19.6622 9.37278 21.2906 11.4057C21.4302 11.5801 21.5001 11.79 21.5001 12C21.5001 12.21 21.4302 12.4199 21.2906 12.5943C19.6622 14.6272 17.7731 16.4444 15.6697 18"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
