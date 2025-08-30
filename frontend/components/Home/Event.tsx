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
const Event = ({ lang, dictionary }: Props) => {
    return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-5 mt-[54px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
                <div>
                    <h2 className="text-[#4F4F4F] text-[36px] font-[900] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px]">
                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.Event.title}</span>
                    </h2>
                    <p className="text-[#686868] text-[20px] leading-[30px] max-w-2xl mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.Event.subTitle}</span>
                    </p>
                </div>
                <div className="relative">
                    <div className="hidden lg:block lg:w-[120px] lg:absolute lg:top-[30%] lg:left-[-2%] lg:z-[9999] lg:rotate-slow">
                        <Image
                            src="/assets/img/home/world.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="lg:absolute lg:bottom-[0%] lg:right-[0%] mt-[24px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        <Link
                            href="/summer-camp"
                            className="mx-auto lg:px-[25px] py-[12px] lg:py-[25px] bg-[#3A5DC4]  h-[64px] border border-white rounded-full flex justify-center items-center gap-5 cursor-pointer"
                        >
                            <span className="text-white text-[18px] lg:text-[25px] font-[600] leading-[24px] lg:leading-[33px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.Event.button}</span>
                            </span>
                            <Icon
                            name="arrow-right"
                            color="white"
                            size="8"
                            className="block"
                            />
                        </Link>
                    </div>
                </div>
            </div>
             <ScrollFadeIn>
                <div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-0 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 mt-[44px] px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
                    <div className="w-full lg:h-[244px] mb-5 lg:mb-0 rounded-[8px] lg:mt-[70px] flex-shrink-0 relative z-0 overflow-hidden col-span-2">
                        <div className="w-full h-full bg-transparent purpose-bg-gradient z-20 absolute top-0 left-0 flex justify-center items-center">
                            <div className="w-full h-[49px] px-5 absolute bottom-15 2xl:bottom-15 xl:bottom-15 lg:bottom-20 md:bottom-20 left-0 ">
                                <div className="w-full">
                                    <span className="text-white text-[14px] leading-[18px] uppercase">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeEvent.subtitle}</span>
                                    </span>
                                </div>
                                <div className="w-full mt-[6px]">
                                    <span className="text-white text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] font-bold leading-[28px] lg:leading-[28px] capitalize">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.HomeEvent.basecamp}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/assets/img/home/purpose-01.jpg"
                            alt="Description"
                            width={600}
                            height={362}
                            className="w-full h-full object-cover z-10"
                        />
                    </div>
                    <div className="w-full lg:h-[381px] lg:mt-0 flex-shrink-0 relative z-0 overflow-hidden col-span-3 rounded-[8px]">
                        {" "}
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="rounded-bl-[8px] rounded-br-[8px] lg:rounded-bl-0 lg:rounded-br-0">
                                <div className="w-full 2xl:w-[300px] xl:w-[300px] lg:w-[239px] md:w-[300px] h-[381px] lg:h-full bg-transparent purpose-bg-gradient z-20 absolute top-0 left-0 flex justify-center items-center">
                                    <div className="w-full h-[49px] px-5 absolute bottom-5 left-0 rounded-bl-[8px]">
                                        <div className="w-full">
                                            <span className="text-white text-[14px] font-mikado-regular leading-[18px] uppercase">
                                                {dictionary.HomeEvent.subtitle}
                                            </span>
                                        </div>
                                        <div className="w-full">
                                            <span className="text-white text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] font-bold leading-[28px] lg:leading-[28px] capitalize">
                                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.HomeEvent.gamified}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/assets/img/home/purpose-02.jpg"
                                    alt="Description"
                                    width={290}
                                    height={362}
                                    className="w-full h-[381px] lg:h-full object-cover z-10"
                                />
                            </div>
                            <div className="bg-[#FEAB33] h-[381px] px-[20px] 2xl:px-[20px] xl:px-[20px] lg:px-[12px] md:px-[12px] mt-[20px] rounded-tl-[8px] rounded-tr-[8px] lg:mt-0 lg:rounded-tl-0 lg:rounded-tr-0">
                                <div className="mt-[32px]">
                                    <Image
                                        src="/assets/img/home/comma.svg"
                                        alt="Description"
                                        width={290}
                                        height={362}
                                        className="w-[44px] object-cover z-10"
                                    />
                                </div>
                                <h5 className="text-[#753B0E] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:[24px] font-bold mt-[20px] 2xl:mt-[20px] xl:mt-[20px] lg:mt-[12px] md:mt-[20px]">
                                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.HomeEvent.summerDayTitle}</span>
                                </h5>
                                <p className="text-[#894918] pb-[32px] 2xl:pb-[0px] xl:pb-[0px] lg:pb-[0px] md:pb-[0px] text-[22px] 2xl:text-[22px] xl:text-[22px] lg:text-[18px] md:text-[18px] mt-[14px] 2xl:mt-[14px] xl:mt-[14px] lg:mt-[8px] md:mt-[8px] leading-[30px]">
                                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeEvent.description}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[239px] rounded-[8px] mt-[20px] 2xl:mt-[70px] xl:mt-[70px] lg:mt-[70px] md:mt-[70px] flex-shrink-0 relative z-0 overflow-hidden col-span-1">
                        {" "}
                        <div className="w-full h-full bg-transparent purpose-bg-gradient z-20 absolute top-0 left-0 flex justify-center items-center">
                        <div className="w-full h-[49px] px-5 absolute bottom-5 2xl:bottom-5 xl:bottom-5 lg:bottom-10 md:bottom-10 left-0 ">
                            <div className="w-full">
                            <span className="text-white text-[12px] leading-[18px] uppercase">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeEvent.subtitle}</span>
                            </span>
                            </div>
                            <div className="w-full">
                            <span className="text-white text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] font-bold leading-[28px] capitalize">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.HomeEvent.activities}</span>
                            </span>
                            </div>
                        </div>
                        </div>
                        <Image
                            src="/assets/img/home/purpose-03.png"
                            alt="Description"
                            width={290}
                            height={362}
                            className="w-full h-full object-cover z-10"
                        />
                    </div>
                </div>
            </ScrollFadeIn>
        </Wrapper>
    );
};
export default Event;