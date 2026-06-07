import type { JSX } from "react";

export function PiGlobeDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 1.8501C6.39429 1.8501 1.84998 6.39441 1.84998 12.0001C1.84998 17.6058 6.39429 22.1501 12 22.1501C17.6057 22.1501 22.15 17.6058 22.15 12.0001C22.15 6.39441 17.6057 1.8501 12 1.8501Z"
        fill="currentcolor"
        opacity="0.28"
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
