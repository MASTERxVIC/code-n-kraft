
import Image from "next/image";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/* Duotone filter: maps image darks → #150521, lights → white */
function DuotoneFilter() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute h-0 w-0"
    >
      <defs>
        <filter id="duotone-plum">
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.082 0.31 1" />
            <feFuncG type="table" tableValues="0.02 0.27 1" />
            <feFuncB type="table" tableValues="0.129 0.35 1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}

const duotoneCls = "h-auto w-44 md:w-56 [filter:url(#duotone-plum)]";

export default function WorkInfo() {
  return (
    <Section
      id="WorkInfo"
      tone="transparent"
      className="flex flex-col justify-between pb-16 bg-transparent px-0"
    >
      <DuotoneFilter />

      {/* Content column */}
      <div className="w-full max-w-[1289px] mx-auto px-4 md:px-0">
        <SectionHeading
          badge="Who we work with"
          title={
            <span className="uppercase">
              Two Kinds of Clients. One Standard.
            </span>
          }
          align="center"
          className="w-full"
        />

        {/* Editorial rows: text / illustration alternating */}
        <div className="mt-16 md:mt-1 space-y-14 md:space-y-2">
          {/* Row 1 — First-Timers: text + image as ONE centered unit */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-10">
            <p className="max-w-xl md:max-w-3xl font-body font-light text-lg md:text-md leading-relaxed text-heading/80">
              <span className="font-display font-medium text-[24px] text-heading">
                First-Timers
              </span>
              {" — "}
              You&rsquo;re building your first real website and want it done
              right from the start, not fixed later.
            </p>
            <div className="shrink-0 hidden md:block md:translate-y-10">
              <Image
                src="/assets/FirstTimers.svg"
                alt="Illustration of a first-time client"
                width={208}
                height={277}
                className={duotoneCls}
              />
            </div>
          </div>

          {/* Row 2 — Rebrands & Rebuilds: image + text as ONE centered unit */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-10">
            <div className="shrink-0 hidden md:block order-2 md:order-1 md:-translate-y-35">
              <Image
                src="/assets/Rebrand.svg"
                alt="Illustration of a rebrand client"
                width={208}
                height={310}
                className={duotoneCls}
              />
            </div>
            <p className="max-w-xl md:max-w-3xl order-1 md:order-2 font-body font-light text-lg md:text-md leading-relaxed text-heading/80">
              <span className="font-display font-medium text-[24px] text-heading">
                Rebrands &amp; Rebuilds
              </span>
              {" — "}
              If you&rsquo;re here, you already know your current site no
              longer represents who you&rsquo;ve become. We rebuild it without
              erasing the equity you&rsquo;ve already built.
            </p>
          </div>

          {/* Note — centered */}
          <p className="md:-translate-y-20 pt-2 text-center font-body font-light text-lg md:text-md leading-relaxed text-heading/80">
            <span className="font-display font-medium text-heading text-[24px]">Note</span>
            {" — "}
            Either way, you get the same obsessive standard of work.
          </p>
        </div>
      </div>
    </Section>
  );
}
