import type { JSX } from "react";

export function PiChevronBigRightContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M15.3172 12.5101C13.6364 14.5771 11.6808 16.423 9.5 18C9.83276 14.0069 9.83276 9.99308 9.5 6C11.6808 7.57701 13.6364 9.42294 15.3172 11.4899C15.5609 11.7897 15.5609 12.2103 15.3172 12.5101Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M15.3172 12.5101C13.6364 14.5771 11.6808 16.423 9.5 18C9.83276 14.0069 9.83276 9.99308 9.5 6C11.6808 7.57701 13.6364 9.42294 15.3172 11.4899C15.5609 11.7897 15.5609 12.2103 15.3172 12.5101Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
