import type { JSX } from "react";

export function PiMonitor01Stroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M17.5 22H7.5M12.5 17V22M4.9 17H20.1C20.9401 17 21.3601 17 21.681 16.8365C21.9632 16.6927 22.1927 16.4632 22.3365 16.181C22.5 15.8601 22.5 15.4401 22.5 14.6V4.4C22.5 3.55992 22.5 3.13988 22.3365 2.81901C22.1927 2.53677 21.9632 2.3073 21.681 2.16349C21.3601 2 20.9401 2 20.1 2H4.9C4.05992 2 3.63988 2 3.31901 2.16349C3.03677 2.3073 2.8073 2.53677 2.66349 2.81901C2.5 3.13988 2.5 3.55992 2.5 4.4V14.6C2.5 15.4401 2.5 15.8601 2.66349 16.181C2.8073 16.4632 3.03677 16.6927 3.31901 16.8365C3.63988 17 4.05992 17 4.9 17Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
