import type { JSX } from "react";

export function PiSwapHalfarrowVerticalContrast(
  props: JSX.IntrinsicElements["svg"]
) {
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
      <g opacity="0.28">
        <path
          d="M18.5 17.113C17.463 18.5153 16.2515 19.7747 14.8962 20.8603C14.78 20.9534 14.64 20.9999 14.5 20.9999V17.3439C15.0926 17.3439 15.6853 17.322 16.2767 17.2781L18.5 17.113Z"
          fill="currentcolor"
        />
        <path
          d="M6.5 6.88693C7.53704 5.48467 8.74852 4.22522 10.1038 3.13968C10.22 3.04656 10.36 3 10.5 3V6.65604C9.90735 6.65604 9.31471 6.67799 8.72328 6.72189L6.5 6.88693Z"
          fill="currentcolor"
        />
      </g>
      <path
        d="M14.5 17.344V21C14.64 21 14.78 20.9534 14.8962 20.8603C16.2515 19.7748 17.463 18.5153 18.5 17.1131L16.2767 17.2781C15.6853 17.322 15.0926 17.344 14.5 17.344ZM14.5 17.344L14.5 6M10.5 6.65604V3C10.36 3 10.22 3.04656 10.1038 3.13968C8.74852 4.22522 7.53704 5.48467 6.5 6.88693L8.72328 6.72189C9.31471 6.67799 9.90735 6.65604 10.5 6.65604ZM10.5 6.65604L10.5 18"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
