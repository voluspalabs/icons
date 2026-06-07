import type { JSX } from "react";

export function PiVideoCallDefaultDuoStroke(
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
        d="M18.2135 15.3994C17.7779 15.0335 17.5196 14.5002 17.501 13.9337L17.5012 10.0586C17.5219 9.49493 17.7799 8.96476 18.2135 8.60051L19.2135 7.76051C20.5147 6.6675 22.4999 7.59257 22.4999 9.29192V14.708C22.4999 16.4074 20.5147 17.3324 19.2135 16.2394L18.2135 15.3994Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.5 19C15.7091 19 17.5 17.2091 17.5 15V9C17.5 6.79086 15.7091 5 13.5 5H6.5C4.29086 5 2.5 6.79086 2.5 9V15C2.5 17.2091 4.29086 19 6.5 19H13.5Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
