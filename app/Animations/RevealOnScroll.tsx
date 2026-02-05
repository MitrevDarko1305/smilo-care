"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  offset?: number;
  once?: boolean;
  className?: string;
};

export default function RevealOnScroll({
  children,
  offset = 150,
  once = true,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setActive(false);
        }
      },
      {
        rootMargin: `0px 0px -${offset}px 0px`,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [offset, once]);

  return (
    <div
      ref={ref}
      className={`reveal ${active ? "reveal--active" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
