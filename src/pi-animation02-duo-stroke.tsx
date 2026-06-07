import type { JSX } from "react";

export function PiAnimation02DuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M2 14.0001C4.76142 14.0001 7 16.2387 7 19.0001V18.0001C7 14.373 9.14554 11.2471 12.2367 9.82227"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 8C16 9.65685 17.3431 11 19 11C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5C17.3431 5 16 6.34315 16 8Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
