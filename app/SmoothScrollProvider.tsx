"use client";

import { ReactNode, useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const section = document.querySelector(href) as HTMLElement | null;
      if (!section) return;

      e.preventDefault();

      // 🔥 INSTANT + SMOOTH (browser native)
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    document.addEventListener("click", handleNavClick);

    return () => {
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return <>{children}</>;
}
