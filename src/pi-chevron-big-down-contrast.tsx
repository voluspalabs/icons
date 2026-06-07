import type { JSX } from "react";

export function PiChevronBigDownContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M11.9899 14.8172C9.92293 13.1364 8.07701 11.1808 6.5 9C10.4931 9.33276 14.5069 9.33276 18.5 9C16.923 11.1808 15.0771 13.1364 13.0101 14.8172C12.7103 15.0609 12.2897 15.0609 11.9899 14.8172Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M11.9899 14.8172C9.92293 13.1364 8.07701 11.1808 6.5 9C10.4931 9.33276 14.5069 9.33276 18.5 9C16.923 11.1808 15.0771 13.1364 13.0101 14.8172C12.7103 15.0609 12.2897 15.0609 11.9899 14.8172Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
