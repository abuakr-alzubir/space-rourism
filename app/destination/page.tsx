import DestComponent from "@/components/DestComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination page",
};

export default function Destination() {
  return (
    <div className="space-y-8 pt-12">
      <div className="flex gap-2 uppercase text-lg">
        <span className="text-neutral-600">01</span>
        <h2>pick your destination</h2>
      </div>
      <DestComponent />
    </div>
  );
}
