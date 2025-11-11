"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
 
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const Services = ({ lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] px-5 2xl:px-0 xl:px-0 lg:px-5 md:px-0 ">
        {/* <div className="w-full">
             <ScrollFadeIn>
                <h2 className="text-[#4D4D4D] text-[36px] font-[600] 2xl:text-[48px] xl:text-[48px] lg:text-[42px] md:text-[42px] leading-[46.8px] 2xl:leading-[56px] xl:leading-[56px] lg:leading-[56px] md:leading-[56px]">
                    <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.kiddozSpecial.title}</span>
                </h2>
            </ScrollFadeIn>
            <div className="mt-[9px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mb-[26px] 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0">
                <Image
                    src="/assets/img/home/cloud-star.svg"
                    alt="Description"
                    width={100}
                    height={100}
                    className="w-[79px] 2xl:w-[153px] xl:w-[153px] lg:w-[153px] md:w-[153px] h-[66px] 2xl:h-[129px] xl:h-[129px] lg:h-[129px] md:h-[129px] object-cover"
                />
            </div>
        </div>
        <div className="w-full col-span-2" >
            <ScrollFadeIn>
                <div className="block 2xl:flex xl:flex lg:flex md:flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-between items-center gap-0 2xl:gap-0 xl:gap-0 lg:gap-6 md:gap-0 sm:gap-0">
                    <div className="rounded-[18px] border border-dashed border-[#747474] bg-[#FFE5C2] w-full 2xl:w-[392px] xl:w-[392px] lg:w-[392px] md:w-[392px] h-[199px] p-3 flex justify-center items-center">
                        <div>
                            <div className="flex justify-start gap-2">
                                <Icon name="curriculum" color="black" size="40" />
                                <h4 className="text-[#4D4D4D] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[28px] sm:text-[28px] leading-[38px] 2xl:leading-[38px] xl:leading-[38px] lg:leading-[36px] md:leading-[38px] sm:leading-[38px]">
                                    <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.kiddozSpecial.usp1Title}</span>
                                </h4>
                            </div>
                            <p className="text-[#484848] text-[18px] leading-[27px] ms-10 mt-[11px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.kiddozSpecial.usp1SubTitle}</span>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[18px] mt-[16px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 border border-dashed border-[#747474] bg-[#CBF7E4] w-full 2xl:w-[392px] xl:w-[392px] lg:w-[392px] md:w-[392px] h-[199px] p-3 flex justify-center items-center">
                        <div>
                            <div className="flex justify-start gap-2">
                                <Icon name="materials" color="black" size="40" />
                                <h4 className="text-[#4D4D4D] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[28px] sm:text-[28px] leading-[38px] 2xl:leading-[38px] xl:leading-[38px] lg:leading-[36px] md:leading-[38px] sm:leading-[38px]">
                                    <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.kiddozSpecial.usp2Title}</span>
                                </h4>
                            </div>
                            <p className="text-[#484848] text-[18px] leading-[27px] ms-10 mt-[11px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.kiddozSpecial.usp2SubTitle}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="block 2xl:flex xl:flex lg:flex md:flex 2xl:justify-between xl:justify-between lg:justify-between md:justify-between items-center gap-0 2xl:gap-0 xl:gap-0 lg:gap-6 md:gap-0 sm:gap-0 mt-[16px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px]">
                    <div className="rounded-[18px] border border-dashed border-[#747474] bg-[#D5EDFF] w-full 2xl:w-[392px] xl:w-[392px] lg:w-[392px] md:w-[392px] h-[199px] p-3 flex justify-center items-center">
                        <div>
                            <div className="flex justify-start gap-2">
                                <Icon name="learning-square" color="black" size="40" />
                                <h4 className="text-[#4D4D4D] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[28px] sm:text-[28px] leading-[38px] 2xl:leading-[38px] xl:leading-[38px] lg:leading-[36px] md:leading-[38px] sm:leading-[38px]">
                                   <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.kiddozSpecial.usp3Title}</span>
                                </h4>
                            </div>
                            <p className="text-[#484848] text-[18px] leading-[27px] ms-10 mt-[11px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                               <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.kiddozSpecial.usp2SubTitle}</span>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[18px] mt-[16px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 border border-dashed border-[#747474] bg-[#FFD6E0] w-full 2xl:w-[392px] xl:w-[392px] lg:w-[392px] md:w-[392px] h-[199px] p-3 flex justify-center items-center">
                        <div>
                            <div className="flex justify-start gap-2">
                                <Icon name="aware" color="black" size="40" />
                                <h4 className="text-[#4D4D4D] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[28px] sm:text-[28px] leading-[38px] 2xl:leading-[38px] xl:leading-[38px] lg:leading-[36px] md:leading-[38px] sm:leading-[38px]">
                                    <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.kiddozSpecial.usp4Title}</span>
                                </h4>
                            </div>
                            <p className="text-[#484848] text-[18px] leading-[27px] ms-10 mt-[11px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.kiddozSpecial.usp4SubTitle}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollFadeIn>
        </div> */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>

                </span>
                    <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.title1}</span>
                </div>
                <p className="text-sm text-zinc-600">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.services.subTitle1}</span>
                </p>
            </div>
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span>
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.title2}</span>
               
                </div>
                <p className="text-sm text-zinc-600">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> {dictionary.services.subTitle2}</span>
                </p>
            </div>
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>

                </span>
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.services.title3}</span>
               
                </div>
                <p className="text-sm text-zinc-600">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> {dictionary.services.subTitle3}</span>
                </p>
            </div>
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

                </span>
                 <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.title4}</span>
                
                </div>
                <p className="text-sm text-zinc-600">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> {dictionary.services.subTitle4}</span>
                    
                </p>
            </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
            <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                    
                    <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.rateMainTitle}</span>
                </h2>
                {/* <button className="hidden md:flex bg-transparent border rounded px-4 py-2">Download Rate Card</button> */}
            </div>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-[#d5d5d5] p-6">
                <h3 className="mb-2">
                   
                    <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.title5}</span>
                </h3>
                <p className="text-sm text-zinc-600">
                    
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>  {dictionary.services.subTitle5}</span>
                </p>
                </div>
                <div className="rounded-2xl border border-[#d5d5d5] p-6">
                <h3 className="mb-2">
                    
                    <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.title6}</span>
                </h3>
                <p className="text-sm text-zinc-600">
                   
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>   {dictionary.services.subTitle6}</span>
                </p>
                </div>
                <div className="rounded-2xl border border-[#d5d5d5] p-6">
                <h3 className="mb-2">
                    
                    <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.services.title7}</span>
                </h3>
                <p className="text-sm text-zinc-600">
                   
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>  {dictionary.services.subTitle7}</span>
                </p>
                </div>
                <div className="rounded-2xl border border-[#d5d5d5] p-6">
                <h3 className="mb-2">
                   
                     <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.services.title8}</span>
                </h3>
                <p className="text-sm text-zinc-600">
                    
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>  {dictionary.services.subTitle8}</span>
                    </p>
                </div>
            </div>
        </div>
    </Wrapper>
    
  );
};

export default Services;