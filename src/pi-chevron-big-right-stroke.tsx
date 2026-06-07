import type { JSX } from "react";

export function PiChevronBigRightStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M9.5 18C11.6808 16.423 13.6364 14.5771 15.3172 12.5101C15.5609 12.2103 15.5609 11.7897 15.3172 11.4899C13.6364 9.42294 11.6808 7.57701 9.5 6"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
