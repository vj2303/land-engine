import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Land Lead Engine",
  description: "Turning ad clicks into qualified land buyers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <nav className="border-b border-white/10 bg-forest-dark sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-gold text-xl">&#9906;</span>
              <span className="font-bold text-lg tracking-tight">Land Lead Engine</span>
            </a>
            <div className="flex gap-6 text-sm font-medium">
              <a href="/" className="hover:text-gold transition-colors">Plots</a>
              <a href="/capture" className="hover:text-gold transition-colors">WhatsApp Bot</a>
              <a href="/crm" className="hover:text-gold transition-colors">CRM Pipeline</a>
              <a href="/nurture" className="hover:text-gold transition-colors">Nurture</a>
              <a href="/dashboard" className="hover:text-gold transition-colors">Dashboard</a>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
