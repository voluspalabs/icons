import type { JSX } from "react";

export function PiActivityDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M2 12H5.27924C5.70967 12 6.09181 11.7246 6.22792 11.3162L9 3L15 21L17.7721 12.6838C17.9082 12.2754 18.2903 12 18.7208 12H22"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6.22803 11.3162L9.0001 3L15.0001 21L17.7722 12.6838"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
