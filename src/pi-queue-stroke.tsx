import type { JSX } from "react";

export function PiQueueStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M3 15H21M3 20H21M6 10H18C19.6569 10 21 8.65685 21 7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
