import type { JSX } from "react";

export function PiChevronBigLeftStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M15.5 18.0005C13.3192 16.4235 11.3636 14.5776 9.68284 12.5106C9.43905 12.2108 9.43905 11.7902 9.68284 11.4904C11.3636 9.42342 13.3192 7.5775 15.5 6.00049"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
