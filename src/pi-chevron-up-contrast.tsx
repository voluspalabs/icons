import type { JSX } from "react";

export function PiChevronUpContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.2021 10.1058C10.8071 11.2287 9.56206 12.5381 8.5 14L12.5 13.6956L16.5 14C15.4379 12.5381 14.1929 11.2287 12.7979 10.1058C12.6226 9.96473 12.3774 9.96473 12.2021 10.1058Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.2021 10.1058C10.8071 11.2287 9.56206 12.5381 8.5 14C11.1628 13.7974 13.8372 13.7974 16.5 14C15.4379 12.5381 14.1929 11.2287 12.7979 10.1058C12.6226 9.96473 12.3774 9.96473 12.2021 10.1058Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
