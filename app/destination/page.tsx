import DestComponent from "@/components/DestComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination page",
};

export default function Destination() {
  return (
    <div className="space-y-8 pt-4 md:pt-16">
      <div className="flex gap-2 uppercase text-xl text-slate-200 justify-center lg:justify-start">
        <span className="text-slate-500">01</span>
        <h2>pick your destination</h2>
      </div>
      <DestComponent />
    </div>
  );
}
