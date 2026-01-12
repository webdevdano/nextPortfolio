"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeaderBackdrop() {
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
      aria-hidden="true"
      className="header-backdrop pointer-events-none fixed inset-x-0 top-0 h-112 z-0 overflow-hidden"
    >
      <Image
        src="/PortfolioMedia/Images/HappyIslesParkingSun1.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: `center ${y}%` }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent 0%, transparent 55%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
