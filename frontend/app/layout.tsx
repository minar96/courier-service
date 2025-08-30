import "./globals.css";
import React from "react";
import { Metadata } from "next";
import { i18n, type Locale } from "@/i18n-config";

// Fonts
import localFont from "next/font/local";
import { Inter, Geist, Geist_Mono, Fredoka } from "next/font/google";

const garet = localFont({
  src: [
    {
      path: "./fonts/garet/garet-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/garet/garet-bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-garet",
});

const peaceSans = localFont({
  src: [
    {
      path: "./fonts/peace-sans/peace-sans.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-peace-sans",
});

const bukhariScript = localFont({
  src: [
    {
      path: "./fonts/bukhari-script/bukhari-script.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-bukhari-script",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["hebrew", "latin", "latin-ext"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Kiddoz",
  description: "Project by HelloBARC",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    // <html lang={params.lang}>
    //   <body
    //     className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${fredoka.variable} ${garet.variable} ${peaceSans.variable} 
    //     ${bukhariScript.variable} w-screen h-screen antialiased`}
    //   >
    //     {children}
    //   </body>
    // </html>
    <html lang={params?.lang || 'bn'}>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${fredoka.variable} ${garet.variable} ${peaceSans.variable} ${bukhariScript.variable} min-h-screen w-full antialiased`}
      >
        {children}
      </body>
    </html>

  );
}
