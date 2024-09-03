import MainTage from "@/components/MainTage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew page",
};

export default function Crew() {
  return (
    <MainTage className="bg-[url('/crew/background-crew-mobile.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')]">
      <h1>crew page</h1>
    </MainTage>
  );
}
