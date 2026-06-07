import type { JSX } from "react";

export function PiArrowRightContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M21.2906 11.4057C19.6622 9.37278 17.7731 7.55556 15.6697 6L15.9701 12L15.6697 18C17.7731 16.4444 19.6622 14.6272 21.2906 12.5943C21.4302 12.4199 21.5001 12.21 21.5001 12C21.5001 11.79 21.4302 11.5801 21.2906 11.4057Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M15.97 12L15.6696 6C17.773 7.55556 19.6622 9.37278 21.2905 11.4057C21.4302 11.5801 21.5 11.79 21.5 12C21.5 12.21 21.4302 12.4199 21.2905 12.5943C19.6622 14.6272 17.773 16.4444 15.6696 18L15.97 12ZM15.97 12H3.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
