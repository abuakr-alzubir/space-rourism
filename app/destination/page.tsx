import MainTage from "@/components/MainTage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination page",
};

export default function Destination() {
  return (
    <MainTage className="bg-[url('/destination/background-destination-mobile.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')]">
      <h1>distination</h1>
    </MainTage>
  );
}
