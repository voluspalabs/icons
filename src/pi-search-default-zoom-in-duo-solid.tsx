import type { JSX } from "react";

export function PiSearchDefaultZoomInDuoSolid(
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
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8483 18 13.5513 17.3723 14.9056 16.3198L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3198 14.9056C17.3723 13.5513 18 11.8483 18 10C18 5.58172 14.4183 2 10 2Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M10 13V10M10 10V7M10 10H7M10 10H13"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
