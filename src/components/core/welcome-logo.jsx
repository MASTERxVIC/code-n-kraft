"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WELCOME_PIXELS = [
  "M810.08 103.509H803.467V110.125H810.08V103.509Z",
  "M821.895 78.4587H811.501V88.8563H821.895V78.4587Z",
  "M901.272 19.8479H890.878V30.2455H901.272V19.8479Z",
  "M823.782 9.45068H813.388V19.8482H823.782V9.45068Z",
  "M857.803 5.66895H847.409V16.0665H857.803V5.66895Z",
  "M922.06 38.7557H911.666V50.1004H922.06V38.7557Z",
  "M885.211 0H876.704V8.51017H885.211V0Z",
  "M869.144 17.9604H860.637V26.4706H869.144V17.9604Z",
  "M840.789 22.6893H834.175V29.3053H840.789V22.6893Z",
  "M922.06 0H915.446V6.61601H922.06V0Z",
  "M893.712 41.5901H887.098V48.2061H893.712V41.5901Z",
  "M923 73.7301H913.553V84.1277H923V73.7301Z",
  "M893.705 90.7502H884.258V101.148H893.705V90.7502Z",
  "M869.144 84.1273H861.583V91.6904H869.144V84.1273Z",
  "M837.955 100.201H828.508V109.651H837.955V100.201Z",
  "M872.924 65.2266H865.364V72.7897H872.924V65.2266Z",
  "M876.704 34.9744H857.803V53.8821H876.704V34.9744Z",
  "M903.159 56.7162H884.258V75.6239H903.159V56.7162Z",
  "M848.356 38.7557H829.455V57.6635H848.356V38.7557Z",
  "M851.19 67.114H832.289V86.0217H851.19V67.114Z",
];

export function WelcomeLogo() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);

      // Pixels ek baar grow honge — hero wale jaisa (twinkling stars)
      // Scroll pe jab logo dikhe tab chalega
      gsap.fromTo(
        q(".welcome-pixel"),
        { scale: 0, opacity: 0, transformOrigin: "center" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: { each: 0.05, from: "random" },
          delay: 0.35,
          scrollTrigger: {
            trigger: root.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="relative w-full max-w-[320px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[823px] h-auto flex justify-center items-center mx-auto"
    >
      <Image
        id="welcome-cnk-target"
        src="/assets/WelcomeCNK.svg"
        alt="CNK Logo"
        width={823}
        height={320}
        priority
        className="w-full h-auto object-contain select-none"
      />
      {/* Pixels — SVG se nikaal ke yahan (grow animation ke liye) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 923 362"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {WELCOME_PIXELS.map((d, i) => (
          <path key={i} d={d} fill="#44394C" className="welcome-pixel" />
        ))}
      </svg>
    </div>
  );
}
