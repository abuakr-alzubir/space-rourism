import { Containera } from "@/components/Containera";
import { Section } from "@/components/Section";
export default function Home() {
  return (
    <Section clasaName="bg-[url('/home/background-home-desktop.jpg')] h-[100vh]">
      <Containera className="text-white">home</Containera>
    </Section>
  );
}
