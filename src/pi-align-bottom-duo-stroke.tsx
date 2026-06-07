import type { JSX } from "react";

export function PiAlignBottomDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M5.5 20H19.5"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.41675 11.9691C9.4754 13.4233 10.7121 14.7294 12.0956 15.8551C12.2143 15.9517 12.3572 16 12.5001 16M16.5834 11.9691C15.5248 13.4233 14.288 14.7294 12.9045 15.8551C12.7859 15.9517 12.643 16 12.5001 16M12.5001 16V4"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
