import Image from "next/image";

export default function DarkWatermarkWrapper({ children, className = "" }) {
  return (
    <div className={`relative w-full bg-heading overflow-hidden ${className}`}>
     
      <div className="absolute inset-0 pointer-events-none z-0 hidden items-center justify-center overflow-hidden md:flex">
        <div className="relative flex h-[800px] w-[800px] shrink-0 items-center justify-center md:h-[1000px] md:w-[1000px]">
          <Image
            src="/assets/LogoDarkWatermark.svg"
            alt=""
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
