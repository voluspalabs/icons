import type { JSX } from "react";

export function PiTerminalConsoleCircleDuoSolid(
  props: JSX.IntrinsicElements["svg"]
) {
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
        d="M12 2C6.47716 2 2 6.47716 2 12C2 17.5229 6.47716 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47716 17.5229 2 12 2Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M8 13L10 11L8 9M13 13H16"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
