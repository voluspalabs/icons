import type { JSX } from "react";

export function PiAlarmOffDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M5 3L2 6M14.2827 15.3696L14.5 15.5M19.4843 10.168C19.8176 11.0484 20 12.0029 20 13C20 17.4183 16.4183 21 12 21C11.0029 21 10.0484 20.8176 9.16805 20.4843M5.86515 18.1348C4.70094 16.7454 4 14.9545 4 13C4 8.58172 7.58172 5 12 5C13.9545 5 15.7454 5.70094 17.1348 6.86515M12 10V12M19 3L20 4"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 2L2 22"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
