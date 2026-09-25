import { forwardRef } from "react";

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
    className = "",
    children,
    ...props
  },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`${tones[tone]} scroll-mt-[var(--nav-h)]`}
      {...props}
    >
      <div
        className={`relative mx-auto max-w-[1440px] px-[var(--gutter)] ${
          noPadding ? "" : "py-12 md:py-16"
        } ${className}`}
      >
        {children}
      </div>
    </section>
  );
});

export default Section;
