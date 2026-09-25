"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowButton from "./ArrowIcon";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function Card({ href = "#", tone = "light", className = "", children }) {
  const toneClasses =
    tone === "dark" ? "bg-logo text-on-dark" : "bg-surface text-heading";

  return (
    <a
      href={href}
      className={`bento-card group relative flex overflow-hidden rounded-[20px] p-6 transition-all duration-300 ${toneClasses} ${className}`}
    >
      {children}
      <ArrowButton tone={tone} />
    </a>
  );
}

function CardTitle({ children, className = "" }) {
  return (
    <h3
      className={`text-center font-body font-medium uppercase leading-snug tracking-wide ${className}`}
    >
      {children}
    </h3>
  );
}

/* ---------------- Desktop: exact-measure flex layout ---------------- */
function BentoDesktop() {
  return (
    <div className="hidden lg:block">
      {/* Top row: dark card (513) + rebrand (715) */}
      <div className="flex gap-5">
        <div className="w-[41.106%]">
          <Card
            href="/services/website-design"
            tone="dark"
            className="h-[382px] items-center justify-center"
          >
            <CardTitle className="text-4xl xl:text-5xl text-button">
              Website
              <br />
              Designing
            </CardTitle>
          </Card>
        </div>
        <div className="w-[57.292%]">
          <Card
            href="/services/rebrand"
            className="h-[196px] items-center justify-center"
          >
            <CardTitle className="text-2xl xl:text-3xl">
              Rebrand &amp;
              <br />
              Rebuild
            </CardTitle>
          </Card>
        </div>
      </div>

      {/* Bottom row: GEO / SEO / AEO (225 each) + UI & UX (513, pulled up) */}
      <div className="mt-5 flex items-start gap-5">
        <Card
          href="/services/geo"
          className="h-[196px] w-[18.029%] items-center justify-center"
        >
          <CardTitle className="text-2xl">GEO</CardTitle>
        </Card>
        <Card
          href="/services/seo"
          className="h-[196px] w-[18.029%] items-center justify-center"
        >
          <CardTitle className="text-2xl">SEO</CardTitle>
        </Card>
        <Card
          href="/services/aeo"
          className="h-[196px] w-[18.029%] items-center justify-center"
        >
          <CardTitle className="text-2xl">AEO</CardTitle>
        </Card>
        <Card
          href="/services/ui-ux"
          className="-mt-[186px] h-[384px] w-[41.106%] items-center justify-center"
        >
          <CardTitle className="text-2xl xl:text-3xl">UI &amp; UX</CardTitle>
        </Card>
      </div>
    </div>
  );
}

/* ---------------- Mobile: stacked layout, all cards equal height ---------------- */
function BentoMobile() {
  // Single shared size for every card below md
  const cardCls = "min-h-[200px] items-center justify-center";

  return (
    <div className="grid grid-cols-1 gap-4 lg:hidden">
      <Card
        href="/services/website-design"
        tone="dark"
        className={cardCls}
      >
        <CardTitle className="text-3xl text-button">
          Website
          <br />
          Designing
        </CardTitle>
      </Card>

      <Card href="/services/rebrand" className={cardCls}>
        <CardTitle className="text-2xl">
          Rebrand &amp;
          <br />
          Rebuild
        </CardTitle>
      </Card>

      <div className="hidden md-block flex items-center justify-center py-2">
        <Image
          src="/assets/NavLogo.svg"
          alt=""
          width={88}
          height={88}
          className="size-20"
        />
      </div>

      <Card href="/services/geo" className={cardCls}>
        <CardTitle className="text-2xl">GEO</CardTitle>
      </Card>
      <Card href="/services/seo" className={cardCls}>
        <CardTitle className="text-2xl">SEO</CardTitle>
      </Card>
      <Card href="/services/aeo" className={cardCls}>
        <CardTitle className="text-2xl">AEO</CardTitle>
      </Card>

      <Card href="/services/ui-ux" className={cardCls}>
        <CardTitle className="text-2xl">UI &amp; UX</CardTitle>
      </Card>
    </div>
  );
}

export default function BentoGrid() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);

      // Cards ka soft entrance — halka rise + fade, ek-ek karke
      gsap.fromTo(
        q(".bento-card"),
        { y: 28, opacity: 0, scale: 0.97, transformOrigin: "center" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: root.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      aria-label="Services"
      className="relative mx-auto w-full max-w-[1248px]"
    >
      <BentoDesktop />
      <BentoMobile />

      {/* Logo mark — floats centered between the rows (desktop only) */}
      <div className="hidden md:block pointer-events-none absolute xl:left-[630px] xl:top-[300px] lg:left-[460px] lg:top-[300px] z-10 -translate-x-1/2 -translate-y-1/2 ">
        <Image src="/assets/ServiceLogo.svg" alt="" width={88} height={88} />
      </div>
    </section>
  );
}
