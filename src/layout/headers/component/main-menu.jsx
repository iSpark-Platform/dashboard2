"use client";
import React from "react";
import menu_data from "../menu-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="mainmenu flex gap-6">
      {menu_data.map((menu, i) => {
        
        // ✅ Check active route
        const isActive =
          pathname === menu.link ||
          menu?.submenus?.some((item) => item.link === pathname);

        return (
          <li
            key={i}
            className={`relative ${
              menu.title === "About" ? "has-droupdown" : ""
            }`}
          >
            <Link
              href={menu.link}
              className={`cursor-pointer transition-all duration-300 ${
                isActive
                  ? "text-blue-600 font-semibold underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {menu.title}
            </Link>

            {/* Dropdown Menu */}
            {!menu.mega_menu && menu.submenus && (
              <ul className="submenu absolute hidden group-hover:block bg-white shadow-lg p-2 rounded-md">
                {menu.submenus.map((nav, j) => {
                  const subActive = pathname === nav.link;
                  return (
                    <li key={j}>
                      <Link
                        href={nav.link}
                        className={`block px-4 py-2 text-sm ${
                          subActive
                            ? "text-blue-600 font-semibold bg-gray-100"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {nav.title}
                        {nav?.hot && <span className="badge-1 ml-1">hot</span>}
                        {nav?.new && <span className="badge ml-1">new</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
