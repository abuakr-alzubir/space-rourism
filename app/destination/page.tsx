"use client";
import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Destination = () => {
  const pathLink = usePathname().split("");
  const pathName = pathLink.filter((item) => item !== "/").join("");

  useEffect(() => {
    document.body.className = `bg-[url('/${pathName}/background-${pathName}-mobile.jpg')] md:bg-[url('/${pathName}/background-${pathName}-tablet.jpg')] lg:bg-[url('/${pathName}/background-${pathName}-desktop.jpg')] bg-cover`;
  }, [pathName]);
  return (
    <main>
      <Section>
        <Containera className="text-white">
          <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            <h1>DESTINATION PAGE</h1>
          </div>
        </Containera>
      </Section>
    </main>
  );
};

export default Destination;
