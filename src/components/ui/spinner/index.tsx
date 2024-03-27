import React from "react";

interface LoadingSpinnerProps {
  type?: "primary" | "secondary";
}

export default function LoadingSpinner({ type = "primary" }: LoadingSpinnerProps) {
  return (
    <div
      className={`inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-[${
        type === "primary" ? "#f7fffb" : "#000e5c"
      }] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
