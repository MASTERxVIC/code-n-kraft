// Naye routes (jaise /services, /work) banenge to unki entry yahan add karna.

const SITE_URL = "https://codenkraft.com";

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
