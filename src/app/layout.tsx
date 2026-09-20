import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const TITLE = "Land Leads — Find the Right Land. Build Your Future.";
const DESCRIPTION =
  "Residential plots from ₹11.24 Lakhs at Koregaon Bhima, Taluka Shirur, Pune — 2 minutes from the Pune–Ahmednagar highway. Sewage line, 24/7 water and electricity, school and hospital nearby.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "plots in Koregaon Bhima",
    "land for sale Pune",
    "residential plot Shirur",
    "NA plots Pune",
    "Vadagaon Phata plots",
    "property investment Pune",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Land Leads",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Residential plots at Koregaon Bhima, Taluka Shirur, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
