import type { JSX } from "react";

export function PiChevronSortHorizontalStroke(
  props: JSX.IntrinsicElements["svg"]
) {
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
        d="M15.5 16C16.9619 14.9379 18.2713 13.6929 19.3942 12.2979C19.5353 12.1226 19.5353 11.8774 19.3942 11.7021C18.2713 10.3071 16.9619 9.06206 15.5 8M9.5 8C8.03812 9.06206 6.72872 10.3071 5.6058 11.7021C5.46473 11.8774 5.46473 12.1226 5.6058 12.2979C6.72872 13.6929 8.03812 14.9379 9.5 16"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
