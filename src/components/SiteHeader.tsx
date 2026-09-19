"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#properties", label: "Properties" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-forest-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-gold text-2xl leading-none">&#9906;</span>
          <span className="font-bold text-lg tracking-tight">Land Leads</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-forest-dark px-4 pb-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[44px] text-base font-medium border-b border-white/5 last:border-0 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
