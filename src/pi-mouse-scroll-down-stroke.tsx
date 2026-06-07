import type { JSX } from "react";

export function PiMouseScrollDownStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M14.5 9.5C14.0065 10.158 13.434 10.7522 12.7957 11.2694C12.7094 11.3394 12.6047 11.3744 12.5 11.3744C12.3953 11.3744 12.2906 11.3394 12.2043 11.2694C11.566 10.7522 10.9935 10.158 10.5 9.5M19.5 10V14C19.5 17.866 16.366 21 12.5 21C8.63401 21 5.5 17.866 5.5 14V10C5.5 6.13401 8.63401 3 12.5 3C16.366 3 19.5 6.13401 19.5 10Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
