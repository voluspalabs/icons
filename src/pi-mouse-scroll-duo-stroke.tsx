import type { JSX } from "react";

export function PiMouseScrollDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.5 14.4998C14.0065 15.1578 13.434 15.7521 12.7957 16.2693C12.7094 16.3392 12.6047 16.3742 12.5 16.3742C12.3953 16.3742 12.2906 16.3392 12.2043 16.2693C11.566 15.7521 10.9935 15.1578 10.5 14.4998M14.5 9.49984C14.0065 8.84185 13.434 8.24764 12.7957 7.73042C12.7094 7.66046 12.6047 7.62549 12.5 7.62549C12.3953 7.62549 12.2906 7.66046 12.2043 7.73042C11.566 8.24764 10.9935 8.84185 10.5 9.49984"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
