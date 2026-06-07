import type { JSX } from "react";

export function PiGraphChartMinimumStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M21 21H7C4.79086 21 3 19.2091 3 17V3M8 17H8.01M11 17H11.01M17 17H17.01M20 17H20.01M13.99 17H14M7 5C7.82746 10.1832 10.6479 14 14 14C17.3521 14 20.1725 10.1832 21 5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
