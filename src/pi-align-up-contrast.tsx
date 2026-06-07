import type { JSX } from "react";

export function PiAlignUpContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.0956 8.14485C10.7121 9.2706 9.4754 10.5767 8.41675 12.0309C11.1345 11.8107 13.8657 11.8107 16.5834 12.0309C15.5248 10.5767 14.288 9.2706 12.9045 8.14485C12.7859 8.04828 12.643 8 12.5001 8C12.3572 8 12.2143 8.04828 12.0956 8.14485Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.5 11.8657V20M12.5 11.8657C11.1378 11.8657 9.77555 11.9208 8.41667 12.0309C9.47531 10.5767 10.712 9.2706 12.0955 8.14486C12.2142 8.04828 12.3571 8 12.5 8C12.6429 8 12.7858 8.04828 12.9045 8.14486C14.288 9.2706 15.5247 10.5767 16.5833 12.0309C15.2245 11.9208 13.8622 11.8657 12.5 11.8657ZM5.5 4L19.5 4"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
