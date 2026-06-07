import type { JSX } from "react";

export function PiArrowRightDownContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M18.9089 17.5684C19.195 14.9796 19.1441 12.3588 18.7568 9.77148L14.7265 14.2265L10.2715 18.2568C12.8588 18.6441 15.4796 18.695 18.0684 18.4089C18.2905 18.3844 18.4884 18.2853 18.6368 18.1368C18.7853 17.9884 18.8844 17.7905 18.9089 17.5684Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M14.7266 14.2266L18.7568 9.7715C19.1442 12.3588 19.195 14.9796 18.909 17.5685C18.8844 17.7905 18.7853 17.9884 18.6369 18.1369C18.4884 18.2853 18.2905 18.3844 18.0685 18.4089C15.4796 18.695 12.8588 18.6442 10.2715 18.2568L14.7266 14.2266ZM14.7266 14.2266L5.90894 5.40894"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
