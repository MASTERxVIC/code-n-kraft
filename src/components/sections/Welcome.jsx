"use client";

import Section from "../ui/Section";
import { Reveal } from "@/components/core/reveal";
import { WelcomeLogo } from "@/components/core/welcome-logo";

export default function Welcome() {
  return (
    <Section
      tone="transparent"
      noReveal
      className="w-full h-auto flex flex-col pb-24 min-h-[600px] md:min-h-[800px] items-center justify-center bg-transparent relative z-10"
    >
      {/* Content wrapper: aspect ratio nahi hona chahiye */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] mx-auto">
        {/* Title */}
        <Reveal>
          <h2 className="font-italic text-[32px] sm:text-[40px] text-heading tracking-wide mb-4">
            Welcome To
          </h2>
        </Reveal>

        {/* CNK Logo: pixels grow animation ke saath */}
        <Reveal delay={0.15} className="w-full">
          <WelcomeLogo />
        </Reveal>
      </div>
    </Section>
  );
}