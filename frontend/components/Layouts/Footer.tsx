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
    // <div
    //   className={`${className} w-full 2xl:h-[480px] xl:h-[480px] lg:h-[420px] md:h-[480px]`}
    // >
    //   <Wrapper className="w-full  pt-[73px] 2xl:pt[176px] xl:pt[176px] lg:pt[176px] md:pt[176px] px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
    //     <div className="w-full grid grid-cols-1 lg:grid-cols-3">
           
           
    //         <div className="col-span-2 flex justify-between 2xl:justify-start xl:justify-start lg:justify-start md:justify-start 2xl:gap-60 xl:gap-60 lg:gap-40 md:gap-40 ms-0 2xl:ms-30 xl:ms-30 lg:ms-30 md:ms-30 mt-[44px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
    //           <div className="">
    //             <div className="w-full">
    //               <span className="text-white text-[22px]">
    //                 <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.footerNav.serviceTitle}</span>
    //               </span>
    //             </div>
    //             <div className="w-full">
    //               <ul className="flex flex-col gap-[2px]">
    //                 <li className="text-white text-[18px] font-bold tracking-[0.54px] leading-[28px]">
    //                   <Link href="/">
    //                     <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.home}</span>
    //                   </Link>
    //                 </li>
    //                 <li className="text-white text-[18px] font-bold tracking-[0.54px] leading-[20px]">
    //                   <Link href="/#homeCourseCategory">
    //                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.course}</span>
    //                   </Link>
    //                 </li>
                   
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="">
    //             <div className="w-full">
    //               <span className="text-white text-[22px]">
    //                 <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.footerNav.linkTitle}</span>
    //               </span>
    //             </div>
    //             <div className="w-full">
    //               <ul className="flex flex-col gap-[2px]">
    //                 <li className="text-white text-[18px] font-bold tracking-[0.54px] leading-[28px]">
    //                   <Link href="/about">
    //                     <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.about}</span>
    //                   </Link>
    //                 </li>
    //                 <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
    //                   <Link href="/privacy-policy">
    //                   <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.policy}</span>
    //                   </Link>
    //                 </li>
    //                 <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
    //                   <Link href="/#">
    //                     <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.contact}</span>
    //                   </Link>
    //                 </li>
    //                 <li className="text-white text-[18px] font-mikado-regular font-bold tracking-[0.54px] leading-[28px]">
    //                   <Link href="/terms-and-condition">
    //                     <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.footerNav.terms}</span>
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
       
    //   </Wrapper>
    // </div>
     <footer
      className={`${className} w-full pt-16 pb-8 bg-[#0b1420] text-zinc-300`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div>
          <h4 className="mb-4 text-white">
            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>DeliverX</span>
          </h4>
          <p className="text-sm">
            
            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Bangladesh’s fastest growing courier service for merchants.</span>
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">
            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>Products</span>
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Shipment</span>
              </a></li>
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>COD Services</span>
              </a></li>
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Rate Calculator</span>
              </a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">
            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>Company</span>
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>About</span>
              </a></li>
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Contact</span>
              </a></li>
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Blog</span>
              </a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">
            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>Support</span>
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Help Center</span>
              </a></li>
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>FAQ</span>
              </a></li>
            <li><a href="#" className="hover:text-white">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Terms</span>
              </a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-zinc-500">
        &copy; 
        <span className="font-mikado-regular">2025 DeliverX. All rights reserved.</span>
      </div>
    </footer>

  );
};

export default Footer;
