import type { JSX } from "react";

export function PiPhoneStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 19H12.51M11.9 2H13.1C15.3402 2 16.4603 2 17.316 2.43597C18.0686 2.81947 18.6805 3.43139 19.064 4.18404C19.5 5.03968 19.5 6.15979 19.5 8.4V15.6C19.5 17.8402 19.5 18.9603 19.064 19.816C18.6805 20.5686 18.0686 21.1805 17.316 21.564C16.4603 22 15.3402 22 13.1 22H11.9C9.65979 22 8.53968 22 7.68404 21.564C6.93139 21.1805 6.31947 20.5686 5.93597 19.816C5.5 18.9603 5.5 17.8402 5.5 15.6V8.4C5.5 6.15979 5.5 5.03968 5.93597 4.18404C6.31947 3.43139 6.93139 2.81947 7.68404 2.43597C8.53968 2 9.65979 2 11.9 2Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
