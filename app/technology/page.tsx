import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";
import React from "react";

const Technology = () => {
  return (
    <Section clasaName="bg-cover bg-[url('/technology/background-technology-mobile.jpg')] md:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')] h-[100vh]">
      <Containera className="text-white">technology</Containera>
    </Section>
  );
};

export default Technology;
