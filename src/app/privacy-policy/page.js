import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Code 'n' Kraft collects, uses and protects your personal data — our practices under India's Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "/privacy-policy" },
};

const UPDATED = "25 September 2026";

const TOC = [
  { n: 1, id: "who-we-are", label: "Who we are" },
  { n: 2, id: "data-we-collect", label: "Personal data we collect" },
  { n: 3, id: "how-we-use", label: "How we use your data" },
  { n: 4, id: "consent", label: "Consent" },
  { n: 5, id: "sharing", label: "Sharing your data" },
  { n: 6, id: "retention", label: "Data retention" },
  { n: 7, id: "your-rights", label: "Your rights as a Data Principal" },
  { n: 8, id: "grievance", label: "Grievance redressal" },
  { n: 9, id: "children", label: "Children's privacy" },
  { n: 10, id: "security", label: "Data security" },
  { n: 11, id: "transfers", label: "International data transfers" },
  { n: 12, id: "cookies", label: "Cookies" },
  { n: 13, id: "changes", label: "Changes to this policy" },
  { n: 14, id: "contact", label: "Contact us" },
];

const listCls = "list-disc space-y-2 pl-6";
const linkCls = "text-supportive underline underline-offset-4 hover:no-underline";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      updated={UPDATED}
      intro="Code 'n' Kraft respects your privacy. This policy explains what personal data we collect through codenkraft.com and our communication channels, why we collect it, and the rights you hold under India's Digital Personal Data Protection Act, 2023."
      toc={TOC}
    >
      <LegalSection id="who-we-are" n={1} title="Who we are">
        <p>
          Code &apos;n&apos; Kraft (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a web
          design, development and search-visibility studio — covering SEO, GEO
          (Generative Engine Optimization) and AEO (Answer Engine Optimization) —
          operating in India.
        </p>
        <ul className={listCls}>
          <li>Website: <a className={linkCls} href="https://codenkraft.com">codenkraft.com</a></li>
          <li>Instagram: <a className={linkCls} href="https://www.instagram.com/codenkraft">@codenkraft</a></li>
          <li>Email: <a className={linkCls} href="mailto:support@codenkraft.com">support@codenkraft.com</a></li>
        </ul>
        <p>
          For the purposes of the Digital Personal Data Protection Act, 2023
          (&quot;DPDP Act&quot;), we act as the <strong>Data Fiduciary</strong> for
          personal data collected through our website and communication channels —
          meaning we decide the purpose and means of processing your data.
        </p>
      </LegalSection>

      <LegalSection id="data-we-collect" n={2} title="Personal data we collect">
        <p>
          <strong>a) Information you share with us.</strong> When you contact us —
          by email, through Instagram direct messages (including our free
          visibility-audit intake), or any other channel — you may share your
          name, email address, phone number, business name, website URL, and
          details about your business or project. We collect only what you
          choose to share.
        </p>
        <p>
          <strong>b) Information collected automatically.</strong> Like most
          websites, our hosting infrastructure may log technical information such
          as your IP address, browser type, device information, and pages
          visited, purely for security, diagnostics and operational purposes.
        </p>
        <p>
          <strong>c) What we do not collect.</strong> Our website has no
          sign-ups, checkouts or payment flows, so we do not collect account
          credentials or payment information through this site.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" n={3} title="How we use your data">
        <p>We process your personal data only for the following purposes:</p>
        <ul className={listCls}>
          <li>To respond to your enquiries and communicate with you;</li>
          <li>To prepare and deliver free visibility audits you request;</li>
          <li>To prepare quotations and deliver our services (web design, development, SEO, GEO, AEO, rebrand, UI/UX);</li>
          <li>To improve our website and services; and</li>
          <li>To comply with our legal obligations.</li>
        </ul>
        <p>
          We do not use your data for any purpose incompatible with the above,
          and we process it only after giving you clear notice and obtaining
          your consent where the DPDP Act requires it.
        </p>
      </LegalSection>

      <LegalSection id="consent" n={4} title="Consent">
        <p>
          Where we rely on your consent under Section 6 of the DPDP Act, it is
          free, specific, informed, unconditional and unambiguous — given through
          a clear affirmative action, such as sending us an email, messaging us
          on Instagram, or submitting your details for an audit.
        </p>
        <p>
          You may withdraw your consent at any time by writing to{" "}
          <a className={linkCls} href="mailto:support@codenkraft.com">support@codenkraft.com</a>.
          Withdrawal does not affect the lawfulness of processing carried out
          before the withdrawal. If you share another person&apos;s details with
          us, please make sure you have their permission to do so.
        </p>
      </LegalSection>

      <LegalSection id="sharing" n={5} title="Sharing your data">
        <p>
          <strong>We do not sell your personal data.</strong> We share it only
          in these limited situations:
        </p>
        <ul className={listCls}>
          <li>
            <strong>Service providers</strong> who help us operate — for example,
            Instagram/Meta (for direct messages) and our email hosting provider.
            They process data only on our instructions and are expected to
            protect it.
          </li>
          <li>
            <strong>Legal requirements</strong> — if we are required to disclose
            data by law or in response to a lawful request from a government
            authority.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" n={6} title="Data retention">
        <p>
          We keep your personal data only for as long as reasonably needed for
          the purposes described above, or as required by applicable law. When
          data is no longer needed, we delete it or anonymise it so it can no
          longer identify you. You may also ask us to delete your data sooner
          (see &quot;Your rights&quot; below).
        </p>
      </LegalSection>

      <LegalSection id="your-rights" n={7} title="Your rights as a Data Principal">
        <p>
          Under the DPDP Act, 2023, you — as a <strong>Data Principal</strong> —
          have the following rights, and we are committed to honouring them:
        </p>
        <ul className={listCls}>
          <li>
            <strong>Right to access information</strong> (Section 11) — to obtain
            a summary of the personal data we hold about you and how it is
            being processed;
          </li>
          <li>
            <strong>Right to correction, completion, updating and erasure</strong>{" "}
            (Section 12) — to have inaccurate or incomplete data corrected and
            to request deletion;
          </li>
          <li>
            <strong>Right of grievance redressal</strong> (Section 13) — to have
            your complaints about our data practices addressed (see below); and
          </li>
          <li>
            <strong>Right to nominate</strong> (Section 14) — to nominate another
            person to exercise your rights in the event of your death or
            incapacity.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a className={linkCls} href="mailto:support@codenkraft.com">support@codenkraft.com</a>{" "}
          with the subject line &quot;Data Request&quot;. We will verify your
          identity before acting, to protect your data from unauthorised access.
        </p>
      </LegalSection>

      <LegalSection id="grievance" n={8} title="Grievance redressal">
        <p>
          If you have any complaint about how we handle your personal data,
          write to us at{" "}
          <a className={linkCls} href="mailto:support@codenkraft.com">support@codenkraft.com</a>{" "}
          with the subject line &quot;Privacy Grievance&quot;. We aim to
          acknowledge your complaint promptly and resolve it within 30 days.
        </p>
        <p>
          If you remain unsatisfied, you may escalate the matter to the{" "}
          <strong>Data Protection Board of India</strong> under the DPDP Act, 2023.
        </p>
      </LegalSection>

      <LegalSection id="children" n={9} title="Children's privacy">
        <p>
          Our services are business services and are not directed at children.
          Under the DPDP Act, a &quot;child&quot; is an individual below 18
          years of age, and processing a child&apos;s data requires verifiable
          parental or guardian consent. We do not knowingly collect personal
          data of children. If you believe a child has shared personal data
          with us, please contact us and we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection id="security" n={10} title="Data security">
        <p>
          We implement reasonable security safeguards to protect your personal
          data against loss, misuse, unauthorised access or disclosure, as
          required of a Data Fiduciary under Section 8 of the DPDP Act. No
          method of transmission or storage is completely secure, so we cannot
          guarantee absolute security — but we take the protection of your data
          seriously, and we will notify you and the Data Protection Board of
          India in the event of a personal data breach, as the law requires.
        </p>
      </LegalSection>

      <LegalSection id="transfers" n={11} title="International data transfers">
        <p>
          Some of our service providers (for example, Meta for Instagram
          messages, and email hosting providers) may process or store data on
          servers located outside India. Any such transfer is made only in
          accordance with the DPDP Act, 2023.
        </p>
      </LegalSection>

      <LegalSection id="cookies" n={12} title="Cookies">
        <p>
          Our website uses only strictly necessary cookies required for security
          and basic functionality. We do not use analytics, advertising or
          cross-site tracking cookies. Read our{" "}
          <a className={linkCls} href="/cookie-policy">Cookie Policy</a> for details.
        </p>
      </LegalSection>

      <LegalSection id="changes" n={13} title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. The updated version will be
          posted on this page with a revised &quot;Last updated&quot; date. We
          encourage you to review it periodically.
        </p>
      </LegalSection>

      <LegalSection id="contact" n={14} title="Contact us">
        <p>
          For any questions about this Privacy Policy or our data practices,
          reach us at:
        </p>
        <ul className={listCls}>
          <li>Email: <a className={linkCls} href="mailto:support@codenkraft.com">support@codenkraft.com</a></li>
          <li>Instagram: <a className={linkCls} href="https://www.instagram.com/codenkraft">@codenkraft</a></li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}

