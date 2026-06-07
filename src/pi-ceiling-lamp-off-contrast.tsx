import type { JSX } from "react";

export function PiCeilingLampOffContrast(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      aria-hidden="true"
      {...props}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7ZM12 7V4M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16L15 16Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
