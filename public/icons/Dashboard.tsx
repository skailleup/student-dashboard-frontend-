import { SVGProps } from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3996 3.05C12.9773 1.98333 11.0218 1.98333 9.59955 3.05L2.72699 8.20442C1.62566 9.03042 1.02648 10.3647 1.1408 11.7366L1.77377 19.3322C1.94653 21.4053 3.6796 23 5.75995 23H18.2392C20.3195 23 22.0526 21.4053 22.2253 19.3322L22.8583 11.7366C22.9726 10.3647 22.3734 9.03042 21.2721 8.20442L14.3996 3.05ZM10.7996 4.65C11.5107 4.11667 12.4884 4.11667 13.1996 4.65L20.0721 9.80442C20.6228 10.2174 20.9224 10.8846 20.8652 11.5705L20.2322 19.1661C20.1459 20.2027 19.2793 21 18.2392 21H15.0864L15.2885 18.5744C15.4488 16.6503 13.9304 15 11.9996 15C10.0687 15 8.55027 16.6503 8.71062 18.5744L8.91275 21H5.75995C4.71977 21 3.85324 20.2027 3.76686 19.1661L3.13389 11.5705C3.07673 10.8846 3.37632 10.2174 3.92699 9.80442L10.7996 4.65ZM13.2954 18.4083L13.0794 21H10.9197L10.7037 18.4083C10.6405 17.6502 11.2388 17 11.9996 17C12.7603 17 13.3586 17.6502 13.2954 18.4083Z"
      fill="#F7FFFB"
    />
  </svg>
);
export default SVGComponent;
