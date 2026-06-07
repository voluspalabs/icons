import type { JSX } from "react";

export function PiChevronDownSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M13.425 14.6732C14.8879 13.4957 16.1927 12.1235 17.3055 10.5927C17.4425 10.4067 17.5161 10.1726 17.4972 9.92417C17.4553 9.37347 16.9749 8.96102 16.4242 9.00293C13.8119 9.20173 11.1882 9.20173 8.57593 9.00293C8.02524 8.96102 7.54484 9.37347 7.50293 9.92417C7.48403 10.1726 7.55757 10.4067 7.69456 10.5927C8.80737 12.1235 10.1122 13.4957 11.5751 14.6732C12.1165 15.109 12.8836 15.109 13.425 14.6732Z"
        fill="currentcolor"
      />
    </svg>
  );
}
