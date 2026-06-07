import type { JSX } from "react";

export function PiEggDefaultStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M19.3891 14.1111C19.3891 18.1919 16.081 21.5 12.0002 21.5C7.91945 21.5 4.61133 18.1919 4.61133 14.1111C4.61133 10.0303 7.91945 2.5 12.0002 2.5C16.081 2.5 19.3891 10.0303 19.3891 14.1111Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
