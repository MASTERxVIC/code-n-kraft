# CNK: Baad me badalne wali cheezein

## Confirm karna (Figma / client se)
- [x] Ink (paragraph text) color ka exact hex. Abhi `globals.css` me `--color-ink`, `--color-surface`, `--color-on-dark` nahi hain. Confirm hone par add karna, tab body ka color `--color-ink` par wapas
- [ ] Bricolage poori site ke liye ya sirf headings ke liye (`--font-body` badalna hai)
- [ ] Geologica rakhna hai ya nahi (eyebrow/labels)
- [ ] Target market: India / global / dono
- [ ] Target keywords

## Code me placeholder
- [ ] `layout.js`: `metadataBase` me `https://example.com` ki jagah real domain
- [ ] `layout.js`: OG image add karna (abhi nahi hai)
- [x] `globals.css`: `--nav-h`, `--gutter`, `--section-y` ko Figma Dev Mode ke exact values se replace
- [x] `globals.css`: `--color-heading` abhi seedha `#44394C` hai, logo se linked nahi. Chaho to `var(--color-logo)` karo
- [ ] Agar fonts apply na dikhein: `@theme` ko `@theme inline` karna

## Content (fake proof mat lagana)
- [ ] Authority: real client logos, warna section hatao
- [ ] Proof Vault: real case studies (client, problem, kya kiya, result)
- [ ] FAQ: real sawal-jawab
- [ ] Footer: domain email, real phone
- [ ] Nav me "Projects" ek hi baar

## Baad ke steps
- [ ] Per-page metadata, schema (JSON-LD), `sitemap.js`, `robots.js`
- [ ] Navbar, Footer, SmoothScroll `layout.js` me add karna

- [ ] `public/brand/logo.svg` final naam/path, schema (`logo`) me use hoga
- [ ] `src/app/icon.svg` favicon banana
- [ ] `public/og/` me OG image banake `layout.js` me add karna
- [ ] Figma se svg export: icons me `fill`/`stroke` ko `currentColor` karna
- [x] Gutter/section-y = 75px @1440px, chaaron taraf same. Confirmed.
- [x] SmoothScroll (Lenis + GSAP ScrollTrigger) wired in layout.js, reduced-motion respect added
- [ ] Navbar "footer aane par gayab" behavior — abhi implement nahi hua, GSAP/ScrollTrigger se banega jab Footer section banegi