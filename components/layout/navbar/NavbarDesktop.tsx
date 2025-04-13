import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BurgerMenu } from "./BurgerMenu";
import { ModeToggle } from "@/components/toggleButtons/ModeToggle";
import LanguageChanger from "@/components/toggleButtons/LanguageChanger";
import { NavparDataType } from "@/sanity/types";

export const NavbarDesktop = ({
  isOpen,
  toggleMenu,
  navbarData,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  navbarData: NavparDataType[];
}) => {
  return (
    <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full text-lg font-normal">
      <Link href="/" className="mx-6 md:mx-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="dark:invert h-10 w-auto hover:scale-105 hover:drop-shadow transition-all duration-300"
        />
      </Link>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-8">
          {navbarData.map(
            (item: { link: string; title: string }, index: number) => (
              <li
                className="hover:text-zinc-600 transition duration-100"
                key={index}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex items-center space-x-2 mx-6 gap-3 sm:gap-4">
        <div className="flex items-center space-x-2 gap-1 sm:gap-2">
          <LanguageChanger />
          <ModeToggle />
        </div>
        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};
