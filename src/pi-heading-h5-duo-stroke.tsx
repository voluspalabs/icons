import type { JSX } from "react";

export function PiHeadingH5DuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4.5 12H12.5M4.5 18V6M12.5 18V6"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21 10H18C17.1716 10 16.5 10.6716 16.5 11.5V14H19.5C20.6046 14 21.5 14.8954 21.5 16C21.5 17.1046 20.6046 18 19.5 18H16.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
