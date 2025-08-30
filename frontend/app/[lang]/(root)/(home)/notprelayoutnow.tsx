import React, { FC } from "react";
import ClientContend from "../ClientContend";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

const Layout: FC<LayoutProps> = async ({ children, params }: LayoutProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <ClientContend lang={lang} dictionary={dictionary} params={params}>
      {children}
    </ClientContend>
  );
};

export default Layout;
