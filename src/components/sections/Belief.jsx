import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

/* ------------------------------------------------------------------ */
/*  BELIEF — "What we believe"                                          */
/*  - Section + SectionHeading components ka estemaal                   */
/*  - Background: bg-heading (#44394c), highlight: text-button (#e3c6f9)*/
/*  - Figma me dark bg pe halka brush-circle texture hai — uska asset   */
/*    mile toh background me add kar dunga                              */
/*  NOTE: pb-24 md:pb-[150px] wrapper — section height ProofVault/      */
/*  NotFor se match karne ke liye (NotFor wali pb convention).         */
/* ------------------------------------------------------------------ */

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
  return (
    <Section id="belief" tone="transparent" className=" text-white">
      <div className="pb-24 md:pb-[150px]">
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

        <div className="mt-10 max-w-4xl space-y-5">
          {STATEMENTS.map((statement) => (
            <p
              key={statement}
              className="font-light text-base leading-loose tracking-wide text-justify text-white/90 md:text-md"
            >
              {statement}
            </p>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-80 md:gap-60">
          <Button icon={<CheckIcon />} width="w-[220px]">Agreed</Button>
          <Button icon={<CrossIcon />} width="w-[220px]">Not Agreed</Button>
        </div>
      </div>
    </Section>
  );
}
