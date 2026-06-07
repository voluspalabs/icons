import type { JSX } from "react";

export function PiCropDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M2.5 18H6.5V22M18.5 2V6H22.5"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M7.59202 6.21799C8.01984 6 8.57989 6 9.7 6H18.5V14.8C18.5 15.9201 18.5 16.4802 18.282 16.908C18.0903 17.2843 17.7843 17.5903 17.408 17.782C16.9802 18 16.4201 18 15.3 18H6.5V9.2C6.5 8.0799 6.5 7.51984 6.71799 7.09202C6.90973 6.71569 7.21569 6.40973 7.59202 6.21799Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
