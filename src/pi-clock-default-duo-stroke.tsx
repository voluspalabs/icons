import type { JSX } from "react";

export function PiClockDefaultDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M11.9996 21.1501C17.053 21.1501 21.1496 17.0535 21.1496 12.0001C21.1496 6.94669 17.053 2.8501 11.9996 2.8501C6.9462 2.8501 2.84961 6.94669 2.84961 12.0001C2.84961 17.0535 6.9462 21.1501 11.9996 21.1501Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 8V12.8164C12 12.9874 12.0873 13.1465 12.2316 13.2383L15 15"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
