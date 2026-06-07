import type { JSX } from "react";

export function PiChevronRightContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M14.3942 11.7021C13.2713 10.3071 11.9619 9.06206 10.5 8L10.8044 12L10.5 16C11.9619 14.9379 13.2713 13.6929 14.3942 12.2979C14.5353 12.1226 14.5353 11.8774 14.3942 11.7021Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M14.3942 11.7021C13.2713 10.3071 11.9619 9.06206 10.5 8C10.7026 10.6628 10.7026 13.3372 10.5 16C11.9619 14.9379 13.2713 13.6929 14.3942 12.2979C14.5353 12.1226 14.5353 11.8774 14.3942 11.7021Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
