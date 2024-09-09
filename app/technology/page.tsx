import TechnologyComponents from "@/components/TechnologyComponents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology page",
};

export default function Technology() {
  return (
    <div>
      <div className="space-y-8 md:space-y-16 pt-4 md:pt-12">
        <div className="flex gap-4 items-center justify-center lg:justify-start text-lg text-slate-200">
          <span className="text-slate-400">03</span>
          <h2 className="uppercase tracking-wide">space launch 101</h2>
        </div>
        <TechnologyComponents />
      </div>
    </div>
  );
}
