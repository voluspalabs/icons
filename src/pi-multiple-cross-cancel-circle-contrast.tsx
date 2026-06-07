import type { JSX } from "react";

export function PiMultipleCrossCancelCircleContrast(
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
        d="M2.84961 11.9999C2.84961 17.0533 6.9462 21.1499 11.9996 21.1499C17.053 21.1499 21.1496 17.0533 21.1496 11.9999C21.1496 6.94645 17.053 2.84985 11.9996 2.84985C6.9462 2.84985 2.84961 6.94645 2.84961 11.9999Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M8.99976 15L11.9998 12M11.9998 12L14.9998 9M11.9998 12L8.99976 9M11.9998 12L14.9998 15M11.9996 21.1499C6.9462 21.1499 2.84961 17.0533 2.84961 11.9999C2.84961 6.94645 6.9462 2.84985 11.9996 2.84985C17.053 2.84985 21.1496 6.94645 21.1496 11.9999C21.1496 17.0533 17.053 21.1499 11.9996 21.1499Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
