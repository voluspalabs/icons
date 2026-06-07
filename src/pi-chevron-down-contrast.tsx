import type { JSX } from "react";

export function PiChevronDownContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.2021 13.8942C10.8071 12.7713 9.56206 11.4619 8.5 10L12.5 10.3044L16.5 10C15.4379 11.4619 14.1929 12.7713 12.7979 13.8942C12.6226 14.0353 12.3774 14.0353 12.2021 13.8942Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.2021 13.8942C10.8071 12.7713 9.56206 11.4619 8.5 10L12.5 10.3044L16.5 10C15.4379 11.4619 14.1929 12.7713 12.7979 13.8942C12.6226 14.0353 12.3774 14.0353 12.2021 13.8942Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
