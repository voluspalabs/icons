import type { JSX } from "react";

export function PiPaperclipVerticalDuoStroke(
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
        d="M18 9L18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6L14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16L10 7"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10 7L10 16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16L14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
