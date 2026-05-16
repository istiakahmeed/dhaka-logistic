import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-condensed",
  weight: ["300", "700", "900"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DLSS — Dhaka Logistics Services & Solution",
  description:
    "Strategic partner for HR outsourcing, logistics management, and comprehensive support services since 2010.",
  keywords: [
    "logistics Bangladesh",
    "HR outsourcing Dhaka",
    "DLSS",
    "payroll management Bangladesh",
  ],
  openGraph: {
    title: "DLSS — Dhaka Logistics Services & Solution",
    description:
      "One single point of contact for all your organizational support needs.",
    url: "https://www.dhakalogistic.com",
    siteName: "Dhaka Logistics Services & Solution",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${barlowCondensed.variable} ${barlow.variable} h-full antialiased scroll-smooth`}
    >
      <body className='min-h-full flex flex-col bg-charcoal text-white-brand'>
        {children}
      </body>
    </html>
  );
}
