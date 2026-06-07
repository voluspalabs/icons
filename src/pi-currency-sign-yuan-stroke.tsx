import type { JSX } from "react";

export function PiCurrencySignYuanStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M5 3L12 11.1M12 11.1L19 3M12 11.1V12M12 12V16M12 12H6M12 12H18M12 16V21M12 16H6M12 16H18"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
