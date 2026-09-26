// Floto audit fixes — Hero "Book Call" CTA, #2 carousel caption sync, #14 footer headers.
// (#17: Work link pehle se #proof se linked hai — koi change nahi.
//  #1: naya button shared ui/Button use karta hai — naya style nahi judta.)
// Run:  node fix-floto-5.js   (project root se)
const fs = require("fs");

function read(f) { return fs.readFileSync(f, "utf8"); }
function write(f, c) { fs.writeFileSync(f, c); }

/* ---------------- A. Hero.jsx — "Book Call" CTA ---------------- */
{
  const f = "src/components/sections/Hero.jsx";
  let c = read(f);

  if (!c.startsWith('"use client"')) {
    c = '"use client";\n\n' + c;
    console.log("  OK: Hero.jsx me \"use client\" joda");
  } else console.log("  SKIP: Hero.jsx pehle se client");

  const impAnchor = 'import { HeroLogo } from "@/components/core/hero-logo";';
  if (!c.includes('from "../ui/Button"')) {
    c = c.split(impAnchor).join(
      impAnchor + '\nimport Button from "../ui/Button";\nimport { useLeadForm } from "../ui/LeadFormModal";'
    );
    console.log("  OK: Hero.jsx me Button + useLeadForm import jude");
  } else console.log("  SKIP: Hero.jsx imports pehle se hain");

  if (!c.includes("const { openLeadForm } = useLeadForm();")) {
    c = c.split("export default function Hero() {").join(
      'export default function Hero() {\n  const { openLeadForm } = useLeadForm();'
    );
    console.log("  OK: Hero.jsx me openLeadForm hook joda");
  } else console.log("  SKIP: Hero.jsx hook pehle se hai");

  const pillsAnchor = '<div className="xl:mt-[75px] md:mt-[35px] my-[30px] grid grid-cols-2';
  const btnBlock = `<Reveal y={24} delay={0.42} scroll={false}>
          <div className="mt-[28px] flex justify-center md:mt-[35px] md:justify-start xl:mt-[40px]">
            <Button onClick={openLeadForm}>Book Call</Button>
          </div>
        </Reveal>

        `;
  if (!c.includes(">Book Call</Button>")) {
    c = c.split(pillsAnchor).join(btnBlock + pillsAnchor);
    console.log("  OK: Hero.jsx me 'Book Call' button joda (sub-headline ke baad)");
  } else console.log("  SKIP: 'Book Call' button pehle se hai");

  write(f, c);
}

/* ---------------- B. ProofVault.jsx — single caption, active se bound ---------------- */
{
  const f = "src/components/sections/ProofVault.jsx";
  let c = read(f);

  // 1) per-card caption hatao (agar hai)
  const perCardRe = /\s*{\/\* Brand name under the card \*\/}\s*<p[\s\S]*?\{w\.brand\}\s*<\/p>/;
  if (perCardRe.test(c)) {
    c = c.replace(perCardRe, "");
    console.log("  OK: ProofVault se per-card caption hataya");
  } else console.log("  SKIP: per-card caption nahi mila (pehle se hata/saaf)");

  // 2) single caption jodo — seedha WORKS[active] se
  if (!c.includes("WORKS[active].brand")) {
    const arrowsAnchor = "{/* Arrows */}";
    const captionBlock = `{/* Single caption — hamesha active card se bound, desync impossible */}
          <p className="mt-3 text-center font-display text-sm font-semibold uppercase tracking-[0.15em] text-heading">
            {WORKS[active].brand}
          </p>

          `;
    if (c.includes(arrowsAnchor)) {
      c = c.split(arrowsAnchor).join(captionBlock + arrowsAnchor);
      console.log("  OK: ProofVault me single caption joda (WORKS[active].brand)");
    } else console.log("  SKIP: Arrows anchor nahi mila — file bhejo, haath se kar dunga");
  } else console.log("  SKIP: single caption pehle se hai");

  write(f, c);
}

/* ---------------- C. Footer.jsx — mobile pe headers align ---------------- */
{
  const f = "src/components/sections/Footer.jsx";
  let c = read(f);

  const contactOld = 'className="col-start-2 row-start-1 flex flex-col items-center text-center md:col-start-1 md:row-start-2 md:items-center md:text-center"';
  const contactNew = 'className="col-start-1 row-start-2 flex flex-col items-center text-center md:col-start-1 md:row-start-2 md:items-center md:text-center"';
  const socialOld = 'className="col-start-1 row-start-2 flex flex-col items-center text-center md:col-start-3 md:row-start-1 md:items-center md:text-center"';
  const socialNew = 'className="col-start-2 row-start-1 flex flex-col items-center text-center md:col-start-3 md:row-start-1 md:items-center md:text-center"';

  if (c.includes(contactOld)) {
    c = c.split(contactOld).join(contactNew);
    console.log("  OK: Footer mobile — Contact Info row 2 me");
  } else console.log("  SKIP: Contact Info pehle se row 2 me");

  if (c.includes(socialOld)) {
    c = c.split(socialOld).join(socialNew);
    console.log("  OK: Footer mobile — Social Links row 1 me (headers align)");
  } else console.log("  SKIP: Social Links pehle se row 1 me");

  const comOld = "mobile (2 col): Quick Access | Contact Info / Social Links | Legal";
  const comNew = "mobile (2 col): Quick Access | Social Links / Contact Info | Legal";
  if (c.includes(comOld)) c = c.split(comOld).join(comNew);

  write(f, c);
}

console.log("Uske baad: npm run build  phir  npm run start");
