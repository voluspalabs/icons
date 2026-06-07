import type { JSX } from "react";

export function PiScissorsDefaultDuoStroke(
  props: JSX.IntrinsicElements["svg"]
) {
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
        d="M20.8993 3.00024L12.4997 11.3998M12.4997 11.3998L4.1001 3.00024M12.4997 11.3998L15.9543 14.8544M12.4997 11.3998L9.04505 14.8544"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.9 17.4002C14.9 16.4454 15.2793 15.5297 15.9545 14.8545C16.6296 14.1793 17.5453 13.8 18.5001 13.8C19.4549 13.8 20.3707 14.1793 21.0458 14.8545C21.721 15.5297 22.1003 16.4454 22.1003 17.4002C22.1003 18.355 21.721 19.2707 21.0458 19.9458C20.3707 20.621 19.4549 21.0003 18.5001 21.0003C17.5453 21.0003 16.6296 20.621 15.9545 19.9458C15.2793 19.2707 14.9 18.355 14.9 17.4002Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6.49954 13.8C7.45435 13.8 8.37006 14.1793 9.04521 14.8545C9.72036 15.5297 10.0997 16.4454 10.0997 17.4002C10.0997 18.355 9.72036 19.2707 9.04521 19.9458C8.37006 20.621 7.45435 21.0003 6.49954 21.0003C5.54473 21.0003 4.62902 20.621 3.95387 19.9458C3.27871 19.2707 2.89941 18.355 2.89941 17.4002C2.89941 16.4454 3.27871 15.5297 3.95387 14.8545C4.62902 14.1793 5.54472 13.8 6.49954 13.8Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
