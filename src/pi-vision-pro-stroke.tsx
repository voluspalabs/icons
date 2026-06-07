import type { JSX } from "react";

export function PiVisionProStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M11.9997 6.5C16.0874 6.49999 21.9088 6.64174 21.9767 12C22.0087 14.5242 20.8643 17.1718 18.0788 17.4753C15.504 17.7559 14.3937 15.0921 11.9997 15.0937C9.63493 15.0953 8.52613 17.7102 5.99973 17.4832C3.1772 17.2295 1.99066 14.5517 2.02298 12C2.09084 6.64182 7.91206 6.50001 11.9997 6.5Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
