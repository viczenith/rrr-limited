import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIGHTEOUS AND RICH REALTY - Premium Real Estate in Nigeria",
  description: "Your trusted partner in real estate investment. Premium properties in strategic locations with verified documentation and flexible payment plans. Located in Vicbalkon Tower, Utako, FCT Abuja.",
  keywords: ["RIGHTEOUS AND RICH REALTY", "Real Estate", "Nigeria", "Abuja", "Land Investment", "Property", "C of O", "Verified Properties", "Flexible Payment"],
  authors: [{ name: "RIGHTEOUS AND RICH REALTY" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "RIGHTEOUS AND RICH REALTY - Premium Real Estate",
    description: "Premium real estate investments in strategic locations with verified documentation and flexible payment plans",
    url: "https://righteousrichrealty.com",
    siteName: "RIGHTEOUS AND RICH REALTY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIGHTEOUS AND RICH REALTY",
    description: "Premium real estate investments in strategic locations with verified documentation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
