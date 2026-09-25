/* ------------------------------------------------------------------
   Services catalogue — 6 service detail pages ka single source of truth.
   slug            → /services/<slug> route
   preset          → LeadFormModal ke service pills se EXACT match hona
                     chahiye (form me pre-select ke liye)
   ------------------------------------------------------------------ */

const SITE_URL = "https://codenkraft.com";

export const SERVICES = [
  {
    slug: "website-design",
    title: "Website Designing",
    preset: "Website Designing",
    tagline: "Websites that don't just look good — they bring business.",
    intro: [
      "Most websites are digital brochures nobody reads. We design websites that work like your best salesperson — clear, fast, and built to convert visitors into enquiries.",
      "Every site is designed from scratch in Figma and built on Next.js. No bloated themes, no page-builder sludge. You get a site that loads in under two seconds and is structured to rank from day one.",
    ],
    deliverables: [
      {
        title: "Custom design, zero templates",
        desc: "Designed around your brand and your customers — never a recycled theme.",
      },
      {
        title: "Next.js development",
        desc: "Modern, maintainable code. Fast by architecture, not by accident.",
      },
      {
        title: "Mobile-first responsive",
        desc: "Designed for the phone first — that's where your customers are.",
      },
      {
        title: "SEO-first build",
        desc: "Semantic HTML, metadata, sitemap, schema — ranking baked in, not bolted on.",
      },
      {
        title: "Speed optimised",
        desc: "Core Web Vitals green. Every second of delay costs conversions.",
      },
      {
        title: "Lead-ready forms",
        desc: "Enquiry forms wired to your inbox, with spam protection built in.",
      },
    ],
    process: [
      {
        title: "Discovery call",
        desc: "20 minutes. We understand your business, customers and goals.",
      },
      {
        title: "Design in Figma",
        desc: "You see and approve every screen before a line of code is written.",
      },
      {
        title: "Build",
        desc: "Pixel-matched development on Next.js, tested on real devices.",
      },
      {
        title: "SEO setup",
        desc: "Metadata, sitemap, schema, analytics-ready — launch checklist complete.",
      },
      {
        title: "Launch & handover",
        desc: "Deployed, tested, and handed over with everything documented.",
      },
    ],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Every project is scoped on a discovery call — no bloated packages, no hidden upsells. You get a fixed quote before we start, based on pages, features and timeline.",
      },
      {
        q: "How long does it take?",
        a: "A typical business website takes 3–5 weeks from approved design to launch. Larger or custom builds are quoted with a clear timeline upfront.",
      },
      {
        q: "Will my website rank on Google?",
        a: "Every site we ship is built SEO-first — semantic HTML, metadata, sitemap and schema included. Rankings also depend on competition and content, which we can help with through our SEO service.",
      },
      {
        q: "Do I own my website?",
        a: "Completely. Code, design files and domain — everything is yours, with full handover documentation.",
      },
      {
        q: "Can you redesign my existing website instead?",
        a: "Yes — that's our Rebrand & Rebuild service. We audit what's working, keep your SEO equity intact, and rebuild the rest.",
      },
      {
        q: "Do you write the content too?",
        a: "We structure and optimise content for SEO/GEO, and can refine your draft copy. Full copywriting from scratch can be scoped in.",
      },
    ],
    meta: {
      title: "Website Designing Services in India",
      description:
        "Custom website designing services — fast, SEO-first Next.js websites designed in Figma. No templates. Book a free discovery call.",
      keywords: [
        "website designing services india",
        "custom website design",
        "next.js website development",
        "business website design",
      ],
    },
  },
  {
    slug: "rebrand",
    title: "Rebrand & Rebuild",
    preset: "Rebrand / Rebuild",
    tagline: "Your website is leaking customers. We fix that.",
    intro: [
      "If your site looks dated, loads slowly, or just doesn't reflect where your business is today — patching it won't help. We tear it down to the studs and rebuild it properly.",
      "Rebuilds are riskier than fresh builds because of one thing: your existing Google rankings. We handle migration with 301 redirects, URL mapping and rank monitoring — so you keep the equity you've earned.",
    ],
    deliverables: [
      {
        title: "Full site audit",
        desc: "Design, speed, SEO and conversion audit — we document everything that's broken.",
      },
      {
        title: "New design system",
        desc: "Fresh visual identity for the web: typography, colour, components.",
      },
      {
        title: "Rebuild on Next.js",
        desc: "Modern stack, clean code — no legacy baggage carried forward.",
      },
      {
        title: "SEO-safe migration",
        desc: "301 redirects and URL mapping so you don't lose rankings in the move.",
      },
      {
        title: "Speed overhaul",
        desc: "We benchmark before/after. The difference is usually dramatic.",
      },
      {
        title: "Content refresh",
        desc: "Your copy, tightened and restructured for clarity and conversion.",
      },
    ],
    process: [
      {
        title: "Audit",
        desc: "We crawl your current site and score design, speed, SEO and UX.",
      },
      {
        title: "Strategy",
        desc: "What to keep, what to kill, what to rebuild — agreed before design starts.",
      },
      {
        title: "Design",
        desc: "New look in Figma, approved screen by screen.",
      },
      {
        title: "Rebuild & migrate",
        desc: "Built fresh, with redirects mapped and tested before launch.",
      },
      {
        title: "Launch & monitor",
        desc: "We watch rankings and traffic for 30 days post-launch.",
      },
    ],
    faqs: [
      {
        q: "Will I lose my Google rankings?",
        a: "Not on our watch. We map every old URL to its new counterpart with 301 redirects, keep metadata intact, and monitor rankings for 30 days after launch.",
      },
      {
        q: "Is rebuilding cheaper than a new website?",
        a: "Usually comparable — the audit and migration work offsets the design headstart. We quote both options honestly on the discovery call.",
      },
      {
        q: "Can you keep my domain and content?",
        a: "Yes. Your domain stays exactly as is. We keep content that works, rewrite what doesn't, and restructure everything for conversion.",
      },
      {
        q: "How long does a rebuild take?",
        a: "Typically 4–6 weeks including audit and migration. Larger sites with hundreds of pages take longer — scoped upfront.",
      },
      {
        q: "My site was built on WordPress/Wix. Can you move it?",
        a: "That's the most common rebuild we do. We move you to fast, maintainable Next.js — and you'll never miss the plugin updates.",
      },
    ],
    meta: {
      title: "Website Rebrand & Rebuild Services",
      description:
        "Website redesign and rebuild services — modern design, faster stack, SEO-safe migration with zero ranking loss. Book a free discovery call.",
      keywords: [
        "website redesign services",
        "website rebuild",
        "rebrand website india",
        "seo safe website migration",
      ],
    },
  },
  {
    slug: "geo",
    title: "GEO",
    fullTitle: "GEO — Generative Engine Optimization",
    preset: "GEO",
    tagline: "Get cited by ChatGPT, Perplexity & AI Overviews.",
    intro: [
      "Search is changing. People now ask ChatGPT and Perplexity instead of scrolling Google — and those AI engines cite a handful of sources per answer. If your business isn't one of them, you're invisible to a growing share of buyers.",
      "GEO — Generative Engine Optimization — is the discipline of making your brand the source AI engines quote. We structure your content, entities and schema so AI models can find, understand and cite you.",
    ],
    deliverables: [
      {
        title: "AI visibility audit",
        desc: "We check where you currently appear (or don't) across ChatGPT, Perplexity, Gemini and AI Overviews.",
      },
      {
        title: "Entity optimisation",
        desc: "Your brand defined as a clear entity — what you are, what you do, where — so models resolve you correctly.",
      },
      {
        title: "Quotable content structure",
        desc: "Direct answers, stats and definitions formatted the way AI engines extract and cite.",
      },
      {
        title: "Schema markup",
        desc: "Organization, Service, FAQ and Article schema — machine-readable facts about your business.",
      },
      {
        title: "AI-crawler access",
        desc: "robots.txt tuned to explicitly allow GPTBot, ClaudeBot, PerplexityBot and friends.",
      },
      {
        title: "Citation tracking",
        desc: "Monthly reporting on where and how often AI engines mention you.",
      },
    ],
    process: [
      {
        title: "Audit",
        desc: "Baseline: test 50+ prompts across AI engines, record where you appear.",
      },
      {
        title: "Entity setup",
        desc: "Schema, bios, and consistent NAP (name-address-phone) across the web.",
      },
      {
        title: "Content structuring",
        desc: "Rewrite key pages so answers are extractable in one clean block.",
      },
      {
        title: "Publish & markup",
        desc: "Ship the pages with full schema and AI-crawler access in place.",
      },
      {
        title: "Monitor",
        desc: "Re-test prompts monthly. Double down on what's getting cited.",
      },
    ],
    faqs: [
      {
        q: "What is GEO?",
        a: "Generative Engine Optimization — optimising your brand to be cited as a source by AI search engines like ChatGPT, Perplexity, Gemini and Google's AI Overviews.",
      },
      {
        q: "How is GEO different from SEO?",
        a: "SEO ranks pages in a list of links. GEO gets your brand quoted inside AI-generated answers. Different mechanics, overlapping foundations — schema, entities and clear content help both.",
      },
      {
        q: "How long before I see results?",
        a: "AI engines re-crawl and re-train on their own cycles. Most clients see first citations within 2–4 months; compounding from there.",
      },
      {
        q: "Which AI engines do you target?",
        a: "ChatGPT, Perplexity, Gemini, Google AI Overviews and Microsoft Copilot — the engines where buying decisions are actually being researched.",
      },
      {
        q: "Do I need a new website for GEO?",
        a: "No — but your pages need restructuring. If your site can't support schema and clean answer blocks, a rebuild may be the faster path.",
      },
    ],
    meta: {
      title: "GEO Services — Generative Engine Optimization",
      description:
        "GEO services to get your brand cited by ChatGPT, Perplexity & AI Overviews. Entity optimisation, schema & AI visibility audits. Book a free call.",
      keywords: [
        "generative engine optimization",
        "geo services india",
        "chatgpt visibility",
        "ai search optimization",
        "perplexity seo",
      ],
    },
  },
  {
    slug: "seo",
    title: "SEO",
    fullTitle: "SEO — Search Engine Optimization",
    preset: "SEO",
    tagline: "Rank on Google. Stay there.",
    intro: [
      "SEO isn't tricks — it's engineering. Technical soundness, content that answers real queries, and authority built over time. We do the unglamorous work that actually moves rankings.",
      "No guaranteed #1 promises (anyone offering those is lying). What we offer: a proper audit, a prioritised fix list, and month-on-month work you can see in Search Console.",
    ],
    deliverables: [
      {
        title: "Technical audit & fixes",
        desc: "Crawlability, indexation, Core Web Vitals, mobile issues — fixed, not just reported.",
      },
      {
        title: "Keyword strategy",
        desc: "Queries your buyers actually type, mapped to pages that can win them.",
      },
      {
        title: "On-page optimisation",
        desc: "Titles, headings, internal linking, content structure — page by page.",
      },
      {
        title: "Local SEO",
        desc: "Google Business Profile optimisation and local citations for India markets.",
      },
      {
        title: "Content guidance",
        desc: "Briefs for pages and posts engineered to rank — not fluff pieces.",
      },
      {
        title: "Transparent reporting",
        desc: "Monthly reports tied to Search Console data. Rankings, traffic, actions.",
      },
    ],
    process: [
      {
        title: "Audit",
        desc: "Full technical + content audit with a scored priority list.",
      },
      {
        title: "Fix",
        desc: "Technical issues resolved in order of impact.",
      },
      {
        title: "Optimise",
        desc: "On-page work across your money pages first.",
      },
      {
        title: "Build",
        desc: "Content and authority built month after month.",
      },
      {
        title: "Report",
        desc: "You see exactly what moved and what we did about it.",
      },
    ],
    faqs: [
      {
        q: "How long does SEO take?",
        a: "Honest answer: 3–6 months for meaningful movement, longer in competitive niches. Anyone promising page one in 30 days is selling you something.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No — and you should run from anyone who does. Google explicitly warns against guarantees. We guarantee the work, the transparency, and the process.",
      },
      {
        q: "What's included in the technical audit?",
        a: "Crawl errors, indexation, site speed, mobile usability, structured data, duplicate content, and redirect chains — with fixes prioritised by impact.",
      },
      {
        q: "Do you do local SEO?",
        a: "Yes — Google Business Profile setup and optimisation, local keywords, and citation consistency for Indian cities and service areas.",
      },
      {
        q: "Will I need to change my website?",
        a: "Usually yes, at least the on-page elements. If the site's foundation is broken, we'll tell you straight — sometimes a rebuild is cheaper than patching.",
      },
    ],
    meta: {
      title: "SEO Services in India",
      description:
        "Technical SEO services in India — audits, on-page optimisation, local SEO & transparent monthly reporting. No fake guarantees. Book a free discovery call.",
      keywords: [
        "seo services india",
        "technical seo audit",
        "local seo india",
        "on page seo services",
      ],
    },
  },
  {
    slug: "aeo",
    title: "AEO",
    fullTitle: "AEO — Answer Engine Optimization",
    preset: "AEO",
    tagline: "Own the answer box.",
    intro: [
      "Half of searches now end without a click — the answer appears right on the results page. Featured snippets, People Also Ask, voice assistants: these are winner-take-all slots, and there's exactly one winner per question.",
      "AEO — Answer Engine Optimization — engineers your content to be that winner. We find the questions your buyers ask, then structure answers Google can't resist quoting.",
    ],
    deliverables: [
      {
        title: "Answer-target audit",
        desc: "We map every question your buyers ask and check who owns the answer today.",
      },
      {
        title: "Snippet-optimised content",
        desc: "40–60 word direct answers, lists and tables — formatted for extraction.",
      },
      {
        title: "FAQ schema",
        desc: "Valid FAQPage markup so Google trusts and displays your answers.",
      },
      {
        title: "People Also Ask targeting",
        desc: "The question clusters around your keywords, answered systematically.",
      },
      {
        title: "Voice-search readiness",
        desc: "Conversational query optimisation for assistants and voice search.",
      },
      {
        title: "Answer tracking",
        desc: "Monthly report: which questions you own, which slipped, what's next.",
      },
    ],
    process: [
      {
        title: "Research",
        desc: "Question mining — PAA boxes, forums, support tickets, search data.",
      },
      {
        title: "Structure",
        desc: "Answers drafted in the exact formats snippets prefer.",
      },
      {
        title: "Markup",
        desc: "FAQ and HowTo schema deployed and validated.",
      },
      {
        title: "Publish",
        desc: "Pages shipped or integrated into your existing site.",
      },
      {
        title: "Track",
        desc: "Snippet ownership monitored; lost answers reclaimed.",
      },
    ],
    faqs: [
      {
        q: "What is AEO?",
        a: "Answer Engine Optimization — optimising content to be the direct answer in featured snippets, People Also Ask boxes, and voice assistant responses.",
      },
      {
        q: "How is AEO different from SEO and GEO?",
        a: "SEO wins the ranking list, AEO wins the answer box on that list, and GEO wins citations inside AI-generated answers. They stack — strong pages can win all three.",
      },
      {
        q: "Does AEO reduce my website traffic?",
        a: "Sometimes per-query clicks drop — but answer-box ownership builds brand authority, and we target question clusters that still drive qualified visits.",
      },
      {
        q: "How does Google pick the featured snippet?",
        a: "It extracts the clearest, best-structured direct answer from a top-ranking page. That's exactly what we engineer: concise answers in extractable formats.",
      },
      {
        q: "Is voice search really worth optimising for?",
        a: "Voice assistants read exactly one answer — the featured snippet. Win the snippet, win the voice result. It's the same work.",
      },
    ],
    meta: {
      title: "AEO Services — Answer Engine Optimization",
      description:
        "AEO services to own featured snippets, People Also Ask & voice search answers. Snippet-engineered content + FAQ schema. Book a free discovery call.",
      keywords: [
        "answer engine optimization",
        "aeo services",
        "featured snippet optimization",
        "voice search seo",
        "people also ask seo",
      ],
    },
  },
  {
    slug: "ui-ux",
    title: "UI & UX",
    fullTitle: "UI & UX Design",
    preset: "UI & UX",
    tagline: "Interfaces people enjoy using.",
    intro: [
      "Pretty screens that confuse users are just expensive art. We design interfaces around one question: what is the user trying to do here — and how do we get them there with zero friction?",
      "You get production-ready Figma designs: user flows, wireframes, a component system, and prototypes you can click through before anything gets built.",
    ],
    deliverables: [
      {
        title: "UX research & user flows",
        desc: "We map how users actually move through your product — then remove the dead ends.",
      },
      {
        title: "Wireframes",
        desc: "Structure before style. Layout decisions validated early, cheap to change.",
      },
      {
        title: "UI design system",
        desc: "Typography, colour, components — a Figma system your team can extend.",
      },
      {
        title: "Interactive prototypes",
        desc: "Click-through prototypes for testing and stakeholder sign-off.",
      },
      {
        title: "Dev-ready handoff",
        desc: "Specs, assets and tokens organised so developers build it exactly.",
      },
      {
        title: "Usability review",
        desc: "Heuristic audit of your existing product with prioritised fixes.",
      },
    ],
    process: [
      {
        title: "Research",
        desc: "Users, competitors, analytics — we learn before we draw.",
      },
      {
        title: "Wireframe",
        desc: "Flows and layouts, iterated fast in low fidelity.",
      },
      {
        title: "Design",
        desc: "High-fidelity UI in your brand, component by component.",
      },
      {
        title: "Prototype",
        desc: "Clickable prototype for testing and approval.",
      },
      {
        title: "Handoff",
        desc: "Dev-ready Figma with documentation. We stay available during build.",
      },
    ],
    faqs: [
      {
        q: "Do I get the Figma files?",
        a: "Yes — the complete, organised Figma file is yours, including the component system.",
      },
      {
        q: "Design only, or do you build it too?",
        a: "Both. We design in Figma and can build in Next.js — or hand off to your developers with full specs.",
      },
      {
        q: "How many revisions are included?",
        a: "Structured revision rounds at wireframe and visual design stages. We iterate until it's right — within the scoped rounds.",
      },
      {
        q: "Can you fix UX on my existing product?",
        a: "Yes — our usability review audits your current flows and delivers a prioritised fix list, then we redesign what matters most.",
      },
      {
        q: "How long does a UI/UX project take?",
        a: "A marketing site: 2–3 weeks. A product with multiple flows: 4–8 weeks. Scoped on the discovery call.",
      },
    ],
    meta: {
      title: "UI & UX Design Services",
      description:
        "UI/UX design services — user flows, wireframes, Figma design systems & clickable prototypes. Dev-ready handoff included. Book a free discovery call.",
      keywords: [
        "ui ux design services india",
        "figma design services",
        "ux audit",
        "product design india",
      ],
    },
  },
];

/* Helpers */

export function getAllSlugs() {
  return SERVICES.map((s) => s.slug);
}

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}

export function getRelated(slug) {
  const others = SERVICES.filter((s) => s.slug !== slug);
  // GEO/SEO/AEO ek cluster hain — unhe ek-doosre se link karo
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  return [...others.slice(idx), ...others.slice(0, idx)].slice(0, 3);
}

export { SITE_URL };
