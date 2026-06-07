import type { JSX } from "react";

export function PiChatDefaultDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 12.4317 3.53039 12.8563 3.58915 13.2717C3.7594 14.4754 3.84452 15.0773 3.85674 15.2357C3.87659 15.4931 3.87339 15.4008 3.87139 15.6589C3.87015 15.8179 3.85723 15.9988 3.83138 16.3607L3.67757 18.514C3.61632 19.3715 3.5857 19.8002 3.7377 20.1208C3.87113 20.4022 4.09778 20.6289 4.37922 20.7623C4.69982 20.9143 5.12856 20.8837 5.98597 20.8224L8.1393 20.6686C8.50069 20.6428 8.68225 20.6298 8.84105 20.6286C9.09919 20.6266 9.0069 20.6234 9.26429 20.6433C9.42265 20.6555 10.024 20.7405 11.2265 20.9106L11.2283 20.9108C11.6437 20.9696 12.0683 21 12.5 21Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.5 10H16.5M8.5 14H12.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
