import type { JSX } from "react";

export function PiSolanaFmStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M15.5147 12.5C15.0882 15.7993 12.3646 18.3784 9.00005 18.5809M18.9878 12.5C18.7272 17.7906 14.3552 22 9.00005 22M8.48542 11.5C8.92983 8.06212 11.8684 5.40625 15.4273 5.40625M5.01233 11.5C5.27285 6.20944 9.64486 2 15 2M9.00005 15C10.6569 15 12 13.6569 12 12C12 10.3431 13.3432 9 15 9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
