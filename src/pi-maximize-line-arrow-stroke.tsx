import type { JSX } from "react";

export function PiMaximizeLineArrowStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M20.2142 9.94268C20.5092 8.1811 20.5761 6.40091 20.4138 4.64657C20.3998 4.49608 20.335 4.36296 20.236 4.26398M14.5573 4.28582C16.3189 3.99085 18.0991 3.92395 19.8534 4.08624C20.0039 4.10016 20.137 4.165 20.236 4.26398M20.236 4.26398L4.76398 19.736M4.78582 14.0573C4.49085 15.8189 4.42395 17.5991 4.58624 19.3534C4.60016 19.5039 4.665 19.637 4.76398 19.736M10.4427 19.7142C8.6811 20.0092 6.90091 20.0761 5.14657 19.9138C4.99608 19.8998 4.86296 19.835 4.76398 19.736"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
