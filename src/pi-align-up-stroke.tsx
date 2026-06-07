import type { JSX } from "react";

export function PiAlignUpStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M16.5 12.0309C15.4414 10.5767 14.2046 9.2706 12.8211 8.14486C12.7025 8.04828 12.5596 8 12.4167 8M8.33333 12.0309C9.39198 10.5767 10.6287 9.2706 12.0122 8.14486C12.1309 8.04828 12.2738 8 12.4167 8M12.4167 8L12.4167 20M19.5 4H5.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
