import type { JSX } from "react";

export function PiMouseButtonRightStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 3C8.63401 3 5.5 6.13401 5.5 10V14C5.5 17.866 8.63401 21 12.5 21C16.366 21 19.5 17.866 19.5 14V10C19.5 6.13401 16.366 3 12.5 3ZM12.5 3V7.8C12.5 8.92011 12.5 9.48016 12.718 9.90798C12.9097 10.2843 13.2157 10.5903 13.592 10.782C14.0198 11 14.5799 11 15.7 11H19.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
