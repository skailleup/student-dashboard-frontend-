import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M50 10H10c-2.75 0-4.975 2.25-4.975 5L5 45c0 2.75 2.25 5 5 5h20v-5H10V20l20 12.5L50 20v12.5h5V15c0-2.75-2.25-5-5-5M30 27.5 10 15h40zM43.35 55l-8.85-8.85 3.525-3.525 5.3 5.3 10.6-10.6L57.5 40.85z"
      fill="#000"
    />
  </svg>
);
export default SVGComponent;
