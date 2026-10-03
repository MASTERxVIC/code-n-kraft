"use client";

import { useState } from "react";
import Link from "next/link";
import Markdown from "./Markdown";

const LANGS = [
  { id: "english", label: "English" },
  { id: "hindi", label: "हिंदी" },
  { id: "hinglish", label: "Hinglish" },
];

// Change this to switch the default language: "english" | "hindi" | "hinglish"
const DEFAULT_LANG = "hinglish";

export default function BlogArticle({ post }) {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const v = post.content[lang];

  return (
    <article className="mx-auto w-full max-w-3xl px-6 pt-32 pb-24 md:pt-40">
      <p className="font-label mb-4 text-sm tracking-[0.25em] text-supportive">
        BLOG
      </p>
      <Link
        href="/blog"
        className="font-body mb-6 inline-block text-sm text-supportive hover:underline"
      >
        ← All posts
      </Link>

      {/* language switcher */}
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Language">
        {LANGS.map((l) => {
          const active = l.id === lang;
          return (
            <button
              key={l.id}
              role="tab"
              aria-selected={active}
              onClick={() => setLang(l.id)}
              className={`rounded-full px-5 py-2 font-body text-sm transition ${
                active
                  ? "bg-heading text-white"
                  : "border border-heading/20 bg-white/60 text-heading hover:border-supportive"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>

      <h1 className="font-display mb-4 text-4xl leading-tight text-heading md:text-5xl">
        {v.title}
      </h1>
      <p className="font-body mb-10 text-sm text-heading/60">
        {post.date} · {post.readTime} · Code n Kraft
      </p>

      <Markdown text={v.body} />
    </article>
  );
}
