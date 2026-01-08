"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-(--foreground) text-sm opacity-100"
    : "text-(--foreground) text-sm opacity-70 hover:opacity-100 transition-opacity";
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-(--background)/80 border-b border-(--foreground)/10">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-(--foreground) font-semibold text-base tracking-tight hover:opacity-80 transition-opacity"
          >
            Your Name
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className={navLinkClass(pathname === "/")}>
              Home
            </Link>
            <Link
              href="/about"
              className={navLinkClass(pathname?.startsWith("/about") ?? false)}
            >
              About
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
