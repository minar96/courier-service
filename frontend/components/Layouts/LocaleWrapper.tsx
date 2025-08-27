// app/components/Layouts/LocaleWrapper.tsx
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter, Geist, Geist_Mono, Fredoka } from "next/font/google";
import localFont from "next/font/local";
import "../../globals.css";

// Fonts
const garet = localFont({
  src: [
    { path: "../../../fonts/garet/garet-normal.woff2", weight: "400", style: "normal" },
    { path: "../../../fonts/garet/garet-bold.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-garet",
});

const peaceSans = localFont({
  src: [
    { path: "../../../fonts/peace-sans/peace-sans.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
  variable: "--font-peace-sans",
});

const bukhariScript = localFont({
  src: [
    { path: "../../../fonts/bukhari-script/bukhari-script.woff2", weight: "400", style: "normal" },
  ],
  display: "swap",
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
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-fredoka",
});

export async function LocaleWrapper({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  let messages;
  try {
    messages = (await import(`../../../../locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${fredoka.variable} ${garet.variable} ${peaceSans.variable} ${bukhariScript.variable} w-screen h-screen antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AntdRegistry>{children}</AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
