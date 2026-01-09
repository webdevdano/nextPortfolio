"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

function LightDarkSwitch({
  variant = "pill",
}: {
  variant?: "pill" | "inline";
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const isInline = variant === "inline";

  return (
    <div
      className={
        (isInline
          ? "flex items-center gap-1"
          : "scale-95 xs:scale-100 2xl:scale-125 p-1 flex items-center gap-1 border border-(--foreground)/20 rounded-full")
      }
    >
      <div
        onClick={() => setTheme("light")}
        className={
          "cursor-pointer rounded-full p-1 transition-colors " +
          (isDark ? "bg-transparent" : "bg-(--foreground)/12")
        }
      >
        <SunIcon className="text-(--foreground) w-5" />
      </div>
      <div
        onClick={() => setTheme("dark")}
        className={
          "cursor-pointer rounded-full p-1 transition-colors " +
          (isDark ? "bg-(--foreground)/12" : "bg-transparent")
        }
      >
        <MoonIcon className="text-(--foreground) w-5" />
      </div>
    </div>
  );
}

export default LightDarkSwitch;