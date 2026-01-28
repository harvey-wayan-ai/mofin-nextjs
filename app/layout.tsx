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
  title: 'Mofin - Your Financial Future Starts Here',
  description: 'Smart financial management platform with AI-powered budgeting, investment tracking, and personalized financial insights for modern investors.',
  keywords: ['finance', 'budgeting', 'investment', 'financial planning', 'AI finance'],
  openGraph: {
    title: 'Mofin - Smart Financial Management',
    description: 'AI-powered financial platform for modern investors',
    url: 'https://mofin-nextjs.vercel.app',
    siteName: 'Mofin',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mofin - Smart Financial Management',
    description: 'AI-powered financial platform for modern investors',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
