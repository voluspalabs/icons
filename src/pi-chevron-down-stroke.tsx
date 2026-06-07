import type { JSX } from "react";

export function PiChevronDownStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.5 10.1392C9.56206 11.601 10.8071 12.9104 12.2021 14.0334C12.3774 14.1744 12.6226 14.1744 12.7979 14.0334C14.1929 12.9104 15.4379 11.601 16.5 10.1392"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
