import type { JSX } from "react";

export function PiAcOnSlowDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 3C2.34315 3 1 4.34315 1 6V12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12V6C23 4.34315 21.6569 3 20 3H4Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M18 8H16M12 16V20M17 16V18.8M7 16V18.8"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
