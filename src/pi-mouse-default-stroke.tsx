import type { JSX } from "react";

export function PiMouseDefaultStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 10V8M12.5 21C8.63401 21 5.5 17.866 5.5 14V10C5.5 6.13401 8.63401 3 12.5 3C16.366 3 19.5 6.13401 19.5 10V14C19.5 17.866 16.366 21 12.5 21Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
