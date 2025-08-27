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
                <span className="p-2 rounded-xl bg-[#fde7d6]"><i data-feather="truck"></i></span>
                    Nationwide Doorstep Delivery
                </div>
                <p className="text-sm text-zinc-600">Pickup from your shop, deliver to 64 districts & 490+ upazilas.</p>
            </div>
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]"><i data-feather="clock"></i></span>
                Fast COD Settlement
                </div>
                <p className="text-sm text-zinc-600">Cash within 24-48 hours in major cities (T&C apply).</p>
            </div>
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]"><i data-feather="shield"></i></span>
                Secure Handling
                </div>
                <p className="text-sm text-zinc-600">Smart tracking, verified riders, and safe packaging guidance.</p>
            </div>
            <div className="rounded-2xl border border-[#d5d5d5] p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-lg mb-2">
                <span className="p-2 rounded-xl bg-[#fde7d6]"><i data-feather="calculator"></i></span>
                Transparent Pricing
                </div>
                <p className="text-sm text-zinc-600">Live rate calculator with no hidden fees.</p>
            </div>
        </div>
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Services & Rates</h2>
                    <button className="hidden md:flex bg-transparent border rounded px-4 py-2">Download Rate Card</button>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="rounded-2xl border p-6">
                    <h3 className="font-semibold mb-2">Inside City</h3>
                    <p className="text-sm text-zinc-600">Same/next-day delivery within metro areas.</p>
                    </div>
                    <div className="rounded-2xl border p-6">
                    <h3 className="font-semibold mb-2">Suburb & Upazila</h3>
                    <p className="text-sm text-zinc-600">Reliable routes connecting suburban customers.</p>
                    </div>
                    <div className="rounded-2xl border p-6">
                    <h3 className="font-semibold mb-2">Nationwide</h3>
                    <p className="text-sm text-zinc-600">Door-to-door across Bangladesh.</p>
                    </div>
                    <div className="rounded-2xl border p-6">
                    <h3 className="font-semibold mb-2">Reverse Logistics</h3>
                    <p className="text-sm text-zinc-600">Easy returns & exchanges for your store.</p>
                    </div>
                </div>
            </div>
    </Wrapper>
    
  );
};

export default Services;