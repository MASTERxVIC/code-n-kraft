
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/*  - Background: bg-footer token (#F3E8FF) — globals.css se             */
/*  - Center logo (brush circle + CnK ek unit):                         */
/*    public/assets/FooterLogo.svg (browser path: /assets/...)          */
/*  - Alignment: Figma ke hisaab se headings + columns center           */
/* ------------------------------------------------------------------ */

const FOOTER_LOGO = "/assets/FooterLogo.svg";

const QUICK_ACCESS = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const labelCls =
  "font-label text-[11px] font-medium uppercase tracking-[0.22em] text-heading/60";
const linkCls =
  "font-serif text-[15px] text-heading/80 transition-colors hover:text-supportive";

function SocialIcons() {
  return (
    <div className="flex flex-col items-center gap-9">
      <a href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110">
        <img src="/assets/LinkedIn.svg" alt="LinkedIn" className="h-5 w-5" />
      </a>
      <a href="#" aria-label="WhatsApp" className="transition-transform hover:scale-110">
        <img src="/assets/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5" />
      </a>
      <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
        <img src="/assets/Instagram.svg" alt="Instagram" className="h-5 w-5" />
      </a>
    </div>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-footer text-heading">
      <div className="mx-auto w-full max-w-[1440px] px-[var(--gutter)]">
        {/* tagline */}
        <p className="pt-14 text-center font-label text-[11px] text-heading/70 md:pt-20">
          Ink, Kraft, And Code — Same Care Every Time
        </p>

        {/* main grid — desktop pe 3 col x 2 rows:
            row 1: Quick Access | logo | Social Links
            row 2: Contact Info  | logo | Legal
            taaki Contact Info aur Legal ki headings ek hi line pe aayen */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 py-16 md:grid-cols-3 md:gap-y-24 md:py-24">
          {/* row 1, col 1 — quick access */}
          <div className="flex flex-col items-center text-center md:col-start-1 md:row-start-1">
            <p className={labelCls}>Quick Access</p>
            <ul className="mt-7 flex flex-col items-center gap-7">
              {QUICK_ACCESS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* row 2, col 1 — contact info */}
          <div className="flex flex-col items-center text-center md:col-start-1 md:row-start-2">
            <p className={labelCls}>Contact Info</p>
            <p className="mt-7 flex items-center justify-center gap-2 font-label text-[10px] uppercase tracking-[0.18em] text-heading/50">
              Email
            </p>
            <a
              href="mailto:katel2k69@gmail.com"
              className="mt-2 block font-serif text-sm text-heading/80 transition-colors hover:text-supportive"
            >
              katel2k69@gmail.com
            </a>
            <p className="mt-9 flex items-center justify-center gap-2 font-label text-[10px] uppercase tracking-[0.18em] text-heading/50">
              Phone Number
            </p>
            {/* asli number aane pe yahan daal dena */}
            <span className="mt-2 block font-serif text-sm text-heading/80">
              99XXXXXXXX
            </span>
          </div>

          {/* col 2, rows 1-2 — big logo (brush circle + CnK ek unit) */}
          <div className="hidden items-center justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:flex">
            <img
              src={FOOTER_LOGO}
              alt="Code N Kraft"
              className="w-[240px] md:w-[300px]"
            />
          </div>

          {/* row 1, col 3 — social links */}
          <div className="flex flex-col items-center text-center md:col-start-3 md:row-start-1">
            <p className={labelCls}>Social Links</p>
            <div className="mt-7">
              <SocialIcons />
            </div>
          </div>

          {/* row 2, col 3 — legal */}
          <div className="flex flex-col items-center text-center md:col-start-3 md:row-start-2">
            <p className={labelCls}>Legal</p>
            <ul className="mt-7 flex flex-col items-center gap-7">
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
        <p className="pb-8 pt-14 text-center font-body text-xs text-heading/60  md:pt-0">
          &copy; 2026 Code N Kraft. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
