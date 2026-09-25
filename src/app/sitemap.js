// TODO: real domain aate hi SITE_URL badal dena (layout.js me bhi same value hai)
// Naye routes (jaise /services, /work) banenge to unki entry yahan add karna.

const SITE_URL = "https://example.com";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
