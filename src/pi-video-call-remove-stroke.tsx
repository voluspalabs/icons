import type { JSX } from "react";

export function PiVideoCallRemoveStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M7 12H13M17.5011 13.9337C17.5197 14.5002 17.778 15.0335 18.2136 15.3994L19.2136 16.2394C20.5148 17.3324 22.5 16.4074 22.5 14.708V9.292C22.5 7.5926 20.5148 6.6676 19.2136 7.7606L18.2136 8.6006C17.78 8.9648 17.522 9.495 17.5013 10.0586M17.5011 13.9337L17.5 15C17.5 17.2091 15.7091 19 13.5 19H6.5C4.29086 19 2.5 17.2091 2.5 15V9C2.5 6.7909 4.29086 5 6.5 5H13.5C15.7091 5 17.5 6.7909 17.5 9L17.5013 10.0586M17.5011 13.9337L17.5013 10.0586"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
