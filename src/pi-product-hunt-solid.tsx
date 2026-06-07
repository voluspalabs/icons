import type { JSX } from "react";

export function PiProductHuntSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12.8125 12.625H11V9H12.8125C13.8135 9 14.625 9.81148 14.625 10.8125C14.625 11.8135 13.8135 12.625 12.8125 12.625Z"
        fill="currentcolor"
      />
      <path
        clipRule="evenodd"
        d="M1.84998 12.0001C1.84998 6.39441 6.39429 1.8501 12 1.8501C17.6057 1.8501 22.15 6.39441 22.15 12.0001C22.15 17.6058 17.6057 22.1501 12 22.1501C6.39429 22.1501 1.84998 17.6058 1.84998 12.0001ZM10 7C9.44772 7 9 7.44772 9 8V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V14.625H12.8125C14.9181 14.625 16.625 12.9181 16.625 10.8125C16.625 8.70691 14.9181 7 12.8125 7H10Z"
        fill="currentcolor"
        fillRule="evenodd"
      />
    </svg>
  );
}
