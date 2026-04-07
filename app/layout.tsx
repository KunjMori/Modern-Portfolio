import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen — Futuristic Developer Portfolio",
  description:
    "Senior Product Engineer specializing in high-performance, visually stunning digital experiences that bridge the gap between complex engineering and intuitive design.",
  keywords: ["developer", "portfolio", "frontend", "fullstack", "UI/UX", "React", "Next.js"],
  openGraph: {
    title: "Alex Chen — Futuristic Developer Portfolio",
    description: "Building extraordinary digital experiences with precision and creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
