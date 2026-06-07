import type { JSX } from "react";

export function PiChevronBigLeftContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M9.68284 12.5101C11.3636 14.5771 13.3192 16.423 15.5 18C15.1672 14.0069 15.1672 9.99308 15.5 6C13.3192 7.57701 11.3636 9.42294 9.68284 11.4899C9.43905 11.7897 9.43905 12.2103 9.68284 12.5101Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M9.68284 12.5101C11.3636 14.5771 13.3192 16.423 15.5 18C15.1672 14.0069 15.1672 9.99308 15.5 6C13.3192 7.57701 11.3636 9.42294 9.68284 11.4899C9.43905 11.7897 9.43905 12.2103 9.68284 12.5101Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
