import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";
import React from "react";

const Destination = () => {
  return (
    <Section clasaName="bg-cover bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] h-[100vh]">
      <Containera className="text-white">background</Containera>
    </Section>
  );
};

export default Destination;
