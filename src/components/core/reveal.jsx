"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useDeferredGsap } from "@/hooks/use-deferred-gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Scroll pe fade-up reveal (GSAP ScrollTrigger + Lenis compatible).
 * - toggleActions "play none none none" → ek baar animate hoke ruk jata hai
 *   (dobara trigger nahi hota). once:true use NAHI karte — woh trigger ko
 *   khud kill kar deta hai aur ScrollTrigger ke internal array me race se
 *   "Cannot read properties of undefined (reading 'end')" crash aata hai.
 * - prefers-reduced-motion → animation skip, content turant visible rehta hai
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  x = 0,
  y = 32,
  delay = 0,
  duration = 0.9,
  start = "top 88%",
  scroll = true, // false → scroll ka wait nahi, load pe turant animate
}) {
  const ref = useRef(null);

  const build = (withTrigger) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const vars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    };
    if (withTrigger) {
      vars.scrollTrigger = {
        trigger: el,
        start,
        toggleActions: "play none none none",
      };
    }
    gsap.fromTo(el, { opacity: 0, x, y }, vars);
  };

  /* Hero (scroll=false): load pe turant — pehle jaisa, koi defer nahi */
  useGSAP(
    () => {
      if (scroll) return;
      build(false);
    },
    // NOTE: scope nahi dete — callback me ref.current (element) direct use hota hai,
    // string selector nahi. scope: ref dene se render-time pe ref.current null hota hai
    // aur GSAP "Invalid scope" warnings spam karta hai.
    { dependencies: [x, y, delay, duration, start, scroll] }
  );

  /* scroll=true: ScrollTrigger setup tabhi hoga jab element viewport ke
     600px ke andar aaye — page load pe 8 triggers ek saath nahi bante */
  useDeferredGsap(ref, () => {
    if (!scroll) return;
    build(true);
  });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
