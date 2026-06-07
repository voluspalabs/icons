import type { JSX } from "react";

export function PiChevronSortVerticalStroke(
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
        d="M16.5 9C15.4379 7.53812 14.1929 6.22872 12.7979 5.1058C12.6226 4.96473 12.3774 4.96473 12.2021 5.1058C10.8071 6.22872 9.56206 7.53812 8.5 9M8.5 15C9.56206 16.4619 10.8071 17.7713 12.2021 18.8942C12.3774 19.0353 12.6226 19.0353 12.7979 18.8942C14.1929 17.7713 15.4379 16.4619 16.5 15"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
