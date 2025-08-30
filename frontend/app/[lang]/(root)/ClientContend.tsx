"use client";

import { Footer, Header } from "@/components/Layouts";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

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
        {/* <Image
          src="/assets/img/home/maskot.gif"
          alt="Loading"
          width={100}
          height={100}
          className="w-[5%] object-cover mx-auto"
        /> */}
      </div>
    );
  }

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
      <Header className="w-full" dictionary={dictionary} params={params} />
      <div className="w-full">{children}</div>
      <Footer dictionary={dictionary} params={params}/>
    </div>
  );
};

export default ClientContend;
