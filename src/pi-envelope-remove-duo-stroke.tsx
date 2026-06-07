import type { JSX } from "react";

export function PiEnvelopeRemoveDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.5 19.9999H10.5C7.69974 19.9999 6.29961 19.9999 5.23005 19.4549C4.28924 18.9756 3.52433 18.2107 3.04497 17.2698C2.5 16.2003 2.5 14.8002 2.5 11.9999C2.5 10.0058 2.5 8.72178 2.69678 7.76147M22.3032 7.76147C22.5 8.72178 22.5 10.0058 22.5 11.9999C22.5 13.8334 22.5 15.0667 22.347 15.9999"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16.5 20H22.5M10.5 4H14.5C17.3003 4 18.7004 4 19.77 4.54497C20.7108 5.02433 21.4757 5.78924 21.955 6.73005C22.1119 7.03798 22.2237 7.37332 22.3032 7.76159L16.795 11.2668C15.2385 12.2573 14.4602 12.7526 13.6238 12.9455C12.8843 13.1161 12.1157 13.1161 11.3762 12.9455C10.5398 12.7526 9.76153 12.2573 8.20499 11.2668L2.69678 7.76159C2.77634 7.37332 2.88807 7.03798 3.04497 6.73005C3.52433 5.78924 4.28924 5.02433 5.23005 4.54497C6.29961 4 7.69974 4 10.5 4Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
