"use client";

import { useState } from "react";

/* Homepage FAQ wala accordion pattern — service pages ke liye halka
   standalone version (same bullet/chevron img assets, same behaviour). */

function BulletIcon({ open }) {
  return (
    <span className="relative block h-4 w-4 shrink-0 md:h-8 md:w-8" aria-hidden="true">
      <img
        src="/assets/Bullet_Points.svg"
        alt=""
        className={`absolute inset-0 h-4 w-4 transition-all duration-500 ease-in-out md:h-8 md:w-8 ${
          open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
      <img
        src="/assets/Bullet_Points-2.svg"
        alt=""
        className={`absolute inset-0 h-4 w-4 transition-opacity delay-100 duration-500 ease-in-out md:h-8 md:w-8 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

function ChevronIcon({ open }) {
  return (
    <span className="relative block h-4 w-4 shrink-0 md:h-8 md:w-8" aria-hidden="true">
      <img
        src="/assets/akar-icons_circle-chevron-right.svg"
        alt=""
        className={`absolute inset-0 h-4 w-4 transition-all duration-500 ease-in-out md:h-8 md:w-8 ${
          open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
      <img
        src="/assets/akar-icons_circle-chevron-down.svg"
        alt=""
        className={`absolute inset-0 h-4 w-4 transition-opacity delay-100 duration-500 ease-in-out md:h-8 md:w-8 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div>
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
          className={`flex-1 font-display text-sm leading-snug md:text-[17px] ${
            open ? "text-heading" : "text-white"
          }`}
        >
          {q}
        </span>
        <ChevronIcon open={open} />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-4 -mt-10 rounded-[20px] border-2 border-button bg-heading px-3 pb-4 pt-16 md:px-8 md:pb-8">
            <p className="text-center font-body text-sm leading-relaxed text-white/90 md:text-[15px]">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceFaq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col gap-5">
      {faqs.map((item, i) => (
        <FaqItem
          key={item.q}
          q={item.q}
          a={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
