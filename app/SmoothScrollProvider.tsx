"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      easing: (t: number): number => t,
    });

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return (): void => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
