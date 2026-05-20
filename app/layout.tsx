import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
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
  icons: [{ rel: "icon", url: "/dlsIco.png" }],
  openGraph: {
    title: "DLSS — Dhaka Logistics Services & Solution",
    description:
      "One single point of contact for all your organizational support needs.",
    url: "https://www.dhakalogistic.com",
    siteName: "Dhaka Logistics Services & Solution",
    locale: "en_BD",
    type: "website",
    images: [{ url: "/dlsIco.png", width: 200, height: 50 }],
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
