import type { JSX } from "react";

export function PiAlignHorizontalCenterStroke(
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
      <path
        d="M17.816 9C16.6197 9.77778 15.5452 10.6864 14.6192 11.7028C14.5397 11.79 14.5 11.895 14.5 12M17.816 15C16.6197 14.2222 15.5452 13.3136 14.6192 12.2972C14.5397 12.21 14.5 12.105 14.5 12M14.5 12L21.5 12M7.18403 15C8.38031 14.2222 9.45475 13.3136 10.3808 12.2972C10.4603 12.21 10.5 12.105 10.5 12M7.18403 9C8.38031 9.77778 9.45475 10.6864 10.3808 11.7028C10.4603 11.79 10.5 11.895 10.5 12M10.5 12L3.5 12M12.5 5V19"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
