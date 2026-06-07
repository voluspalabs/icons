import type { JSX } from "react";

export function PiThreeDotsMenuVerticalCircleContrast(
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
        d="M12.0006 21.1496C17.054 21.1496 21.1506 17.053 21.1506 11.9996C21.1506 6.9462 17.054 2.84961 12.0006 2.84961C6.94718 2.84961 2.85059 6.9462 2.85059 11.9996C2.85059 17.053 6.94718 21.1496 12.0006 21.1496Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.0006 7.99951V8.00951M12.0006 11.9995V12.0095M12.0006 15.9995V16.0095M21.1506 11.9996C21.1506 17.053 17.054 21.1496 12.0006 21.1496C6.94718 21.1496 2.85059 17.053 2.85059 11.9996C2.85059 6.9462 6.94718 2.84961 12.0006 2.84961C17.054 2.84961 21.1506 6.9462 21.1506 11.9996Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
