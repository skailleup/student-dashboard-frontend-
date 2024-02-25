import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    cursor={"pointer"}
    fill={props.fill || "none"}
    onClick={props.onClick}
  >
    <path
      d="M5.218 13.983a1 1 0 1 1-1.711 1.034 14 14 0 0 1-.844-1.625 1.85 1.85 0 0 1 .084-1.642c.432-.77 1.521-2.55 3.2-4.15 1.675-1.596 4.032-3.1 6.977-3.1 2.944 0 5.3 1.504 6.976 3.1 1.679 1.6 2.768 3.38 3.2 4.15.282.505.316 1.107.084 1.642a14 14 0 0 1-.844 1.625 1 1 0 0 1-1.711-1.034 12 12 0 0 0 .69-1.319c-.405-.715-1.366-2.252-2.799-3.616-1.48-1.41-3.367-2.548-5.596-2.548S8.806 7.638 7.327 9.048c-1.433 1.364-2.394 2.901-2.8 3.616.138.31.365.778.691 1.319"
      fill="#676767"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.924 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      fill="#676767"
    />
  </svg>
);
export default SVGComponent;
