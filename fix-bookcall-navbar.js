// "Book Call" hero se hatakar NAVBAR me (desktop + mobile menu).
// Dono haalat me safe: chahe fix-floto-5.js laga ho ya na laga ho.
// Run:  node fix-bookcall-navbar.js   (project root se)
const fs = require("fs");
const read = (f) => fs.readFileSync(f, "utf8");
const write = (f, c) => fs.writeFileSync(f, c);

/* ---------- 1. Hero.jsx se Book Call revert ---------- */
{
  const f = "src/components/sections/Hero.jsx";
  let c = read(f);

  const btnRe = /\s*<Reveal y=\{24\} delay=\{0\.42\} scroll=\{false\}>\s*<div className="mt-\[28px\] flex justify-center md:mt-\[35px\] md:justify-start xl:mt-\[40px\]">\s*<Button onClick=\{openLeadForm\}>Book Call<\/Button>\s*<\/div>\s*<\/Reveal>/;
  if (btnRe.test(c)) { c = c.replace(btnRe, ""); console.log("  OK: Hero se Book Call button hataya"); }
  else console.log("  SKIP: Hero me Book Call button nahi tha");

  if (c.includes("const { openLeadForm } = useLeadForm();")) {
    c = c.split("\n  const { openLeadForm } = useLeadForm();").join("");
    console.log("  OK: Hero se openLeadForm hook hataya");
  } else console.log("  SKIP: Hero me hook nahi tha");

  const impAdd = '\nimport Button from "../ui/Button";\nimport { useLeadForm } from "../ui/LeadFormModal";';
  if (c.includes(impAdd)) { c = c.split(impAdd).join(""); console.log("  OK: Hero se Button imports hataye"); }
  else console.log("  SKIP: Hero me imports nahi the");

  if (c.startsWith('"use client";\n\n') && !/use(State|Effect|Ref|LeadForm|GSAP|DeferredGsap)\(/.test(c)) {
    c = c.slice('"use client";\n\n'.length);
    console.log('  OK: Hero se "use client" hataya (wapas server component)');
  } else console.log('  SKIP: Hero ka "use client" chheda nahi');

  write(f, c);
}

/* ---------- 2. Navbar.jsx — desktop Book Call ---------- */
{
  const f = "src/components/layout/Navbar.jsx";
  let c = read(f);

  if (!c.includes('from "../ui/Button"')) {
    c = c.split('import MobileMenu from "./MobileMenu";').join(
      'import MobileMenu from "./MobileMenu";\nimport Button from "../ui/Button";\nimport { useLeadForm } from "../ui/LeadFormModal";'
    );
    console.log("  OK: Navbar me imports jude");
  } else console.log("  SKIP: Navbar imports pehle se hain");

  if (!c.includes("const { openLeadForm } = useLeadForm();")) {
    c = c.split("const pathname = usePathname();").join(
      "const pathname = usePathname();\n  const { openLeadForm } = useLeadForm();"
    );
    console.log("  OK: Navbar me openLeadForm hook joda");
  } else console.log("  SKIP: Navbar hook pehle se hai");

  if (!c.includes("Book Call")) {
    const navClose = "        </nav>\n";
    const btnDiv = `\n        <div className="hidden md:block">
          <Button onClick={openLeadForm} width="w-[190px]" height="h-[44px]">
            Book Call
          </Button>
        </div>\n`;
    c = c.split(navClose).join(navClose + btnDiv);
    console.log("  OK: Navbar me desktop Book Call button joda");
  } else console.log("  SKIP: Navbar button pehle se hai");

  write(f, c);
}

/* ---------- 3. MobileMenu.jsx — menu ke andar Book Call ---------- */
{
  const f = "src/components/layout/MobileMenu.jsx";
  let c = read(f);

  if (!c.includes('from "../ui/Button"')) {
    c = c.split('import CloseMenuIcon from "../icons/CloseMenuIcon";').join(
      'import CloseMenuIcon from "../icons/CloseMenuIcon";\nimport Button from "../ui/Button";\nimport { useLeadForm } from "../ui/LeadFormModal";'
    );
    console.log("  OK: MobileMenu me imports jude");
  } else console.log("  SKIP: MobileMenu imports pehle se hain");

  if (!c.includes("const { openLeadForm } = useLeadForm();")) {
    c = c.split("const [mounted, setMounted] = useState(false);").join(
      "const [mounted, setMounted] = useState(false);\n  const { openLeadForm } = useLeadForm();"
    );
    console.log("  OK: MobileMenu me openLeadForm hook joda");
  } else console.log("  SKIP: MobileMenu hook pehle se hai");

  if (!c.includes("Book Call")) {
    const ulClose = "      </ul>\n    </nav>";
    const btnDiv = `      </ul>
      <div className="flex justify-center px-[var(--gutter)]">
        <Button
          width="w-[240px]"
          onClick={() => {
            setOpen(false);
            openLeadForm();
          }}
        >
          Book Call
        </Button>
      </div>
    </nav>`;
    c = c.split(ulClose).join(btnDiv);
    console.log("  OK: MobileMenu me Book Call button joda");
  } else console.log("  SKIP: MobileMenu button pehle se hai");

  write(f, c);
}

console.log("Uske baad: npm run build  phir  npm run start");
