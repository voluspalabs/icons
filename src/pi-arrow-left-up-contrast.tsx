import type { JSX } from "react";

export function PiArrowLeftUpContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6.09114 6.43163C5.80505 9.0205 5.85593 11.6413 6.24331 14.2286L10.2735 9.77353L14.7286 5.74331C12.1413 5.35593 9.5205 5.30505 6.93163 5.59114C6.70955 5.61568 6.5117 5.71476 6.36323 5.86323C6.21476 6.0117 6.11568 6.20955 6.09114 6.43163Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M10.2735 9.77353L6.24331 14.2286C5.85593 11.6413 5.80505 9.0205 6.09114 6.43163C6.11568 6.20955 6.21476 6.0117 6.36323 5.86323C6.5117 5.71476 6.70955 5.61568 6.93163 5.59114C9.5205 5.30505 12.1413 5.35593 14.7286 5.74331L10.2735 9.77353ZM10.2735 9.77353L19.0912 18.5912"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
