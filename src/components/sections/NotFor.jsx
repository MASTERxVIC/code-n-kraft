"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ITEMS = [
  "You Want A Website \u201cBy Tomorrow\u201d \u2013 We Don\u2019t Rush Craftsmanship",
  "You\u2019re Looking For The Cheapest Option On The Market",
  "You Want A Site That Just Looks Fine Instead Of One Built To Perform",
  "You\u2019re Not Open To Strategy \u2014 Just Execution With No Input",
];

/* Exact strip artwork from Figma (Strip.svg, 675x51) — teeth, rounded
   ends, play icon and perforation included. Path data injected below. */
const STRIP_BODY_D = "M61.4277 4.79395C61.8126 5.46061 62.7753 5.46061 63.1602 4.79395L65.9277 0H77.6602L80.4277 4.79395C80.8126 5.46061 81.7753 5.46061 82.1602 4.79395L84.9277 0H97.6602L100.428 4.79395C100.813 5.46061 101.775 5.46061 102.16 4.79395L104.928 0H117.66L120.428 4.79395C120.813 5.46061 121.775 5.46061 122.16 4.79395L124.928 0H137.66L140.428 4.79395C140.813 5.46061 141.775 5.46061 142.16 4.79395L144.928 0H157.66L160.428 4.79395C160.813 5.46061 161.775 5.46061 162.16 4.79395L164.928 0H176.66L179.428 4.79395C179.813 5.46061 180.775 5.46061 181.16 4.79395L183.928 0H195.66L198.428 4.79395C198.813 5.46061 199.775 5.46061 200.16 4.79395L202.928 0H214.66L217.428 4.79395C217.813 5.46061 218.775 5.46061 219.16 4.79395L221.928 0H233.66L236.428 4.79395C236.813 5.46061 237.775 5.46061 238.16 4.79395L240.928 0H252.66L255.428 4.79395C255.813 5.46061 256.775 5.46061 257.16 4.79395L259.928 0H271.66L274.428 4.79395C274.813 5.46061 275.775 5.46061 276.16 4.79395L278.928 0H290.66L293.428 4.79395C293.813 5.46061 294.775 5.46061 295.16 4.79395L297.928 0H309.66L312.428 4.79395C312.813 5.46061 313.775 5.46061 314.16 4.79395L316.928 0H328.66L331.428 4.79395C331.813 5.46061 332.775 5.46061 333.16 4.79395L335.928 0H347.66L350.428 4.79395C350.813 5.46061 351.775 5.46061 352.16 4.79395L354.928 0H366.66L369.428 4.79395C369.813 5.46061 370.775 5.46061 371.16 4.79395L373.928 0H385.66L388.428 4.79395C388.813 5.46061 389.775 5.46061 390.16 4.79395L392.928 0H404.66L407.428 4.79395C407.813 5.46061 408.775 5.46061 409.16 4.79395L411.928 0H423.66L426.428 4.79395C426.813 5.46061 427.775 5.46061 428.16 4.79395L430.928 0H442.66L445.428 4.79395C445.813 5.46061 446.775 5.46061 447.16 4.79395L449.928 0H461.66L464.428 4.79395C464.813 5.46061 465.775 5.46061 466.16 4.79395L468.928 0H480.66L483.428 4.79395C483.813 5.46061 484.775 5.46061 485.16 4.79395L487.928 0H499.66L502.428 4.79395C502.813 5.46061 503.775 5.46061 504.16 4.79395L506.928 0H518.66L521.428 4.79395C521.813 5.46061 522.775 5.46061 523.16 4.79395L525.928 0H537.66L540.428 4.79395C540.813 5.46061 541.775 5.46061 542.16 4.79395L544.928 0H556.66L559.428 4.79395C559.813 5.46061 560.775 5.46061 561.16 4.79395L563.928 0H575.66L578.428 4.79395C578.813 5.46061 579.775 5.46061 580.16 4.79395L582.928 0H594.66L597.428 4.79395C597.813 5.46061 598.775 5.46061 599.16 4.79395L601.928 0H613.66L616.428 4.79395C616.813 5.46061 617.775 5.46061 618.16 4.79395L620.928 0H632.66L635.428 4.79395C635.813 5.46061 636.775 5.46061 637.16 4.79395L639.928 0H651.66L654.428 4.79395C654.813 5.46061 655.775 5.46061 656.16 4.79395L658.928 0H665C670.523 0 675 4.47715 675 10V41C675 46.5228 670.523 51 665 51H659.743L656.16 44.7939C655.775 44.1276 654.814 44.1277 654.429 44.7939L650.846 51H640.743L637.16 44.7939C636.775 44.1276 635.814 44.1277 635.429 44.7939L631.846 51H621.743L618.16 44.7939C617.775 44.1276 616.814 44.1277 616.429 44.7939L612.846 51H602.743L599.16 44.7939C598.775 44.1276 597.814 44.1277 597.429 44.7939L593.846 51H583.743L580.16 44.7939C579.775 44.1276 578.814 44.1277 578.429 44.7939L574.846 51H564.743L561.16 44.7939C560.775 44.1276 559.814 44.1277 559.429 44.7939L555.846 51H545.743L542.16 44.7939C541.775 44.1276 540.814 44.1277 540.429 44.7939L536.846 51H526.743L523.16 44.7939C522.775 44.1276 521.814 44.1277 521.429 44.7939L517.846 51H507.743L504.16 44.7939C503.775 44.1274 502.813 44.1273 502.428 44.7939L498.845 51H488.743L485.16 44.7939C484.775 44.1274 483.813 44.1273 483.428 44.7939L479.845 51H469.743L466.16 44.7939C465.775 44.1274 464.813 44.1273 464.428 44.7939L460.845 51H450.743L447.16 44.7939C446.775 44.1274 445.813 44.1273 445.428 44.7939L441.845 51H431.743L428.16 44.7939C427.775 44.1274 426.813 44.1273 426.428 44.7939L422.845 51H412.743L409.16 44.7939C408.775 44.1274 407.813 44.1273 407.428 44.7939L403.845 51H393.743L390.16 44.7939C389.775 44.1274 388.813 44.1273 388.428 44.7939L384.845 51H374.743L371.16 44.7939C370.775 44.1274 369.813 44.1273 369.428 44.7939L365.845 51H355.743L352.16 44.7939C351.775 44.1274 350.813 44.1273 350.428 44.7939L346.845 51H336.743L333.16 44.7939C332.775 44.1274 331.813 44.1273 331.428 44.7939L327.845 51H317.743L314.16 44.7939C313.775 44.1274 312.813 44.1273 312.428 44.7939L308.845 51H298.743L295.16 44.7939C294.775 44.1274 293.813 44.1273 293.428 44.7939L289.845 51H279.743L276.16 44.7939C275.775 44.1274 274.813 44.1273 274.428 44.7939L270.845 51H260.743L257.16 44.7939C256.775 44.1274 255.813 44.1273 255.428 44.7939L251.845 51H241.743L238.16 44.7939C237.775 44.1274 236.813 44.1273 236.428 44.7939L232.845 51H222.743L219.16 44.7939C218.775 44.1274 217.813 44.1273 217.428 44.7939L213.845 51H203.743L200.16 44.7939C199.775 44.1274 198.813 44.1273 198.428 44.7939L194.845 51H184.743L181.16 44.7939C180.775 44.1274 179.813 44.1273 179.428 44.7939L175.845 51H165.743L162.16 44.7939C161.775 44.1274 160.813 44.1273 160.428 44.7939L156.845 51H145.743L142.16 44.7939C141.775 44.1274 140.813 44.1273 140.428 44.7939L136.845 51H125.743L122.16 44.7939C121.775 44.1274 120.813 44.1273 120.428 44.7939L116.845 51H105.743L102.16 44.7939C101.775 44.1274 100.813 44.1273 100.428 44.7939L96.8447 51H85.7432L82.1602 44.7939C81.7752 44.1274 80.8126 44.1273 80.4277 44.7939L76.8447 51H66.7432L63.1602 44.7939C62.7752 44.1274 61.8126 44.1273 61.4277 44.7939L57.8447 51H52.5C52.7761 51 53 50.7761 53 50.5V49.5381C52.9998 49.2621 52.776 49.0381 52.5 49.0381C52.224 49.0381 52.0002 49.2621 52 49.5381V50.5C52 50.7761 52.2239 51 52.5 51H10C4.47715 51 8.85878e-08 46.5228 0 41V10C0 4.47715 4.47715 0 10 0H58.6602L61.4277 4.79395Z";
const STRIP_PLAY_D = "M40.5 22.4019C42.5 23.5566 42.5 26.4434 40.5 27.5981L27 35.3923C25 36.547 22.5 35.1036 22.5 32.7942L22.5 17.2058C22.5 14.8964 25 13.453 27 14.6077L40.5 22.4019Z";

/* Exact pill icons from Figma */
const STAR_1_D = "M16.9091 0L20.7113 11.6271L33.8182 15L20.7113 18.3729L16.9091 30L13.1069 18.3729L0 15L13.1069 11.6271L16.9091 0Z";
const STAR_2_D = "M5.07273 0L6.21338 3.48813L10.1455 4.5L6.21338 5.51187L5.07273 9L3.93207 5.51187L0 4.5L3.93207 3.48813L5.07273 0Z";
const PILL_ARROW_D = "M13.5273 27.0547C9.93962 27.0547 6.4989 25.6295 3.96205 23.0926C1.42519 20.5558 0 17.1151 0 13.5274C0 9.93976 1.42519 6.49904 3.96205 3.96219C6.4989 1.42533 9.93962 0.000140709 13.5273 0.000140553C17.1149 0.000140396 20.5556 1.42533 23.0925 3.96219C25.6294 6.49904 27.0545 9.93976 27.0545 13.5274C27.0545 17.1151 25.6294 20.5558 23.0925 23.0926C20.5556 25.6295 17.1149 27.0547 13.5273 27.0547ZM8.78765 17.0716C8.70691 17.1496 8.6425 17.2428 8.59819 17.346C8.55388 17.4491 8.53055 17.5601 8.52958 17.6723C8.5286 17.7846 8.55 17.8959 8.59251 17.9998C8.63502 18.1037 8.69779 18.1981 8.77718 18.2775C8.85656 18.3569 8.95095 18.4197 9.05486 18.4622C9.15876 18.5047 9.27009 18.5261 9.38235 18.5251C9.49461 18.5241 9.60555 18.5008 9.7087 18.4565C9.81185 18.4122 9.90514 18.3478 9.98313 18.267L16.9091 11.3411V16.0215C16.9091 16.2457 16.9982 16.4608 17.1567 16.6193C17.3153 16.7779 17.5303 16.867 17.7545 16.867C17.9788 16.867 18.1938 16.7779 18.3524 16.6193C18.5109 16.4608 18.6 16.2457 18.6 16.0215V9.30014C18.6 9.07591 18.5109 8.86087 18.3524 8.70231C18.1938 8.54376 17.9788 8.45469 17.7545 8.45469L11.0332 8.45469C10.809 8.45469 10.5939 8.54376 10.4354 8.70231C10.2768 8.86087 10.1877 9.07591 10.1877 9.30014C10.1877 9.52437 10.2768 9.73942 10.4354 9.89797C10.5939 10.0565 10.809 10.1456 11.0332 10.1456L15.7136 10.1456L8.78765 17.0716Z";

function StripBg() {
  return (
    <svg
      viewBox="0 0 675 51"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <path opacity="0.8" d={STRIP_BODY_D} fill="#643F80" />
      <line x1="52.5" y1="2" x2="52.5" y2="49" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3.5" strokeLinecap="round" />
      <path d={STRIP_PLAY_D} fill="#ffffff" />
    </svg>
  );
}

function TicketRow({ text }) {
  return (
    <div className="nf-strip">
      {/* Mobile (below md): site Button jaisa shape — white bg, rounded-[20px],
          purple border, font-body text (koi arrow nahi) */}
      <div className="md:hidden">
        <div className="w-full overflow-hidden rounded-[20px] border border-button bg-surface px-6 py-3.5">
          <p className="font-body text-[15px] leading-snug text-heading">
            {text}
          </p>
        </div>
      </div>

      {/* Desktop: exact Figma strip (675x51). Text is left-aligned — every
          row starts at the same x (78px from strip edge, ~26px after the
          white dashed perforation), matching Figma. */}
      <div className="relative hidden w-full md:block">
        <StripBg />
        <div className="relative flex h-[51px] items-center justify-start pl-[78px] pr-[4%]">
          <p className="text-left font-display text-base leading-snug text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NotFor() {
  const root = useRef(null);

  /* Strips cascade: poora bundle top se strip 1 ki position pe girega,
     phir bacha hua bundle ek-ek slot neeche sarakta jayega — har level pe
     ek strip apne ghar pe reh jayegi. Slot ka faasla runtime pe naapa
     jata hai (space-y gaps), hardcode nahi. */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);
      const strips = q(".nf-strip");
      if (strips.length < 2) return;

      const step = strips[1].offsetTop - strips[0].offsetTop;
      const DROP = 600;

      // Shuruaat: saari strips ek bundle me upar (strip 1 ki position pe stack)
      strips.forEach((el, i) => gsap.set(el, { y: -(i * step) - DROP }));

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 75%", toggleActions: "play none none none" },
      });

      // Heading
      tl.fromTo(
        q(".nf-heading"),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );

      // Poora bundle top se strip 1 ki position pe gire
      tl.to(strips, { y: `+=${DROP}`, duration: 0.7, ease: "power2.in" }, 0.3);

      // Baaki ka bundle ek-ek slot neeche: 1->2, phir 2->3, phir 3->4
      for (let k = 1; k < strips.length; k++) {
        tl.to(Array.from(strips).slice(k), {
          y: `+=${step}`,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      // Closing pill aakhir me
      tl.fromTo(
        q(".nf-pill"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.25"
      );
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <Section id="not-for" tone="transparent" noReveal className="bg-transparent px-0">
        {/* NOTE: no local CSS watermark here — the page-level WatermarkWrapper
            (page.jsx) provides the logo watermark. md:pb bumped 208→238px so the
            section height (and thus the watermark logo size) matches the "Two
            Kinds of Clients" section. */}
        <div
          className="w-full max-w-[1289px] mx-auto px-4 md:px-0 pb-24 md:pb-[120px]"
        >
          <div className="nf-heading">
            <SectionHeading
              badge="Just as importantly"
              title={
                <span className="uppercase font-display">Who we&rsquo;re not for</span>
              }
              align="center"
              className="w-full"
            />
          </div>

          <div className="mx-auto mt-10 md:mt-[60px] max-w-[760px]">
            <div className="mx-auto max-w-[675px] space-y-6 md:space-y-[71px]">
              {ITEMS.map((t) => (
                <TicketRow key={t} text={t} />
              ))}
            </div>

            {/* Closing pill */}
            <a
              href="#contact"
              className="nf-pill group mx-auto mt-10 md:mt-[60px] flex max-w-[620px] items-center gap-3 rounded-[10px] bg-[#e3c6f9] py-2.5 px-4 md:h-[49px] md:gap-2 md:py-0 md:px-[14px]"
            >
              <span className="relative shrink-0" aria-hidden="true">
                <svg
                  viewBox="0 0 34 30"
                  fill="none"
                  className="h-[24px] w-[27px] md:h-[30px] md:w-[34px]"
                >
                  <path d={STAR_1_D} fill="#643F80" />
                </svg>
                <svg
                  viewBox="0 0 11 9"
                  fill="none"
                  className="absolute left-[18px] top-[1px] h-[9px] w-[11px] transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] md:left-[23px]"
                >
                  <path d={STAR_2_D} fill="#643F80" />
                </svg>
              </span>
              <p className="flex-1 text-center font-display text-[14px] italic leading-snug text-[#44394c] md:text-base">
                If None Of That Sounds Like You, You&rsquo;re Exactly Who We Build
                For.
              </p>
              <svg
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
                className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:rotate-45"
              >
                <g clipPath="url(#notfor-pill-arrow)">
                  <path d={PILL_ARROW_D} fill="#643F80" />
                </g>
                <defs>
                  <clipPath id="notfor-pill-arrow">
                    <rect
                      width="27.0545"
                      height="27.0545"
                      fill="white"
                      transform="translate(0 27.0547) rotate(-90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
