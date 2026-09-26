"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Logo box ke % me coordinates (SVG viewBox 646x583)
const CALLOUTS = [
  {
    id: "escaping-matrix",
    label: "Escaping Matrix",
    x: 81.5, // pill/dot/line ka x
    pillY: 9.4, // pill ka bottom edge
    dotY: 12, // dot ka center
    lineEndY: 20, // line kahan tak jayegi
  },
  {
    id: "enso-circle",
    label: "Enso Circle",
    x: 46.4,
    pillY: 67.8,
    dotY: 70.3,
    lineEndY: 90,
  },
];

const PIXELS = [
  "M487.487 226.933H478.202V236.251H487.487V226.933Z",
  "M504.068 191.658H489.477V206.3H504.068V191.658Z",
  "M506.721 94.4844H492.13V109.127H506.721V94.4844Z",
  "M526.618 222.274H513.354V235.585H526.618V222.274Z",
  "M530.597 113.12H521.312V122.438H530.597V113.12Z",
  "M541.209 135.75H514.68V162.373H541.209V135.75Z",
  "M545.189 175.684H518.659V202.307H545.189V175.684Z",
  "M554.474 89.1598H539.883V103.802H554.474V89.1598Z",
  "M570.391 106.465H558.453V118.445H570.391V106.465Z",
  "M570.392 199.645H559.78V210.294H570.392V199.645Z",
  "M581.003 130.425H554.474V157.048H581.003V130.425Z",
  "M575.697 173.022H565.085V183.671H575.697V173.022Z",
  "M592.941 81.173H581.003V93.1532H592.941V81.173Z",
  "M604.879 208.963H591.615V223.605H604.879V208.963Z",
  "M604.88 139.743H595.594V149.061H604.88V139.743Z",
  "M618.144 161.042H591.615V187.664H618.144V161.042Z",
  "M615.491 109.127H600.9V123.77H615.491V109.127Z",
  "M644.674 135.75H630.083V151.723H644.674V135.75Z",
  "M646 185.002H632.735V199.645H646V185.002Z",
  "M644.673 81.173H635.388V90.491H644.673V81.173Z",
];

export function HeroLogo() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);

      // Centering ke liye xPercent/yPercent (CSS translate ki jagah,
      // taaki GSAP ke x/y/scale animations usko overwrite na karein)
      gsap.set(q(".callout-pill"), { xPercent: -50, yPercent: -100 });
      gsap.set(q(".callout-dot"), { xPercent: -50, yPercent: -50 });
      gsap.set(q(".callout-line"), { xPercent: -50 });

      // Logo entrance (pehle wali Reveal jaisa)
      gsap.fromTo(
        q(".hero-logo-inner"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: "power3.out" }
      );

      // Callouts: line → dot → pill, ek-ek karke
      CALLOUTS.forEach((c, i) => {
        const base = 1.0 + i * 0.3;
        gsap.fromTo(
          q(`.callout-line-${c.id}`),
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.5,
            delay: base,
            ease: "power2.out",
            transformOrigin: "top",
          }
        );
        gsap.fromTo(
          q(`.callout-dot-${c.id}`),
          { scale: 0 },
          { scale: 1, duration: 0.4, delay: base + 0.35, ease: "back.out(2)" }
        );
        gsap.fromTo(
          q(`.callout-pill-${c.id}`),
          { opacity: 0, y: -10, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: base + 0.45,
            ease: "power3.out",
          }
        );
      });

      // Pixels ek baar grow honge — chhote se original size tak (twinkling stars jaisa)
      gsap.fromTo(
        q(".hero-pixel"),
        { scale: 0, opacity: 0, transformOrigin: "center" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: { each: 0.05, from: "random" },
          delay: 0.8,
        }
      );

      // Pills ka halka float loop
      gsap.to(q(".callout-pill"), {
        y: -6,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5,
        delay: 2.4,
      });
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      id="hero-enso-logo"
      className="z-30 pointer-events-none absolute xl:right-[75px] lg:right-[15px] right-0 top-[90px] lg:opacity-100 md:opacity-20 opacity-5 max-w-none xl:w-[600px] xl:h-[583px] lg:w-[500px] lg:h-[383px] md:w-[480px] md:h-[383px]"
    >
      <div className="hero-logo-inner relative h-full w-full">
        <Image
          src="/assets/HeroLogo.svg"
          alt=""
          aria-hidden="true"
          width={600}
          height={583}
          fetchPriority="high"
          loading="eager"
          className="h-full w-full"
        />
        {/* Pixels — SVG se nikaal ke yahan (wave animation ke liye) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 646 583"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {PIXELS.map((d, i) => (
            <path key={i} d={d} fill="#44394C" className="hero-pixel" />
          ))}
        </svg>
        {/* Callouts — sirf lg aur upar (chhoti screen pe logo background me hota hai) */}
        <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
          {CALLOUTS.map((c) => (
            <div key={c.id}>
              <div
                className={`callout-line callout-line-${c.id} absolute w-[2px] bg-logo`}
                style={{
                  left: `${c.x}%`,
                  top: `${c.dotY}%`,
                  height: `${c.lineEndY - c.dotY}%`,
                }}
              />
              <div
                className={`callout-dot callout-dot-${c.id} absolute h-2.5 w-2.5 rounded-full bg-logo`}
                style={{ left: `${c.x}%`, top: `${c.dotY}%` }}
              />
              <div
                className={`callout-pill callout-pill-${c.id} absolute whitespace-nowrap rounded-full bg-button px-4 py-[6px] font-label text-xs text-logo`}
                style={{ left: `${c.x}%`, top: `${c.pillY}%` }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
