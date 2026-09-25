
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import BrandStrip from "../ui/BrandStrip";
import { Reveal } from "@/components/core/reveal";

export default function Brands() {
  return (
    
      <Section
        id="Brands"
        tone="transparent"
        noReveal
        className="flex flex-col justify-between pb-24 min-h-[600px] md:min-h-[800px] bg-transparent px-0"
      >
        {/* Top Content: Authority Page Header */}
        <div className="w-full max-w-[1289px] mx-auto">
          <Reveal>
            <SectionHeading
              badge="THE TRUTH"
              title={
                <>
                  WE DON’T BUILD WEBSITES.
                  <br />
                  WE BUILD THE ONLY ONE YOU’LL EVER NEED AGAIN.
                </>
              }
              align="left"
              className="w-full"
            >
              <p className="text-heading/80 font-light">
                Design, development and search visibility — engineered together,
                not stitched together. <br /> From the first pixel to the first
                page-one ranking, every detail is built to be noticed.
              </p>
            </SectionHeading>
          </Reveal>

          <div className="w-full mt-12 md:mt-20 flex flex-col items-center">
            <Reveal delay={0.15}>
              <h3 className="font-body text-heading text-lg mb-8 text-center border-b border-heading/20 pb-1">
                Brands
              </h3>
            </Reveal>
            <BrandStrip />
          </div>
        </div>
      </Section>
  
  );
}