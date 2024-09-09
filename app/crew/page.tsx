import CrewComponent from "@/components/CrewComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew page",
};

export default function Crew() {
  return (
<div className="space-y-8 pt-4 md:pt-16">
  <div className="flex gap-2 uppercase text-xl text-slate-200 justify-center lg:justify-normal">
    <span className="text-slate-500">02</span>
    <h2>meet your crew</h2>
  </div>
  <CrewComponent />

</div>
  );
}
