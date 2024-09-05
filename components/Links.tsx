'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/utils/cn";

interface LinkdData{
    onClick?: ()=> void;
    isVertical?: boolean;
}

const Links:React.FC<LinkdData> = ({onClick, isVertical=false}) => {
    const pathName = usePathname();

  return (
    <>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          onClick={onClick}
          className={cn(
            `flex items-center gap-x-1 pt-4 lg:pt-0 uppercase h-[20vh] lg:h-[10vh] ${isVertical? "h-16 pb-1" : ""} ${
              pathName === link.href ? "border-b border-white" : ""
            }`
          )}
        >
          <span>{link.number}</span>
          <span>{link.lable}</span>
        </Link>
      ))}
    </>
  );
};

export default Links;

const links = [
  { href: "/", lable: "home", number: "01" },
  { href: "/crew", lable: "crew", number: "02" },
  { href: "/destination", lable: "desctination", number: "03" },
  { href: "/technology", lable: "technology", number: "04" },
];
