"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import CloseMenuIcon from "../icons/CloseMenuIcon";

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Menu khulne par background scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menu = (
    <nav
      id="mobile-nav"
      aria-label="Primary"
      className={`fixed inset-0 top-[75px] z-[100] w-screen bg-bg transition-all duration-300 ease-out md:hidden ${
        open
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col items-center justify-center gap-8 px-[var(--gutter)] py-12">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-2xl font-light text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-[110] flex items-center justify-center text-ink"
      >
        {open ? <CloseMenuIcon /> : <MenuIcon />}
      </button>

      {mounted && createPortal(menu, document.body)}
    </div>
  );
}