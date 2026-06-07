import type { JSX } from "react";

export function PiAlignBottomStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.41667 11.9691C9.47531 13.4233 10.712 14.7294 12.0955 15.8551C12.2142 15.9517 12.3571 16 12.5 16M16.5833 11.9691C15.5247 13.4233 14.288 14.7294 12.9045 15.8551C12.7858 15.9517 12.6429 16 12.5 16M12.5 16V4M5.5 20H19.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
