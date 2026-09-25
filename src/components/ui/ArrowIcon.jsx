// src/components/ui/ArrowButton.jsx
// EXACT Figma SVGs — artwork paths are used verbatim, nothing redrawn.
// (viewBox is cropped to the export's own clip rect 14 28 32 32, so the
// artwork itself is untouched.)
//
// - tone="light" → Property_1_Default.svg: dark plum (#44394C) filled circle.
//   The arrow is knocked out of the fill, so it shows the card background
//   through it. Used on all light cards: Rebrand, GEO, SEO, AEO, UI & UX.
// - tone="dark"  → Property_1_Default-1.svg: pale lavender (#E3C6F9) ring with
//   a solid lavender arrow (evenodd). Used on the dark Website Designing card.
//
// Rising-platform hover animation: on card hover a white platform rises from
// below the card edge and the arrow lifts to sit on it.
// Must be rendered inside an element with `group` + `overflow-hidden`
// (the Card component provides both).

/* Property_1_Default.svg — dark plum circle, knocked-out arrow (light cards) */
function ArrowOnLight({ className = "" }) {
  return (
    <svg viewBox="14 28 32 32" className={className} aria-hidden="true">
      <path
        d="M14 44C14 48.2435 15.6857 52.3131 18.6863 55.3137C21.6869 58.3143 25.7565 60 30 60C34.2435 60 38.3131 58.3143 41.3137 55.3137C44.3143 52.3131 46 48.2435 46 44C46 39.7565 44.3143 35.6869 41.3137 32.6863C38.3131 29.6857 34.2435 28 30 28C25.7565 28 21.6869 29.6857 18.6863 32.6863C15.6857 35.6869 14 39.7565 14 44ZM25.808 49.606C25.7158 49.7015 25.6054 49.7777 25.4834 49.8301C25.3614 49.8825 25.2302 49.9101 25.0974 49.9113C24.9646 49.9124 24.8329 49.8871 24.71 49.8368C24.5871 49.7865 24.4755 49.7123 24.3816 49.6184C24.2877 49.5245 24.2135 49.4128 24.1632 49.29C24.1129 49.1671 24.0876 49.0354 24.0887 48.9026C24.0899 48.7698 24.1175 48.6386 24.1699 48.5166C24.2223 48.3946 24.2985 48.2842 24.394 48.192L32.586 40H27.05C26.7848 40 26.5304 39.8946 26.3429 39.7071C26.1554 39.5196 26.05 39.2652 26.05 39C26.05 38.7348 26.1554 38.4804 26.3429 38.2929C26.5304 38.1054 26.7848 38 27.05 38H35C35.2652 38 35.5196 38.1054 35.7071 38.2929C35.8946 38.4804 36 38.7348 36 39V46.95C36 47.2152 35.8946 47.4696 35.7071 47.6571C35.5196 47.8446 35.2652 47.95 35 47.95C34.7348 47.95 34.4804 47.8446 34.2929 47.6571C34.1054 47.4696 34 47.2152 34 46.95V41.414L25.808 49.606Z"
        fill="#44394C"
      />
    </svg>
  );
}

/* Property_1_Default-1.svg — lavender ring + solid lavender arrow (dark card) */
function ArrowOnDark({ className = "" }) {
  return (
    <svg viewBox="14 28 32 32" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 44C16 47.713 17.475 51.274 20.1005 53.8995C22.726 56.525 26.287 58 30 58C33.713 58 37.274 56.525 39.8995 53.8995C42.525 51.274 44 47.713 44 44C44 40.287 42.525 36.726 39.8995 34.1005C37.274 31.475 33.713 30 30 30C26.287 30 22.726 31.475 20.1005 34.1005C17.475 36.726 16 40.287 16 44ZM46 44C46 48.2435 44.3143 52.3131 41.3137 55.3137C38.3131 58.3143 34.2435 60 30 60C25.7565 60 21.6869 58.3143 18.6863 55.3137C15.6857 52.3131 14 48.2435 14 44C14 39.7565 15.6857 35.6869 18.6863 32.6863C21.6869 29.6857 25.7565 28 30 28C34.2435 28 38.3131 29.6857 41.3137 32.6863C44.3143 35.6869 46 39.7565 46 44ZM25.708 49.606C25.5205 49.7938 25.2661 49.8994 25.0007 49.8996C24.7353 49.8997 24.4808 49.7945 24.293 49.607C24.1052 49.4195 23.9996 49.1651 23.9994 48.8997C23.9993 48.6343 24.1045 48.3798 24.292 48.192L32.486 40H26.95C26.6848 40 26.4304 39.8946 26.2429 39.7071C26.0554 39.5196 25.95 39.2652 25.95 39C25.95 38.7348 26.0554 38.4804 26.2429 38.2929C26.4304 38.1054 26.6848 38 26.95 38H34.9C35.1652 38 35.4196 38.1054 35.6071 38.2929C35.7946 38.4804 35.9 38.7348 35.9 39V46.95C35.9 47.2152 35.7946 47.4696 35.6071 47.6571C35.4196 47.8446 35.1652 47.95 34.9 47.95C34.6348 47.95 34.3804 47.8446 34.1929 47.6571C34.0054 47.4696 33.9 47.2152 33.9 46.95V41.414L25.708 49.606Z"
        fill="#E3C6F9"
      />
    </svg>
  );
}

export default function ArrowButton({ tone = "light" }) {
  return (
    <span className="absolute -bottom-2 right-4 flex flex-col items-center">
      {/* Arrow — lifts a little on hover */}
      <span className="z-10 transition-transform duration-300 ease-out group-hover:-translate-y-2">
        {tone === "dark" ? (
          <ArrowOnDark className="size-10" />
        ) : (
          <ArrowOnLight className="size-10" />
        )}
      </span>

      {/* Platform — hidden below the card edge, rises on card hover */}
      <span
        aria-hidden="true"
        className="-mt-2 h-10 w-20 translate-y-24 rounded-t-[20px] bg-button opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100"
      />
    </span>
  );
}
