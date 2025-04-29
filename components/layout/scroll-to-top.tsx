"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollToTopProps {
  threshold?: number;
  isRtl?: boolean;
}

export function ScrollToTop({
  threshold = 300,
  isRtl = false,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="secondary"
      size="icon"
      className={`fixed bottom-6 h-12 w-12 md:w-9 md:h-9 ${isRtl ? "left-6" : "right-6"} z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90`}
      onClick={scrollToTop}
      aria-label="العودة إلى الأعلى"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
