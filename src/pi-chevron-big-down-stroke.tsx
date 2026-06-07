import type { JSX } from "react";

export function PiChevronBigDownStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6.5 9C8.07701 11.1808 9.92293 13.1364 11.9899 14.8172C12.2897 15.0609 12.7103 15.0609 13.0101 14.8172C15.0771 13.1364 16.923 11.1808 18.5 9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
