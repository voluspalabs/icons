import type { JSX } from "react";

export function PiDoubleChevronDownStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.5 13C9.56206 14.4619 10.8071 15.7713 12.2021 16.8942C12.3774 17.0353 12.6226 17.0353 12.7979 16.8942C14.1929 15.7713 15.4379 14.4619 16.5 13M8.5 7C9.56206 8.46188 10.8071 9.77128 12.2021 10.8942C12.3774 11.0353 12.6226 11.0353 12.7979 10.8942C14.1929 9.77128 15.4379 8.46188 16.5 7"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
