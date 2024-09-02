"use client";

import React from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";

export default function Home() {
  const pathLink = usePathname().split("");
  const pathName = pathLink.filter((item) => item !== "/").join("") + "home";

  useEffect(() => {
    document.body.className = `bg-[url('/${pathName}/background-${pathName}-mobile.jpg')] md:bg-[url('/${pathName}/background-${pathName}-tablet.jpg')] lg:bg-[url('/${pathName}/background-${pathName}-desktop.jpg')] bg-cover`;
  }, [pathName]);

  return (
    <main>
      <Section>
        <Containera className="text-white">
          <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            <h1>CREW PAGE</h1>
          </div>
        </Containera>
      </Section>
    </main>
  );
}
