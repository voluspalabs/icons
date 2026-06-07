import type { JSX } from "react";

export function PiArrowRightCircleStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5515 16C13.976 14.963 15.2555 13.7515 16.3582 12.3962C16.4528 12.28 16.5001 12.14 16.5001 12M12.5515 8C13.976 9.03704 15.2555 10.2485 16.3582 11.6038C16.4528 11.72 16.5001 11.86 16.5001 12M16.5001 12L8.50014 12M21.6501 12.0001C21.6501 17.0535 17.5535 21.1501 12.5001 21.1501C7.44669 21.1501 3.3501 17.0535 3.3501 12.0001C3.3501 6.94669 7.44669 2.8501 12.5001 2.8501C17.5535 2.8501 21.6501 6.94669 21.6501 12.0001Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
