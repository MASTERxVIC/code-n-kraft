"use client";

import Image from "next/image";
import Section from "../ui/Section";

export default function Welcome() {
  return (
    <Section
      tone="transparent"
      className="w-full h-auto flex flex-col pb-24 min-h-[600px] md:min-h-[800px] items-center justify-center bg-transparent relative z-10"
    >
      {/* Content wrapper: aspect ratio nahi hona chahiye */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 className="font-italic text-[32px] sm:text-[40px] text-heading tracking-wide mb-4">
          Welcome To
        </h2>

        {/* CNK Logo container: Width fixed rakhein par height auto hone dein */}
        <div className="w-full max-w-[320px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[823px] h-auto flex justify-center items-center">
          <Image
            id="welcome-cnk-target"
            src="/assets/WelcomeCNK.svg"
            alt="CNK Logo"
            width={823}
            height={320}
            priority
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>
    </Section>
  );
}