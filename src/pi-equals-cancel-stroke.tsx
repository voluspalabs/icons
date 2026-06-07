import type { JSX } from "react";

export function PiEqualsCancelStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M14.3333 9L19 3M14.3333 9H5M14.3333 9L9.66667 15M15 15L19 15M18.9805 9H19M5 21L9.66667 15M9.66667 15H5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
