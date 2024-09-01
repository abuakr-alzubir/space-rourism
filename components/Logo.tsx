import React from "react";

type LogoData = {
  custom?: string;
  className?: string;
};

export const Logo = ({ custom, className }: LogoData) => {
  return (
    <div
      className={`bg-white rounded-full w-${custom} h-${custom} ${className}`}
    ></div>
  );
};
