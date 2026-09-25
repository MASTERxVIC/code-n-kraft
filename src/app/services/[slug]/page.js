import Link from "next/link";
import { notFound } from "next/navigation";
import WatermarkWrapper from "@/components/layout/WatermarkWrapper";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCtaButton from "@/components/services/ServiceCtaButton";
import { getAllSlugs, getService, getRelated, SITE_URL } from "@/data/services";

/* ---------- Static generation: 6 service pages ---------- */

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `/services/${s.slug}`;
  return {
    title: s.meta.title,
    description: s.meta.description,
    keywords: s.meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Code 'n' Kraft",
      title: `${s.meta.title} | Code 'n' Kraft`,
      description: s.meta.description,
      url,
      images: [
        {
          url: "/og/og-image.png",
          width: 1200,
          height: 630,
          alt: `Code 'n' Kraft — ${s.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.meta.title} | Code 'n' Kraft`,
      description: s.meta.description,
      images: ["/og/og-image.png"],
    },
  };
}

/* ---------- Page ---------- */

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = getRelated(slug);
  const pageUrl = `${SITE_URL}/services/${s.slug}`;
  const displayTitle = s.fullTitle || s.title;

  /* Service + BreadcrumbList + FAQPage — ek @graph me */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: displayTitle,
        description: s.meta.description,
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: "IN",
        serviceType: s.title,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/#Services`,
          },
          { "@type": "ListItem", position: 3, name: s.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
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
            <Link href="/#Services" className="hover:text-button">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-button">{s.title}</span>
          </nav>
          <h1 className="max-w-[1000px] font-display text-4xl font-bold uppercase leading-[1.1] tracking-wide text-on-dark md:text-6xl">
            {displayTitle}
          </h1>
          <p className="mt-6 max-w-[720px] font-body text-xl leading-relaxed text-button md:text-2xl">
            {s.tagline}
          </p>
          <div className="mt-8 max-w-[760px] space-y-4 font-body text-base leading-7 text-on-dark/85 md:text-lg md:leading-8">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <ServiceCtaButton preset={s.preset}>
              Get a quote for {s.title}
            </ServiceCtaButton>
          </div>
        </div>
      </Section>

      {/* ---------- What's included ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading
              badge="What's included"
              title={`Everything in ${s.title}`}
            />
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {s.deliverables.map((d) => (
                <div
                  key={d.title}
                  className="rounded-[20px] bg-surface p-6 md:p-8"
                >
                  <h3 className="font-display text-lg font-bold leading-snug text-heading">
                    {d.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-heading/75">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- Process ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="How we work" title="The process" />
            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
              {s.process.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-[20px] bg-surface p-6"
                >
                  <span className="font-display text-4xl font-bold text-button">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-heading/75">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- FAQ ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-heading/60">
              Before you ask
            </p>
            <h2 className="mt-3 text-center font-display text-lg font-bold uppercase leading-tight tracking-wider text-heading md:text-[40px]">
              {s.title} — FAQs
            </h2>
            <div className="mt-10">
              <ServiceFaq faqs={s.faqs} />
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- Closing CTA (dark) ---------- */}
      <WatermarkWrapper>
        <Section tone="dark" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-16 text-center md:py-24">
            <h2 className="mx-auto max-w-[800px] font-display text-2xl font-bold uppercase leading-tight tracking-wide text-on-dark md:text-4xl">
              Ready to talk {s.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] font-body text-base leading-relaxed text-on-dark/80 md:text-lg">
              One 20-minute discovery call. No pitch decks, no pressure —
              just a straight answer on whether we can help.
            </p>
            <div className="mt-8 flex justify-center">
              <ServiceCtaButton preset={s.preset}>
                Book a free Discovery Call
              </ServiceCtaButton>
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- Other services (plain links — bento-card class NAHI,
             taaki LeadFormModal ka card interception trigger na ho) ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="Keep exploring" title="Other services" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group rounded-[20px] bg-surface p-6 transition-colors duration-300 hover:bg-button/40"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-heading">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-heading/70">
                    {r.tagline}
                  </p>
                  <span className="mt-4 inline-block font-label text-xs uppercase tracking-[0.18em] text-supportive">
                    View service →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      <Footer />
    </>
  );
}
