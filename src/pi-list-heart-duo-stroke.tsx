import type { JSX } from "react";

export function PiListHeartDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 12H10M4 18H10M4 6H20"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M17.7143 18.3271C18.0857 18.3271 21.4286 16.5217 21.4286 13.994C21.4286 12.7301 20.3143 11.8431 19.2 11.8274C18.6429 11.8195 18.0857 12.0079 17.7143 12.5496C17.3429 12.0079 16.7761 11.8274 16.2286 11.8274C15.1143 11.8274 14 12.7301 14 13.994C14 16.5217 17.3429 18.3271 17.7143 18.3271Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
