import type { JSX } from "react";

export function PiChevronLeftSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M9.82681 12.925C11.0043 14.3879 12.3765 15.6927 13.9074 16.8055C14.0934 16.9425 14.3275 17.0161 14.5759 16.9972C15.1266 16.9553 15.539 16.4749 15.4971 15.9242C15.2983 13.3119 15.2983 10.6882 15.4971 8.07593C15.539 7.52524 15.1266 7.04484 14.5759 7.00293C14.3275 6.98403 14.0934 7.05757 13.9074 7.19456C12.3765 8.30737 11.0044 9.61223 9.82681 11.0751C9.39106 11.6165 9.39106 12.3836 9.82681 12.925Z"
        fill="currentcolor"
      />
    </svg>
  );
}
