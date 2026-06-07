import type { JSX } from "react";

export function PiChevronRightSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M15.1732 12.925C13.9957 14.3879 12.6235 15.6927 11.0927 16.8055C10.9067 16.9425 10.6726 17.0161 10.4242 16.9972C9.87347 16.9553 9.46102 16.4749 9.50293 15.9242C9.70173 13.3119 9.70173 10.6882 9.50293 8.07593C9.46102 7.52524 9.87347 7.04484 10.4242 7.00293C10.6726 6.98403 10.9067 7.05757 11.0927 7.19456C12.6235 8.30737 13.9957 9.61223 15.1732 11.0751C15.609 11.6165 15.609 12.3836 15.1732 12.925Z"
        fill="currentcolor"
      />
    </svg>
  );
}
