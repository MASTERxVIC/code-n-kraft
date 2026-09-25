import { Bricolage_Grotesque, Geologica, Ephesis } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
  display: "swap",
});

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ephesis",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://codenkraft.com"),
  title: {
    default: "Code 'n' Kraft | Web Design, SEO, AEO & GEO Studio",
    template: "%s | Code 'n' Kraft",
  },
  description:
    "Code 'n' Kraft (CNK) is a website design, development and search-visibility studio. We build sites that rank in Google and get cited by AI search.",
  applicationName: "Code 'n' Kraft",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Code 'n' Kraft",
    title: "Code 'n' Kraft | Web Design, SEO, AEO & GEO Studio",
    description:
      "Website design, development and search visibility (SEO, AEO, GEO) in one studio.",
    url: "/",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code 'n' Kraft — Web Design, SEO, AEO & GEO Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code 'n' Kraft | Web Design, SEO, AEO & GEO Studio",
    description:
      "Website design, development and search visibility (SEO, AEO, GEO) in one studio.",
    images: ["/og/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const SITE_URL = "https://codenkraft.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Code 'n' Kraft",
      url: SITE_URL,
      description:
        "Website design, development and search-visibility studio — SEO, AEO and GEO.",
      areaServed: "IN",
      knowsAbout: [
        "Web Design",
        "Web Development",
        "Search Engine Optimization",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
      ],
      sameAs: ["https://www.instagram.com/codenkraft"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Code 'n' Kraft",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html className={`${bricolage.variable} ${geologica.variable} ${ephesis.variable}`} lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}