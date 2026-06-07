import type { JSX } from "react";

export function PiSearchBigZoomInContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M17.5104 17.5104C19.0486 15.9722 20 13.8472 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C13.8472 20 15.9722 19.0486 17.5104 17.5104ZM17.5104 17.5104L21 21M11.5 14.5V11.5M11.5 11.5V8.5M11.5 11.5H8.5M11.5 11.5H14.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
