import type { JSX } from "react";

export function PiChevronLeftContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M10.6058 11.7021C11.7287 10.3071 13.0381 9.06206 14.5 8L14.1956 12L14.5 16C13.0381 14.9379 11.7287 13.6929 10.6058 12.2979C10.4647 12.1226 10.4647 11.8774 10.6058 11.7021Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M10.6058 11.7021C11.7287 10.3071 13.0381 9.06206 14.5 8C14.2974 10.6628 14.2974 13.3372 14.5 16C13.0381 14.9379 11.7287 13.6929 10.6058 12.2979C10.4647 12.1226 10.4647 11.8774 10.6058 11.7021Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
