import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import BgPages from "@/components/BgPages";
import Navigation from "@/components/Navigation";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space tourism",
  description: "space tourism description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className=" relative text-white flex flex-col justify-between h-screen w-screen">
          <BgPages />
          <Navigation />
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
