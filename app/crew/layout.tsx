import Template from "@/components/Template";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "crew page",
};

export default function CrewLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <Template>
      {children}
    </Template>
  )
}
