"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksProps {
  onClick?: () => void;
  isvertival?: boolean;
  hasNubering?: boolean;
  hasLine?: boolean;
  isTablet?: boolean;
}

export const Links: React.FC<LinksProps> = ({
  onClick,
  isvertival = false,
  hasNubering = false,
  hasLine = false,
  isTablet = false,
}) => {
  const pathName = usePathname();

  return (
    <div className={`${!isvertival ? "flex items-center justify-end" : ""}`}>
      {hasLine && (
        <div className="w-[38%] h-1 bg-[rgba(255,255,255,0.52)] mr-[-30px] z-10"></div>
      )}

      <ul
        className={`flex text-center bg-[rgba(255,255,255,0.22)] w-[${hasLine? "70%" : "100%"}] items-center justify-center ${
          isTablet ? "py-12 w-[80%]" : ""
        } ${
          isvertival
            ? "flex-col gap-y-4 text-neutral-950"
            : "flex-row gap-x-4 h-16 text-black"
        }`}
      >
        {links.map((link, i) => {
          return (
            <Link key={link.name} href={link.href} onClick={onClick}>
              <li className={`hover:border-b-black hover:border-b-4 py-4 h-full px-2 ${
                  pathName === link.href ? "border-b-4 border-black" : ""
                } ${isvertival ? "hover:border-b-neutral-500 w-[50vw] hover:border-b-4 px-" : ""} ${
                  isvertival && pathName === link.href
                    ? "border-b-4 border-b-neutral-500 hover:border-b-4 hover:border-b-neutral-500"
                    : ""
                }`}
                >
                {hasNubering
                  ? `0${i + 1} ${link.name.toUpperCase()}`
                  : link.name.toUpperCase()}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "destination",
    href: "/destination",
  },
  {
    name: "crew",
    href: "/crew",
  },
  {
    name: "technology",
    href: "/technology",
  },
];
