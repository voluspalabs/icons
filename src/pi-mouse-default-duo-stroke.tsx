import type { JSX } from "react";

export function PiMouseDefaultDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M19.5 14V10C19.5 6.13401 16.366 3 12.5 3C8.63401 3 5.5 6.13401 5.5 10V14C5.5 17.866 8.63401 21 12.5 21C16.366 21 19.5 17.866 19.5 14Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12.5 10V8"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
