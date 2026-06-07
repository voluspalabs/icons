import type { JSX } from "react";

export function PiPresentationBargraphStroke(
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
        d="M2 9.4C2 7.15979 2 6.03968 2.43597 5.18404C2.81947 4.43139 3.43139 3.81947 4.18404 3.43597C5.03968 3 6.15979 3 8.4 3H15.6C17.8402 3 18.9603 3 19.816 3.43597C20.5686 3.81947 21.1805 4.43139 21.564 5.18404C22 6.03968 22 7.15979 22 9.4V11.6C22 13.8402 22 14.9603 21.564 15.816C21.1805 16.5686 20.5686 17.1805 19.816 17.564C18.9603 18 17.8402 18 15.6 18H8.4C6.15979 18 5.03968 18 4.18404 17.564C3.43139 17.1805 2.81947 16.5686 2.43597 15.816C2 14.9603 2 13.8402 2 11.6V9.4Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
