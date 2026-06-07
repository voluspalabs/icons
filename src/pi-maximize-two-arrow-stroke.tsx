import type { JSX } from "react";

export function PiMaximizeTwoArrowStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 6.28858C14.2786 5.99076 16.0759 5.92321 17.8472 6.08707C17.9991 6.10113 18.1335 6.16659 18.2335 6.26652C18.3334 6.36646 18.3989 6.50086 18.4129 6.65281C18.5768 8.42407 18.5092 10.2214 18.2114 12M12.5 17.7114C10.7214 18.0092 8.92407 18.0768 7.15281 17.9129C7.00086 17.8989 6.86646 17.8334 6.76652 17.7335C6.66659 17.6335 6.60113 17.4991 6.58707 17.3472C6.42321 15.5759 6.49076 13.7786 6.78858 12"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
