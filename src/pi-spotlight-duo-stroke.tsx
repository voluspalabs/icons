import type { JSX } from "react";

export function PiSpotlightDuoStroke(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      aria-hidden="true"
      {...props}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.71826 10L9.00013 20.5001M9.32846 7L22.1623 19.6727"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6.61375 4.31945L5.4666 2.68114C4.83305 1.77633 3.58595 1.55644 2.68114 2.18999C1.77633 2.82355 1.55644 4.07064 2.18999 4.97545L3.33715 6.61375L6.61375 4.31945Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M15.9998 22.4998C19.8658 22.4998 22.9998 21.3282 22.9998 20.4998C22.9998 20.2421 22.6964 19.9511 22.162 19.6725C20.9787 19.0557 18.663 18.4998 15.9998 18.4998C12.1338 18.4998 8.99981 19.6714 8.99981 20.4998C8.99981 21.3282 12.1338 22.4998 15.9998 22.4998Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
