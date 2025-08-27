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
                    <h1 className="mt-[24px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px] text-center 2xl:text-left xl:text-left lg:text-left md:text-left font-[900]">
                        <span className="text-[#3f3f3f] text-[48px] 2xl:text-[64px] xl:text-[64px] lg:text-[48px] md:text-[48px] 2xl:leading-[76px] xl:leading-[62.4px] lg:leading-[70.2px] md:leading-[62.4px] leading-[62.4px]">
                            <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.HomeHero.title} {" "}</span>
                        </span>
                    </h1>
                    <p className="text-[#4A4949] mt-[18px] 2xl:mt-[0] xl:mt-[0] lg:mt-[18px] md:mt-[0] font-[18px] 2xl:font-[32px] xl:font-[32px] lg:font-[32px] md:font-[32px] text-center 2xl:text-left xl:text-left lg:text-left md:text-left">
                        {/* A safe space where kids explore, express, and experiment. */}
                       <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeHero.subTitle}</span>
                        
                    </p>
                </div>
                <div className="relative rounded-3xl p-1 bg-[#fde7d6]">
                    <div className="rounded-3xl p-6 bg-white shadow-xl">
                    <div className="grid gap-4">
                        <div className="flex items-center gap-3">
                        <i data-feather="map-pin" className="w-5 h-5"></i>
                        <span className="text-sm text-zinc-700">Track your parcel</span>
                        </div>
                        <div className="flex gap-3">
                        <input type="text" placeholder="Enter tracking ID" className="border rounded-md p-2 w-full"/>
                        <button className="bg-[#0e1b2a] text-white px-4 rounded">Track</button>
                        </div>
                        <div className="grid grid-cols-4 gap-3 mt-2">
                        <div className="rounded-2xl border p-4 text-center">
                            <div className="text-xl font-bold">45k+</div>
                            <div className="text-xs text-zinc-500">Active Merchants</div>
                        </div>
                        <div className="rounded-2xl border p-4 text-center">
                            <div className="text-xl font-bold">64/64</div>
                            <div className="text-xs text-zinc-500">District Coverage</div>
                        </div>
                        <div className="rounded-2xl border p-4 text-center">
                            <div className="text-xl font-bold">24-72h</div>
                            <div className="text-xs text-zinc-500">Avg. Delivery Time</div>
                        </div>
                        <div className="rounded-2xl border p-4 text-center">
                            <div className="text-xl font-bold">120k+</div>
                            <div className="text-xs text-zinc-500">Daily Shipments</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className="w-full mt-[44px] block 2xl:flex xl:flex lg:flex md:flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2">
                    <div>
                        <Link
                            href="#homeCourseCategory"
                            className="w-full font-mikado flex text-[20px] flex-shrink-0 items-center justify-center gap-3 px-[36px] py-[18px] h-[64px] bg-[#3A5DC4] rounded-[50px] cursor-pointer hover:bg-[#4d619b] transition duration-300 ease-in-out"
                        >
                            <span className="text-[#FFFFFF] text-[20px] font-mikado-regular font-bold leading-[34px]">
                                 <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeHero.learningBtn}</span>
                            </span>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="w-full relative">
           
            {/* <div className="w-[120px] absolute top-[-50%] 2xl:top-[30%] xl:top-[30%] lg:top-[30%] md:top-[30%] left-[-2%] z-[9999] rotate-slow"> */}
            <div className="w-full mt-[200px] ms-[20px]">
                <Image
                    src="/assets/img/home/home-bg.png"
                    alt="Description"
                    width={100}
                    height={100}
                    className="w-full object-cover rounded"
                    unoptimized
                />
            </div>
            
        </div>
    </Wrapper>
  );
};

export default HomeHero;