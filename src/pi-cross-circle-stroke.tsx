import type { JSX } from "react";

export function PiCrossCircleStroke(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      aria-hidden="true"
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m9 15 3-3m0 0 3-3m-3 3L9 9m3 3 3 3m-3 6a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
    </svg>
  );
}
