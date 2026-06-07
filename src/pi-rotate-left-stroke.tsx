import type { JSX } from "react";

export function PiRotateLeftStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6.71458 2.66992C6.20537 3.86202 5.85304 5.11461 5.66601 6.39629C5.61717 6.73098 5.88094 6.88085 6.14457 6.9818C6.17589 6.9938 6.20724 7.00568 6.23864 7.01746M6.23864 7.01746C7.70439 5.17853 9.96355 4 12.498 4C16.9162 4 20.498 7.58172 20.498 12C20.498 16.4183 16.9162 20 12.498 20C8.77029 20 5.63809 17.4505 4.75 14M6.23864 7.01746C7.35852 7.43772 8.52543 7.72281 9.71458 7.86607"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
