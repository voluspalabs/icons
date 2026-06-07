import type { JSX } from "react";

export function PiSpinnerDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M19.0782 19.0785L16.2498 16.2501M19.0782 5L16.2498 7.82843M4.92139 19.0785L7.74981 16.2501M4.92139 5L7.74981 7.82843"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 12H2M22 12H18M12 2V6M12 18V22"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
