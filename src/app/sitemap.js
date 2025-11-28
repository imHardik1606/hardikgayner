export default function sitemap() {
  const siteUrl = "https://hardikgayner.vercel.app";

  return [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
