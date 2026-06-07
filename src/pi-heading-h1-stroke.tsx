import type { JSX } from "react";

export function PiHeadingH1Stroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4.5 12H12.5M4.5 18V6M12.5 18V6M19.5 18V10C18.5376 10.2357 17.8022 10.8984 17.3657 11.7713M19.5 18H17M19.5 18H22"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
