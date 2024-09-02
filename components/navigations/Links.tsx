"use client"
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
        className={`flex  bg-[rgba(255,255,255,0.22)] w-[70%] items-center justify-center ${
          isTablet ? "py-12" : ""
        } ${
          isvertival
            ? "flex-col gap-y-4 text-neutral-950"
            : "flex-row gap-x-4 h-16 text-white"
        }`}
      >
        {links.map((link, i) => {
          return (
            <li
              key={link.name}
              className={`hover:bg-[rgba(193,253,255,0.1)] border-white py-4 px-1 ${
                pathName === link.href ? "border-b-4 border-white" : ""
              }`}
            >
              <Link href={link.href} onClick={onClick}>
                {hasNubering
                  ? `0${i + 1} ${link.name.toUpperCase()}`
                  : link.name.toUpperCase()}
              </Link>
            </li>
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
