import type { JSX } from "react";

export function PiArrowUpContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M11.9057 4.20952C9.87278 5.83783 8.05556 7.727 6.5 9.8304L12.5 9.53L18.5 9.8304C16.9444 7.727 15.1272 5.83783 13.0943 4.20952C12.9199 4.06984 12.71 4 12.5 4C12.29 4 12.0801 4.06984 11.9057 4.20952Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.5 9.53L6.5 9.8304C8.05556 7.727 9.87278 5.83783 11.9057 4.20952C12.0801 4.06984 12.29 4 12.5 4C12.71 4 12.9199 4.06984 13.0943 4.20952C15.1272 5.83783 16.9444 7.727 18.5 9.8304L12.5 9.53ZM12.5 9.53L12.5 20"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
