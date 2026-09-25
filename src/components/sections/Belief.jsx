"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);



const STATEMENTS = [
    "A website is the most honest thing a brand owns \u2014 it either proves you\u2019re serious. Or it proves you\u2019re not. Speed without care is just a faster way to look forgettable. Being found by Google isn\u2019t enough anymore \u2014 you have to be found by AI, too. We don\u2019t cheat our clients, we don\u2019t cut corners, and we don\u2019t ship work we wouldn\u2019t put our own name on.",
    "We\u2019re here to listen to your problems, find solutions together, and grow with you. No pressure, no jargon \u2014 just an honest conversation about what your brand needs next.",
];

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-[800ms] ease-out group-hover:scale-[1.2]"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-[800ms] ease-out group-hover:scale-[1.2]"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

export default function Belief() {
  const root = useRef(null);

  /* Heading + paragraphs reveal, Agreed left se, Not Agreed right se */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 75%", toggleActions: "play none none none" },
      });

      tl.fromTo(
        q(".bl-heading"),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );

      tl.fromTo(
        q(".bl-para"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.12 },
        0.15
      );

      tl.fromTo(
        q(".bl-agree"),
        { x: -64, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.45
      );

      tl.fromTo(
        q(".bl-disagree"),
        { x: 64, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0.45
      );
    },
    { scope: root }
  );

  return (
    <div ref={root}>
    <Section id="belief" tone="transparent" noReveal className=" text-white">
      <div className="pb-24 md:pb-[150px]">
        <div className="bl-heading">
          <SectionHeading
            badge="Our Belief"
            title={
              <span className="font-serif text-surface">
                What we <span className="text-button">believe</span>
              </span>
            }
            align="left"
            tone="dark"
            className="w-full"
          />
        </div>

        <div className="mt-10 max-w-4xl space-y-5">
          {STATEMENTS.map((statement) => (
            <p
              key={statement}
              className="bl-para font-light leading-loose tracking-wide text-justify text-white/90 text-sm md:text-base"
            >
              {statement}
            </p>
          ))}
        </div>

        <div className="mt-32 flex flex-row items-center justify-center gap-5 sm:flex-row md:mt-80 md:gap-60">
          <div className="bl-agree">
            <Button icon={<CheckIcon />} width="md:w-[220px] w-[180px] text-sm">Agreed</Button>
          </div>
          <div className="bl-disagree">
            <Button icon={<CrossIcon />} width="md:w-[220px] w-[180px] text-sm">Not Agreed</Button>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
}
