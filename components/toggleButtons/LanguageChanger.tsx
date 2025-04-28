"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Languages } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function LanguageChanger() {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const handleChange = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild value={currentLocale}>
        <Button
          variant="ghost"
          size="icon"
          aria-label={
            currentLocale === "ar"
              ? "تغيير اللغة إلى العربية"
              : currentLocale === "tr"
                ? "Dili Türkçe'ye Değiştir"
                : "تغيير اللغة"
          }
        >
          <Languages className="scale-125" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {i18nConfig.locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => handleChange(locale)}>
            {locale === "ar" ? "العربية" : ""}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  {locale === "tr" && (
                    <div className="flex items-center gap-2">Türkçe</div>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="mt-1 bg-popover text-popover-foreground border"
                >
                  <p>Çeviri yapay zeka ile yapılmıştır.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
