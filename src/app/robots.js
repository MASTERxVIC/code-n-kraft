const SITE_URL = "https://codenkraft.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // AI crawlers — AEO/GEO ke liye explicitly allow
      // (ye bots site ko AI search/answers me cite karne ke liye crawl karte hain)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
