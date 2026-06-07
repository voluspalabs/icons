import type { JSX } from "react";

export function PiListHeartStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M4 12H10M4 18H10M4 6H20M17.7143 18.3269C17.3429 18.3269 14 16.5214 14 13.9937C14 12.7299 15.1143 11.8271 16.2286 11.8271C16.7761 11.8271 17.3429 12.0077 17.7143 12.5493C18.0857 12.0077 18.6429 11.8193 19.2 11.8271C20.3143 11.8428 21.4286 12.7299 21.4286 13.9937C21.4286 16.5214 18.0857 18.3269 17.7143 18.3269Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
