import type { JSX } from "react";

export function PiAlignRightStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.4691 16C13.9233 14.9414 15.2294 13.7046 16.3551 12.3211C16.4517 12.2025 16.5 12.0596 16.5 11.9167M12.4691 7.83333C13.9233 8.89198 15.2294 10.1287 16.3551 11.5122C16.4517 11.6309 16.5 11.7738 16.5 11.9167M16.5 11.9167L4.5 11.9167M20.5 19V5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
