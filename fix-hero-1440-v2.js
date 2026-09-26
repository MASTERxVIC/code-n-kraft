// Hero Enso logo: 1440px+ pe original 600px — SAHI tareeka (v2).
// Seekh: Tailwind v4 me `min-[1440px]:` variant stylesheet me `xl:` se PEHLE
// aata hai, isliye xl: hamesha jeet ta tha. Ab seedha CSS media query
// globals.css me (unlayered = Tailwind utilities se hamesha jeet ta hai).
// Result: 1024-1279 → 440px | 1280-1439 → 500px | 1440+ → 600px (original).
// Run:  node fix-hero-1440-v2.js   (project root se)
const fs = require("fs");

// 1) hero-logo.jsx se be-asar min-[1440px]: classes hatao
{
  const f = "src/components/core/hero-logo.jsx";
  let c = fs.readFileSync(f, "utf8");
  const dead = [
    " min-[1440px]:right-[75px]",
    " min-[1440px]:w-[600px]",
    " min-[1440px]:h-[583px]",
  ];
  let n = 0;
  for (const d of dead) {
    if (c.includes(d)) {
      c = c.split(d).join("");
      n++;
      console.log(`  OK: hataya →${d}`);
    }
  }
  fs.writeFileSync(f, c);
  console.log(n ? `hero-logo.jsx: ${n} be-asar class(es) hatayi` : "hero-logo.jsx: hatane ko kuch nahi (pehle se saaf)");
}

// 2) globals.css me bulletproof 1440px rule jodo
{
  const f = "src/app/globals.css";
  let c = fs.readFileSync(f, "utf8");
  const marker = "Hero Enso logo: 1440px+";
  if (c.includes(marker)) {
    console.log("globals.css: SKIP (1440px rule pehle se hai)");
  } else {
    c += `
/* ---------- 5. ${marker} pe original 600px size ----------
   (Tailwind v4 me min-[1440px]: variant xl: se PEHLE sort hota hai,
   isliye class-based approach kaam nahi karta — ye unlayered rule
   utilities layer se hamesha jeet ta hai.) */
@media (min-width: 1440px) {
  #hero-enso-logo {
    width: 600px;
    height: 583px;
    right: 75px;
  }
}
`;
    fs.writeFileSync(f, c);
    console.log("globals.css: OK (1440px media query judi)");
  }
}
console.log("Uske baad: npm run build  phir  npm run start");
