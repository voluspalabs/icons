import type { JSX } from "react";

export function PiArrowLeftCircleStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.4488 16C11.0242 14.963 9.74481 13.7515 8.64204 12.3962C8.54744 12.28 8.50014 12.14 8.50014 12M12.4488 8C11.0242 9.03704 9.74481 10.2485 8.64204 11.6038C8.54744 11.72 8.50014 11.86 8.50014 12M8.50014 12L16.5001 12M21.6501 12.0001C21.6501 17.0535 17.5535 21.1501 12.5001 21.1501C7.44669 21.1501 3.3501 17.0535 3.3501 12.0001C3.3501 6.94669 7.44669 2.8501 12.5001 2.8501C17.5535 2.8501 21.6501 6.94669 21.6501 12.0001Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
