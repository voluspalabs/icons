import type { JSX } from "react";

export function PiArrowRightStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M15.6696 6C17.773 7.55556 19.6622 9.37278 21.2905 11.4057C21.4302 11.5801 21.5 11.79 21.5 12M15.6696 18C17.773 16.4444 19.6622 14.6272 21.2905 12.5943C21.4302 12.4199 21.5 12.21 21.5 12M21.5 12H3.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
