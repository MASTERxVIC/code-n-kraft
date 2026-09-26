import Image from "next/image";
import Section from "../ui/Section";
import Pill from "../ui/Pill";
import { TextScramble } from "@/components/core/text-scramble";
import { Reveal } from "@/components/core/reveal";
import { HeroLogo } from "@/components/core/hero-logo";

const pills = [
  "No templates",
  "No shortcuts",
  "No outsourced code",
  "detail-obsessed work",
];

export default function Hero() {
  return (
    <Section id="home" noReveal className="relative overflow-visible pb-[calc(var(--nav-h)+5rem)]">
      <HeroLogo />

      <div className="relative z-10 flex flex-col xl:max-w-[700px] md:max-w-[600px]">
        <Reveal y={24} delay={0.05} scroll={false}>
          <TextScramble
            as="p"
            className="font-label xl:text-sm text-xs"
            texts={["コード・ン・クラフト", "Code 'n' Kraft"]}
          />
        </Reveal>

        <Reveal y={24} delay={0.15} scroll={false}>
          <Image
            id="hero-cnk-letter"
            src="/assets/CNKletter.svg"
            alt=""
            width={347}
            height={136}
            className="mx-auto md:mx-0 xl:my-[66px] md:my-[60px] my-[120px] h-auto xl:w-[300px] md:w-[200px] w-[300px]"
          />
        </Reveal>

        <Reveal y={32} delay={0.25} scroll={false}>
          <h1 className="font-display xl:text-[4rem] font-bold leading-tight tracking-[0.02em] md:text-[3rem] md:leading-[1.1] text-4xl">
            Crafted by Hand.
            <br />
            Escaped the Matrix.
          </h1>
        </Reveal>

        <Reveal y={32} delay={0.35} scroll={false}>
          <p className="xl:mt-[35px] md:mt-[35px] mt-[20px] xl:max-w-[658px] md:max-w-[500px] font-body xl:text-base md:text-sm text-xs font-light leading-[1.69] tracking-[0.02em]">
            Code &apos;n&apos; Kraft is a website design, development and
            search-visibility (SEO, AEO, GEO) studio.
          </p>
        </Reveal>

        <div className="xl:mt-[75px] md:mt-[35px] my-[30px] grid grid-cols-2 place-items-center gap-x-5 gap-y-5 md:flex md:flex-wrap md:place-items-stretch md:justify-start md:gap-[15px] xl:gap-[26px]">
          {pills.map((label, i) => (
            <Reveal
              key={label}
              y={20}
              delay={0.45 + i * 0.08}
              scroll={false}
              className="w-full md:w-auto"
            >
              <Pill className="w-full justify-center">{label}</Pill>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}