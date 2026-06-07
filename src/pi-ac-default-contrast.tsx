import type { JSX } from "react";

export function PiAcDefaultContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M20 8H4C2.89543 8 2 8.89543 2 10V16H22V10C22 8.89543 21.1046 8 20 8Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M18 12H16M22 16V10C22 8.89543 21.1046 8 20 8H4C2.89543 8 2 8.89543 2 10V16H22Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
