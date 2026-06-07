import type { JSX } from "react";

export function PiDemergeStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M10.4427 4.28582C8.6811 3.99085 6.90091 3.92395 5.14657 4.08624C4.99608 4.10016 4.86296 4.165 4.76398 4.26398M4.78582 9.94268C4.49085 8.1811 4.42395 6.40091 4.58624 4.64657C4.60016 4.49608 4.665 4.36296 4.76398 4.26398M4.76398 4.26398L12.5 12L12.5 20M14.5573 4.28582C16.3189 3.99085 18.0991 3.92395 19.8534 4.08624C20.0039 4.10016 20.137 4.165 20.236 4.26398M20.2142 9.94268C20.5092 8.1811 20.5761 6.40091 20.4138 4.64657C20.3998 4.49608 20.335 4.36296 20.236 4.26398M20.236 4.26398L15.5 9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
