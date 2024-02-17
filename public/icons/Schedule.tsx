import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H18C20.2091 3 22 4.79086 22 7V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V7C2 4.79086 3.79086 3 6 3H7V2C7 1.44772 7.44772 1 8 1ZM15 5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5H18C19.1046 5 20 5.89543 20 7V7.5H4V7C4 5.89543 4.89543 5 6 5H7C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5H15ZM20 9.5H4V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V9.5Z"
      fill="#F7FFFB"
    />
  </svg>
);
export default SVGComponent;
