export default function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex h-[40px] items-center whitespace-nowrap rounded-[20px] border border-logo bg-surface xl:px-4 md:px-2 xl:py-5 md:py-3  font-body text-sm font-light tracking-[0.02em] text-heading ${className}`}
    >
      {children}
    </span>
  );
}