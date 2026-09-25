import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing your use of codenkraft.com and Code 'n' Kraft's web design, development, SEO, GEO and AEO services.",
  alternates: { canonical: "/terms-conditions" },
};

const UPDATED = "25 September 2026";

const TOC = [
  { n: 1, id: "agreement", label: "Agreement to these terms" },
  { n: 2, id: "services", label: "Our services" },
  { n: 3, id: "payments", label: "Quotes & payments" },
  { n: 4, id: "timelines", label: "Project timelines" },
  { n: 5, id: "your-responsibilities", label: "Your responsibilities" },
  { n: 6, id: "revisions", label: "Revisions & approval" },
  { n: 7, id: "ip", label: "Intellectual property" },
  { n: 8, id: "no-guarantees", label: "No guaranteed rankings" },
  { n: 9, id: "confidentiality", label: "Confidentiality" },
  { n: 10, id: "termination", label: "Termination" },
  { n: 11, id: "disclaimers", label: "Disclaimers" },
  { n: 12, id: "liability", label: "Limitation of liability" },
  { n: 13, id: "indemnification", label: "Indemnification" },
  { n: 14, id: "force-majeure", label: "Force majeure" },
  { n: 15, id: "severability", label: "Severability" },
  { n: 16, id: "governing-law", label: "Governing law & jurisdiction" },
  { n: 17, id: "changes", label: "Changes to these terms" },
  { n: 18, id: "contact", label: "Contact us" },
];

const listCls = "list-disc space-y-2 pl-6";
const linkCls = "text-supportive underline underline-offset-4 hover:no-underline";

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Terms & Conditions"
      updated={UPDATED}
      intro="These terms govern your use of codenkraft.com and any services you engage Code 'n' Kraft for. Please read them carefully — by using our website or hiring us, you agree to them."
      toc={TOC}
    >
      <LegalSection id="agreement" n={1} title="Agreement to these terms">
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) form a legally binding
          agreement between you and Code &apos;n&apos; Kraft (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;) under the Indian Contract Act, 1872.
          By browsing codenkraft.com or engaging our services, you accept these
          Terms. If you are accepting on behalf of a company or organisation,
          you confirm you are authorised to do so.
        </p>
      </LegalSection>

      <LegalSection id="services" n={2} title="Our services">
        <p>We offer the following professional services:</p>
        <ul className={listCls}>
          <li>Website design and development;</li>
          <li>Website rebrand and rebuild;</li>
          <li>UI &amp; UX design;</li>
          <li>Search Engine Optimization (SEO);</li>
          <li>Generative Engine Optimization (GEO);</li>
          <li>Answer Engine Optimization (AEO); and</li>
          <li>Related consultancy and support.</li>
        </ul>
        <p>
          The exact scope, deliverables and timelines for your project will be
          set out in a written quote or proposal, which forms part of our
          agreement with you.
        </p>
      </LegalSection>

      <LegalSection id="payments" n={3} title="Quotes & payments">
        <ul className={listCls}>
          <li>Every project begins with a written quote describing the scope, deliverables and payment schedule (for example, an advance plus milestone payments).</li>
          <li>All fees are in Indian Rupees (INR) unless stated otherwise. Applicable taxes, including GST, are charged extra.</li>
          <li>Work may be paused if scheduled payments are delayed, and timelines will shift accordingly.</li>
          <li>Any work outside the agreed scope will be quoted and billed separately, only after your approval.</li>
        </ul>
      </LegalSection>

      <LegalSection id="timelines" n={4} title="Project timelines">
        <p>
          Timelines mentioned in a quote are good-faith estimates, not
          guarantees. They depend on timely inputs from your side — content,
          feedback, approvals and access (see below). Delays in providing these
          will extend the delivery schedule by at least the same period.
        </p>
      </LegalSection>

      <LegalSection id="your-responsibilities" n={5} title="Your responsibilities">
        <p>To help us deliver on time and to a high standard, you agree to:</p>
        <ul className={listCls}>
          <li>Provide accurate content, images, brand assets and information when requested;</li>
          <li>Give us the access we need (hosting, domain, CMS, analytics) in a timely manner;</li>
          <li>Share consolidated feedback and approvals within the agreed timeframes;</li>
          <li>Ensure that all content and materials you supply are lawful and do not infringe anyone&apos;s intellectual property or other rights; and</li>
          <li>Remain responsible for your own website&apos;s ongoing legal compliance (for example, your own privacy policy and cookie notices).</li>
        </ul>
      </LegalSection>

      <LegalSection id="revisions" n={6} title="Revisions & approval">
        <p>
          Each quote includes a defined number of revision rounds. Revisions
          beyond that, or changes requested after final written approval
          (email confirmation is fine), will be billed as additional work.
          Final approval of designs, copy or deliverables rests with you —
          please review carefully before signing off.
        </p>
      </LegalSection>

      <LegalSection id="ip" n={7} title="Intellectual property">
        <ul className={listCls}>
          <li>
            <strong>Transfer on full payment.</strong> Once you have paid all
            fees in full, ownership of the final deliverables created
            specifically for your project transfers to you.
          </li>
          <li>
            <strong>Portfolio rights.</strong> Unless we agree otherwise in
            writing, we may showcase the work in our portfolio, case studies
            and social media.
          </li>
          <li>
            <strong>Third-party assets.</strong> Stock images, fonts, plugins,
            themes and similar assets remain governed by their own licences;
            any licence costs are passed through to you or licensed in your name.
          </li>
          <li>
            <strong>Our know-how.</strong> Our pre-existing methods, frameworks,
            code libraries and general know-how remain our property and are not
            transferred.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="no-guarantees" n={8} title="No guaranteed rankings">
        <p>
          SEO, GEO and AEO depend on third-party platforms — search engines and
          AI answer engines — whose algorithms change without notice and are
          outside our control. We therefore do <strong>not</strong> guarantee
          specific search rankings, traffic volumes, or AI citations. What we do
          promise is honest, best-practice work: we never use deceptive
          &quot;black-hat&quot; tactics that could get your site penalised.
        </p>
      </LegalSection>

      <LegalSection id="confidentiality" n={9} title="Confidentiality">
        <p>
          Any non-public business information shared between us in the course of
          a project will be kept confidential and used only for that project,
          except where disclosure is required by law.
        </p>
      </LegalSection>

      <LegalSection id="termination" n={10} title="Termination">
        <p>
          Either party may end a project with written notice (email is fine).
          On termination, you pay for all work completed up to the termination
          date, plus any non-recoverable costs already committed for your
          project. Advance payments covering work not yet started will be
          refunded on a pro-rata basis.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" n={11} title="Disclaimers">
        <p>
          We perform our services with professional skill and care. Except as
          required by law, we do not warrant uninterrupted availability of
          third-party platforms, tools, hosting providers or app stores, nor
          outcomes dependent on them. Nothing in these Terms limits your
          statutory rights under the Consumer Protection Act, 2019.
        </p>
      </LegalSection>

      <LegalSection id="liability" n={12} title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, our total liability arising
          from any project is limited to the fees you paid us for that project.
          We are not liable for indirect, incidental or consequential losses —
          such as lost profits, lost revenue or loss of data — even if advised
          of their possibility.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" n={13} title="Indemnification">
        <p>
          You agree to indemnify and hold Code &apos;n&apos; Kraft harmless
          against any claims, damages, losses or expenses (including reasonable
          legal costs) arising from: (a) content, images, text or other
          materials you supply to us; (b) your use of the deliverables after
          handover; or (c) your breach of these Terms.
        </p>
      </LegalSection>

      <LegalSection id="force-majeure" n={14} title="Force majeure">
        <p>
          Neither party will be liable for failure or delay in performing its
          obligations where caused by events beyond reasonable control —
          including natural disasters, pandemics, government actions, strikes,
          or widespread internet, hosting or power outages. Timelines will be
          extended by the duration of such events, and either party may
          terminate the project if the disruption lasts more than 60 days.
        </p>
      </LegalSection>

      <LegalSection id="severability" n={15} title="Severability">
        <p>
          If any provision of these Terms is held to be invalid or
          unenforceable by a court, the remaining provisions continue in full
          force, and the invalid provision is treated as replaced by a valid
          one that comes closest to its original intent.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" n={16} title="Governing law & jurisdiction">
        <p>
          These Terms are governed by the laws of India. Any disputes will be
          subject to the jurisdiction of the courts in India. We will always
          first attempt to resolve disputes amicably through good-faith
          discussion.
        </p>
      </LegalSection>

      <LegalSection id="changes" n={17} title="Changes to these terms">
        <p>
          We may update these Terms from time to time. The revised version will
          be posted on this page with a new &quot;Last updated&quot; date. Your
          continued use of our website or services after the update constitutes
          acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" n={18} title="Contact us">
        <p>Questions about these Terms? Reach us at:</p>
        <ul className={listCls}>
          <li>Email: <a className={linkCls} href="mailto:codenkraft@gmail.com">codenkraft@gmail.com</a></li>
          <li>Instagram: <a className={linkCls} href="https://www.instagram.com/codenkraft">@codenkraft</a></li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}

