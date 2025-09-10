"use client";

import { Footer, Header } from "@/components/Layouts";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";

interface Props {
  children: React.ReactNode;
  lang: string;
  dictionary: any;
  params: Promise<{ lang: Locale }>;
}

const ClientContend = ({ children, lang, dictionary, params }: Props) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Fake route loading (for gif spinner)
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading || !dictionary) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        {/* Loading spinner here */}
      </div>
    );
  }

  // Pages where you don’t want a header
  const noHeaderPages = ["/en/add-order-category", "/bn/add-order-category"]; // change based on your routes
  const hideHeader = noHeaderPages.includes(pathname);

  return (
    <div
      className="w-full h-screen overflow-x-hidden overflow-y-auto
        [&::-webkit-scrollbar]:w-[4px]
        [&::-webkit-scrollbar-track]:rounded
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {!hideHeader && (
        <Header className="w-full" dictionary={dictionary} params={params} />
      )}

      <div className="w-full">{children}</div>

      <Footer dictionary={dictionary} params={params} />
    </div>
  );
};

export default ClientContend;
