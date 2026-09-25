import { forwardRef } from "react";
import { Reveal } from "@/components/core/reveal";

const tones = {
  light: "bg-bg",
  dark: "bg-logo text-on-dark",
  transparent: "bg-transparent",
};

const Section = forwardRef(function Section(
  {
    id,
    tone = "light",
    noPadding = false,
    noReveal = false,
    className = "",
    children,
    ...props
  },
  ref
) {
  const innerClass = `relative mx-auto max-w-[1440px] px-[var(--gutter)] ${
    noPadding ? "" : "py-12 md:py-16"
  } ${className}`;
  return (
    <section
      ref={ref}
      id={id}
      className={`${tones[tone]} scroll-mt-[var(--nav-h)]`}
      {...props}
    >
      {noReveal ? (
        <div className={innerClass}>{children}</div>
      ) : (
        <Reveal className={innerClass}>{children}</Reveal>
      )}
    </section>
  );
});

export default Section;
