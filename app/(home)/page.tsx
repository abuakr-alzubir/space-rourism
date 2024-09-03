import MainTage from "@/components/MainTage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
};

export default function Home() {
  return (
    <MainTage className="bg-[url('/home/background-home-mobile.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] ">
      <div className="flex max-w-lg mx-auto md:max-w-lg lg:justify-around lg:max-w-full md:mx-auto flex-col lg:flex-row p-4 md:justify-between gap-4 lg:gap-12 space-y-12 md:space-y-0 items-center">
        <div className="md:mb-16 lg:max-w-md">
          <p className="flex justify-center items-center flex-col gap-y-10 text-lg text-center text-blue-100">
            <span className="text-3xl">So, you want to travel to</span><span className="block text-9xl">{"Space".toUpperCase()}</span> Let’s face it; if you want to go to
            space, you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because we’ll
            give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white text-black w-64 h-64 rounded-full flex justify-center items-center text-5xl">Explore</div>
        </div>
      </div>
    </MainTage>
  );
}
