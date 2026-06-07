import type { JSX } from "react";

export function PiThreeDotsMenuVerticalCircleStroke(
  props: JSX.IntrinsicElements["svg"]
) {
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
        d="M12.0051 16.0052V15.9952M12.0051 12.0052V11.9952M12.0051 8.00524V7.99524M12.0001 2.84961C17.0535 2.84961 21.1501 6.9462 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996C2.8501 6.9462 6.94669 2.84961 12.0001 2.84961Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
