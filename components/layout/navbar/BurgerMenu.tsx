import React from "react";

export const BurgerMenu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const menuLabel = isOpen
    ? "menü kapat | القائمة مغلقة"
    : "menü açık | القائمة مفتوحة";
  return (
    <div className="flex lg:hidden items-center">
      <button
        className="flex flex-col space-y-1"
        onClick={toggleMenu}
        aria-label={menuLabel}
      >
        <span
          className={`w-6 h-[2px] rounded-full bg-black dark:bg-white transition-all duration-300 ${
            isOpen
              ? `rotate-[45deg] transition-all duration-300 translate-y-[3px] bg-red-900`
              : ``
          }`}
        ></span>
        <span
          className={
            isOpen
              ? `hidden transition-all duration-300`
              : `w-6 h-[2px] rounded-full bg-black dark:bg-white transition-all duration-300`
          }
        ></span>
        <span
          className={`w-6 h-[2px] rounded-full bg-black dark:bg-white transition-all duration-300 ${
            isOpen
              ? `rotate-[-45deg] transition-all duration-300 -translate-y-[3px] bg-red-900`
              : ``
          }`}
        ></span>
      </button>
    </div>
  );
};
