import BlogArticle from "@/components/blog/BlogArticle";
import { POSTS } from "@/data/posts";

export const metadata = {
  title: "GEO Kya Hai? AI Search Me Website Cite Karwane Ka Guide | Code n Kraft",
  description:
    "GEO (Generative Engine Optimization) kya hai? AI ke jawabon me apni website cite karwane ka simple guide — English, हिंदी aur Hinglish me.",
};

export default function GeoKyaHaiPost() {
  const post = POSTS.find((p) => p.slug === "geo-kya-hai");
  return (
    <main>
      <BlogArticle post={post} />
    </main>
  );
}
