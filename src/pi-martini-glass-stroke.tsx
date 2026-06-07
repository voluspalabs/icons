import type { JSX } from "react";

export function PiMartiniGlassStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 13V21M12 13L6 7M12 13L18 7M12 21H17.5M12 21H7M6 7L3 4H21L18 7M6 7C9.99308 7.33276 14.0069 7.33276 18 7"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
