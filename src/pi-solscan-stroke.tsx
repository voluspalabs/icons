import type { JSX } from "react";

export function PiSolscanStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M19.8916 16.6358C21.8111 13.3687 21.5608 9.1121 18.9648 6.06543C15.6873 2.21898 9.91225 1.75771 6.0658 5.03517C2.21935 8.31262 1.75808 14.0877 5.03554 17.9341C7.63147 20.9808 11.7943 21.9037 15.3246 20.5272M16 12.0002C16 14.2093 14.2092 16.0002 12 16.0002C9.7909 16.0002 8.00004 14.2093 8.00004 12.0002C8.00004 9.79102 9.7909 8.00016 12 8.00016C14.2092 8.00016 16 9.79102 16 12.0002Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
