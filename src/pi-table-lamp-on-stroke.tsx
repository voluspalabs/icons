import type { JSX } from "react";

export function PiTableLampOnStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 18V12M9 21H15M6 15L5 17M18 15L19 17M20 12L17.2729 4.32998C16.9894 3.53262 16.2347 3 15.3885 3H8.61155C7.76529 3 7.01062 3.53262 6.72712 4.32998L4 12H20ZM16 21V20C16 18.8954 15.1046 18 14 18H10C8.89543 18 8 18.8954 8 20V21H16Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
