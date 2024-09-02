"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathUrl = usePathname();
  const path =
    pathUrl
      .split("")
      .filter((item) => item !== "/")
      .join("") === ""
      ? "home"
      : pathUrl
          .split("")
          .filter((item) => item !== "/")
          .join("");

  console.log(path);

  // const [path, setPath] = React.useState("home");

  // const paths = pathUrl
  //   .split("")
  //   .filter((item) => item !== "/")
  //   .join("");

  // let [last, setLast] = React.useState("");

  // useEffect(() => {

  // if (pathUrl !== "/") {
  //   setPath(
  //     pathUrl
  //       .split("")
  //       .filter((item) => item !== "/")
  //       .join("")
  //   );
  // } else {
  //   setPath("home");
  // }
  // }, [pathUrl]);

  return (
    <main
    className={`bg-cover bg-[url('/${path}/background-${path}-mobile.jpg')] md:bg-[url('/${path}/background-${path}-tablet.jpg')] lg:bg-[url('/${path}/background-${path}-desktop.jpg')]`}
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
