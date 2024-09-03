"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
    className="bg-[url('/home/background-home-desktop.jpg')]"
    // className={`bg-cover bg-[url('/${path}/background-${path}-mobile.jpg')] md:bg-[url('/${path}/background-${path}-tablet.jpg')] lg:bg-[url('/${path}/background-${path}-desktop.jpg')]`}
    >
      <Section>
        <Containera>
          <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            {children}
          </div>
        </Containera>
      </Section>
    </main>
  );
};

export default Template;
