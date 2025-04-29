"use client";

import { useEffect, useState, startTransition } from "react";
import { usePathname } from "next/navigation";

export function useRouteTransition() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    startTransition(() => {
      setLoading(true);
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // الوقت بعده يختفي المؤشر

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading;
}
