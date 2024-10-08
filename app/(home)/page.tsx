import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home page",
};

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-12 pt-8 md:pt-16 items-center justify-center lg:justify-between text-center text-slate-200">
      <div className="max-w-lg">
        <p className="uppercase mb-4 text-2xl">So, you want to travel to</p>
        <h2 className="text-8xl uppercase mb-8 text-white md:text-[150px] ">
          Space
        </h2>
        <p className="text-xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link href='/destination'>
        <div className="flex justify-center items-center w-[200px] md:w-[250px] h-[200px] md:h-[250px] text-black bg-white rounded-full uppercase text-3xl md:text-5xl ">
          Explore
        </div>
      </Link>
    </div>
  );
}
