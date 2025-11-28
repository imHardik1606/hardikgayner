export default function robots() {
  const siteUrl = "https://hardikgayner.vercel.app"; // ⬅ Replace with your real URL

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
