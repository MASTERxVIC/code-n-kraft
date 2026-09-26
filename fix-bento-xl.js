// BentoGrid services logo: xl (1280px+) pe bhi truly center.
// Wajah: Section component 66.5px gutter padding deta hai, isliye section
// 1248px ka nahi, ~1147px ka banta hai. Fixed 630px center se 56px right tha.
// Fix: xl:left-1/2 (wahi formula jo lg pe already sahi kaam kar raha hai).
// Run:  node fix-bento-xl.js   (project root se)
const fs = require("fs");
const f = "src/components/ui/BentoGrid.jsx";
let c = fs.readFileSync(f, "utf8");
if (c.includes("xl:left-[630px]")) {
  c = c.split("xl:left-[630px]").join("xl:left-1/2");
  fs.writeFileSync(f, c);
  console.log("OK: xl:left-[630px] -> xl:left-1/2 (ab har width pe bilkul center)");
} else {
  console.log("SKIP: line pehle se fixed hai ya alag hai");
}
console.log("Uske baad: npm run build  phir  npm run start");
