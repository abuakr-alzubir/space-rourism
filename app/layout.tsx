import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationDesk } from "@/components/navigations/NavigationDesk";
import { NavigationTab } from "@/components/navigations/NavigationTab";
import { Navigation } from "@/components/navigations/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
        <NavigationDesk />
        <NavigationTab />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
