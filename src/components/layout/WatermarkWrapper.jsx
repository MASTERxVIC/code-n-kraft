import Image from "next/image";

export default function WatermarkWrapper({ children, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Background Watermark SVG Container — FIXED size box so the watermark
          renders IDENTICAL in every section. Previously this was w-full h-full
          (scaling with section height), which made tall sections like Welcome
          show a huge watermark and short sections a small one. */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div className="relative flex h-[800px] w-[800px] shrink-0 items-center justify-center md:h-[1000px] md:w-[1000px]">
          <Image
            src="/assets/LogoWatermark.svg"
            alt="Background Watermark"
            fill
            priority
            className="object-contain opacity-50 select-none pointer-events-none scale-110 md:scale-125 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
