import React from "react";

type SectionData = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Section = ({ id, className, children }: SectionData) => {
  return (
    <section id={id} className={`py-6 md:py-9 lg:py-12 ${className}`}>
      {children}
    </section>
  );
};
