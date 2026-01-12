"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyVideo({
  src,
  className,
  rootMargin = "600px 0px",
  preloadWhenVisible = "metadata",
  poster,
  ariaLabel,
}: {
  src: string;
  className?: string;
  rootMargin?: string;
  preloadWhenVisible?: "none" | "metadata" | "auto";
  poster?: string;
  ariaLabel?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    // If IntersectionObserver isn't available, initial state already loads.
    if (typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (!isVisible) return;
    const node = videoRef.current;
    if (!node) return;

    // Try to start playback once the src is attached.
    // Autoplay might be blocked in some Lighthouse runs; muted helps.
    const id = requestAnimationFrame(() => {
      node.play().catch(() => {
        // Ignore autoplay rejection.
      });
    });

    return () => cancelAnimationFrame(id);
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      className={className}
      {...(isVisible ? { src } : {})}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload={isVisible ? preloadWhenVisible : "none"}
      aria-label={ariaLabel}
    />
  );
}
