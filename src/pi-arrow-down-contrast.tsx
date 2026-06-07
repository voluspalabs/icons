import type { JSX } from "react";

export function PiArrowDownContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M11.9057 19.7904C9.87278 18.1621 8.05556 16.273 6.5 14.1696L12.5 14.47L18.5 14.1696C16.9444 16.273 15.1272 18.1621 13.0943 19.7904C12.9199 19.9301 12.71 20 12.5 20C12.29 20 12.0801 19.9301 11.9057 19.7904Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.5 14.47L6.5 14.1696C8.05556 16.273 9.87278 18.1622 11.9057 19.7905C12.0801 19.9302 12.29 20 12.5 20C12.71 20 12.9199 19.9302 13.0943 19.7905C15.1272 18.1622 16.9444 16.273 18.5 14.1696L12.5 14.47ZM12.5 14.47L12.5 4"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
