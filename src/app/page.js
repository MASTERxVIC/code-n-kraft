// page.js
import WatermarkWrapper from "@/components/layout/WatermarkWrapper";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Brands from "@/components/sections/Brands";
import Presence from "@/components/sections/ProblemWeSolve";
import Services from "@/components/sections/Services";
import WorkInfo from "@/components/sections/WorkInfo";
import ProcessJourney from "@/components/sections/ProcessJourney";
import ProofVault from "@/components/sections/ProofVault";
import NotFor from "@/components/sections/NotFor";
import Faq from "@/components/sections/FAQ";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";
import Belief from "@/components/sections/Belief";
import DarkWatermarkWrapper from "@/components/layout/DarkWatermarkWrapper";


export default function Home() {
  return (
    <>
      <Hero />

      <WatermarkWrapper>
        <Welcome />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <Brands />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <Presence />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <Services />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <WorkInfo />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <ProcessJourney />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <ProofVault />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <NotFor />
      </WatermarkWrapper>
      <WatermarkWrapper>
        <Faq />
      </WatermarkWrapper>
      <DarkWatermarkWrapper>
        <Belief />
      </DarkWatermarkWrapper>
      <WatermarkWrapper>
        <Cta />
      </WatermarkWrapper>
      <Footer/>
    </>
  );
}
