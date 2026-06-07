import type { JSX } from "react";

export function PiMouseScrollUpStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M14.5 10.5C14.0065 9.842 13.434 9.24779 12.7957 8.73057C12.7094 8.66062 12.6047 8.62564 12.5 8.62564C12.3953 8.62564 12.2906 8.66062 12.2043 8.73057C11.566 9.24779 10.9935 9.842 10.5 10.5M19.5 10V14C19.5 17.866 16.366 21 12.5 21C8.63401 21 5.5 17.866 5.5 14V10C5.5 6.13401 8.63401 3 12.5 3C16.366 3 19.5 6.13401 19.5 10Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
