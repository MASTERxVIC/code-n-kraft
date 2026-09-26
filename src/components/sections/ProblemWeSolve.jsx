"use client";

import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useLeadForm } from "@/components/ui/LeadFormModal";
import { Reveal } from "@/components/core/reveal";

export default function ProblemWeSolve() {
  const { openLeadForm } = useLeadForm();
  return (
   
      <Section
        id="Presence"
        tone="transparent"
        noReveal
        className="flex flex-col justify-between  bg-transparent px-0"
      >
        {/* Top Content: Authority Page Header */}
        <div className="w-full max-w-[1289px] mx-auto px-4 md:px-0">
          <Reveal>
            <SectionHeading
              badge="The problem we solve"
              title={
                <>
                  Most Agencies Sell You a Website.
                  <br />
                  We Build You a Presence.
                </>
              }
              align="left"
              className="w-full"
            >
              <p className="text-heading/80 font-light text-justify">
                A website that just "exists" is invisible the moment it launches.
                Search engines don't find it. 
                <br className="hidden md:block" />{" "}AI answer engines don't cite it. Customers don't remember it. We treat your website as <br className="hidden md:block" />
                infrastructure for your entire brand — built with design, code,
                and search strategy working <br className="hidden md:block" /> as one system from day one, not
                bolted together afterward.
              </p>
            </SectionHeading>
          </Reveal>
          <div className="relative mt-12 md:mb-0 mb-27 xl:mt-0 xl:min-h-[578px]">
            <Reveal
              x={64}
              y={0}
              delay={0.25}
              className="xl:absolute xl:left-[872px] xl:top-[314px]"
            >
              <Button className="w-[270px] h-[56px] " onClick={openLeadForm}>
                Build Your Presence
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>
    
  );
}
