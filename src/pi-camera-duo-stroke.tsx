import type { JSX } from "react";

export function PiCameraDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M22.5 13V11C22.5 8.19974 22.5 6.79961 21.955 5.73005C21.4757 4.78924 20.7108 4.02433 19.77 3.54497C18.7004 3 17.3003 3 14.5 3H10.5C7.69974 3 6.29961 3 5.23005 3.54497C4.28924 4.02433 3.52433 4.78924 3.04497 5.73005C2.5 6.79961 2.5 8.19974 2.5 11V13C2.5 15.8003 2.5 17.2004 3.04497 18.27C3.52433 19.2108 4.28924 19.9757 5.23005 20.455C6.29961 21 7.69974 21 10.5 21H14.5C17.3003 21 18.7004 21 19.77 20.455C20.7108 19.9757 21.4757 19.2108 21.955 18.27C22.5 17.2004 22.5 15.8003 22.5 13Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16.5 12C16.5 14.2091 14.7091 16 12.5 16C10.2909 16 8.5 14.2091 8.5 12C8.5 9.79086 10.2909 8 12.5 8C14.7091 8 16.5 9.79086 16.5 12Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
