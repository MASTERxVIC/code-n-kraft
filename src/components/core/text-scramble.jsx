"use client";

import { useEffect, useRef, useState } from "react";

// Scramble animation me dikhne wale random characters
const GLYPHS = "█▓▒░<>—=+*#/\\|";

/**
 * texts[] ke beech scramble effect se alternate karta hai.
 * Pehla text turant render hota hai (SSR-safe), phir firstDelay
 * ke baad pehla switch, uske baad har `interval` me alternate.
 */
export function TextScramble({
  texts,
  className = "",
  as: Tag = "span",
  interval = 3500, // har switch ke beech ka gap (ms)
  firstDelay = 1200, // load ke kitni der baad pehla switch ho (ms)
  duration = 900, // ek scramble animation ki length (ms)
}) {
  const [output, setOutput] = useState(texts[0]);
  const currentRef = useRef(texts[0]);
  const indexRef = useRef(0);
  const rafRef = useRef(0);
  const tagRef = useRef(null);
  const visibleRef = useRef(true);

  // Hero viewport me hai ya nahi — track karo
  useEffect(() => {
    const el = tagRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrambleTo = (to) => {
      const from = currentRef.current;
      const start = performance.now();
      const maxLen = Math.max(from.length, to.length);

      cancelAnimationFrame(rafRef.current);
      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(progress * maxLen);
        let out = "";
        for (let i = 0; i < maxLen; i++) {
          if (i < revealed) {
            out += to[i] ?? "";
          } else {
            out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
        }
        if (progress >= 1) {
          setOutput(to);
          currentRef.current = to;
        } else {
          setOutput(out);
          rafRef.current = requestAnimationFrame(frame);
        }
      };
      rafRef.current = requestAnimationFrame(frame);
    };

    const next = () => {
      // Hero screen pe nahi dikh raha → skip (pause)
      if (!visibleRef.current) return;
      indexRef.current = (indexRef.current + 1) % texts.length;
      scrambleTo(texts[indexRef.current]);
    };

    const first = setTimeout(next, firstDelay);
    const id = setInterval(next, interval);
    return () => {
      clearTimeout(first);
      clearInterval(id);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Tag ref={tagRef} className={className}>
      {output}
    </Tag>
  );
}
