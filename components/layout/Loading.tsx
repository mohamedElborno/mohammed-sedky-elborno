// app/loading-indicator.tsx
"use client";

import { Loader2 } from "lucide-react";
import { useRouteTransition } from "@/hooks/useRouteTransition";

export default function LoadingIndicator() {
  const loading = useRouteTransition();

  if (!loading) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 rtl:right-auto rtl:left-6 transition-opacity duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-lg">
        <Loader2 className="h-6 w-6 animate-spin text-primary-foreground" />
      </div>
    </div>
  );
}
