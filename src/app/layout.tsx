/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
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
  metadataBase: new URL("https://www.dubaihillsgrovevilla.com"),
  title: {
    default: "Dubai Hills Grove Villa – 250M AED Ultra-Luxury Mansion for Sale | Dubai Hills Estate",
    template: "%s | Dubai Hills Grove Villa",
  },
  description:
    "Exclusive 7BR villa in Dubai Hills Grove, 29,000 sq.ft with private pool, cinema, gym & smart home features. Contact us to book a private viewing today.",
  keywords: [
    "Dubai Hills Grove Villa for Sale",
    "Luxury Villa in Dubai Hills Estate",
    "250 Million AED Mansion Dubai",
    "Dubai Ultra-Luxury Property for Sale",
    "Emaar Hills Grove Villa",
    "Dubai Hills Grove villa",
    "Dubai Hills Estate mansion",
    "7 bedroom villa Dubai",
    "Luxury villa for sale Dubai",
    "Dubai Hills Grove property",
    "Hills Grove Royal Estate",
    "Dubai luxury real estate",
  ],
  category: "Real Estate",
  authors: [{ name: "Hills Grove Royal Estate" }],
  creator: "Hills Grove Royal Estate",
  publisher: "Hills Grove Royal Estate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.dubaihillsgrovevilla.com/",
    title: "Dubai Hills Grove Villa – 250M AED Ultra-Luxury Mansion for Sale | Dubai Hills Estate",
    description:
      "Explore Dubai Hills Grove’s largest villa – a 250M AED architectural masterpiece with 29,000 sq.ft of living space, 7 ensuite bedrooms, smart home tech, and exclusive Dubai Hills Estate views.",
    siteName: "Dubai Hills Grove Villa",
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
    title: "Dubai Hills Grove Villa – 250M AED Ultra-Luxury Mansion for Sale | Dubai Hills Estate",
    description:
      "Explore Dubai Hills Grove’s largest villa – a 250M AED architectural masterpiece with 29,000 sq.ft of living space, 7 ensuite bedrooms, smart home tech, and exclusive Dubai Hills Estate views.",
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MVRH6RDZ40"></script>
        <script>{[
          "  window.dataLayer = window.dataLayer || [];",
          "  function gtag(){dataLayer.push(arguments);}",
          "  gtag('js', new Date());",
          "",
          "  gtag('config', 'G-MVRH6RDZ40');",
        ].join("\n")}</script>
        <script src="https://t.contentsquare.net/uxa/b05ebc8b509d6.js"></script>
      </head>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
