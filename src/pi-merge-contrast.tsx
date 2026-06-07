import type { JSX } from "react";

export function PiMergeContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.8962 4.14485C14.2515 5.2706 15.463 6.57669 16.5 8.03089L14.4786 7.86368C13.8202 7.80921 13.1601 7.78198 12.5 7.78198C11.8399 7.78198 11.1798 7.80921 10.5214 7.86368L8.5 8.03089C9.53704 6.57669 10.7485 5.2706 12.1038 4.14485C12.22 4.04828 12.36 4 12.5 4C12.64 4 12.78 4.04828 12.8962 4.14485Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M12.5 7.78198V13L6.5 20M12.5 7.78198C13.1601 7.78198 13.8202 7.80921 14.4786 7.86368L16.5 8.03089C15.463 6.57669 14.2515 5.2706 12.8962 4.14485C12.78 4.04828 12.64 4 12.5 4C12.36 4 12.22 4.04828 12.1038 4.14485C10.7485 5.2706 9.53704 6.57669 8.5 8.03089L10.5214 7.86368C11.1798 7.80921 11.8399 7.78198 12.5 7.78198ZM18.5 20L15.0714 16"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
