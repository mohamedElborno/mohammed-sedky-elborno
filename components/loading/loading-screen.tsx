"use client";

import { LoadingSpinner } from "./loading-spinner";

interface LoadingScreenProps {
  locale: string;
}

export function LoadingScreen({ locale }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-lg font-medium text-foreground">
        {locale === "ar" ? "جاري التحميل..." : "Loading..."}
      </p>
    </div>
  );
}
