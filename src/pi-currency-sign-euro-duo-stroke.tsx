import type { JSX } from "react";

export function PiCurrencySignEuroDuoStroke(
  props: JSX.IntrinsicElements["svg"]
) {
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
        d="M3 10H14M3 14H13"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M17 5.25469C15.8662 4.46381 14.4872 4 13 4C9.13401 4 6 7.13401 6 11V13C6 16.866 9.13401 20 13 20C14.4872 20 15.8662 19.5362 17 18.7453"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
