import type { JSX } from "react";

export function PiArrowLeftDownContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M6.09114 17.5683C5.80505 14.9795 5.85593 12.3586 6.24331 9.77136L10.2735 14.2264L14.7286 18.2566C12.1413 18.644 9.5205 18.6949 6.93163 18.4088C6.70955 18.3843 6.5117 18.2852 6.36323 18.1367C6.21476 17.9883 6.11568 17.7904 6.09114 17.5683Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M10.2735 14.2264L6.24331 9.77138C5.85593 12.3587 5.80505 14.9795 6.09114 17.5683C6.11568 17.7904 6.21476 17.9883 6.36323 18.1367C6.5117 18.2852 6.70955 18.3843 6.93163 18.4088C9.5205 18.6949 12.1413 18.644 14.7286 18.2567L10.2735 14.2264ZM10.2735 14.2264L19.0912 5.40881"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
