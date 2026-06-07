import type { JSX } from "react";

export function PiAlignUpDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M5.5 4H19.5"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.41675 12.0309C9.4754 10.5767 10.7121 9.2706 12.0956 8.14485C12.2143 8.04828 12.3572 8 12.5001 8M16.5834 12.0309C15.5248 10.5767 14.288 9.2706 12.9045 8.14485C12.7859 8.04828 12.643 8 12.5001 8M12.5001 8V20"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
