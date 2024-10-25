"use client";

import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    {
      key: 1,
      name: "Projects",
      href: "/projects",
    },
    {
      key: 2,
      name: "Team",
      href: "/team",
    },
    {
      key: 3,
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="bg-zinc-900 shadow-sm backdrop-blur-2xl fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center px-4 py-5">
        {/* Logo Section */}
        <div>
          <Link href="/home">
            <img
              src="/logo2.png" // Update with your logo's path
              alt="Logo"
              className="w-auto h-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="mr-4 block cursor-pointer px-3 py-1.5 text-base text-white font-semibold hover:text-emerald-500 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={onToggleMenu}>
            {/* You can add a hamburger icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "top-16" : "-top-96"
          } absolute left-0 w-full bg-zinc-800 shadow-md transition-all duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
