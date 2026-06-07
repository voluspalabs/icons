import type { JSX } from "react";

export function PiListCheckDoubleStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M12 12H21M12 18H21M12 6L21 6M3 8.10466L4.89736 10C5.80992 8.40431 7.07282 7.0366 8.59087 6M3 16.1047L4.89736 18C5.80992 16.4043 7.07282 15.0366 8.59087 14"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
