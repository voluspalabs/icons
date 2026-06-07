import type { JSX } from "react";

export function PiBoldDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M7.5 12V5.77273C7.5 5.5184 7.5 5.39123 7.54518 5.29229C7.59515 5.18288 7.68288 5.09515 7.79229 5.04518C7.89123 5 8.0184 5 8.27273 5H12.5C14.433 5 16 6.567 16 8.5C16 10.4353 14.3854 12 12.4648 12M7.5 12V18.2C7.5 18.48 7.5 18.62 7.5545 18.727C7.60243 18.8211 7.67892 18.8976 7.773 18.9455C7.87996 19 8.01997 19 8.3 19H14C15.933 19 17.5 17.433 17.5 15.5C17.5 13.567 15.933 12 14 12H12.4648M7.5 12H12.4648"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.27273 5C8.0184 5 7.89123 5 7.79229 5.04518C7.68288 5.09515 7.59515 5.18288 7.54518 5.29229C7.5 5.39123 7.5 5.5184 7.5 5.77273V18.2C7.5 18.48 7.5 18.62 7.5545 18.727C7.60243 18.8211 7.67892 18.8976 7.773 18.9455C7.87996 19 8.01997 19 8.3 19"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
