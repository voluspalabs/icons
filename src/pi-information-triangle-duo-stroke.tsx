import type { JSX } from "react";

export function PiInformationTriangleDuoStroke(
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
        d="M13.3899 3.28373C12.5011 2.90542 11.4989 2.90542 10.6101 3.28373C7.95863 4.41217 1.69539 14.4218 1.87895 17.0972C1.9509 18.1459 2.47058 19.1112 3.30278 19.7421C5.51548 21.4193 18.4845 21.4193 20.6973 19.7421C21.5294 19.1112 22.0491 18.1459 22.1211 17.0972C22.3045 14.4218 16.0413 4.41217 13.3899 3.28373Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 12.3761V16.3761M12 9.00112V9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
