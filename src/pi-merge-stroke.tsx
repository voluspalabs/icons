import type { JSX } from "react";

export function PiMergeStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M16.5 8.03089C15.463 6.57669 14.2515 5.2706 12.8962 4.14485C12.78 4.04828 12.64 4 12.5 4M8.5 8.03089C9.53704 6.57669 10.7485 5.2706 12.1038 4.14485C12.22 4.04828 12.36 4 12.5 4M12.5 4V13L6.5 20M18.5 20L15.0714 16"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
