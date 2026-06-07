import type { JSX } from "react";

export function PiAwardMedalDuoSolid(props: JSX.IntrinsicElements["svg"]) {
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
        d="M16.3653 14.4727L18 22.0002C13.7136 19.336 10.2864 19.336 6 22.0002L7.63465 14.4727"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 1C7.58172 1 4 4.58172 4 9C4 13.4183 7.58172 17 12 17C16.4183 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1Z"
        fill="currentcolor"
      />
    </svg>
  );
}
