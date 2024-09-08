import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
};

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-24 md:pt-8 items-center justify-center max-w-md text-center text-slate-200">
      <div>
        <p className="uppercase mb-4 text-2xl">So, you want to travel to</p>
        <h2 className="text-9xl uppercase mb-8 text-white md:text-[180px] ">Space</h2>
        <p className="text-xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex justify-center items-center w-[300px] h-[300px] text-black bg-white rounded-full uppercase text-5xl">
        Explore
      </div>
    </div>
  );
}
