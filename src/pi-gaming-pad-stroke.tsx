import type { JSX } from "react";

export function PiGamingPadStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.5 13V11M8.5 11V9M8.5 11H6.5M8.5 11H10.5M15.51 9L15.5 9.00098M18.51 12L18.5 12.001M22.5 11.6667V16.9098C22.5 18.6165 21.1165 20 19.4098 20C18.2394 20 17.1693 19.3387 16.6459 18.2918L16.5 18C15.8871 16.7743 14.6343 16 13.2639 16H11.7361C10.3657 16 9.11287 16.7743 8.5 18L8.3541 18.2918C7.83065 19.3387 6.76064 20 5.59017 20C3.88352 20 2.5 18.6165 2.5 16.9098V11.6667C2.5 7.98477 5.48477 5 9.16667 5H15.8333C19.5152 5 22.5 7.98477 22.5 11.6667Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
