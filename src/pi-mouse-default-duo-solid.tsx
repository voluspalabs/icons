import type { JSX } from "react";

export function PiMouseDefaultDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 2C8.08172 2 4.5 5.58172 4.5 10V14C4.5 18.4183 8.08172 22 12.5 22C16.9183 22 20.5 18.4183 20.5 14V10C20.5 5.58172 16.9183 2 12.5 2Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.5 10.05V7.94995"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
