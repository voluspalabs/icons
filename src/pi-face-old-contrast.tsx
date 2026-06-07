import type { JSX } from "react";

export function PiFaceOldContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M8.38574 10.0049L9.61447 9.14453M14.3853 9.14453L15.614 10.0049M8.4292 14.5C9.33666 15.4257 10.6012 16 11.9999 16C13.3986 16 14.6632 15.4257 15.5706 14.5M12.0001 21.1506C6.94669 21.1506 2.8501 17.054 2.8501 12.0006C2.8501 6.94718 6.94669 2.85059 12.0001 2.85059C17.0535 2.85059 21.1501 6.94718 21.1501 12.0006C21.1501 17.054 17.0535 21.1506 12.0001 21.1506Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
