import type { JSX } from "react";

export function PiAcLeafDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 3C2.34315 3 1 4.34315 1 6V12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12V6C23 4.34315 21.6569 3 20 3H4Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M18 8H16M14.8021 22L14.8424 21.8903C15.2847 20.6838 16.0952 19.647 17.1592 18.9265M16.6767 16.0715C15.2045 16.9215 14.6523 18.7213 15.2936 19.832C15.9348 20.9427 17.7696 21.3643 19.2418 20.5144C20.714 19.6644 22.2784 16.5397 21.9578 15.9844C21.6372 15.429 18.1489 15.2215 16.6767 16.0715Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
