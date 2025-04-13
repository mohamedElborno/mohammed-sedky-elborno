import { NavparDataType } from "@/sanity/types";
import Link from "next/link";
import React from "react";

export const NavbarMobile = ({
  boolean,
  navbarData,
}: {
  boolean: boolean;
  navbarData: NavparDataType[];
}) => {
  return (
    <div
      className={`${!boolean ? "h-0 translation-all duration-300" : "md:hidden translation-all duration-300 top-16 h-40 w-full z-50 flex flex-col items-center justify-center mx-auto mt-2"}`}
    >
      <ul
        className={`${!boolean ? "absolute opacity-0" : "md:hidden flex opacity-100 flex-col items-center gap-4 delay-150 duration-200"}`}
      >
        {navbarData.map(
          (item: { link: string; title: string }, index: number) => (
            <li key={index} className={boolean ? "md:hidden" : "hidden"}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
