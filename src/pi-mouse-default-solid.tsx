import type { JSX } from "react";

export function PiMouseDefaultSolid(props: JSX.IntrinsicElements["svg"]) {
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
        clipRule="evenodd"
        d="M4.5 10C4.5 5.58172 8.08172 2 12.5 2C16.9183 2 20.5 5.58172 20.5 10V14C20.5 18.4183 16.9183 22 12.5 22C8.08172 22 4.5 18.4183 4.5 14V10ZM13.5 7.95C13.5 7.39772 13.0523 6.95 12.5 6.95C11.9477 6.95 11.5 7.39772 11.5 7.95V10.05C11.5 10.6023 11.9477 11.05 12.5 11.05C13.0523 11.05 13.5 10.6023 13.5 10.05V7.95Z"
        fill="currentcolor"
        fillRule="evenodd"
      />
    </svg>
  );
}
