"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const Coverage = ({ lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 mt-[54px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] pb-[44px] 2xl:pb-[120px] xl:pb-[120px] lg:pb-[120px] md:pb-[120px]"> 
            <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-0">
                {/* <h1 className="text-[#4C4C4C] text-[36px] 2xl:text-[54px] xl:text-[54px] text-left 2xl:text-left xl:text-left lg:text-center md:text-center lg:text-[42px] md:text-[42px] 
                font-[900] font-mikado-medium leading-[50.2px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[100px] md:mt-[100px]">
                    Cambridge English for Young Learners (YLE)
                </h1>
                <div className="hidden 2xl:block xl:block lg:block md:block">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[0px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[60px] md:mt-[60px]">
                        <ScrollFadeIn>
                            <Link href={`/${lang}/course/pre-a1-starters`}>
                                <div className="bg-[#0D9951] rounded-[24px] pt-5 ps-5 pr-5 pb-7 hidden 2xl:block xl:block lg:block md:block">
                                    <div className="text-center">
                                        <Image
                                            src="/assets/img/home/pre_a1_starter.webp"
                                            alt="Description"
                                            width={400}
                                            height={250}
                                            className="w-full object-cover mx-auto rounded-[18px]"
                                        />
                                    </div>
                                    <h3 className="text-[#FFF] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[24px] font-mikado leading-[37px] mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[18px] md:mt-[18px]">Pre A1 Starters – The First Step in English</h3>
                                    <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeCourseCategory.preA1SubTitle}</span>
                                    </p>
                                </div>
                            </Link>
                        </ScrollFadeIn>
                        <ScrollFadeIn>
                            <Link href={`/${lang}/course/${'a1-movers'}`}>
                                <div className="bg-[#3A5DC4] rounded-[24px] pt-5 ps-5 pr-5 pb-7 hidden 2xl:block xl:block lg:block md:block">
                                    <div className="text-center">
                                        <Image
                                            src="/assets/img/home/a2_mover.webp"
                                            alt="Description"
                                            width={400}
                                            height={250}
                                            className="w-full object-cover mx-auto rounded-[18px]"
                                        />
                                    </div>
                                    <h3 className="text-[#FFF] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[24px] font-mikado leading-[37px] mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[18px] md:mt-[18px]">A1 Movers – The Next Step with Confidence</h3>
                                    <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                                        {dictionary.HomeCourseCategory.A1MoverSubTitle} 
                                    </p>
                                </div>
                            </Link>
                        </ScrollFadeIn>
                        <ScrollFadeIn>
                            <Link href={`/${lang}/course/${'a2-flyers'}`}>
                                <div className="bg-[#FF9441] rounded-[24px] pt-5 ps-5 pr-5 pb-7 hidden 2xl:block xl:block lg:block md:block">
                                    <div className="text-center">
                                        <Image
                                            src="/assets/img/home/a2_flyer.webp"
                                            alt="Description"
                                            width={400}
                                            height={250}
                                            className="w-full object-cover mx-auto rounded-[18px]"
                                        />
                                    </div>
                                    <h3 className="text-[#FFF] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[24px] font-mikado leading-[37px] mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[18px] md:mt-[18px]">A2 Flyers – Ready for the Real World</h3>
                                    <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                                        {dictionary.HomeCourseCategory.A2FlyerSubTitle}    
                                    </p>
                                </div>
                            </Link>
                        </ScrollFadeIn>
                    </div>
                </div> */}
                {/* <div className="w-full grid grid-cols-1 mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                    <Link href={`/${lang}/course/pre-a1-starters`}>
                        <div className="bg-[#0D9951] rounded-[6px] p-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                            <div className="flex flex-row gap-2">
                                <div className="w-[300px] h-full">
                                    <Image
                                        src="/assets/img/home/pre_a1_starter.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-[300px] h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">Pre A1 Starters - The First Step in English</h3>
                                    <p className="text-[#fff] text-[14px] leading-[20px] mt-1">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                            {dictionary.HomeCourseCategory.preA1SubTitle.slice(0, 66)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/${lang}/course/${'a1-movers'}`}>
                        <div className="bg-[#3A5DC4] rounded-[6px] p-[16px] mt-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                            <div className="flex flex-row gap-2">
                                <div className="w-[300px] h-full">
                                    <Image
                                        src="/assets/img/home/a2_mover.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-[300px] h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">A1 Movers – The Next Step with Confidence</h3>
                                    <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                            {dictionary.HomeCourseCategory.A1MoverSubTitle.slice(0, 66)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/${lang}/course/${'a2-flyers'}`}>
                        <div className="bg-[#FF9039] rounded-[6px] p-[16px] mt-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                            <div className="flex flex-row gap-2">
                                <div className="w-[300px] h-full">
                                    <Image
                                        src="/assets/img/home/a2_flyer.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-[300px] h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">A2 Flyers – Ready for the Real World</h3>
                                    <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                            {dictionary.HomeCourseCategory.A2FlyerSubTitle.slice(0, 66)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div> */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>Nationwide coverage</span>
                        </h2>
                        <p className="mt-3 text-zinc-600 max-w-xl">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> From Dhaka to the most remote upazilas — we cover all 64 districts with partner hubs and verified riders.</span>
                        </p>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="rounded-xl border border-[#d5d5d5] px-3 py-2 text-sm text-zinc-700">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> Dhaka</span>
                        </div>
                        <div className="rounded-xl border border-[#d5d5d5] px-3 py-2 text-sm text-zinc-700">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> Chattogram</span>
                        </div>
                        <div className="rounded-xl border border-[#d5d5d5] px-3 py-2 text-sm text-zinc-700">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> Sylhet</span>
                        </div>
                        <div className="rounded-xl border border-[#d5d5d5] px-3 py-2 text-sm text-zinc-700">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> Rajshahi</span>
                        </div>
                        <div className="rounded-xl border border-[#d5d5d5] px-3 py-2 text-sm text-zinc-700">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> Khulna</span>
                        </div>
                        <div className="rounded-xl border border-[#d5d5d5] px-3 py-2 text-sm text-zinc-700">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> Barishal</span>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-3xl p-1 bg-[#fde7d6]">
                        <div className="aspect-[4/3] rounded-3xl bg-white flex items-center justify-center shadow-xl">
                        <i data-feather="map-pin" className="w-10 h-10"></i>
                        <span className="ml-3 text-zinc-700">Bangladesh coverage map (placeholder)</span>
                        </div>
                    </div>
                    </div>
            </div> 
        </Wrapper>
    );
};
export default Coverage;