import type { JSX } from "react";

export function PiChevronBigUpStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6.5 15C8.07701 12.8192 9.92293 10.8636 11.9899 9.18284C12.2897 8.93905 12.7103 8.93905 13.0101 9.18284C15.0771 10.8636 16.923 12.8192 18.5 15"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
