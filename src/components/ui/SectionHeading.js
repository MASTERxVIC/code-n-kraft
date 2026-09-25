export default function SectionHeading({
  badge,
  title,
  subtitle,
  children,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className = "",
}) {
  const center = align === "center";
  const dark = tone === "dark";

  return (
    <header
      className={`flex flex-col ${
        center ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <span
          className={`mb-2 font-label text-[0.6875rem] uppercase tracking-[0.1em] ${
            dark ? "text-button" : "text-heading/70"
          }`}
        >
          {badge}
        </span>
      )}

      <Tag
        className={`max-w-[1100px] text-3xl md:text-[2.5rem] font-bold font-display uppercase leading-[1.25] tracking-wider ${
          dark ? "text-on-dark" : "text-heading"
        }`}
      >
        {title}
      </Tag>

      {subtitle && <p className="mt-4 text-xl font-body">{subtitle}</p>}

      {children && (
        <div className="mt-6 md:mt-8 max-w-[1100px] text-base leading-[1.9] tracking-wider">
          {children}
        </div>
      )}
    </header>
  );
}