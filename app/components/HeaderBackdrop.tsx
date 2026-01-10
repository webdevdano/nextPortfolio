"use client";

import { useEffect, useRef, useState } from "react";

export default function HeaderBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollY = window.scrollY || 0;
      // Moves the background down as you scroll, capped for taste.
      const next = Math.min(60, scrollY / 12);
      setY(next);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="header-backdrop pointer-events-none fixed inset-x-0 top-0 h-112 z-0"
      style={{ ["--header-backdrop-y" as never]: `${y}%` } as React.CSSProperties}
    />
  );
}
