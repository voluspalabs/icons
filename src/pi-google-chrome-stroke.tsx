import type { JSX } from "react";

export function PiGoogleChromeStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 8.24625C14.0732 8.24625 15.7538 9.92691 15.7538 12.0001C15.7538 14.0733 14.0732 15.7539 12 15.7539C9.92678 15.7539 8.24613 14.0733 8.24613 12.0001C8.24613 9.92691 9.92678 8.24625 12 8.24625ZM12 8.24625H20.347M8.75285 13.8771L4.57556 6.65099M15.2471 13.877L11.0782 21.1042M11.0782 21.1042C11.3813 21.1346 11.6888 21.1501 12 21.1501C17.0534 21.1501 21.15 17.0535 21.15 12.0001C21.15 6.94669 17.0534 2.8501 12 2.8501C8.94363 2.8501 6.23728 4.34861 4.57556 6.65099M11.0782 21.1042C6.45766 20.642 2.84998 16.7424 2.84998 12.0001C2.84998 10.003 3.48977 8.15541 4.57556 6.65099"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
