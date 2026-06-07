import type { JSX } from "react";

export function PiChevronSortVerticalContrast(
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
      <g opacity="0.28">
        <path
          d="M12.7979 5.1058C14.1929 6.22872 15.4379 7.53812 16.5 9C13.8371 8.80028 11.1629 8.80028 8.5 9C9.56206 7.53812 10.8071 6.22872 12.2021 5.1058C12.3774 4.96473 12.6226 4.96473 12.7979 5.1058Z"
          fill="currentcolor"
        />
        <path
          d="M12.2021 18.8942C10.8071 17.7713 9.56206 16.4619 8.5 15C11.1629 15.1997 13.8371 15.1997 16.5 15C15.4379 16.4619 14.1929 17.7713 12.7979 18.8942C12.6226 19.0353 12.3774 19.0353 12.2021 18.8942Z"
          fill="currentcolor"
        />
      </g>
      <path
        d="M12.7979 5.1058C14.1929 6.22872 15.4379 7.53812 16.5 9C13.8371 8.80028 11.1629 8.80028 8.5 9C9.56206 7.53812 10.8071 6.22872 12.2021 5.1058C12.3774 4.96473 12.6226 4.96473 12.7979 5.1058Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12.2021 18.8942C10.8071 17.7713 9.56206 16.4619 8.5 15C11.1629 15.1997 13.8371 15.1997 16.5 15C15.4379 16.4619 14.1929 17.7713 12.7979 18.8942C12.6226 19.0353 12.3774 19.0353 12.2021 18.8942Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
