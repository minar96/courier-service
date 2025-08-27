"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Wrapper } from "../UI";
import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const HomeHero = ({ lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full h-[944px] !px-5 lg:!px-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-center lg:text-start">
              <span className="text-royal-blue text-[44px] lg:text-[58px] leading-[64px] lg:leading-[76px]">
                {/* Brain Voyage Outdoor{" "} */}
                <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.mainTitle1 ?? ''}</span>
              </span>
              <span className="text-fire-red text-[44px] lg:text-[58px] font-peace-sans font-normal leading-[64px] lg:leading-[76px]">
                {/* Day Camp */}
                <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.mainTitle2 ?? ''}</span>
              </span>
            </h1>
          </div>
          <div className="w-full mt-[18px]">
            <div className="w-full max-w-[571px] text-center lg:text-start">
              <p className="text-[#585858] text-[15px] lg:text-[18px] leading-[28px] lg:leading-[33px]">
               <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado-regular'}> {dictionary.summercamp?.subTitle ?? ''}</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-[44px] flex justify-center lg:justify-start">
            <Link
              href="https://wa.me/8801617302010"
              target="_blank"
              className="w-[346px] lg:w-[240px] flex flex-shrink-0 items-center justify-center gap-3 px-[36px] py-[18px] h-[64px] bg-[#51B59F] rounded-[50px] cursor-pointer hover:bg-[#3A9B7A] transition duration-300 ease-in-out"
            >
              <span className="text-[#FFFFFF] text-[22px] leading-[34px]">
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-regular'}> {dictionary.summercamp?.heroBtn ?? ''}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full relative z-0 lg:overflow-hidden">
        <div className="w-[300px] lg:w-[624px] h-[332px] lg:h-[688px] flex-shrink-0 aspect-square absolute inset-x-0 bottom-0 mx-auto z-10">
          <Image
            src="/assets/img/summerchamp/hero-image.png"
            alt="Description"
            width={624}
            height={688}
            className="w-full h-full object-cover blur-[0.8px]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeHero;