import React from "react";
import Link from "next/link";

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
  return (
    <div
      className={`${
        !isvertival
          ? "flex items-center justify-end"
          : ""
      }`}
    >
      {hasLine && (
        <div className="w-[38%] h-1 bg-[rgba(255,255,255,0.52)] mr-[-30px] z-10"></div>
      )}

      <ul
        className={`flex text-white bg-[rgba(255,255,255,0.22)] w-[70%] items-center justify-center ${
          isTablet ? "py-12" : ""
        } ${isvertival ? "flex-col gap-y-4 text-black" : "flex-row gap-x-4 h-16"}`}
      >
        {links.map((link, i) => (
          <li key={link.name}>
            <Link href={link.href} onClick={onClick}>
              {hasNubering
                ? `0${i + 1} ${link.name.toUpperCase()}`
                : link.name.toUpperCase()}
            </Link>
          </li>
        ))}
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
    href: "destination",
  },
  {
    name: "crew",
    href: "crew",
  },
  {
    name: "technology",
    href: "technology",
  },
];
