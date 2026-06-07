import type { JSX } from "react";

export function PiFloorLampOnContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M7.93668 4.35135C8.21384 3.54297 8.974 3 9.82857 3H14.1714C15.026 3 15.7862 3.54297 16.0633 4.35135L18 10H6L7.93668 4.35135Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12 21V10M9 21H15M8 13L7 15M16 13L17 15M18 10L16.0633 4.35135C15.7862 3.54297 15.026 3 14.1714 3H9.82857C8.974 3 8.21384 3.54297 7.93668 4.35135L6 10H18Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
