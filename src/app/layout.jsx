import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { StyledRoot } from "./styledRoot";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hardik Gayner — Backend & Full Stack Developer",
  description:
    "Hardik Gayner — Backend & Full Stack Developer skilled in Java, Node.js, Express, MongoDB, and Data Structures & Algorithms. Final year BCA student building scalable backend systems and developer tools.",
  metadataBase: new URL("https://hardikgayner.vercel.app"),
  alternates: {
    canonical: "https://hardikgayner.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Hardik Gayner",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Portfolio",
    "Java Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "DSA",
    "Web Development",
    "React",
    "Next.js",
    "Tech Portfolio",
  ],
  authors: [{ name: "Hardik Gayner" }],
  creator: "Hardik Gayner",
  publisher: "Hardik Gayner",
  openGraph: {
    title: "Hardik Gayner — Software & Backend Developer",
    description:
      "Portfolio of Hardik Gayner — projects and experience in backend engineering (Java, Node.js, Express, MongoDB) and DSA.",
    url: "https://hardikgayner.vercel.app",
    siteName: "Hardik Gayner Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hardikgayner.vercel.app/assets/my-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Hardik Gayner — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik Gayner — Software & Backend Developer",
    description:
      "Portfolio of Hardik Gayner — backend projects, skills, and contact.",
    images: ["https://hardikgayner.vercel.app/assets/my-pic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="JJZIBXPLYk68Hng3BB9X6f0OrYieFnpgTMdy7GJxwkY"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hardik Gayner",
              url: "https://hardikgayner.vercel.app",
              jobTitle: "Backend Developer",
              sameAs: [
                "https://www.linkedin.com/in/hardik-gayner-0b2ab32ba",
                "https://github.com/imHardik1606",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider>
            <StyledRoot>{children}</StyledRoot>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
