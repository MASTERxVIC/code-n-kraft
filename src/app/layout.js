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
  metadataBase: new URL("https://example.com"),
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
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html className={`${bricolage.variable} ${geologica.variable} ${ephesis.variable}`} lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}