import type { JSX } from "react";

export function PiHeadingH3Stroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4.5 12H12.5M4.5 18V6M12.5 18V6M19.2324 14H18.5M19.2324 14C20.337 14 21.2324 13.1046 21.2324 12C21.2324 10.8954 20.337 10 19.2324 10H18.2324C17.4922 10 16.8458 10.4022 16.5 11M19.2324 14C20.337 14 21.2324 14.8954 21.2324 16C21.2324 17.1046 20.337 18 19.2324 18H18.2324C17.4922 18 16.8458 17.5978 16.5 17"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
