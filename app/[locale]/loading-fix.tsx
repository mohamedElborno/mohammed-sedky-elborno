"use client";

import { useEffect } from "react";

export default function LoadingFix({ locale }: { locale: string }) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // إظهار شاشة التحميل
        const loadingEl = document.createElement("div");
        loadingEl.id = "loading-overlay";
        loadingEl.style.position = "fixed";
        loadingEl.style.inset = "0";
        loadingEl.style.backgroundColor = "var(--background)";
        loadingEl.style.display = "flex";
        loadingEl.style.flexDirection = "column";
        loadingEl.style.alignItems = "center";
        loadingEl.style.justifyContent = "center";
        loadingEl.style.zIndex = "9999";

        const spinnerEl = document.createElement("div");
        spinnerEl.style.width = "3rem";
        spinnerEl.style.height = "3rem";
        spinnerEl.style.border = "4px solid var(--primary)";
        spinnerEl.style.borderTopColor = "transparent";
        spinnerEl.style.borderRadius = "50%";
        spinnerEl.style.animation = "spin 1s linear infinite";

        const textEl = document.createElement("p");
        textEl.style.marginTop = "1rem";
        textEl.style.fontSize = "1.125rem";
        textEl.style.fontWeight = "500";
        textEl.textContent = locale === "ar" ? "جاري التحميل..." : "Loading...";

        const styleEl = document.createElement("style");
        styleEl.textContent =
          "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";

        loadingEl.appendChild(styleEl);
        loadingEl.appendChild(spinnerEl);
        loadingEl.appendChild(textEl);
        document.body.appendChild(loadingEl);

        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [locale]);

  return null;
}
