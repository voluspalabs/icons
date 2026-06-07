import type { JSX } from "react";

export function PiDoubleChevronUpStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.5 11C9.56206 9.53812 10.8071 8.22872 12.2021 7.1058C12.3774 6.96473 12.6226 6.96473 12.7979 7.1058C14.1929 8.22872 15.4379 9.53812 16.5 11M8.5 17C9.56206 15.5381 10.8071 14.2287 12.2021 13.1058C12.3774 12.9647 12.6226 12.9647 12.7979 13.1058C14.1929 14.2287 15.4379 15.5381 16.5 17"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
