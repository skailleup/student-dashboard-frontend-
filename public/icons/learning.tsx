import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.20801" y="1.06" width="30.3333" height="30.88" fill="white"/>
        <rect x="1.20801" y="1.06" width="30.3333" height="30.88" stroke="#000E5C"/>
        <path d="M28.0413 9.44L12.0413 25.44L4.70801 18.1067L6.58801 16.2267L12.0413 21.6667L26.1613 7.56L28.0413 9.44Z" fill="#676767"/>
    </svg>    
);
export default SVGComponent;