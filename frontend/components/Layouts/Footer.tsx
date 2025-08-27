"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import { i18n, type Locale } from "@/i18n-config";
import { type getDictionary } from "@/get-dictionary";

interface Props {
  className?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  params: Promise<{ lang: Locale }>;
}

const Footer = ({ className, dictionary, params }: Props) => {
  const [lang, setLang] = useState<string>("en");
  useEffect(() => {
      params.then((params) => {
        setLang(params.lang);
      });
    }, [params]);
  return (
    <div
      className={`${className} w-full bg-[url('/assets/img/bg/footer-bg.svg')] bg-top bg-cover bg-no-repeat 2xl:h-[480px] xl:h-[480px] lg:h-[420px] md:h-[480px]`}
    >
      <Wrapper className="w-full  pt-[73px] 2xl:pt[176px] xl:pt[176px] lg:pt[176px] md:pt[176px] px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
            <div className="">
              <div className="w-full">
                <div className="w-full">
                  {/* <span className="text-white text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] font-mikado font-bold leading-[62px]">
                    Kiddoz filter:drop-shadow(16px 7px 8px #fff) drop-shadow-[0_0_20px_#fff]
                  </span> */}
                  <Image
                    src="/assets/img/home/full-logo.png"
                    alt="Description"
                    width={100}
                    height={100}
                    className="w-[35%] object-cover"
                    style={{ filter: 'drop-shadow(-1px 7px 8px #fff)' }}
                  />
                </div>
                <div className="w-full mt-[12px]">
                  <p className="text-[#ffffff] text-[18px] font-bold tracking-[0.54px]">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.title}</span>
                  </p>
                </div>
              </div>
              <div className="w-full mt-[34px] flex justify-start gap-3">
                {/* <Link href="/#" className="footer-social-icon">
                  <Icon name="twitter" color="grayE4" size="23" />
                </Link> */}
                <Link href="https://facebook.com/profile.php?id=61575573185787" className="footer-social-icon">
                  <Icon name="facebook" color="blueFF" size="23" />
                </Link>
                {/* <Link href="/#" className="footer-social-icon">
                  <Icon name="instagram" color="grayE4" size="23" />
                </Link> */}
                <Link href="/https://www.linkedin.com/company/kiddoz/" className="footer-social-icon">
                  <Icon name="linkedIn" color="blueFF" size="23" />
                </Link>
              </div>
            </div>
           
            <div className="col-span-2 flex justify-between 2xl:justify-start xl:justify-start lg:justify-start md:justify-start 2xl:gap-60 xl:gap-60 lg:gap-40 md:gap-40 ms-0 2xl:ms-30 xl:ms-30 lg:ms-30 md:ms-30 mt-[44px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
              <div className="">
                <div className="w-full">
                  <span className="text-white text-[22px]">
                    <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.footerNav.serviceTitle}</span>
                  </span>
                </div>
                <div className="w-full">
                  <ul className="flex flex-col gap-[2px]">
                    <li className="text-white text-[18px] font-bold tracking-[0.54px] leading-[28px]">
                      <Link href="/">
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.home}</span>
                      </Link>
                    </li>
                    <li className="text-white text-[18px] font-bold tracking-[0.54px] leading-[20px]">
                      <Link href="/#homeCourseCategory">
                       <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.course}</span>
                      </Link>
                    </li>
                    {/* <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
                      <Link href="/#">Blog</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="w-full">
                  <span className="text-white text-[22px]">
                    <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.footerNav.linkTitle}</span>
                  </span>
                </div>
                <div className="w-full">
                  <ul className="flex flex-col gap-[2px]">
                    <li className="text-white text-[18px] font-bold tracking-[0.54px] leading-[28px]">
                      <Link href="/about">
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.about}</span>
                      </Link>
                    </li>
                    <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
                      <Link href="/privacy-policy">
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.policy}</span>
                      </Link>
                    </li>
                    <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
                      <Link href="/#">
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.contact}</span>
                      </Link>
                    </li>
                    <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
                      <Link href="/terms-and-condition">
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.terms}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full grid grid-cols-1 mt-[58px] 2xl:mt-[54px] xl:mt-[54px] lg:mt-[0px] md:mt-[0px]">
          <p className="text-center text-white text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] font-mikado-regular leading-[28px]">
            @copyright 2025 all right reserved by Kiddoz
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
