"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { type getDictionary } from "@/get-dictionary";
interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const StartShipping = ({ lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-0">
          {/* <div className="w-full relative">
              <h2 className="text-[#4C4C4C] text-[36px] font-[900] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] leading-[62px] text-center text-lg max-w-2xl capitalize mx-auto">
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.KiddozWork.title}</span>
              </h2>
              <p className="text-[#252525] text-[20px] 2xl:text-[24px] xl:text-[20px] lg:text-[20px] md:text-[20px] leading-[30px] mx-auto text-center">
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.KiddozWork.subTitle}</span>
                  
              </p>
          </div> */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center py-16">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> Start shipping today</span>
        </h3>
        <p className="mt-2 text-zinc-300">
          
          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Create a free account in minutes. No setup fees, no commitments.</span>
          </p>
      </div>
      <div className="flex md:justify-end gap-3">
        <button className="rounded-2xl h-9 px-6 bg-[#ff7a00] text-white">
          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Open Account</span>
        </button>
        <button className="rounded-2xl h-9 px-6 bg-white text-[#0e1b2a]">
           <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Talk to Sales</span>
        </button>
      </div>
    </div>
        </Wrapper>
  );
};
export default StartShipping;