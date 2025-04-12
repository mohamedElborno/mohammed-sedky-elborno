"use client";
import React, { useEffect, useState } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import { useIntl } from "react-intl";
import { NavparDataType } from "@/sanity/types";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarData: NavparDataType[] = [
    {
      link: "/",
      title: intl.formatMessage({ id: "navigation.home" }),
    },
    {
      link: "/biography",
      title: intl.formatMessage({ id: "navigation.biography" }),
    },
    {
      link: "/books",
      title: intl.formatMessage({ id: "navigation.books" }),
    },
    {
      link: "/media",
      title: intl.formatMessage({ id: "navigation.media" }),
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 flex items-center z-50 w-full transition-all mx-auto ${scrolled ? "shadow-md max-w-[90%] mx-auto mt-5 rounded-3xl duration-300 min-h-16 bg-popover/30 backdrop-blur-lg bg-opacity-20 py-3 border-none" : "bg-opacity-0 backdrop-blur-lg min-h-20 border-b py-5"}`}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <NavbarDesktop
          navbarData={navbarData}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
        <NavbarMobile boolean={isOpen} navbarData={navbarData} />
      </div>
    </div>
  );
}
