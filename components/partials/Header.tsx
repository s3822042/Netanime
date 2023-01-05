import React, { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/utils/helper";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [navVisible, setNavVisible] = useState(false);
  const router = useRouter();
  const navItems: NavItem[] = [
    { href: "/browse", label: "Browse", active: router.pathname === "/browse" },
    { href: "/search", label: "Search", active: router.pathname === "/search" }
  ];

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  return (
    <nav className="bg-gray-800 px-4 py-3 flex items-center justify-between">
      <Link href="/">
        <p className="font-bold text-xl text-white">Netanime</p>
      </Link>
      <button
        className="block md:hidden border-none bg-gray-800 hover:bg-gray-700 focus:outline-none"
        onClick={toggleNav}>
        <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
          <path
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
        </svg>
      </button>
      <ul
        className={`hidden md:flex md:items-center md:justify-between w-full md:w-auto ${
          navVisible ? "" : "hidden"}`}>
        {navItems.map(item => (
          <li key={item.href} className="mt-1 md:mt-0 md:ml-4">
            <Link href={item.href}>
              <p className={`block mt-4 md:inline-block md:mt-0 mr-4 font-bold ${
                item.active ? "text-white active" : "text-gray-400"
              }`}>
                {item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

