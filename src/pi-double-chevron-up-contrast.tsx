import type { JSX } from "react";

export function PiDoubleChevronUpContrast(props: JSX.IntrinsicElements["svg"]) {
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
          d="M12.2021 7.1058C10.8071 8.22872 9.56206 9.53812 8.5 11L12.5 10.7L16.5 11C15.4379 9.53812 14.1929 8.22872 12.7979 7.1058C12.6226 6.96473 12.3774 6.96473 12.2021 7.1058Z"
          fill="currentcolor"
        />
        <path
          d="M12.2021 13.1058C10.8071 14.2287 9.56206 15.5381 8.5 17L12.5 16.7L16.5 17C15.4379 15.5381 14.1929 14.2287 12.7979 13.1058C12.6226 12.9647 12.3774 12.9647 12.2021 13.1058Z"
          fill="currentcolor"
        />
      </g>
      <path
        d="M12.2021 7.1058C10.8071 8.22872 9.56206 9.53812 8.5 11L12.5 10.7L16.5 11C15.4379 9.53812 14.1929 8.22872 12.7979 7.1058C12.6226 6.96473 12.3774 6.96473 12.2021 7.1058Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12.2021 13.1058C10.8071 14.2287 9.56206 15.5381 8.5 17L12.5 16.7L16.5 17C15.4379 15.5381 14.1929 14.2287 12.7979 13.1058C12.6226 12.9647 12.3774 12.9647 12.2021 13.1058Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
