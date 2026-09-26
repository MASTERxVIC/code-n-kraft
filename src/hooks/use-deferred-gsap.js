"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * useDeferredGsap(ref, setup, rootMargin = "600px")
 *
 * IntersectionObserver-gated GSAP setup. setup() runs ONCE — the first time
 * ref.current comes within `rootMargin` of the viewport — instead of
 * synchronously at page load. IO fires immediately for already-visible
 * elements, so above-fold callers behave exactly like before.
 *
 * setup mirrors a useGSAP callback body (tweens + ScrollTrigger creation);
 * it may return a cleanup, which runs on unmount. The whole setup is wrapped
 * in gsap.context scoped to ref, so unmount reverts everything — same
 * semantics as useGSAP(..., { scope: ref }).
 *
 * Kyun: page load pe 19 ScrollTriggers + bhaari layout reads (ProcessJourney
 * ke 3006 SVG geometry calls, NotFor ka offsetTop) ek saath mount pe chalte
 * the — mobile pe ~1.27s ka longest task. Defer karne se ye kaam load window
 * se bahar jata hai; animations wahi scroll positions pe fire hote hain,
 * isliye visuals bilkul same rehte hain.
 */
export function useDeferredGsap(ref, setup, rootMargin = "600px") {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx = null;
    let setupCleanup = null;
    let fired = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (fired) return;
        if (!entries.some((e) => e.isIntersecting)) return;
        fired = true;
        observer.disconnect();
        ctx = gsap.context(() => {
          const maybeCleanup = setup();
          if (typeof maybeCleanup === "function") setupCleanup = maybeCleanup;
        }, ref);
      },
      { rootMargin }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (typeof setupCleanup === "function") setupCleanup();
      if (ctx) ctx.revert();
    };
    // setup/ref intentionally mount-once — wahi semantics jo useGSAP(...,
    // { scope }) blocks me the, jinhe ye hook replace karta hai.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
