import type { JSX } from "react";

export function PiAlignLeftDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4.5 5V19"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12.5309 7.91669C11.0767 8.97533 9.7706 10.2121 8.64485 11.5956C8.54828 11.7142 8.5 11.8571 8.5 12M12.5309 16.0834C11.0767 15.0247 9.7706 13.788 8.64485 12.4045C8.54828 12.2858 8.5 12.1429 8.5 12M8.5 12L20.5 12"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
