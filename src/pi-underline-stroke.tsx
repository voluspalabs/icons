import type { JSX } from "react";

export function PiUnderlineStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M17.5 20H7.5M17.5 4V10.6667C17.5 13.4281 15.2614 15.6667 12.5 15.6667C9.73858 15.6667 7.5 13.4281 7.5 10.6667V4"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
