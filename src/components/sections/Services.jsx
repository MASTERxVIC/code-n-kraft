
import BentoGrid from "../ui/BentoGrid";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { Reveal } from "@/components/core/reveal";


export default function Services() {
  return (
   
      <Section
        id="Services"
        tone="transparent"
        noReveal
        className="flex flex-col justify-between pb-16 bg-transparent px-0"
      >
        {/* Top Content: Authority Page Header */}
        <div className="w-full max-w-[1289px] mx-auto px-4 md:px-0">
          <Reveal>
            <SectionHeading
              badge="services"
              title={
                <>
                  Everything Your Website Needs to Actually Work
                </>
              }
              align="left"
              className="w-full"
            >
            </SectionHeading>
          </Reveal>
          <div className="my-[46px]">
            <BentoGrid/>
          </div>
        </div>
      </Section>
    
  );
}
