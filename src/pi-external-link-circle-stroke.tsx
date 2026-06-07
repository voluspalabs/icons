import type { JSX } from "react";

export function PiExternalLinkCircleStroke(
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
        d="M20.4741 13.5C20.1642 17.1412 17.1103 20 13.3889 20H12.5C8.08172 20 4.5 16.4183 4.5 12V11.1111C4.5 7.38961 7.35873 4.33581 11 4.02589M20.2597 9.45455C20.5221 7.8217 20.5697 6.16984 20.4019 4.54138C20.3898 4.42328 20.338 4.31854 20.2597 4.24027M20.2597 4.24027C20.1815 4.16201 20.0767 4.11023 19.9586 4.09806C18.3302 3.93025 16.6783 3.97792 15.0455 4.24027M20.2597 4.24027L10.5 14"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
