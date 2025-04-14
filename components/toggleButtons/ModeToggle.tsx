"use client";

import * as React from "react";
import { CogIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [ariaLabel, setAriaLabel] = React.useState("تغيير الثيم"); // Initial static value

  React.useEffect(() => {
    const getThemeLabel = () => {
      switch (theme) {
        case "light":
          return "تغيير الثيم إلى الوضع الداكن";
        case "dark":
          return "تغيير الثيم إلى الوضع الفاتح";
        case "system":
          return "تغيير الثيم إلى وضع النظام";
        default:
          return "تغيير الثيم";
      }
    };
    setAriaLabel(getThemeLabel());
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={ariaLabel}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-125" />
          <span className="sr-only">{ariaLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="rotate-0 scale-125 transition-all dark:-rotate-90 dark:text-white" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="transition-all dark:rotate-0 scale-125 dark:text-white text-black" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <CogIcon className="transition-all scale-125 dark:text-white/70 text-black/70" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
