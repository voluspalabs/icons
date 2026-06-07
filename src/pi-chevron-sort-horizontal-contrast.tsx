import type { JSX } from "react";

export function PiChevronSortHorizontalContrast(
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
      <g opacity="0.28">
        <path
          d="M19.3942 12.2979C18.2713 13.6929 16.9619 14.9379 15.5 16C15.6997 13.3371 15.6997 10.6629 15.5 8C16.9619 9.06206 18.2713 10.3071 19.3942 11.7021C19.5353 11.8774 19.5353 12.1226 19.3942 12.2979Z"
          fill="currentcolor"
        />
        <path
          d="M5.6058 11.7021C6.72872 10.3071 8.03812 9.06206 9.5 8C9.30028 10.6629 9.30028 13.3371 9.5 16C8.03812 14.9379 6.72872 13.6929 5.6058 12.2979C5.46473 12.1226 5.46473 11.8774 5.6058 11.7021Z"
          fill="currentcolor"
        />
      </g>
      <path
        d="M19.3942 12.2979C18.2713 13.6929 16.9619 14.9379 15.5 16C15.6997 13.3371 15.6997 10.6629 15.5 8C16.9619 9.06206 18.2713 10.3071 19.3942 11.7021C19.5353 11.8774 19.5353 12.1226 19.3942 12.2979Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.6058 11.7021C6.72872 10.3071 8.03812 9.06206 9.5 8C9.30028 10.6629 9.30028 13.3371 9.5 16C8.03812 14.9379 6.72872 13.6929 5.6058 12.2979C5.46473 12.1226 5.46473 11.8774 5.6058 11.7021Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
