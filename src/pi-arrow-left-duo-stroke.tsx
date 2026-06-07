import type { JSX } from "react";

export function PiArrowLeftDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4.5 12H20.5"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10.3304 6C8.227 7.55556 6.33783 9.37278 4.70952 11.4057C4.56984 11.5801 4.5 11.79 4.5 12C4.5 12.21 4.56984 12.4199 4.70952 12.5943C6.33783 14.6272 8.227 16.4444 10.3304 18"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
