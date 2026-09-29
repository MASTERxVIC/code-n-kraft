import Link from "next/link";
import WatermarkWrapper from "@/components/layout/WatermarkWrapper";
import Footer from "@/components/sections/Footer";
import Cta from "@/components/sections/Cta";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const SITE_URL = "https://codenkraft.com";

/* ---------- Metadata ---------- */

export async function generateMetadata() {
  const url = "/about";
  return {
    title: "About",
    description:
      "About Code 'n' Kraft — a web design and search-visibility studio founded in 2026 by four founding members. We kraft new tech into an advancing web.",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Code 'n' Kraft",
      title: "About | Code 'n' Kraft",
      description:
        "Four people, one studio — websites crafted with intent, built to rank in Google and get cited by AI search.",
      url,
      images: [
        {
          url: "/og/og-image.png",
          width: 1200,
          height: 630,
          alt: "Code 'n' Kraft — About",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About | Code 'n' Kraft",
      description:
        "Four people, one studio — websites crafted with intent, built to rank in Google and get cited by AI search.",
      images: ["/og/og-image.png"],
    },
  };
}

/* ---------- Data (real) ---------- */

const SERVICES = [
  { slug: "website-design", title: "Website Design" },
  { slug: "rebrand", title: "Rebrand" },
  { slug: "geo", title: "GEO" },
  { slug: "seo", title: "SEO" },
  { slug: "aeo", title: "AEO" },
  { slug: "ui-ux", title: "UI/UX" },
];

const BELIEFS = [
  "A website is the most honest thing a brand owns \u2014 it either proves you\u2019re serious. Or it proves you\u2019re not. Speed without care is just a faster way to look forgettable. Being found by Google isn\u2019t enough anymore \u2014 you have to be found by AI, too. We don\u2019t cheat our clients, we don\u2019t cut corners, and we don\u2019t ship work we wouldn\u2019t put our own name on.",
  "We\u2019re here to listen to your problems, find solutions together, and grow with you. No pressure, no jargon \u2014 just an honest conversation about what your brand needs next.",
];

const TEAM = [
  { name: "Atul Kumar", role: "Co-founder & Design Lead", initials: "AK" },
  {
    name: "Ankit Sharma",
    role: "Co-founder & Head of Client Relations",
    initials: "AS",
  },
  {
    name: "Dev Bharadwaj",
    role: "Co-founder & Full-Stack Engineer",
    focus: "AI & Automation",
    initials: "DB",
  },
  {
    name: "Raj Bharadwaj",
    role: "Co-founder & Full-Stack Engineer",
    focus: "AI & Automation",
    initials: "RB",
  },
];

/* ---------- Page ---------- */

export default function AboutPage() {
  const pageUrl = `${SITE_URL}/about`;

  /* AboutPage + BreadcrumbList — ek @graph me */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#page`,
        name: "About Code 'n' Kraft",
        description:
          "About Code 'n' Kraft — a web design and search-visibility studio founded in 2026 by four founding members.",
        url: pageUrl,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- Hero (dark) ---------- */}
      <Section tone="dark" noPadding className="px-0">
        <div className="mx-auto max-w-[1248px] px-[var(--gutter)] pb-16 pt-36 md:pb-24 md:pt-44">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 font-label text-[0.6875rem] uppercase tracking-[0.18em] text-button/70"
          >
            <Link href="/" className="hover:text-button">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-button">About</span>
          </nav>
          <h1 className="max-w-[1000px] font-display text-4xl font-bold uppercase leading-[1.1] tracking-wide text-on-dark md:text-6xl">
            About
          </h1>
          <p className="mt-6 max-w-[720px] font-body text-xl leading-relaxed text-button md:text-2xl">
            We code for kraft &mdash; bringing new tech into this advancing
            world of tech.
          </p>
        </div>
      </Section>

      {/* ---------- Our story ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="Our story" title="Why we exist" />
            <div className="mt-10 max-w-4xl space-y-5">
              <p className="font-body text-base leading-8 text-heading/85 md:text-lg md:leading-9">
                The web never sits still. First, businesses had to be found on
                Google. Now they have to be found &mdash; and cited &mdash; by
                AI as well. Every year the bar moves, and most business
                websites are still standing where it was five years ago:
                slow, templated, invisible.
              </p>
              <p className="font-body text-base leading-8 text-heading/85 md:text-lg md:leading-9">
                We kept seeing the same gap &mdash; brands with real quality,
                represented online by websites that didn&rsquo;t do them
                justice. So in 2026, four of us &mdash; designers, developers
                and search specialists &mdash; started Code &rsquo;n&rsquo;
                Kraft: a studio that treats every website like a craft.
                Designed with intent, built with care, and made to be found.
              </p>
              <p className="font-body text-base leading-8 text-heading/85 md:text-lg md:leading-9">
                That&rsquo;s what the &ldquo;Kraft&rdquo; means. Anyone can
                write code. We kraft it &mdash; shaping new technology into
                websites that carry a brand forward instead of holding it
                back.
              </p>
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- The team ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="The team" title="Four people, one standard" />
            <div className="mt-10 max-w-4xl space-y-5">
              <p className="font-body text-base leading-8 text-heading/85 md:text-lg md:leading-9">
                Code &rsquo;n&rsquo; Kraft was founded by four founding
                members, and we&rsquo;re still a team of four &mdash; small on
                purpose. No layers between you and the work: the people you
                talk to are the people who design, build and optimise your
                site.
              </p>
              <p className="font-body text-base leading-8 text-heading/85 md:text-lg md:leading-9">
                Small teams can&rsquo;t hide behind process. Every project
                carries our name, so every project gets the same standard
                we&rsquo;d demand for our own brand.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((m) => (
                <div
                  key={m.name}
                  className="rounded-[20px] bg-surface p-6 md:p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-button font-display text-lg font-bold text-heading">
                    {m.initials}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-heading">
                    {m.name}
                  </h3>
                  <p className="mt-1 font-label text-xs uppercase tracking-[0.18em] text-supportive">
                    {m.role}
                  </p>
                  {m.focus && (
                    <p className="mt-2 font-body text-sm text-heading/70">
                      {m.focus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- What we believe (homepage wale real statements) ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="Our belief" title="What we stand by" />
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {BELIEFS.map((b, i) => (
                <blockquote
                  key={i}
                  className="rounded-[20px] bg-surface p-6 md:p-8"
                >
                  <p className="font-body text-[15px] leading-relaxed text-heading/85 md:text-base md:leading-8">
                    &ldquo;{b}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- What we do ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="What we do" title="6 krafts, one studio" />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-[20px] bg-surface p-6 transition-colors duration-300 hover:bg-button/40 md:p-8"
                >
                  <h2 className="font-display text-lg font-bold uppercase tracking-wide text-heading">
                    {s.title}
                  </h2>
                  <span className="mt-4 inline-block font-label text-xs uppercase tracking-[0.18em] text-supportive">
                    View service &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- CTA (homepage wala block reuse) ---------- */}
      <WatermarkWrapper>
        <Cta />
      </WatermarkWrapper>

      <Footer />
    </>
  );
}
