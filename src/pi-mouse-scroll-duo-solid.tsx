import type { JSX } from "react";

export function PiMouseScrollDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 2C8.08172 2 4.5 5.58172 4.5 10V14C4.5 18.4183 8.08172 22 12.5 22C16.9183 22 20.5 18.4183 20.5 14V10C20.5 5.58172 16.9183 2 12.5 2Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M14.5 14.4998C14.0065 15.1578 13.434 15.7521 12.7957 16.2693C12.7094 16.3392 12.6047 16.3742 12.5 16.3742C12.3953 16.3742 12.2906 16.3392 12.2043 16.2693C11.566 15.7521 10.9935 15.1578 10.5 14.4998M14.5 9.49984C14.0065 8.84185 13.434 8.24764 12.7957 7.73042C12.7094 7.66046 12.6047 7.62549 12.5 7.62549C12.3953 7.62549 12.2906 7.66046 12.2043 7.73042C11.566 8.24764 10.9935 8.84185 10.5 9.49984"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
