import type { JSX } from "react";

export function PiAnimation02Stroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M2 14C4.76142 14 7 16.2386 7 19V18C7 14.373 9.14554 11.247 12.2367 9.82218M19 11C17.3431 11 16 9.65685 16 8C16 6.34315 17.3431 5 19 5C20.6569 5 22 6.34315 22 8C22 9.65685 20.6569 11 19 11Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
