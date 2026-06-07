import type { JSX } from "react";

export function PiHeadingH2DuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M22.0679 18H16.5V17.1793C17.9481 16.1649 19.432 15.2073 20.6189 13.8779C21.4116 12.9899 21.4993 11.6609 20.645 10.7684C19.951 10.0435 18.751 9.80588 17.8259 10.1656C17.2013 10.4086 16.8457 10.8952 16.5 11.4341"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
