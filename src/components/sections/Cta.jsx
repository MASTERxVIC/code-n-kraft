
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Cta() {
  return (
    <Section id="cta" tone="transparent" className="bg-transparent px-0">
      <div className="mx-auto w-full max-w-[1289px] px-4 pb-24 md:px-0 md:pb-[120px]">
        <div className="mx-auto max-w-[900px] py-24 text-center md:py-36">
          <h2 className="font-display text-[32px] font-bold uppercase leading-[1.25] tracking-[0.06em] text-heading md:text-[44px]">
            Let&rsquo;s build the website your brand actually deserves
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[11px] font-medium uppercase leading-relaxed tracking-[0.18em] text-heading/60 md:text-xs">
            Whether it&rsquo;s your first site or your fifth rebrand, we bring
            the same standard to every project.
          </p>

          <div className="mt-10 flex justify-center">
            {/* TODO: apna booking/contact link yahan daal dena */}
            <Button href="/contact">Book a free Discovery Call</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
