"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
interface LinkProps {
  url: string;
  title: string;
}

interface NavLinkProps {
  link: LinkProps;
}
const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        className={`rounded p-1 ${
          pathname === link.url && "bg-black text-white"
        } `}
        href={link.url}
      >
        {link.title}
      </Link>
    </>
  );
};

export default NavLink;
