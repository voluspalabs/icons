import type { JSX } from "react";

export function PiListCancelStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 12H10M4 18H10M4 6H20M14.5 17.4971L17 14.9971M17 14.9971L19.5 12.4971M17 14.9971L14.5 12.4971M17 14.9971L19.5 17.4971"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
