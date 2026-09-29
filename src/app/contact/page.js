import Link from "next/link";
import WatermarkWrapper from "@/components/layout/WatermarkWrapper";
import Footer from "@/components/sections/Footer";
import Cta from "@/components/sections/Cta";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const SITE_URL = "https://codenkraft.com";

/* ---------- Metadata ---------- */

export async function generateMetadata() {
  const url = "/contact";
  return {
    title: "Contact",
    description:
      "Contact Code 'n' Kraft — email, WhatsApp, LinkedIn or Instagram. Tell us about your project and we'll reply within 24 hours.",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Code 'n' Kraft",
      title: "Contact | Code 'n' Kraft",
      description:
        "Reach Code 'n' Kraft — email, WhatsApp, LinkedIn or Instagram. We reply within 24 hours.",
      url,
      images: [
        {
          url: "/og/og-image.png",
          width: 1200,
          height: 630,
          alt: "Code 'n' Kraft — Contact",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact | Code 'n' Kraft",
      description:
        "Reach Code 'n' Kraft — email, WhatsApp, LinkedIn or Instagram. We reply within 24 hours.",
      images: ["/og/og-image.png"],
    },
  };
}

/* ---------- Contact channels ---------- */

const CHANNELS = [
  {
    label: "Email",
    value: "support@codenkraft.com",
    href: "mailto:support@codenkraft.com",
    icon: null,
    note: "For project enquiries and quotes",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/917505038676",
    icon: "/assets/WhatsApp.svg",
    note: "Fastest reply during work hours",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Code n Kraft",
    href: "https://www.linkedin.com/company/code-n-kraft",
    icon: "/assets/LinkedIn.svg",
    note: "Follow our work and updates",
    external: true,
  },
  {
    label: "Instagram",
    value: "@codenkraft",
    href: "https://www.instagram.com/codenkraft",
    icon: "/assets/Instagram.svg",
    note: "DMs open — say hello",
    external: true,
  },
];

/* ---------- Page ---------- */

export default function ContactPage() {
  const pageUrl = `${SITE_URL}/contact`;

  /* ContactPage + BreadcrumbList — ek @graph me */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#page`,
        name: "Contact Code 'n' Kraft",
        description:
          "Contact channels for Code 'n' Kraft — email, WhatsApp, LinkedIn and Instagram.",
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
          { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
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
            <span className="text-button">Contact</span>
          </nav>
          <h1 className="max-w-[1000px] font-display text-4xl font-bold uppercase leading-[1.1] tracking-wide text-on-dark md:text-6xl">
            Contact
          </h1>
          <p className="mt-6 max-w-[720px] font-body text-xl leading-relaxed text-button md:text-2xl">
            Tell us about your project — we&rsquo;ll reply within 24 hours.
          </p>
        </div>
      </Section>

      {/* ---------- Channels ---------- */}
      <WatermarkWrapper>
        <Section tone="transparent" noPadding className="px-0">
          <div className="mx-auto max-w-[1248px] px-[var(--gutter)] py-12 md:py-16">
            <SectionHeading badge="Reach us" title="Pick your channel" />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group rounded-[20px] bg-surface p-6 transition-colors duration-300 hover:bg-button/40 md:p-8"
                >
                  {c.icon && (
                    <img
                      src={c.icon}
                      alt={c.label}
                      className="h-8 w-8"
                      loading="lazy"
                    />
                  )}
                  <h2 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-heading">
                    {c.label}
                  </h2>
                  <p className="mt-2 break-all font-body text-[15px] font-medium text-supportive">
                    {c.value}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-heading/70">
                    {c.note}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </WatermarkWrapper>

      {/* ---------- Enquiry form CTA (homepage wala block reuse) ---------- */}
      <WatermarkWrapper>
        <Cta />
      </WatermarkWrapper>

      <Footer />
    </>
  );
}
