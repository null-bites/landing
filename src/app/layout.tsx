import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nullbites.com"),
  title: {
    default: "Null Bites — Nutrition, computationally designed.",
    template: "%s · Null Bites",
  },
  description:
    "Null Bites is an AI-first nutrition biomanufacturing company. We design novel food-grade proteins from scratch and turn them into real products people can eat.",
  openGraph: {
    title: "Null Bites — Nutrition, computationally designed.",
    description:
      "An AI-first nutrition biomanufacturing company. Proteins designed from scratch, engineered for a future that can feed ten billion.",
    url: "https://nullbites.com",
    siteName: "Null Bites",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Null Bites",
    description: "Nutrition, computationally designed.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
