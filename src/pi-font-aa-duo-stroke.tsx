import type { JSX } from "react";

export function PiFontAaDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M2.5 19L6.85782 6.15727C7.10568 5.46327 7.76306 5 8.5 5C9.25748 5 9.92832 5.48902 10.1601 6.21016L14.5 19M4.53593 13H12.4641"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22.5 12V18M22.5 15C22.5 16.6569 21.1569 18 19.5 18C17.8431 18 16.5 16.6569 16.5 15C16.5 13.3431 17.8431 12 19.5 12C21.1569 12 22.5 13.3431 22.5 15Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
