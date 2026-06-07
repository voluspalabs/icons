import type { JSX } from "react";

export function PiKeyLeftDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6 12H2V15M6 12H14M6 12V14"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 7C15.2386 7 13 9.23858 13 12C13 14.7614 15.2386 17 18 17C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7Z"
        fill="currentcolor"
      />
    </svg>
  );
}
