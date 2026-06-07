import type { JSX } from "react";

export function PiCropStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6.5 18H15.3C16.4201 18 16.9802 18 17.408 17.782C17.7843 17.5903 18.0903 17.2843 18.282 16.908C18.5 16.4802 18.5 15.9201 18.5 14.8V6M6.5 18H2.5M6.5 18V22M6.5 18V9.2C6.5 8.0799 6.5 7.51984 6.71799 7.09202C6.90973 6.71569 7.21569 6.40973 7.59202 6.21799C8.01984 6 8.5799 6 9.7 6H18.5M18.5 2V6M18.5 6H22.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
