import type { JSX } from "react";

export function PiTextCursorStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8.5 22C9.42997 22 9.89496 22 10.2765 21.8978C11.3117 21.6204 12.1204 20.8117 12.3978 19.7765C12.5 19.395 12.5 18.93 12.5 18M12.5 18C12.5 18.93 12.5 19.395 12.6022 19.7765C12.8796 20.8117 13.6883 21.6204 14.7235 21.8978C15.105 22 15.57 22 16.5 22M12.5 18L12.5 12M8.5 2C9.42997 2 9.89496 2 10.2765 2.10222C11.3117 2.37962 12.1204 3.18827 12.3978 4.22354C12.5 4.60504 12.5 5.07003 12.5 6M12.5 6C12.5 5.07003 12.5 4.60504 12.6022 4.22354C12.8796 3.18827 13.6883 2.37962 14.7235 2.10222C15.105 2 15.57 2 16.5 2M12.5 6L12.5 12M12.5 12H14.5085M12.5 12H10.5"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
