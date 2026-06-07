import type { JSX } from "react";

export function PiChevronUpStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.5 14C9.56206 12.5381 10.8071 11.2287 12.2021 10.1058C12.3774 9.96473 12.6226 9.96473 12.7979 10.1058C14.1929 11.2287 15.4379 12.5381 16.5 14"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
