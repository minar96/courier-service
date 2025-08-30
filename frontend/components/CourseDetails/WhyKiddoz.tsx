"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
    slug: string;
    lang: string;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const WhyKiddoz = ({ slug, lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1">
            <div className="mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
                <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
                    <h1 className="text-[#464646] text-center font-[900] 2xl:text-center xl:text-center lg:text-center md:text-center pt-[0] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                        
                        {slug === 'pre-a1-starters'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.WhyKiddozPreA1.title}</span>
                            
                            : slug === 'a1-movers'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.WhyKiddozA1Movers.title}</span>
                            
                            : slug === 'a2-flyers'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.WhyKiddozA2Flyer.title}</span>
                            
                            : 'Course Title Not Found'}
                    </h1>
                    <p className="text-[#4B4B4B] max-w-4xl mx-auto text-center 2xl:text-center xl:text-center lg:text-center md:text-center text-[18px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                        {slug === 'pre-a1-starters'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.WhyKiddozPreA1.subTitle}</span>
                            
                            : slug === 'a1-movers'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.WhyKiddozA1Movers.subTitle}</span>
                            
                            : slug === 'a2-flyers'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.WhyKiddozA2Flyer.subTitle}</span>
                            
                            : 'Course Title Not Found'}
                    </p>
                    <ScrollFadeIn>
                    <div className="text-center mt-[80px] hidden 2xl:block xl:block lg:block md:block">
                        {slug === 'pre-a1-starters'
                            ? 
                            <Image
                                src={dictionary.WhyKiddozPreA1.image}
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                            : slug === 'a1-movers'
                            ? 
                            <Image
                               src={dictionary.WhyKiddozPreA1.image}
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                            : slug === 'a2-flyers'
                            ? 
                            <Image
                                src={dictionary.WhyKiddozPreA1.image}
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                            : 'Course Title Not Found'}
                        
                    </div>
                    <div className="text-center mt-[32px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        {slug === 'pre-a1-starters'
                            ? 
                            <Image
                               src={dictionary.WhyKiddozPreA1.phoneImage}
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                            : slug === 'a1-movers'
                            ? 
                            <Image
                               src={dictionary.WhyKiddozPreA1.phoneImage}
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                            : slug === 'a2-flyers'
                            ? 
                            <Image
                               src={dictionary.WhyKiddozPreA1.phoneImage}
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                            : 'Course Title Not Found'}
                    </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </Wrapper>
    );
};
export default WhyKiddoz;