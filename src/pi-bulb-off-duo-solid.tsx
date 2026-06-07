import type { JSX } from "react";

export function PiBulbOffDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 3.99438C8.34306 3.99438 5.3125 6.85698 5.3125 10.4681C5.3125 12.4426 6.22588 14.2028 7.64758 15.3834C8.07681 15.7398 8.34196 16.1002 8.43495 16.4582L8.66232 17.3335C8.91639 18.3115 9.79926 18.9944 10.8098 18.9944H13.1902C14.2007 18.9944 15.0836 18.3115 15.3377 17.3335L15.5651 16.4582C15.658 16.1002 15.9232 15.7398 16.3524 15.3834C17.7741 14.2028 18.6875 12.4426 18.6875 10.4681C18.6875 6.85698 15.6569 3.99438 12 3.99438Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M10.3789 21H13.621"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
