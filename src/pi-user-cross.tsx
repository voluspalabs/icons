import type { JSX } from "react";

export function PiUserCross(props: JSX.IntrinsicElements["svg"]) {
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
        d="M11 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7m9-8-2.5 2.5m0 0L16 18m2.5-2.5L21 18m-2.5-2.5L16 13m-1-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
