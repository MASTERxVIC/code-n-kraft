import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Cookie Policy",
  description:
    "How Code 'n' Kraft uses cookies on codenkraft.com — only strictly necessary cookies, no tracking or advertising cookies.",
  alternates: { canonical: "/cookie-policy" },
};

const UPDATED = "25 September 2026";

const TOC = [
  { n: 1, id: "what-are-cookies", label: "What cookies are" },
  { n: 2, id: "cookies-we-use", label: "Cookies we use" },
  { n: 3, id: "third-party", label: "Third-party cookies" },
  { n: 4, id: "managing", label: "Managing cookies" },
  { n: 5, id: "changes", label: "Changes to this policy" },
  { n: 6, id: "contact", label: "Contact us" },
];

const listCls = "list-disc space-y-2 pl-6";
const linkCls = "text-supportive underline underline-offset-4 hover:no-underline";

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Cookie Policy"
      updated={UPDATED}
      intro="A plain-English explanation of the cookies used on codenkraft.com. Short version: we use only strictly necessary cookies — no analytics, no advertising, no cross-site tracking."
      toc={TOC}
    >
      <LegalSection id="what-are-cookies" n={1} title="What cookies are">
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help websites remember information about your visit —
          for example, keeping a site secure or making it load correctly.
          Some cookies are essential for a site to work; others are used for
          analytics, advertising or tracking across sites.
        </p>
      </LegalSection>

      <LegalSection id="cookies-we-use" n={2} title="Cookies we use">
        <p>
          We keep it minimal. The only cookies associated with codenkraft.com
          are <strong>strictly necessary</strong> ones:
        </p>
        <div className="overflow-x-auto rounded-[16px] border border-button">
          <table className="w-full min-w-[560px] border-collapse bg-surface text-left">
            <thead>
              <tr className="border-b border-button">
                <th className="px-5 py-4 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-heading/60">Category</th>
                <th className="px-5 py-4 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-heading/60">Purpose</th>
                <th className="px-5 py-4 font-label text-[11px] font-medium uppercase tracking-[0.18em] text-heading/60">Examples</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm leading-7 text-heading/90">
              <tr className="border-b border-button/60">
                <td className="px-5 py-4 font-medium">Strictly necessary</td>
                <td className="px-5 py-4">Security, load balancing and core site functionality. The site cannot work properly without these.</td>
                <td className="px-5 py-4">Hosting-platform security and infrastructure cookies</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-medium">Preferences</td>
                <td className="px-5 py-4">Remembering basic display choices during your visit.</td>
                <td className="px-5 py-4">Set only if you interact with site controls that need them</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>What we don&apos;t use:</strong> analytics cookies, advertising
          cookies, social-media tracking pixels, or any cross-site tracking.
          We do not run Google Analytics, Meta Pixel or similar trackers on
          this website.
        </p>
      </LegalSection>

      <LegalSection id="third-party" n={3} title="Third-party cookies">
        <p>
          We do not embed third-party content that sets tracking cookies. Our
          site links out to Instagram and other platforms — once you click
          through to those sites, their own cookie policies apply, and we
          encourage you to read them.
        </p>
      </LegalSection>

      <LegalSection id="managing" n={4} title="Managing cookies">
        <p>
          You can control or delete cookies through your browser settings —
          every major browser (Chrome, Safari, Firefox, Edge) lets you block
          or clear cookies for individual sites. Note that blocking strictly
          necessary cookies may prevent parts of this site from working
          correctly.
        </p>
        <p>
          Because we don&apos;t set any optional or tracking cookies, there is
          no cookie-consent banner on this site — there is nothing optional to
          consent to. If that ever changes, we will ask for your consent first,
          in line with the Digital Personal Data Protection Act, 2023.
        </p>
      </LegalSection>

      <LegalSection id="changes" n={5} title="Changes to this policy">
        <p>
          If we ever start using additional categories of cookies, we will
          update this page and obtain your consent where the law requires it.
          Please check back occasionally — the &quot;Last updated&quot; date at
          the top always shows the current version.
        </p>
      </LegalSection>

      <LegalSection id="contact" n={6} title="Contact us">
        <p>Questions about our use of cookies? Reach us at:</p>
        <ul className={listCls}>
          <li>Email: <a className={linkCls} href="mailto:support@codenkraft.com">support@codenkraft.com</a></li>
          <li>Instagram: <a className={linkCls} href="https://www.instagram.com/codenkraft">@codenkraft</a></li>
        </ul>
        <p>
          For how we handle your personal data more broadly, see our{" "}
          <a className={linkCls} href="/privacy-policy">Privacy Policy</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

