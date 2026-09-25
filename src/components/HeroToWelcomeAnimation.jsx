"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./sections/Hero"; 
import Welcome from "./sections/Welcome";

gsap.registerPlugin(ScrollTrigger);

export default function HeroToWelcomeAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroLogo = document.querySelector("#hero-enso-logo");
      const welcomeSection = document.querySelector("#welcome-section");

      if (!heroLogo || !welcomeSection) return;

      // Simple Scrub Animation: Scroll karne par Logo rotate + center fade hoga
      gsap.to(heroLogo, {
        scrollTrigger: {
          trigger: welcomeSection,
          start: "top bottom", 
          end: "top top",
          scrub: 1,
        },
        rotation: 180,
        opacity: 0.1, // Smooth Watermark Opacity
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-x-hidden">
      <div className="relative z-20">
        <Hero />
      </div>
      <div id="welcome-section" className="relative z-10">
        <Welcome />
      </div>
    </div>
  );
}