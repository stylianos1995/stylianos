import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stylianos1995.github.io/stylianos"),
  title: "Stylianos Kalaitzis — Web Developer",
  description:
    "Web developer based in Maastricht, Netherlands. I build responsive web applications with React, JavaScript, Python, and modern frontend technologies.",
  keywords: [
    "Web Developer",
    "React",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Maastricht",
    "Portfolio",
  ],
  authors: [{ name: "Stylianos Kalaitzis" }],
  openGraph: {
    title: "Stylianos Kalaitzis — Web Developer",
    description:
      "Web developer based in Maastricht. Responsive applications with React, JavaScript, and modern frontend tooling.",
    url: "https://stylianos1995.github.io/stylianos/",
    siteName: "Stylianos Kalaitzis",
    images: [
      {
        url: "/images/stelios.jpg",
        width: 800,
        height: 800,
        alt: "Stylianos Kalaitzis",
      },
    ],
    locale: "en_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylianos Kalaitzis — Web Developer",
    description:
      "Web developer based in Maastricht. React, JavaScript, Python, and modern frontend technologies.",
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
    <html lang="en" className={`scroll-smooth dark ${inter.variable}`}>
      <body
        className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
