"use client";

import { useState } from "react";
import Section from "../ui/Section";

/* ------------------------------------------------------------------ */
/*  QUESTIONS WE GET ASKED — FAQ accordion                             */
/*  Click pe question bar light purple hota hai, answer peeche se      */
/*  slide karke bahar aata hai. QUESTIONS array me edit kar lena.      */
/*  NOTE: pb-24 md:pb-[120px] — section height ProofVault/NotFor se    */
/*  match karne ke liye (NotFor wali pb convention, min-h nahi).      */
/* ------------------------------------------------------------------ */

const QUESTIONS = [
  {
    q: "How Long Does A Project Take?",
    a: "Longer than most agencies — because we don't skip steps. Timelines depend on scope.",
  },
  {
    q: "How Much Does A Website Cost?",
    a: "Every project is scoped on discovery call — no bloated packages, no hidden upsells. You get a fixed quote before we start.",
  },
  {
    q: "Do You Offer Revisions?",
    a: "Yes. Every project includes structured revision rounds at design and build stages.",
  },
  {
    q: "Will My Site Rank On Google — And AI Search?",
    a: "That's the whole point. Every site we ship is built SEO-first, and structured for GEO/AEO.",
  },
  {
    q: "What Do You Need From Me To Get Started?",
    a: "Just a 20-minute discovery call. We handle everything else — you just review and approve.",
  },
];

/* Bullet — click pe closed bullet 180° clockwise ghumta hai aur fade
   hota hai, open bullet usi spin ke end me fade-in hota hai. */
function BulletIcon({ open }) {
  return (
    <span className="relative block h-8 w-8 shrink-0" aria-hidden="true">
      <img
        src="/assets/Bullet_Points.svg"
        alt=""
        className={`absolute inset-0 h-8 w-8 transition-all duration-500 ease-in-out ${
          open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
      <img
        src="/assets/Bullet_Points-2.svg"
        alt=""
        className={`absolute inset-0 h-8 w-8 transition-opacity delay-100 duration-500 ease-in-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

/* Chevron — click pe right chevron 90° clockwise ghumke down hota hai
   aur fade hota hai, dark down chevron usi spin ke end me fade-in hota hai. */
function ChevronIcon({ open }) {
  return (
    <span className="relative block h-8 w-8 shrink-0" aria-hidden="true">
      <img
        src="/assets/akar-icons_circle-chevron-right.svg"
        alt=""
        className={`absolute inset-0 h-8 w-8 transition-all duration-500 ease-in-out ${
          open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
      <img
        src="/assets/akar-icons_circle-chevron-down.svg"
        alt=""
        className={`absolute inset-0 h-8 w-8 transition-opacity delay-100 duration-500 ease-in-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="relative">
      {/* Question bar — dark when closed, light purple when open. z-10 keeps it above the answer. */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`relative z-10 flex w-full items-center gap-5 rounded-[18px] px-6 py-5 text-left transition-colors duration-300 ${
          open ? "bg-button" : "bg-heading"
        }`}
      >
        <BulletIcon open={open} />
        <span
          className={`flex-1 font-display text-[17px] leading-snug ${
            open ? "text-heading" : "text-white"
          }`}
        >
          {q}
        </span>
        <ChevronIcon open={open} />
      </button>

      {/* Answer — slides out from behind the question bar */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* -mt-10 tucks the top behind the pill, mx-4 insets sides,
              rounded top corners + button border match the design screenshot */}
          <div className="mx-4 -mt-10 rounded-[20px] border-2 border-button bg-heading px-8 pb-8 pt-16">
            <p className="text-center font-body text-[15px] leading-relaxed text-white/90">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  /* FAQPage JSON-LD — Google rich results + AI engines ke liye */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QUESTIONS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <Section
      id="faq"
      tone="transparent"
      className="bg-transparent px-0"
    >
      <div className="mx-auto w-full max-w-[1289px] px-4 pb-24 md:px-0 md:pb-[120px]">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-heading/60">
          Before You Sign On
        </p>
        <h2 className="mt-3 text-center font-display text-[34px] font-bold leading-tight text-heading md:text-[40px]">
          QUESTIONS WE GET ASKED
        </h2>

        <div className="mx-auto mt-10 flex w-full max-w-[900px] flex-col gap-5">
          {QUESTIONS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </Section>
    </>
  );
}
