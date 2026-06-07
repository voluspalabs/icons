import type { JSX } from "react";

export function PiMouseButtonLeftDuoStroke(
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
        d="M19.5 14V10C19.5 6.13401 16.366 3 12.5 3V7.8C12.5 8.92011 12.5 9.48016 12.282 9.90798C12.0903 10.2843 11.7843 10.5903 11.408 10.782C10.9802 11 10.4201 11 9.3 11H5.5V14C5.5 17.866 8.63401 21 12.5 21C16.366 21 19.5 17.866 19.5 14Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.5 10C5.5 6.13401 8.63401 3 12.5 3V7.8C12.5 8.92011 12.5 9.48016 12.282 9.90798C12.0903 10.2843 11.7843 10.5903 11.408 10.782C10.9802 11 10.4201 11 9.3 11H5.5V10Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
