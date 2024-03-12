import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.5 8.25v8l7-4zm12-4h-7.58L16.21.96 15.5.25l-4 4h-.03l-4-4-.69.71 3.28 3.29H2.5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2m0 14h-18v-12h18z"
      fill="#F7FFFB"
    />
  </svg>
);
export default SVGComponent;
