import type { JSX } from "react";

export function PiAlarmDefaultDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M5 3L2 6M19 3L22 6M12 10V13.7169C12 13.8925 12.0921 14.0553 12.2428 14.1457L14.5 15.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
