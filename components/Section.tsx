import React from "react";

type SectionData = {
  id?: string;
  clasaName?: string;
  children?: React.ReactNode;
};

export const Section = ({ id, clasaName, children }: SectionData) => {
  return (
    <section id={id} className={`py-6 md:py-9 lg:py-12 ${clasaName}`}>
      {children}
    </section>
  );
};
