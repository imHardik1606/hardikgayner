import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { StyledRoot } from "./styledRoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// For SEO metadata
export const metadata = {
  title: "Hardik Gayner - Portfolio",
  description:
    "Portfolio of Hardik Gayner — Full Stack Developer skilled in Java, Node.js, Express, MongoDB, and Data Structures & Algorithms. Passionate about building scalable backend systems, modern web applications, and solving real-world problems through clean and efficient code.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Hardik Gayner",
    "AI Enginner",
    "ML Engineer",
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
    "Engineering",
    "Tech Portfolio",
  ],
  authors: [{ name: "Hardik Gayner" }],
  creator: "Hardik Gayner",
  publisher: "Hardik Gayner",
  metadataBase: new URL("https://hardikgayner.vercel.app"),
  openGraph: {
    title: "Hardik Gayner | Software / Backend Developer",
    description:
      "Explore the work, projects, and skills of Hardik Gayner — a Full Stack Developer focused on backend development, scalable architecture, and solving real-world technical challenges.",
    // url: "https://your-domain.com",
    siteName: "Hardik Gayner Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="JJZIBXPLYk68Hng3BB9X6f0OrYieFnpgTMdy7GJxwkY" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <StyledRoot>{children}</StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
