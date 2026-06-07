import type { JSX } from "react";

export function PiTiktokStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M19.5444 7.55556C17.4633 7.2087 15.6955 5.83992 14.8386 3.91194L13.9889 2V17.5556C13.9889 20.0102 11.999 22 9.54442 22C7.08982 22 5.09998 20.0102 5.09998 17.5556C5.09998 15.101 7.08982 13.1111 9.54442 13.1111"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
