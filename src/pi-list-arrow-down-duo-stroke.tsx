import type { JSX } from "react";

export function PiListArrowDownDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 12H12M4 18H12M4 6H20"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 16.1857C16.7402 17.1727 17.599 18.0641 18.5564 18.8399C18.6859 18.9448 18.843 18.9973 19 18.9973M22 16.1857C21.2598 17.1727 20.401 18.0641 19.4436 18.8399C19.3141 18.9448 19.157 18.9973 19 18.9973M19 18.9973V11.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
