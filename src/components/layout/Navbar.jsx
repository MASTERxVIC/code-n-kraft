"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/brands", label: "Brands" },
  { href: "/presence", label: "Presence" },
  { href: "/services", label: "Services" },
  { href: "/proof-vault", label: "Proof Vault" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [beliefVisible, setBeliefVisible] = useState(false);

  /* Footer viewport me dikhte hi navbar upar slide karke hide ho jayega */
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  /* Belief (dark) section navbar ko touch karte hi blur hatkar bar
     rock solid ho jayega — links/logo same rahenge */
  useEffect(() => {
    const belief = document.getElementById("belief");
    if (!belief) return;
    const obs = new IntersectionObserver(
      ([entry]) => setBeliefVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(belief);
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-[75px] transition-all duration-300 ease-in-out ${
        footerVisible ? "-translate-y-full" : "translate-y-0"
      } ${
        beliefVisible ? "bg-button" : "bg-button/40 backdrop-blur-[7.5px]"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[var(--gutter)]">
        <Link href="/" aria-label="Code 'n' Kraft home" className="shrink-0">
          <Image
            src="/assets/NavLogo.svg"
            alt="Code 'n' Kraft"
            width={48}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm font-light text-heading transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu links={links} />
      </div>
    </header>
  );
}
