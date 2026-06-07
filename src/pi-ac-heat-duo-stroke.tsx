import type { JSX } from "react";

export function PiAcHeatDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M20 4H4C2.89543 4 2 4.89543 2 6V12H22V6C22 4.89543 21.1046 4 20 4Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 8H16M17.2367 15C18.9126 16.5325 19.8156 17.6013 19.8156 19.4211C19.8156 20.8108 18.6399 22 17.2367 22C15.8334 22 14.6577 20.8108 14.6577 19.4211C14.6577 18.9963 14.8172 18.5759 15.0261 18.3158C16.9332 19.6308 18.5055 17.1874 17.2367 15Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
