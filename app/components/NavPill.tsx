"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LightDarkSwitch from "./LightDarkSwitch";

function linkClass(isActive: boolean) {
  return isActive
    ? "px-3 py-1.5 rounded-full bg-(--foreground)/10 text-(--foreground) text-sm"
    : "px-3 py-1.5 rounded-full text-(--foreground) text-sm opacity-70 hover:opacity-100 transition-opacity";
}

export default function NavPill() {
  const pathname = usePathname();

  return (
    <div className="glass-sheen flex items-center gap-2 rounded-full border border-(--foreground)/15 bg-(--background)/55 backdrop-blur-md px-2 py-2">
      <Link href="/" className={linkClass(pathname === "/")}>
        Home
      </Link>
      <Link
        href="/about"
        className={linkClass(pathname?.startsWith("/about") ?? false)}
      >
        About
      </Link>

      <div className="h-6 w-px bg-(--foreground)/15" aria-hidden="true" />

      <LightDarkSwitch variant="inline" />
    </div>
  );
}
