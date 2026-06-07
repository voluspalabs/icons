import type { JSX } from "react";

export function PiMicOnDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 20C7.58172 20 4 16.4183 4 12M12 20C16.4183 20 20 16.4183 20 12M12 20V22"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 2C9.23858 2 7 4.23858 7 7V12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12V7C17 4.23858 14.7614 2 12 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
