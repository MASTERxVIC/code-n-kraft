"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------
   PROOF VAULT — infinite-loop work carousel.
   Replace WORKS with real client projects.
   img: project cover (portrait 600x800 works best).
------------------------------------------------------------------ */
const WORKS = [
  {
    brand: "Brew & Bean",
    tag: "Café chain · Website + Local SEO",
    summary:
      "Full website rebuild with local SEO. Three outlets hit #1 for 'coffee near me' within 90 days.",
    img: "https://picsum.photos/seed/cnk-brew/600/800",
  },
  {
    brand: "Nordwind Legal",
    tag: "Law firm · Website + AEO",
    summary:
      "Answer-engine-ready practice site. Featured snippets now drive 40% of their consultation calls.",
    img: "https://picsum.photos/seed/cnk-legal/600/800",
  },
  {
    brand: "Velvetine Salon",
    tag: "Salon · Rebrand + Website",
    summary:
      "Rebrand and booking-first website. Online appointments doubled in the first quarter.",
    img: "https://picsum.photos/seed/cnk-salon/600/800",
  },
  {
    brand: "Atlas Fitness",
    tag: "Gym · Website + GEO",
    summary:
      "GEO-optimized site built to surface in AI answers. Trial signups up 3x after launch.",
    img: "https://picsum.photos/seed/cnk-atlas/600/800",
  },
  {
    brand: "Maison Olive",
    tag: "Restaurant · Website + SEO",
    summary:
      "Menu-first website with reservation flow. Organic covers grew 65% in six months.",
    img: "https://picsum.photos/seed/cnk-olive/600/800",
  },
  {
    brand: "Pixel & Thread",
    tag: "Boutique · E-commerce + SEO",
    summary:
      "Store rebuild tuned for speed and search. Page-one rankings for 12 product keywords.",
    img: "https://picsum.photos/seed/cnk-pixel/600/800",
  },
];

const AUTOPLAY_MS = 3500;

/* Position styles per offset from the active (center) card.
   translate-x % is relative to the card's own width. */
function cardStyle(off) {
  const base =
    "absolute left-1/2 top-0 transition-all duration-700 ease-out will-change-transform";
  switch (off) {
    case 0:
      return `${base} z-20 -translate-x-1/2 scale-100 opacity-100 blur-0`;
    case 1:
      return `${base} z-10 translate-x-[8%] scale-[0.8] opacity-90 blur-[2px]`;
    case -1:
      return `${base} z-10 -translate-x-[108%] scale-[0.8] opacity-90 blur-[2px]`;
    case 2:
      return `${base} z-0 translate-x-[66%] scale-[0.62] opacity-50 blur-[5px]`;
    case -2:
      return `${base} z-0 -translate-x-[166%] scale-[0.62] opacity-50 blur-[5px]`;
    default:
      return `${base} z-0 -translate-x-1/2 scale-50 opacity-0 pointer-events-none`;
  }
}

function Arrow({ dir, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="z-30 grid h-12 w-12 place-items-center rounded-full bg-[#3a3340] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: dir === "prev" ? "none" : "rotate(180deg)" }}
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

export default function ProofVault() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const root = useRef(null);

  /* Vault-opening entrance: heading fade-up, phir stage parde ki tarah khulega */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
      });

      tl.fromTo(
        q(".pv-heading"),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );

      tl.fromTo(
        q(".pv-stage"),
        {
          clipPath: "inset(0% 50% 0% 50%)",
          opacity: 0,
          scale: 0.98,
          transformOrigin: "center",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power3.inOut",
        },
        0.2
      );
    },
    { scope: root }
  );

  const n = WORKS.length;

  const go = (dir) => setActive((a) => (a + dir + n) % n);

  /* Infinite loop — auto-advances, wraps around */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <div ref={root}>
    {/* NOTE: md:pb-[240px] + md:mt-28 intentionally make this section taller on
       desktop — the page-level watermark logo scales with section height
       (object-contain), so this keeps it the same size as the "Two Kinds of
       Clients" / Journey / NotFor sections. Carousel itself is unchanged.
       md-only because on mobile all sections already share the same
       fixed-size watermark. */}
    <Section id="proof" tone="transparent" noReveal className="bg-transparent px-0 md:pb-[240px]">
      <div
        className="w-full max-w-[1289px] mx-auto px-4 md:px-0">
        <div className="pv-heading">
          <SectionHeading
            badge="The Proof Vault"
            title={
              <span className="uppercase font-display">
                Judge us by the work, not the pitch
              </span>
            }
            align="left"
            className="w-full"
          />
        </div>

        {/* Carousel stage */}
        <div
          className="pv-stage relative mt-10 md:mt-28"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative mx-auto h-[420px] md:h-[500px] max-w-[900px]">
            {WORKS.map((w, i) => {
              let off = (i - active + n) % n;
              if (off > n / 2) off -= n;
              const isCenter = off === 0;

              return (
                <div key={w.brand} className={cardStyle(off)} aria-hidden={!isCenter}>
                  <div
                    className={`group relative w-[240px] md:w-[300px] aspect-[3/4] overflow-hidden rounded-[48px] shadow-2xl ${
                      isCenter ? "cursor-pointer" : ""
                    }`}
                  >
                    <img
                      src={w.img}
                      alt={w.brand}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />

                    {/* Blurred dark half that rises on hover (center card only) */}
                    {isCenter && (
                      <div className="absolute inset-x-0 bottom-0 flex h-1/2 translate-y-[102%] flex-col justify-center bg-[#2b2430]/70 px-6 backdrop-blur-md transition-transform duration-500 ease-out group-hover:translate-y-0">
                        <p className="font-display text-[13px] italic leading-snug text-white/95 md:text-sm">
                          {w.summary}
                        </p>
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                          {w.tag}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Brand name under the card */}
                  <p
                    className={`mt-3 text-center font-display text-sm font-semibold uppercase tracking-[0.15em] text-heading transition-opacity ${
                      isCenter ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {w.brand}
                  </p>
                </div>
              );
            })}

            {/* Ellipse shadow under the center card */}
            <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 h-6 w-56 -translate-x-1/2 rounded-[100%] bg-[#44394c]/25 blur-md md:bottom-2 md:w-72" />
          </div>

          {/* Arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-2 md:px-8">
            <div className="pointer-events-auto">
              <Arrow dir="prev" label="Previous work" onClick={() => go(-1)} />
            </div>
            <div className="pointer-events-auto">
              <Arrow dir="next" label="Next work" onClick={() => go(1)} />
            </div>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
}
