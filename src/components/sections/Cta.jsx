"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDeferredGsap } from "@/hooks/use-deferred-gsap";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { useLeadForm } from "../ui/LeadFormModal";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const root = useRef(null);
  const { openLeadForm } = useLeadForm();

  /* ScrollTrigger setup viewport ke paas aane par (useDeferredGsap) */
  useDeferredGsap(root,
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(el);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        q("[data-cta='heading']"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      )
        .fromTo(
          q("[data-cta='para']"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          q("[data-cta='btn']"),
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.4"
        );
    }
  );

  return (
    <Section id="cta" tone="transparent" className="bg-transparent px-0" noReveal>
      <div
        ref={root}
        className="mx-auto w-full max-w-[1289px] px-4 pb-24 md:px-0 md:pb-[120px]"
      >
        <div className="mx-auto max-w-[900px] py-24 text-center md:py-36">
          <h2
            data-cta="heading"
            className="font-display font-bold uppercase leading-[1.25] tracking-[0.06em] text-heading md:text-[44px]"
          >
            Let&rsquo;s build the website your brand actually deserves
          </h2>

          <p
            data-cta="para"
            className="mx-auto mt-6 max-w-[640px] text-xs font-medium uppercase leading-relaxed tracking-[0.18em] text-heading/85 md:text-xs"
          >
            Whether it&rsquo;s your first site or your fifth rebrand, we bring
            the same standard to every project.
          </p>

          <div data-cta="btn" className="mt-10 flex justify-center">
            <Button onClick={openLeadForm}>Book a free Discovery Call</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
