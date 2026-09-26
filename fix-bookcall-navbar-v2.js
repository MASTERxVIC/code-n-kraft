// v2 — v1 me Windows line endings (\r\n) ki wajah se navbar/mobilemenu ke
// anchors silently fail hue the (OK print hua, change nahi hua).
// Ye version line-ending safe hai AUR verify karta hai ki change hua ya nahi.
// Run:  node fix-bookcall-navbar-v2.js   (project root se)
const fs = require("fs");
const read = (f) => fs.readFileSync(f, "utf8");
const write = (f, c) => fs.writeFileSync(f, c);

function insertOnce(file, label, marker, doInsert) {
  let c = read(file);
  if (c.includes(marker)) { console.log(`  SKIP: ${label} (pehle se hai)`); return; }
  const NL = c.includes("\r\n") ? "\r\n" : "\n";
  const before = c;
  c = doInsert(c, NL);
  if (c === before) { console.log(`  FAIL: ${label} — jagah nahi mili, file bhejo`); return; }
  write(file, c);
  console.log(`  OK: ${label}`);
}

/* Desktop navbar — nav links ke baad, MobileMenu se pehle */
insertOnce(
  "src/components/layout/Navbar.jsx",
  "Navbar desktop Book Call",
  "Book Call",
  (c, NL) =>
    c.replace(
      /(<MobileMenu links=\{links\} \/>)/,
      `<div className="hidden md:block">${NL}          <Button onClick={openLeadForm} width="w-[190px]" height="h-[44px]">${NL}            Book Call${NL}          </Button>${NL}        </div>${NL}${NL}        $1`
    )
);

/* Mobile menu — links ke neeche */
insertOnce(
  "src/components/layout/MobileMenu.jsx",
  "MobileMenu Book Call",
  "Book Call",
  (c, NL) =>
    c.replace(
      /(      <\/ul>)/,
      `$1${NL}      <div className="flex justify-center px-[var(--gutter)]">${NL}        <Button${NL}          width="w-[240px]"${NL}          onClick={() => {${NL}            setOpen(false);${NL}            openLeadForm();${NL}          }}${NL}        >${NL}          Book Call${NL}        </Button>${NL}      </div>`
    )
);

console.log("Uske baad: npm run build  phir  npm run start");
