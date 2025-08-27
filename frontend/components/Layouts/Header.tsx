"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import LanguageSwitcher from "./LanguageSwitcher"; // adjust path if needed
import { i18n, type Locale } from "@/i18n-config";
import { type getDictionary } from "@/get-dictionary";
import { Icon, Wrapper } from "../UI";

interface Props {
  className?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  params: Promise<{ lang: Locale }>;
}

const Header = ({ className, dictionary, params }: Props) => {
  const [lang, setLang] = useState<string>("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    params.then((params) => {
      setLang(params.lang);
    });
  }, [params]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${className} w-full sticky top-0 z-20`}>
      <Wrapper className="w-full relative">
        <div className="w-full shadow-[0px_2px_10px_0px_rgba(182,182,182,0.24)] h-[70px] xl:h-[70px] 
    px-[20px] xl:px-[58px] py-[14px] fixed top-0 left-0 z-20 bg-white flex items-center justify-between">
          <div className="w-[148px] h-[62px]">
            <Link href="/" className="flex items-center cursor-pointer">
             <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center font-black bg-[#ff7a00] text-white">DT</div>
              <span className="font-semibold text-zinc-800">DeliverX</span>
            </div>
            </Link>
          </div>
          <div className="w-full h-[62px] flex justify-end">
            <div className="hidden 2xl:block xl:block lg:block md:block">
              <ul className=" font-semibold xl:flex lg:flex md:flex xl:flex-row lg:flex-row md:flex-row space-x-8">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] leading-[36px]"
                    aria-current="page"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.home}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#homeCourseCategory"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] leading-[36px]"
                  >
                    
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.course}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] leading-[36px]"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.about}</span>
                    
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] leading-[36px]"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.contact}</span>
                    
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] leading-[36px]"
                  >
                  <div className="rounded-2xl px-4 py-2 bg-[#0e1b2a] text-white">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.login}</span>
                  </div>
                  </Link>
                </li>
                 <li>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[20px] md:text-[20px] leading-[36px]"
                  >
                    <div className="text-[#ff7a00] border rounded-[4px] ">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.account}</span>
                    </div>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/#homeActivity"
                    className="block py-2 px-3 text-[#22304A] text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[22px] md:text-[22px] leading-[36px]"
                  >
                    Activity
                  </Link>
                </li> */}
                
                <li className="mt-2">
                  <LanguageSwitcher lang={lang ?? "en"} />
                </li>
              </ul>
            </div>
            <button
              type="button"
              title="menu"
              className="xl:hidden lg:hidden md:hidden flex justify-center items-center cursor-pointer"
              onClick={showDrawer}
            >
              <Icon
                name="menu"
                color="black"
                size="32"
                className="w-[32px] h-[32px]"
              />
            </button>
          </div>
        </div>
      </Wrapper>

      <Drawer
        styles={{
          header: {
            backgroundColor: "#011A31",
            padding: 0,
          },
        }}
        title={
          <div className="w-full px-4 py-2  flex justify-start items-center">
            <div className="w-2/12 h-[52px] flex justify-start items-center cursor-pointer">
              <Link href={`/`} className="flex items-center cursor-pointer">
                <span className="text-[#64A009] logo-text ">K</span>
                <span className="text-[#EE4B6A] logo-text">i</span>
                <span className="text-[#00AFB5] logo-text">d</span>
                <span className="text-[#FFB400] logo-text">d</span>
                <span className="text-[#00AFB5] logo-text">o</span>
                <span className="text-[#EE4B6A] logo-text">z</span>
              </Link>
            </div>
            <div className="w-10/12 h-[52px] flex justify-end items-center gap-x-[12px] md:gap-x-[28px]">
              <button
                type="button"
                title="close"
                className="w-[44px] h-[44px] bg-white rounded-[44px] flex justify-center items-center"
                onClick={onClose}
              >
                <CloseOutlined
                  className="cursor-pointer text-xl"
                  onClick={onClose}
                />
              </button>
            </div>
          </div>
        }
        closable={false} // Hides default close button
        onClose={onClose}
        open={open}
      >
        <div className="w-full mb-8 flex justify-center items-center">
          <ul className="font-medium p-4 flex flex-col gap-x-5 text-center">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-royal-blue text-[24px] leading-[30px]"
                aria-current="page"
              >
                
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.home}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#homeCourseCategory"
                className="block py-2 px-3 text-royal-blue text-[24px] leading-[30px]"
              >
                
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.course}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-royal-blue text-[24px] leading-[30px]"
              >
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.about}</span>
                
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-royal-blue text-[24px] leading-[36px]"
              >
                
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.headerMenu.contact}</span>
              </Link>
            </li>
            {/* <li>
              <Link
                href="/#homeActivity"
                className="block py-2 px-3 text-royal-blue text-[24px] leading-[30px]"
              >
                Activity
              </Link>
            </li> */}
            <li className="">
              <LanguageSwitcher lang={lang ?? "en"} />
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
