import type { JSX } from "react";

export function PiMicOffContrast(props: JSX.IntrinsicElements["svg"]) {
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
        d="M8 7V12C8 13.1046 8.44772 14.1046 9.17157 14.8284L16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7Z"
        fill="currentcolor"
        opacity="0.28"
      />
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20M12 20V22M12 20C11.2765 20 10.5755 19.904 9.90897 19.724M6.34315 17.6569L2 22M6.34315 17.6569C4.89543 16.2091 4 14.2091 4 12M6.34315 17.6569L9.17157 14.8284M9.17157 14.8284C8.44772 14.1046 8 13.1046 8 12V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8M9.17157 14.8284L16 8M22 2L16 8M15.7092 13.5C15.3034 14.5027 14.5027 15.3034 13.5 15.7092"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
