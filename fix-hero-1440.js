// Hero Enso logo: 1440px+ (tumhara screen) pe ORIGINAL 600px size wapas.
// 1280-1439px pe chhota 500px rahega (overlap fix), 1440px se 600px.
// `min-[1440px]:` variant xl: (1280px) ke baad apply hota hai, isliye jeetta hai.
// Run:  node fix-hero-1440.js   (project root D:\Work\Redesign\code-n-kraft se)
const fs = require("fs");
const f = "src/components/core/hero-logo.jsx";
let c = fs.readFileSync(f, "utf8");

if (c.includes("min-[1440px]:w-[600px]")) {
  console.log("SKIP: 1440px rule pehle se lagi hai");
} else {
  const pairs = [
    ["xl:right-[40px]", "xl:right-[40px] min-[1440px]:right-[75px]"],
    ["xl:w-[500px]", "xl:w-[500px] min-[1440px]:w-[600px]"],
    ["xl:h-[486px]", "xl:h-[486px] min-[1440px]:h-[583px]"],
  ];
  for (const [a, b] of pairs) {
    if (c.includes(a)) {
      c = c.split(a).join(b);
      console.log(`  OK: ...${a} me 1440px rule judi`);
    } else {
      console.log(`  SKIP (line alag hai): ${a}`);
    }
  }
  fs.writeFileSync(f, c);
}
console.log("Uske baad: npm run build  phir  npm run start");
