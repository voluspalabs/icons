import type { JSX } from "react";

export function PiArrowRightUpContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M18.9089 6.43163C19.195 9.0205 19.1441 11.6413 18.7568 14.2286L14.7265 9.77353L10.2715 5.74331C12.8588 5.35593 15.4796 5.30505 18.0684 5.59114C18.2905 5.61568 18.4884 5.71476 18.6368 5.86323C18.7853 6.0117 18.8844 6.20955 18.9089 6.43163Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M14.7266 9.77353L18.7568 14.2286C19.1442 11.6413 19.195 9.0205 18.909 6.43163C18.8844 6.20955 18.7853 6.0117 18.6369 5.86323C18.4884 5.71476 18.2905 5.61568 18.0685 5.59114C15.4796 5.30505 12.8588 5.35593 10.2715 5.74331L14.7266 9.77353ZM14.7266 9.77353L5.90894 18.5912"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
