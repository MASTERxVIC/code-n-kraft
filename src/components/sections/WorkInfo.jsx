"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDeferredGsap } from "@/hooks/use-deferred-gsap";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

/* Duotone filter: maps image darks → #150521, lights → white */
function DuotoneFilter() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute h-0 w-0"
    >
      <defs>
        <filter id="duotone-plum">
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.082 0.31 1" />
            <feFuncG type="table" tableValues="0.02 0.27 1" />
            <feFuncB type="table" tableValues="0.129 0.35 1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}

const duotoneCls = "h-auto w-44 md:w-56 [filter:url(#duotone-plum)]";

export default function WorkInfo() {
  const root = useRef(null);

  /* ScrollTrigger setup viewport ke paas aane par (useDeferredGsap) */
  useDeferredGsap(root,
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Heading + texts: soft fade-up, ek-ek karke
      tl.fromTo(
        q(".wi-fade"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        },
        0
      );

      // Images: pop karke aayenge
      tl.fromTo(
        q(".wi-pop"),
        { scale: 0.3, opacity: 0, transformOrigin: "center" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.65,
          ease: "back.out(1.8)",
          stagger: 0.2,
        },
        0.3
      );
    }
  );

  return (
    <div ref={root}>
      <Section
        id="WorkInfo"
        tone="transparent"
        noReveal
        className="flex flex-col justify-between pb-16 bg-transparent px-0"
      >
        <DuotoneFilter />

        {/* Content column */}
        <div className="w-full max-w-[1289px] mx-auto px-4 md:px-0">
          <div className="wi-fade">
            <SectionHeading
              badge="Who we work with"
              title={
                <span className="uppercase">
                  Two Kinds of Clients. One Standard.
                </span>
              }
              align="center"
              className="w-full"
            />
          </div>

          {/* Editorial rows: text / illustration alternating */}
          <div className="mt-16 md:mt-1 space-y-14 md:space-y-2">
            {/* Row 1 — First-Timers: text + image as ONE centered unit */}
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-10">
              <p className="wi-fade max-w-xl md:max-w-3xl font-body font-light text-sm md:text-base leading-relaxed text-heading/80">
                <span className="font-display font-medium text-lg md:text-[24px] text-heading">
                  First-Timers
                </span>
                {" — "}
                You&rsquo;re building your first real website and want it done
                right from the start, not fixed later.
              </p>
              <div className="wi-pop shrink-0 hidden md:block md:translate-y-10">
                <Image
                  src="/assets/FirstTimers.svg"
                  alt="Illustration of a first-time client"
                  width={208}
                  height={277}
                  className={duotoneCls}
                />
              </div>
            </div>

            {/* Row 2 — Rebrands & Rebuilds: image + text as ONE centered unit */}
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-10">
              <div className="wi-pop shrink-0 hidden md:block order-2 md:order-1 md:-translate-y-35">
                <Image
                  src="/assets/Rebrand.svg"
                  alt="Illustration of a rebrand client"
                  width={208}
                  height={310}
                  className={duotoneCls}
                />
              </div>
              <p className="wi-fade max-w-xl md:max-w-3xl order-1 md:order-2 font-body font-light text-sm md:text-base leading-relaxed text-heading/80">
                <span className="font-display font-medium text-lg md:text-[24px] text-heading">
                  Rebrands &amp; Rebuilds
                </span>
                {" — "}
                If you&rsquo;re here, you already know your current site no
                longer represents who you&rsquo;ve become. We rebuild it without
                erasing the equity you&rsquo;ve already built.
              </p>
            </div>

            {/* Note — centered */}
            <p className="wi-fade md:-translate-y-20 pt-2 text-center font-body font-light text-sm md:text-base leading-relaxed text-heading/80">
              <span className="font-display font-medium text-heading text-lg md:text-[24px]">Note</span>
              {" — "}
              Either way, you get the same obsessive standard of work.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
