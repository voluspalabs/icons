import type { JSX } from "react";

export function PiArrowLeftContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4.70952 12.5943C6.33783 14.6272 8.227 16.4444 10.3304 18L10.03 12L10.3304 6C8.227 7.55556 6.33783 9.37278 4.70952 11.4057C4.56984 11.5801 4.5 11.79 4.5 12C4.5 12.21 4.56984 12.4199 4.70952 12.5943Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M10.03 12L10.3304 18C8.227 16.4444 6.33783 14.6272 4.70952 12.5943C4.56984 12.4199 4.5 12.21 4.5 12C4.5 11.79 4.56984 11.5801 4.70952 11.4057C6.33783 9.37278 8.227 7.55556 10.3304 6L10.03 12ZM10.03 12L20.5 12"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
