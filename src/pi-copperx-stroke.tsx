import type { JSX } from "react";

export function PiCopperxStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M20.6468 9C19.4049 5.42012 16.0026 2.8501 12 2.8501C6.94657 2.8501 2.84998 6.94669 2.84998 12.0001C2.84998 17.0535 6.94657 21.1501 12 21.1501C16.0026 21.1501 19.4049 18.5801 20.6468 15.0002M13 12.0001C13 12.5524 12.5523 13.0001 12 13.0001C11.4477 13.0001 11 12.5524 11 12.0001C11 11.4478 11.4477 11.0001 12 11.0001C12.5523 11.0001 13 11.4478 13 12.0001Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
