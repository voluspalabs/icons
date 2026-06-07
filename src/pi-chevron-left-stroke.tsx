import type { JSX } from "react";

export function PiChevronLeftStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M14.6252 8.13916C13.1634 9.20122 11.854 10.4462 10.731 11.8413C10.59 12.0165 10.59 12.2618 10.731 12.437C11.854 13.8321 13.1634 15.0771 14.6252 16.1392"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
