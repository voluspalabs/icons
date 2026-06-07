import type { JSX } from "react";

export function PiMultipleCrossCancelCircleDuoStroke(
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
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9 15L12 12M12 12L15 9M12 12L9 9M12 12L15 15"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
