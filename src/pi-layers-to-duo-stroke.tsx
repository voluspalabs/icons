import type { JSX } from "react";

export function PiLayersToDuoStroke(props: JSX.IntrinsicElements["svg"]) {
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
        d="M14.903 4.77452L7.86685 6.16875C6.55622 6.42875 5.60622 7.59187 5.5981 8.94812L5.54952 16.2346M14.903 4.77452L15.1087 4.73375C16.8487 4.38875 18.4637 5.75 18.4518 7.5525L18.4504 7.76527M14.903 4.77452L14.9044 4.55993C14.9157 2.75806 13.3007 1.39619 11.5607 1.74119L4.31881 3.17681C3.00819 3.43618 2.05881 4.59993 2.05006 5.95743L2.00007 13.4562C1.98819 15.2587 3.60319 16.6205 5.34318 16.2755L5.54952 16.2346M5.54952 16.2346L5.5481 16.4494C5.53623 18.2512 7.15122 19.6125 8.89122 19.2681L9.09702 19.2273"
        opacity="0.28"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M11.415 9.16021C10.1044 9.42021 9.15501 10.5827 9.14626 11.9402L9.09564 19.4405C9.08458 21.2422 10.6995 22.6039 12.4394 22.2589L19.6812 20.8233C20.9919 20.5639 21.9412 19.4008 21.95 18.0433L22 10.5433C22.0119 8.74146 20.3969 7.37959 18.6569 7.72459L11.415 9.16021Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
