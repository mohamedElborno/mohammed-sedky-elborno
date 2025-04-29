"use client";
import type React from "react";
import { useEffect } from "react";
import { ThemeProvider } from "../providers/theme-provider";
import { Amiri, Luxurious_Roman, Roboto, Cairo } from "next/font/google";
import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { ScrollToTop } from "./scroll-to-top";
import LoadingIndicator from "./Loading";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});
const luxuriousRoman = Luxurious_Roman({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luxurious-roman",
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function LayoutClient({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const pathName = usePathname();
  const isStudioPage = pathName.startsWith("/studio");
  const isRtl = locale === "tr";
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className={`${luxuriousRoman.variable} ${amiri.variable} ${cairo.variable} ${roboto.variable} ${locale === "ar" ? "font-cairo" : "font-roboto tracking-wider"}`}
      lang={locale}
      dir={locale === "ar" && !isStudioPage ? "rtl" : "ltr"}
    >
      {isStudioPage ? (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      ) : (
        <div className="mt-20 min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <LoadingIndicator />
          </ThemeProvider>
          <ScrollToTop isRtl={isRtl} />
        </div>
      )}
    </div>
  );
}
