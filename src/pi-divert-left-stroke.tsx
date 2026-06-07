import type { JSX } from "react";

export function PiDivertLeftStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M9.5 8.28858C7.72143 7.99076 5.92407 7.92321 4.15281 8.08707C4.00086 8.10113 3.86646 8.16659 3.76652 8.26652M3.76652 8.26652C3.66659 8.36646 3.60113 8.50086 3.58707 8.65281C3.42321 10.4241 3.49076 12.2214 3.78858 14M3.76652 8.26652L11.3787 15.8787C12.5503 17.0503 14.4497 17.0503 15.6213 15.8787L22.5 9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
