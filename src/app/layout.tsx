import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayil SS | Frontend Engineer",
  description:
    "Explore the portfolio of Mayil Safarzade, a frontend engineer skilled in React, Next.js, and TypeScript. Discover projects, skills, and how to get in touch.",
  authors: [{ name: "Mayil Safarzade", url: "https://github.com/mayilss" }],
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "Mayil Safarzade",
    "Mayil SS",
    "mayilss",
  ],
  creator: "Mayil Safarzade",
  metadataBase: new URL("https://mayilss.vercel.app/"),
  openGraph: {
    title: "Mayil SS | Frontend Engineer",
    description:
      "Showcasing the work and skills of Mayil Safarzade, a frontend engineer specializing in modern web technologies.",
    url: "https://mayilss.vercel.app/",
    siteName: "Mayil Safarzade",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mayilss.vercel.app/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Mayil Safarzade Website Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
