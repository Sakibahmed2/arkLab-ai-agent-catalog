import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArkLab AI Agent Catalog",
  description:
    "Discover powerful AI agents designed to transform your business operations across various industries and use cases.",
  keywords: [
    "AI agents",
    "artificial intelligence",
    "business automation",
    "AI solutions",
    "agent catalog",
    "AI tools",
    "AI applications",
    "AI for business",
    "AI agent directory",
    "AI agent marketplace",
    "AI agent solutions",
    "AI agent use cases",
    "AI agent examples",
  ],
  authors: [
    {
      name: "Sakib Ahmed Loskor",
      url: "sakib-ahmed-loskor.vercel.app",
    },
  ],
  openGraph: {
    title: "ArkLab AI Agent Catalog",
    description:
      "Discover and explore our comprehensive catalog of AI agents designed to enhance your business operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkLab AI Agent Catalog",
    description:
      "Discover and explore our comprehensive catalog of AI agents designed to enhance your business operations.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
