import type { JSX } from "react";

export function PiAlignLeftContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.64485 12.4044C9.7706 13.7879 11.0767 15.0246 12.5309 16.0833C12.3107 13.3655 12.3107 10.6344 12.5309 7.91663C11.0767 8.97527 9.7706 10.212 8.64485 11.5955C8.54828 11.7142 8.5 11.8571 8.5 12C8.5 12.1429 8.54828 12.2857 8.64485 12.4044Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.3657 12H20.5M12.3657 12C12.3657 13.3622 12.4208 14.7245 12.5309 16.0833C11.0767 15.0247 9.7706 13.788 8.64485 12.4045C8.54828 12.2858 8.5 12.1429 8.5 12C8.5 11.8571 8.54828 11.7142 8.64485 11.5955C9.7706 10.212 11.0767 8.97531 12.5309 7.91667C12.4208 9.27555 12.3657 10.6378 12.3657 12ZM4.5 19V5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
