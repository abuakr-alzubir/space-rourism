"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import BgHomeM from "../public/home/background-home-mobile.jpg";
import BgHomeT from "../public/home/background-home-tablet.jpg";
import BgHomeD from "../public/home/background-home-desktop.jpg";

const BgPages = () => {
  const pathName = usePathname();

  return (
    <>
      {/* home page backgrounds */}
      {pathName === "/" && (
        <div className="absolute top-0 left-0 -z-20">
          <Image
            priority
            src="/home/background-home-mobile.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover md:hidden"
          />
          <Image
            priority
            src="/home/background-home-tablet.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden md:block lg:hidden"
          />
          <Image
            priority
            src="/home/background-home-desktop.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden lg:block"
          />
        </div>
      )}

      {/* crew backgrounds */}
      {pathName === "/crew" && (
        <div className="absolute top-0 left-0 -z-20">
          <Image
            priority
            src="/crew/background-crew-mobile.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover md:hidden"
          />
          <Image
            priority
            src="/crew/background-crew-tablet.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden md:block lg:hidden"
          />
          <Image
            priority
            src="/crew/background-crew-desktop.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden lg:block"
          />
        </div>
      )}

      {/* destination backgrounds */}
      {pathName === "/destination" && (
        <div className="absolute top-0 left-0 -z-20">
          <Image
            priority
            src="/destination/background-destination-mobile.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover md:hidden"
          />
          <Image
            priority
            src="/destination/background-destination-tablet.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden md:block lg:hidden"
          />
          <Image
            priority
            src="/destination/background-destination-desktop.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden lg:block"
          />
        </div>
      )}
      {/* technology backgrounds */}
      {pathName === "/technology" && (
        <div className="absolute top-0 left-0 -z-20">
          <Image
            priority
            src="/technology/background-technology-mobile.jpg" 
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover md:hidden"
          />
          <Image
            priority
            src="/technology/background-technology-tablet.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden md:block lg:hidden"
          />
          <Image
            priority
            src="/technology/background-technology-desktop.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="page background"
            className="w-screen h-screen object-cover hidden lg:block"
          />
        </div>
      )}
    </>
  );
};

export default BgPages;

// const backgrounds = [
//   {
//     "/": {
//       mobile: "/home/background-home-mobile.jpg",
//       tablet: "/home/background-home-tablet.jpg",
//       desktop: "/home/background-home-desktop.jpg",
//     },
//   },
//   {
//     "/crew": {
//       mobile: "/crew/background-crew-mobile.jpg",
//       tablet: "/crew/background-crew-tablet.jpg",
//       desktop: "/crew/background-crew-desktop.jpg",
//     },
//   },
//   {
//     "/destination": {
//       mobile: "/destination/background-destination-mobile.jpg",
//       tablet: "/destination/background-destination-tablet.jpg",
//       desktop: "/destination/background-destination-desktop.jpg",
//     },
//   },
//   {
//     "/technology": {
//       mobile: "/technology/background-technology-mobile.jpg",
//       tablet: "/technology/background-technology-tablet.jpg",
//       desktop: "/technology/background-technology-desktop.jpg",
//     },
//   },
// ];
