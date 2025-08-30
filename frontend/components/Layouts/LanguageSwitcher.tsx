"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import Icon from "@/components/UI/Icon";
import { i18n, type Locale } from "@/i18n-config";
import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
}

const LocaleSwitcher = ({ lang }: Props) => {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const [items, setItems] = useState<MenuProps["items"]>([]);

  useEffect(() => {
    const lang_items = i18n.locales.map((locale) => {
      return {
        key: locale,
        label: (
          <Link href={redirectedPathname(locale)}>
            {locale === "en" ? "English" : "বাংলা"}
          </Link>
        ),
      };
    });
    setItems(lang_items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <Dropdown menu={{ items }}>
        <span onClick={(e) => e.preventDefault()}>
          <Space className="flex justify-center items-center px-2 py-1 gap-[6px] w-[144px] h-[44px] bg-[#F1F1F1] rounded-[35px] cursor-pointer">
            <Icon
              name="earth-golbe"
              color="red048"
              size="24"
              className="w-[24px] h-[24px]"
            />
            <span className="text-[20px] text-[rgba(66, 66, 66, 0.87)] text-center font-semibold font-sans leading-[30px]">
              {lang === "en" ? "English" : "বাংলা"}
            </span>
            <Icon
              name="down-arrow-small"
              color="white"
              size="12"
              className="w-[12px] h-[12px]"
            />
          </Space>
        </span>
      </Dropdown>
    </div>
  );
};

export default LocaleSwitcher;
