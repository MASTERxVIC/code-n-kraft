"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLeadForm } from "@/components/ui/LeadFormModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LOGO = "/assets/FooterLogo.svg";

// FooterLogo.svg (viewBox 0 0 329 374) se nikale hue pixels
const FOOTER_PIXELS = [
{ d: "M262.12 44.8936H247.258V60.0599H262.12V44.8936Z", fill: "#F3E8FF" },
  { d: "M312.111 102.729H297.249V117.895H312.111V102.729Z", fill: "#F3E8FF" },
  { d: "M272.253 109.533H257.391V124.699H272.253V109.533Z", fill: "#F3E8FF" },
  { d: "M260.094 93.8833H245.231V109.05H260.094V93.8833Z", fill: "#F3E8FF" },
  { d: "M251.311 112.465H240.502V124.481H251.311V112.465Z", fill: "#F3E8FF" },
  { d: "M273.605 54.6304H262.796V66.6464H273.605V54.6304Z", fill: "#F3E8FF" },
  { d: "M248.271 115.997H243.542V120.759H248.271V115.997Z", fill: "#44394C" },
  { d: "M256.716 97.9658H249.285V105.45H256.716V97.9658Z", fill: "#44394C" },
  { d: "M313.462 55.7803H306.031V63.2648H313.462V55.7803Z", fill: "#44394C" },
  { d: "M258.067 48.2959H250.636V55.7804H258.067V48.2959Z", fill: "#44394C" },
  { d: "M282.387 45.5742H274.956V53.0587H282.387V45.5742Z", fill: "#44394C" },
  { d: "M328.324 69.3887H320.893V77.5536H328.324V69.3887Z", fill: "#44394C" },
  { d: "M301.978 41.4917H295.898V47.6154H301.978V41.4917Z", fill: "#44394C" },
  { d: "M290.494 54.4194H284.414V60.5431H290.494V54.4194Z", fill: "#44394C" },
  { d: "M270.227 57.8218H265.498V62.5847H270.227V57.8218Z", fill: "#44394C" },
  { d: "M328.325 41.4917H323.596V46.2546H328.325V41.4917Z", fill: "#44394C" },
  { d: "M308.058 71.4297H303.329V76.1926H308.058V71.4297Z", fill: "#44394C" },
  { d: "M329 94.564H322.244V102.048H329V94.564Z", fill: "#44394C" },
  { d: "M308.058 106.811H301.302V114.296H308.058V106.811Z", fill: "#44394C" },
  { d: "M290.493 102.048H285.089V107.492H290.493V102.048Z", fill: "#44394C" },
  { d: "M268.2 113.615H261.445V120.419H268.2V113.615Z", fill: "#44394C" },
  { d: "M293.195 88.4399H287.791V93.8832H293.195V88.4399Z", fill: "#44394C" },
  { d: "M295.898 66.667H282.387V80.2752H295.898V66.667Z", fill: "#44394C" },
  { d: "M314.813 82.3164H301.302V95.9246H314.813V82.3164Z", fill: "#44394C" },
  { d: "M275.631 69.3887H262.12V82.9969H275.631V69.3887Z", fill: "#44394C" },
  { d: "M277.658 89.8008H264.147V103.409H277.658V89.8008Z", fill: "#44394C" },
  { d: "M235.442 320.664H221.897V332.098H235.442V320.664Z", fill: "#F3E8FF" },
  { d: "M223.102 316.753H219.791V320.107H223.102V316.753Z", fill: "#F3E8FF" },
  { d: "M234.238 329.54H230.927V332.894H234.238V329.54Z", fill: "#F3E8FF" },
  { d: "M225.359 331.045H222.048V334.399H225.359V331.045Z", fill: "#F3E8FF" },
  { d: "M222.649 327.585H219.338V330.939H222.649V327.585Z", fill: "#F3E8FF" },
  { d: "M230.626 321.566H227.616V324.576H230.626V321.566Z", fill: "#44394C" },
  { d: "M234.84 325.027H231.83V328.036H234.84V325.027Z", fill: "#44394C" },
  { d: "M226.112 322.168H223.102V325.178H226.112V322.168Z", fill: "#44394C" },
  { d: "M226.563 326.682H223.553V329.691H226.563V326.682Z", fill: "#44394C" },
];

const QUICK_ACCESS = [
  { label: "Work", href: "#proof" },
  { label: "Services", href: "#Services" },
  { label: "Process", href: "#process" },
  { label: "Contact", action: "openLeadForm" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const labelCls =
  "font-label  text-[11px] font-medium uppercase tracking-[0.22em] text-heading/60";
const linkCls =
  "font-serif  md:text-[15px] text-[12px] text-heading/80 transition-colors hover:text-supportive";

function SocialIcons() {
  return (
    <div className="flex flex-row items-center gap-5 md:flex-col md:gap-9">
      <a href="https://www.linkedin.com/company/code-n-kraft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-110">
        <img src="/assets/LinkedIn.svg" alt="LinkedIn" className="h-5 w-5" />
      </a>
      <a href="https://wa.me/917505038676" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-transform hover:scale-110">
        <img src="/assets/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5" />
      </a>
      <a href="https://www.instagram.com/codenkraft" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
        <img src="/assets/Instagram.svg" alt="Instagram" className="h-5 w-5" />
      </a>
    </div>
  );
}

export default function Footer() {
  const root = useRef(null);
  const { openLeadForm } = useLeadForm();

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(el);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Content reveal: tagline → columns → copyright
      tl.fromTo(
        q("[data-footer='reveal']"),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        }
      );

      
      gsap.fromTo(
        q(".footer-pixel"),
        { scale: 0, opacity: 0, transformOrigin: "center" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: { each: 0.05, from: "random" },
          scrollTrigger: {
            trigger: q(".footer-logo-wrap"),
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { dependencies: [] }
  );

  return (
    <footer ref={root} className="bg-footer text-heading">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--gutter)]">
        {/* tagline */}
        <p
          data-footer="reveal"
          className="pt-14 text-center font-label text-[11px] text-heading/70 md:pt-20"
        >
          Ink, Kraft, And Code — Same Care Every Time
        </p>

        {/* main grid —
            mobile (2 col): Quick Access | Contact Info / Social Links | Legal
            desktop (3 col): Quick Access | logo | Social Links / Contact Info | logo | Legal */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-16 py-16 md:grid-cols-3 md:gap-x-12 md:gap-y-24 md:py-24">
          {/* row 1, col 1 — quick access */}
          <div
            data-footer="reveal"
            className="col-start-1 row-start-1 flex flex-col items-center text-center md:col-start-1 md:row-start-1 md:items-center md:text-center"
          >
            <p className={labelCls}>Quick Access</p>
            <ul className="md:mt-7 mt-4 flex flex-col items-center gap-3 md:items-center md:gap-7 ">
              {QUICK_ACCESS.map((item) => (
                <li key={item.label}>
                  {item.action === "openLeadForm" ? (
                    <button
                      type="button"
                      onClick={openLeadForm}
                      className={`${linkCls} cursor-pointer`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link href={item.href} className={linkCls}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* row 2, col 1 — contact info */}
          <div
            data-footer="reveal"
            className="col-start-2 row-start-1 flex flex-col items-center text-center md:col-start-1 md:row-start-2 md:items-center md:text-center"
          >
            <p className={labelCls}>Contact Info</p>
            <p className="md:mt-7 mt-4 flex items-center justify-center gap-2 font-label text-[10px] uppercase tracking-[0.18em] text-heading/50 md:justify-center">
              Email
            </p>
            <a
              href="mailto:support@coden Kraft.com"
              className="mt-2 block font-serif text-xs md:text-sm text-heading/80 transition-colors hover:text-supportive"
            >
              support@codenkraft.com
            </a>
          </div>

          {/* col 2, rows 1-2 — big logo (brush circle + CnK ek unit) */}
          <div
            data-footer="reveal"
            className="hidden items-center justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:flex"
          >
            <div className="footer-logo-wrap relative w-[240px] md:w-[300px]">
              <img
                src={FOOTER_LOGO}
                alt="Code N Kraft"
                className="w-full"
              />
              {/* Pixels — SVG se nikaal ke yahan (hero-logo jaisa grow) */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 329 374"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {FOOTER_PIXELS.map((p, i) => (
                  <path key={i} d={p.d} fill={p.fill} className="footer-pixel" />
                ))}
              </svg>
            </div>
          </div>

          {/* row 1, col 3 — social links */}
          <div
            data-footer="reveal"
            className="col-start-1 row-start-2 flex flex-col items-center text-center md:col-start-3 md:row-start-1 md:items-center md:text-center"
          >
            <p className={labelCls}>Social Links</p>
            <div className="md:mt-7 mt-4">
              <SocialIcons />
            </div>
          </div>

          {/* row 2, col 3 — legal */}
          <div
            data-footer="reveal"
            className="col-start-2 row-start-2 flex flex-col items-center text-center md:col-start-3 md:row-start-2 md:items-center md:text-center"
          >
            <p className={labelCls}>Legal</p>
            <ul className="md:mt-7 mt-4 flex flex-col items-center gap-2 md:items-center md:gap-7">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* copyright */}
        <p
          data-footer="reveal"
          className="pb-8 pt-14 text-center font-body text-xs text-heading/60  md:pt-0"
        >
          &copy; 2026 Code N Kraft. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
