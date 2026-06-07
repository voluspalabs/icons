import type { JSX } from "react";

export function PiStrikeThroughStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 12C14.7712 12 17.5 12.4351 17.5 15.8679C17.5 20.9381 8.83063 21.3742 7.64564 17M12.5 12L21.5 12M12.5 12L3.5 12M7.5 8.13207C7.5 3.06192 16.1694 2.62579 17.3544 7"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
