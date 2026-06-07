import type { JSX } from "react";

export function PiMouseScrollUpDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M19.5 14V10C19.5 6.13401 16.366 3 12.5 3C8.63401 3 5.5 6.13401 5.5 10V14C5.5 17.866 8.63401 21 12.5 21C16.366 21 19.5 17.866 19.5 14Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.5 10.5003C14.0065 9.84234 13.434 9.24812 12.7957 8.7309C12.7094 8.66095 12.6047 8.62598 12.5 8.62598C12.3953 8.62598 12.2906 8.66095 12.2043 8.73091C11.566 9.24812 10.9935 9.84234 10.5 10.5003"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
