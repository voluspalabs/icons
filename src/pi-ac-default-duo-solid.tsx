import type { JSX } from "react";

export function PiAcDefaultDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 7C2.34315 7 1 8.34315 1 10V16C1 16.5523 1.44772 17 2 17H22C22.5523 17 23 16.5523 23 16V10C23 8.34315 21.6569 7 20 7H4Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M18 12H16"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
