"use client";

import NavPill from "./NavPill";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center pointer-events-auto">
          <NavPill />
        </div>
      </div>
    </div>
  );
}
