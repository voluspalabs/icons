import type { JSX } from "react";

export function PiQueueDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M3 15H21M3 20H21"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 3C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11H18C20.2091 11 22 9.20914 22 7C22 4.79086 20.2091 3 18 3H6Z"
        fill="currentcolor"
      />
    </svg>
  );
}
