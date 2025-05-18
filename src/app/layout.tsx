import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Stelios Kalaitzis - Data Scientist & Web Developer",
  description:
    "Portfolio website of Stelios Kalaitzis, a Data Scientist and Web Developer based in Maastricht, Netherlands.",
  keywords: [
    "Data Scientist",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Stelios Kalaitzis" }],
  openGraph: {
    title: "Stelios Kalaitzis - Data Scientist & Web Developer",
    description:
      "Portfolio website of Stelios Kalaitzis, a Data Scientist and Web Developer based in Maastricht, Netherlands.",
    url: "https://stylianos1995.github.io/stylianos/",
    siteName: "Stelios Kalaitzis Portfolio",
    images: [
      {
        url: "/images/stelios.jpg",
        width: 800,
        height: 800,
        alt: "Stelios Kalaitzis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stelios Kalaitzis - Data Scientist & Web Developer",
    description:
      "Portfolio website of Stelios Kalaitzis, a Data Scientist and Web Developer based in Maastricht, Netherlands.",
    images: ["/images/stelios.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
