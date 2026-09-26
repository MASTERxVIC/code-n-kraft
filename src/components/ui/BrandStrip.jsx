
import Image from "next/image";
import { Reveal } from "@/components/core/reveal";

const defaultLogos = [
  { id: 1, src: "/assets/brands/avqube.png", alt: "AVQUBE" },
  { id: 2, src: "/assets/brands/streamie.png", alt: "Streamie" },
  { id: 3, src: "/assets/brands/globerix.png", alt: "Globerix" },
  { id: 4, src: "/assets/logoipsum4.svg", alt: "Logoipsum 4" },
];

export default function BrandStrip({ logos = defaultLogos }) {
  return (
    <div className="w-full min-h-[149px] bg-[#F3E8FF]/40 backdrop-blur-[7.5px] flex items-center justify-center py-4">
      {/* Logos Container centered inside full-width strip */}
      <div className="w-full max-w-[1100px] flex flex-wrap items-center justify-between gap-6 md:gap-12 px-6">
        {logos.map((brand, i) => (
          <Reveal
            key={brand.id}
            delay={i * 0.1}
            className="relative w-[140px] h-[80px] md:w-[189px] md:h-[109px] flex items-center justify-center"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              className="object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}