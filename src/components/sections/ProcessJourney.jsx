"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* Exact path exported from Figma (Vector_1) */
const JOURNEY_PATH =
  "M2.00049 192.5C2.00049 192.5 86.4349 377.661 180.5 392C277.021 406.713 306.206 201.658 403.5 193.5C496.712 185.684 600.559 444.267 694 440C766.841 436.674 856.137 240.372 926.5 259.5C1081 301.5 1082.89 105.294 1202 2";

/* Node centers sit on the path above; labels placed per the Figma layout.
   01 floats just above the path start; 06 sits right where the path ends. */
const STEPS = [
  { n: "01", label: "Discovery and Research", cx: 2, cy: 170, lx: 40, ly: 172, anchor: "start" },
  { n: "02", label: "Design", cx: 200, cy: 394, lx: 203, ly: 440, anchor: "middle" },
  { n: "03", label: "Development", cx: 420, cy: 191, lx: 460, ly: 190, anchor: "start" },
  { n: "04", label: "Search Optimization", cx: 700, cy: 440, lx: 700, ly: 490, anchor: "middle" },
  { n: "05", label: "Quality Pass", cx: 920, cy: 260, lx: 870, ly: 310, anchor: "start" },
  { n: "06", label: "Launch and Support", cx: 1178, cy: 18, lx: 1137, ly: 25, anchor: "end" },
];

/* Speech-bubble tooltips shown on node hover — copy + placement per Figma.
   x/y/w/h = bubble rect, tail = triangle points (bubble color), lines = text. */
const TOOLTIPS = {
  "01": {
    x: 1, y: 27, w: 340, h: 100, fs: 14,
    lines: [
      "We study your customers, competitors,",
      "and search landscape before designing a",
      "single pixel.",
    ],
    tail: "30,125 60,125 45,159",
  },
  "02": {
    x: 250, y: 330, w: 270, h: 80, fs: 14,
    lines: [
      "Custom visual direction, reviewed",
      "and refined with you.",
    ],
    tail: "270,370 330,370 230,425",
  },
  "03": {
    x: 419, y: 68, w: 290, h: 80, fs: 14,
    lines: [
      "Hand-built, tested across devices,",
      "optimized for speed before launch.",
    ],
    tail: "448,146 478,146 464,175",
  },
  "04": {
    x: 750, y: 376, w: 270, h: 80, fs: 14,
    lines: [
      "SEO, GEO, and AEO built into the",
      "site's structure from the start.",
    ],
    tail: "770,416 830,416 730,471",
  },
  "05": {
    x: 600, y: 210, w: 270, h: 80, fs: 14,
    lines: [
      "Every page checked line by line",
      "before it ships.",
    ],
    tail: "868,248 800,248 895,295",
  },
  "06": {
    x: 860, y: 50, w: 290, h: 60, fs: 14,
    lines: ["We stay on to make sure it performs."],
    tail: "1100,52 1130,52 1128,32",
  },
};

function Tooltip({ tip }) {
  const lineH = tip.fs * 1.3;
  const cx = tip.x + tip.w / 2;
  const startY =
    tip.y + (tip.h - (tip.lines.length - 1) * lineH) / 2 + tip.fs * 0.35;
  return (
    <g className="pointer-events-none" style={{ animation: "journey-tip-in 180ms ease-out" }}>
      <polygon points={tip.tail} fill="#44394c" />
      <rect
        x={tip.x}
        y={tip.y}
        width={tip.w}
        height={tip.h}
        rx="30"
        fill="#44394c"
      />
      {tip.lines.map((ln, i) => (
        <text
          key={i}
          x={cx}
          y={startY + i * lineH}
          textAnchor="middle"
          fill="#ffffff"
          fontSize={tip.fs}
          fontStyle="italic"
          className="font-display"
        >
          {ln}
        </text>
      ))}
    </g>
  );
}

export default function ProcessJourney() {
  const [hovered, setHovered] = useState(null);
  const root = useRef(null);
  const maskPath = useRef(null);

  useGSAP(
    () => {
      const svg = root.current?.querySelector("svg");
      const mp = maskPath.current;
      if (!svg || !mp) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const q = gsap.utils.selector(root);
      const len = mp.getTotalLength();

      /* Path ke kis fraction par node ka center hai — sampling se nikaalo */
      const fractionAt = (cx, cy) => {
        let best = 0;
        let bestD = Infinity;
        const N = 500;
        for (let i = 0; i <= N; i++) {
          const p = mp.getPointAtLength((len * i) / N);
          const d = (p.x - cx) ** 2 + (p.y - cy) ** 2;
          if (d < bestD) {
            bestD = d;
            best = i / N;
          }
        }
        return best;
      };
      const fracs = STEPS.map((s) => fractionAt(s.cx, s.cy));

      const DRAW = 4; // path draw duration (sec) — constant speed = path pe chalne jaisa

      /* Mask path ko shuru me poora chhupao */
      gsap.set(mp, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: svg, start: "top 78%", toggleActions: "play none none none" },
      });

      /* Heading pehle */
      tl.fromTo(
        q(".pj-heading"),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );

      /* Dashed path mask ke through dheere-dheere draw hoga */
      tl.to(mp, { strokeDashoffset: 0, duration: DRAW, ease: "none" }, 0.25);

      /* Number nodes: path jahan pahunche, wahan node pop */
      q(".pj-node").forEach((node, i) => {
        const s = STEPS[i];
        tl.fromTo(
          node,
          { scale: 0, autoAlpha: 0, svgOrigin: `${s.cx} ${s.cy}` },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.55,
            ease: "back.out(2.2)",
          },
          0.25 + fracs[i] * DRAW
        );
      });

      /* Footnote aakhir me */
      tl.fromTo(
        q(".pj-note"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        0.25 + DRAW - 0.4
      );
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <Section
        id="process"
        tone="transparent"
        noReveal
        className="bg-transparent px-0"
      >
        <style>{`@keyframes journey-tip-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        <div className="w-full max-w-[1289px] mx-auto px-4 md:px-0">
          <div className="pj-heading">
            <SectionHeading
              badge="Behind the work"
              title={
                <span className="uppercase font-display">
                  How a project actually happens
                </span>
              }
              align="left"
              className="w-full"
            />
          </div>

          {/* Journey timeline — one SVG so path + nodes scale together.
              On small screens it scrolls horizontally instead of squishing.
              NOTE: viewBox is intentionally taller (+114 units) than the tight
              content bounds — the page-level watermark logo scales with section
              height (object-contain), so this keeps it the same size as the
              "Two Kinds of Clients" section. Diagram itself renders unchanged. */}
          <div className="mt-10 md:mt-14 overflow-x-auto overflow-y-hidden pb-4">
            <svg
              viewBox="-40 -77 1260 662"
              className="h-auto w-full min-w-[760px]"
              role="img"
              aria-label="How a project actually happens: discovery, design, development, search optimization, quality pass, launch and support"
            >
              <defs>
                <mask
                  id="journey-draw-mask"
                  maskUnits="userSpaceOnUse"
                  x="-100"
                  y="-160"
                  width="1420"
                  height="820"
                >
                  <path
                    ref={maskPath}
                    d={JOURNEY_PATH}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="16"
                  />
                </mask>
              </defs>

              {/* Exact dashed path from Figma — mask se dheere-dheere reveal hoga */}
              <g mask="url(#journey-draw-mask)">
                <path
                  d={JOURNEY_PATH}
                  fill="none"
                  stroke="#44394c"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                />
              </g>

              {/* Nodes — path ke saath pop honge; hovering (or tapping / keyboard focus) shows the tooltip */}
              {STEPS.map((s) => (
                <g
                  key={s.n}
                  className="pj-node cursor-pointer outline-none"
                  tabIndex={0}
                  onMouseEnter={() => setHovered(s.n)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(s.n)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setHovered(hovered === s.n ? null : s.n)}
                >
                  <circle cx={s.cx} cy={s.cy} r="28" fill="#44394c" />
                  <text
                    x={s.cx}
                    y={s.cy + 7}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="19"
                    className="font-display"
                  >
                    {s.n}
                  </text>
                  <text
                    x={s.lx}
                    y={s.ly}
                    textAnchor={s.anchor}
                    fill="#44394c"
                    fontSize="17"
                    letterSpacing="1.5"
                    className="font-display font-normal"
                    fontWeight="100"
                  >
                    {s.label.toUpperCase()}
                  </text>
                </g>
              ))}

              {/* Hover tooltip */}
              {hovered && TOOLTIPS[hovered] && <Tooltip tip={TOOLTIPS[hovered]} />}
            </svg>

            {/* Footnote */}
            <p
              className="pj-note mt-2 text-right font-body text-[11px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-heading/50"
            >
              This takes longer than most agencies.
              <br />
              That&rsquo;s intentional.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
