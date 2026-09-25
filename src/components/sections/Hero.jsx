import Image from "next/image";
import Section from "../ui/Section";
import Pill from "../ui/Pill";
import { TextScramble } from "@/components/core/text-scramble";

const pills = [
  "No templates",
  "No shortcuts",
  "No outsourced code",
  "detail-obsessed work",
];

export default function Hero() {
  return (
    <Section id="home" className="relative overflow-visible pb-[calc(var(--nav-h)+5rem)]">
      <Image
        id="hero-enso-logo"
        src="/assets/HeroLogo.svg"
        alt=""
        aria-hidden="true"
        width={600}
        height={583}
        priority
        className="z-30 pointer-events-none absolute xl:right-[75px] lg:right-[15px] right-0 top-[90px] lg:opacity-100 md:opacity-20 opacity-5 max-w-none xl:w-[600px] xl:h-[583px] lg:w-[500px] lg:h-[383px] md:w-[480px] md:h-[383px]"
      />

      <div className="relative z-10 flex flex-col xl:max-w-[700px] md:max-w-[600px]">
        <TextScramble
          as="p"
          className="font-label xl:text-sm text-xs"
          texts={["コード・ン・クラフト", "Code 'n' Kraft"]}
        />

        <Image
          id="hero-cnk-letter"
          src="/assets/CNKletter.svg"
          alt=""
          width={300}
          height={140}
          className="mx-auto md:mx-0 xl:my-[66px] md:my-[60px] my-[120px] h-auto xl:w-[300px] md:w-[200px] w-[300px]"
        />

        <h1 className="font-display xl:text-[4rem] font-bold leading-tight tracking-[0.02em] md:text-[3rem] md:leading-[1.1] text-4xl">
          Crafted by Hand.
          <br />
          Escaped the Matrix.
        </h1>

        <p className="xl:mt-[35px] md:mt-[35px] mt-[20px] xl:max-w-[658px] md:max-w-[500px] font-body xl:text-base md:text-sm text-xs font-light leading-[1.69] tracking-[0.02em]">
          Code &apos;n&apos; Kraft is a website design, development and
          search-visibility (SEO, AEO, GEO) studio.
        </p>

        <div className="xl:mt-[75px] md:mt-[35px] my-[30px] grid grid-cols-2 place-items-center gap-x-5 gap-y-5 md:flex md:flex-wrap md:place-items-stretch md:justify-start md:gap-[15px] xl:gap-[26px]">
          {pills.map((label) => (
            <Pill key={label} className="w-full justify-center md:w-auto">
              {label}
            </Pill>
          ))}
        </div>
      </div>
    </Section>
  );
}