"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";

import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const HomeHero = ({ lang, dictionary }: Props) => {

  return (
    <Wrapper className="w-full h-[1050px] 2xl:h-[850px] xl:h-[850px] lg:h-[750px] md:h-[750px] grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full flex justify-center items-center px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
            <div className="w-full mx-0 2xl:mx-0 xl:mx-0 lg:mx-6 md:mx-0 sm:mx-0">
                <div className="w-full">
                    <h1 className="mt-[24px] 2xl:mt-[0] xl:mt-[0] lg:mt-[0] md:mt-[0] text-center 2xl:text-left xl:text-left lg:text-left md:text-left font-[800]">
                        <span className="text-[#3f3f3f] text-[48px] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] 2xl:leading-[60px] xl:leading-[50px] lg:leading-[50px] md:leading-[62.4px] leading-[62.4px]">
                            <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.HomeHero.title} {" "}</span>
                        </span>
                    </h1>
                    <p className="text-[#4A4949] mt-[18px] 2xl:mt-[12px] xl:mt-[12px] lg:mt-[18px] md:mt-[0] font-[18px] 2xl:font-[32px] xl:font-[32px] lg:font-[32px] md:font-[32px] text-center 2xl:text-left xl:text-left lg:text-left md:text-left">
                        {/* A safe space where kids explore, express, and experiment. */}
                       <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeHero.subTitle}</span>
                        
                    </p>
                </div>
               
                <div className="w-full mt-[44px] block 2xl:flex xl:flex lg:flex md:flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2">
                    <div>
                        <Link
                            href="#homeCourseCategory"
                            className="w-full font-mikado flex text-[16px] flex-shrink-0 items-center justify-center gap-3 px-[36px] py-[18px] h-[44px] bg-[#ff7a00] rounded-[50px] cursor-pointer hover:bg-[#ff8c28] transition duration-300 ease-in-out"
                        >
                            <span className="text-[#f8f8f8] text-[16px] font-mikado-regular font-bold leading-[34px]">
                                 <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeHero.learningBtn}</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full relative flex justify-center items-center">
           
            {/* <div className="w-[120px] absolute top-[-50%] 2xl:top-[30%] xl:top-[30%] lg:top-[30%] md:top-[30%] left-[-2%] z-[9999] rotate-slow"> */}
            <div className="w-full ms-[20px] ">
                {/* <Image
                    src="/assets/img/home/home-bg.png"
                    alt="Description"
                    width={100}
                    height={100}
                    className="w-full object-cover rounded"
                    unoptimized
                /> */}
                 <div className="relative rounded-3xl p-1 bg-[#fde7d6]">
                    <div className="rounded-3xl p-6 bg-white shadow-xl">
                        <div className="grid gap-4">
                            <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <span className="text-sm text-zinc-700">
                                
                                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.HomeHero.tracktile}</span>
                            </span>
                            </div>
                            <div className="flex gap-3">
                            <input type="text" placeholder="Enter tracking ID" className="border border-[#d5d5d5] rounded-md p-2 w-full"/>
                            <button className="bg-[#0e1b2a] text-white px-4 rounded">
                                
                                <span className="font-mikado-regular"> Track</span>
                            </button>
                            </div>
                            <div className="grid grid-cols-4 gap-3 mt-2">
                            <div className="rounded-2xl border border-[#d5d5d5] p-4 text-center">
                                <div className="text-xl font-bold">
                                    <span className="font-mikado-regular"> 300+</span>
                                </div>
                                <div className="text-xs text-zinc-500">
                                    <span className="font-mikado-regular"> Active Customer</span>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-[#d5d5d5] p-4 text-center">
                                <div className="text-xl font-bold">
                                    <span className="font-mikado-regular"> All</span>
                                </div>
                                <div className="text-xs text-zinc-500">
                                    <span className="font-mikado-regular"> World Coverage</span>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-[#d5d5d5] p-4 text-center">
                                <div className="text-xl font-bold">
                                    <span className="font-mikado-regular">3d-7d</span>
                                </div>
                                <div className="text-xs text-zinc-500">
                                    <span className="font-mikado-regular"> Avg. Delivery Time</span>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-[#d5d5d5] p-4 text-center">
                                <div className="text-xl font-bold">
                                    <span className="font-mikado-regular"> 500kg+</span>
                                </div>
                                <div className="text-xs text-zinc-500">
                                    <span className="font-mikado-regular"> Everyday Shipments</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </Wrapper>
  );
};

export default HomeHero;