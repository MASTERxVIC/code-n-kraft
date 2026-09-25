"use client";

import { useEffect } from "react";

/* Service pages ke beech <Link> se navigate karne pe (same [slug] route)
   Next.js scroll position preserve kar leta hai — neeche "Other services"
   se click karke aane pe user neeche hi reh jata hai. Slug badalte hi
   page ko top pe le jao. Site pe Lenis active hai, isliye usi ke API se
   scroll karo (native scrollTo se glitch ho sakta hai); Lenis na mile to
   native fallback. */
export default function ScrollToTop({ slug }) {
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  return null;
}
