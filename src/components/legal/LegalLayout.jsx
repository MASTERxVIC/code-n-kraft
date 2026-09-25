import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Footer from "@/components/sections/Footer";

/* Numbered legal section — h2 + body copy, theme type scale */
export function LegalSection({ id, n, title, children }) {
  return (
    <section id={id} className="mt-10 scroll-mt-28 md:mt-12">
      <h2 className="font-display text-xl font-bold text-heading md:text-2xl">
        {n}. {title}
      </h2>
      <div className="mt-4 space-y-4 font-body text-[15px] leading-7 text-heading/90 md:text-base md:leading-8">
        {children}
      </div>
    </section>
  );
}

/* Legal pages ka shared shell — heading, updated date, TOC, article, footer */
export default function LegalLayout({ badge = "Legal", title, updated, intro, toc = [], children }) {
  return (
    <>
      <Section noReveal className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHeading
            badge={badge}
            title={title}
            align="center"
            titleClassName="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-heading"
          />
          <p className="mt-4 text-center font-label text-xs uppercase tracking-[0.18em] text-heading/60">
            Last updated: {updated}
          </p>
          {intro && (
            <p className="mx-auto mt-6 max-w-[720px] text-center font-body text-base leading-8 text-heading/80 md:text-lg">
              {intro}
            </p>
          )}

          {toc.length > 0 && (
            <nav
              aria-label="On this page"
              className="mt-10 rounded-[20px] border border-button bg-surface p-6 md:p-8"
            >
              <p className="font-label text-[11px] font-medium uppercase tracking-[0.22em] text-heading/60">
                On this page
              </p>
              <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-body text-sm leading-7 text-supportive underline-offset-4 hover:underline"
                    >
                      {item.n}. {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <article className="mt-4">{children}</article>
        </div>
      </Section>
      <Footer />
    </>
  );
}

