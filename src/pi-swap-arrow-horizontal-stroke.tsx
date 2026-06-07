import type { JSX } from "react";

export function PiSwapArrowHorizontalStroke(
  props: JSX.IntrinsicElements["svg"]
) {
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
        d="M7.38693 12C5.98467 13.037 4.72522 14.2485 3.63968 15.6038C3.54656 15.72 3.5 15.86 3.5 16M7.38693 20C5.98467 18.963 4.72522 17.7515 3.63968 16.3962C3.54656 16.28 3.5 16.14 3.5 16M3.5 16H17.5M17.6131 4C19.0153 5.03704 20.2748 6.24852 21.3603 7.60379C21.4534 7.72005 21.5 7.86002 21.5 8M17.6131 12C19.0153 10.963 20.2748 9.75148 21.3603 8.39621C21.4534 8.27995 21.5 8.13998 21.5 8M21.5 8H7.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
