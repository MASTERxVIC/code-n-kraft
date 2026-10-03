import Link from "next/link";
import { POSTS } from "@/data/posts";

export const metadata = {
  title: "Blog | Code n Kraft",
  description:
    "Practical notes on web design, SEO, GEO and AEO — in English, हिंदी and Hinglish.",
};

export default function BlogIndex() {
  // latest first — naya post daalte hi sabse upar aayega
  const sorted = [...POSTS].sort((a, b) =>
    (b.publishedAt || "").localeCompare(a.publishedAt || "")
  );
  return (
    <main className="mx-auto w-full max-w-5xl px-6 pt-32 pb-24 md:pt-40">
        <p className="font-label mb-4 text-sm tracking-[0.25em] text-supportive">
          BLOG
        </p>
        <h1 className="font-display mb-4 text-4xl text-heading md:text-6xl">
          Notes &amp; Guides
        </h1>
        <p className="font-body mb-12 max-w-2xl text-lg text-heading/70">
          Practical notes on design, SEO, GEO and AEO — in English, हिंदी and
          Hinglish. No jargon, no fluff.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-3xl border border-heading/10 bg-white/70 p-8 transition hover:border-supportive hover:shadow-lg"
            >
              <p className="font-body mb-3 text-xs text-heading/50">
                {p.date} · {p.readTime}
              </p>
              <h2 className="font-display mb-3 text-2xl leading-snug text-heading group-hover:text-supportive">
                {p.title}
              </h2>
              <p className="font-body text-heading/70">{p.excerpt}</p>
              <span className="font-label mt-4 inline-block text-sm text-supportive">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </main>
  );
}
