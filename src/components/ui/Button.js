"use client";

import Link from "next/link";

const baseClasses =
  "group relative inline-flex max-w-full items-center justify-between overflow-hidden rounded-[20px] bg-surface pl-[38px] pr-2 font-serif text-lg italic text-black transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-supportive border border-button";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-[800ms] ease-out group-hover:scale-[1.2]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z"
        className="fill-heading transition-colors duration-500"
      />
    </svg>
  );
}

function Inner({ children, icon }) {
  return (
    <>
      {/* Background purple fill animation */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[57px] rounded-[20px] bg-button transition-[width] duration-[900ms] ease-out group-hover:w-full group-focus-visible:w-full"
      />

      {/* Label Text */}
      <span className="relative z-10 transition-colors text-heading duration-500">
        {children}
      </span>

      {/* Icon Container — default arrow, `icon` prop se override ho jata hai */}
      <span
        aria-hidden="true"
        className="relative z-10 flex h-full w-[57px] shrink-0 items-center justify-center text-heading"
      >
        {icon ?? <ArrowIcon />}
      </span>
    </>
  );
}

export default function Button({
  href,
  icon,
  width = "w-[327px]",   // Default Width
  height = "h-[49px]",   // Default Height
  className = "",
  children,
  ...props
}) {
  const cls = `${baseClasses} ${width} ${height} ${className}`;
  const inner = <Inner icon={icon}>{children}</Inner>;

  // External link
  if (href && /^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {inner}
      </a>
    );
  }

  // Next.js Router Link
  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {inner}
      </Link>
    );
  }

  // Standard Button
  return (
    <button type="button" className={cls} {...props}>
      {inner}
    </button>
  );
}
