import type { JSX } from "react";

export function PiGlobeDuoStroke(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      aria-hidden="true"
      {...props}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.1501C17.0534 21.1501 21.15 17.0535 21.15 12.0001C21.15 6.94669 17.0534 2.8501 12 2.8501C6.94657 2.8501 2.84998 6.94669 2.84998 12.0001C2.84998 17.0535 6.94657 21.1501 12 21.1501Z"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.84998 12.0001H21.15M12 2.8501C14.2886 5.35569 15.5893 8.60731 15.66 12.0001C15.5893 15.3929 14.2886 18.6445 12 21.1501C9.7113 18.6445 8.41066 15.3929 8.33998 12.0001C8.41066 8.60731 9.7113 5.35569 12 2.8501Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
