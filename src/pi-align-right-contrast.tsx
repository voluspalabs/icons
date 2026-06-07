import type { JSX } from "react";

export function PiAlignRightContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M16.355 12.4044C15.2293 13.7879 13.9232 15.0246 12.469 16.0833C12.6892 13.3655 12.6892 10.6344 12.469 7.91663C13.9232 8.97527 15.2293 10.212 16.355 11.5955C16.4516 11.7142 16.4999 11.8571 16.4999 12C16.4999 12.1429 16.4516 12.2857 16.355 12.4044Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.6343 12H4.5M12.6343 12C12.6343 13.3622 12.5792 14.7245 12.4691 16.0833C13.9233 15.0247 15.2294 13.788 16.3551 12.4045C16.4517 12.2858 16.5 12.1429 16.5 12C16.5 11.8571 16.4517 11.7142 16.3551 11.5955C15.2294 10.212 13.9233 8.97531 12.4691 7.91667C12.5792 9.27555 12.6343 10.6378 12.6343 12ZM20.5 19V5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
