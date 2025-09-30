import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hillsgrove-royal-estate.vercel.app"),
  title: {
    default: "Luxury Hills Grove Royal Estate | Elite Property DXB",
    template: "%s | Elite Property DXB",
  },
  description:
    "Tour the landmark 7-bedroom Hills Grove Royal Estate in Dubai Hills Estate with private cinema, spa suite, and 29,000 sq.ft of curated living by Elite Property DXB.",
  keywords: [
    "Elite Property DXB",
    "Hills Grove Royal Estate",
    "Dubai Hills Estate villa",
    "Luxury mansion Dubai",
    "7 bedroom villa Dubai",
    "Dubai luxury real estate",
    "Ultra luxury property Dubai",
  ],
  category: "Real Estate",
  authors: [{ name: "Elite Property DXB" }],
  creator: "Elite Property DXB",
  publisher: "Elite Property DXB",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://hillsgrove-royal-estate.vercel.app/",
    title: "Luxury Hills Grove Royal Estate | Elite Property DXB",
    description:
      "Tour the landmark 7-bedroom Hills Grove Royal Estate in Dubai Hills Estate with private cinema, spa suite, and 29,000 sq.ft of curated living by Elite Property DXB.",
    siteName: "Elite Property DXB",
    images: [
      {
        url: "/meta-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hills Grove Royal Estate luxury interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Hills Grove Royal Estate | Elite Property DXB",
    description:
      "Tour the landmark 7-bedroom Hills Grove Royal Estate in Dubai Hills Estate with private cinema, spa suite, and 29,000 sq.ft of curated living by Elite Property DXB.",
    images: ["/meta-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
