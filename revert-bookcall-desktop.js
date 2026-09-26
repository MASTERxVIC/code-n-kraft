// Sirf DESKTOP navbar se "Book Call" hatao — mobile menu wala rehne do.
// CRLF-safe, idempotent. Run:  node revert-bookcall-desktop.js  (project root se)
const fs = require("fs");
const read = (f) => fs.readFileSync(f, "utf8");
const write = (f, c) => fs.writeFileSync(f, c);

{
  const f = "src/components/layout/Navbar.jsx";
  let c = read(f);

  // desktop button div hatao
  const btnRe = /\s*<div className="hidden md:block">\s*<Button onClick=\{openLeadForm\} width="w-\[190px\]" height="h-\[44px\]">\s*Book Call\s*<\/Button>\s*<\/div>/;
  if (btnRe.test(c)) { c = c.replace(btnRe, ""); console.log("  OK: desktop navbar se Book Call hataya"); }
  else console.log("  SKIP: desktop navbar me button nahi tha");

  // hook/imports hatao sirf agar ab koi use nahi bacha
  if ((c.match(/openLeadForm/g) || []).length <= 1 && c.includes("const { openLeadForm } = useLeadForm();")) {
    c = c.split("\n  const { openLeadForm } = useLeadForm();").join("");
    console.log("  OK: Navbar se hook hataya");
  }
  if (!c.includes("openLeadForm") && c.includes('\nimport { useLeadForm } from "../ui/LeadFormModal";')) {
    c = c.split('\nimport { useLeadForm } from "../ui/LeadFormModal";').join("");
    console.log("  OK: Navbar se useLeadForm import hataya");
  }
  if (!/<Button[\s>]/.test(c) && c.includes('\nimport Button from "../ui/Button";')) {
    c = c.split('\nimport Button from "../ui/Button";').join("");
    console.log("  OK: Navbar se Button import hataya");
  }

  write(f, c);
}
console.log("MobileMenu wala Book Call jaisa hai waisa rahega.");
console.log("Uske baad: npm run build  phir  npm run start");
