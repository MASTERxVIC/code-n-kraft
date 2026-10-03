// Tiny markdown parser for blog posts (pure JS, no deps).
// Supports: ##/### headings, **bold**, `code`, *italic*,
// tables (| a | b |), bullet lists (- ), blockquotes (> ), --- hr, paragraphs.

export function splitRow(line) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());
}

export function parseMarkdown(src) {
  const lines = src.split("\n");
  const blocks = [];
  let i = 0;
  const isDelim = (l) => /^\|?[\s:\-|]+\|?$/.test(l) && l.includes("-");
  const isSpecial = (l) =>
    /^(#{1,3}\s|(-|\*)\s|\d+\.\s*>|>\s|\||-{3,}\s*$|\*{3,}\s*$)/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();
    if (!t) {
      i++;
      continue;
    }
    let m;
    if ((m = t.match(/^(#{1,3})\s+(.*)/))) {
      blocks.push({ type: "h" + m[1].length, text: m[2] });
      i++;
    } else if (
      t.startsWith("|") &&
      isDelim((lines[i + 1] || "").trim())
    ) {
      const head = splitRow(t);
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(splitRow(lines[i].trim()));
        i++;
      }
      blocks.push({ type: "table", head, rows });
    } else if (/^(-|\*)\s+/.test(t)) {
      const items = [];
      while (i < lines.length && /^(-|\*)\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(-|\*)\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
    } else if (/^\d+\.\s+/.test(t)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
    } else if (t.startsWith(">")) {
      const qs = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        qs.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", text: qs.join(" ") });
    } else if (/^(-{3,}|\*{3,})$/.test(t)) {
      blocks.push({ type: "hr" });
      i++;
    } else {
      const ps = [];
      while (i < lines.length) {
        const l2 = lines[i].trim();
        if (!l2 || isSpecial(l2)) break;
        ps.push(l2);
        i++;
      }
      if (ps.length) blocks.push({ type: "p", text: ps.join(" ") });
    }
  }
  return blocks;
}

export function inline(text) {
  const parts = [];
  const re = /(\*\*.+?\*\*|`[^`]+?`|\*[^*\n]+?\*)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ t: "text", x: text.slice(last, m.index) });
    const tok = m[0];
    if (tok.startsWith("**")) parts.push({ t: "b", x: tok.slice(2, -2) });
    else if (tok.startsWith("`")) parts.push({ t: "code", x: tok.slice(1, -1) });
    else parts.push({ t: "i", x: tok.slice(1, -1) });
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push({ t: "text", x: text.slice(last) });
  return parts;
}
