import MainTage from "@/components/MainTage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology page",
};

export default function Technology() {
  return (
    <MainTage className="bg-[url('/technology/background-technology-mobile.jpg')] md:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')]">
      <h1>Technology page</h1>
    </MainTage>
  );
}
