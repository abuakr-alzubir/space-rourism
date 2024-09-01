import React from "react";

type ContaineraData = {
  children?: React.ReactNode;
  className?: string;
};

export const Containera = ({ children, className }: ContaineraData) => {
  return (
    <div className={`mx-auto px-4 pt-20 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};
