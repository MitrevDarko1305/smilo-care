"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
  /** 0.8–1.4 feels good (higher = more floaty) */
  duration?: number;
  /** disable on touch devices (recommended) */
  disableOnTouch?: boolean;
};

export default function SmoothScrollProvider({
  children,
  duration = 1.1,
  disableOnTouch = true,
}: Props) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) return;

    const isTouch =
      "ontouchstart" in window ||
      (navigator as any).maxTouchPoints > 0 ||
      window.matchMedia?.("(pointer: coarse)")?.matches;

    if (disableOnTouch && isTouch) return;

    const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false, // <- instead of smoothTouch
    wheelMultiplier: 1,
    touchMultiplier: 1,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [duration, disableOnTouch]);

  return <>{children}</>;
}

