"use client";

import NavPill from "./NavPill";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-(--background)/80 border-b border-(--foreground)/10">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <NavPill />
        </div>
      </div>
    </nav>
  );
}
