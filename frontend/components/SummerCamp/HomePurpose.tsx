"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon, Wrapper } from "../UI";
import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const HomePurpose = ({ lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full pt-[22px] lg:pt-[42px] pb-[44px] lg:pb-[120px] !px-5 lg:!px-0">
      <div className="w-full flex justify-end relative z-0">
        <div className="w-[387px] h-[350px] flex-shrink-0 aspect-square absolute -top-[80px] -right-[60px] z-10 overflow-hidden">
          <Image
            src="/assets/img/svg/star-square.svg"
            alt="square"
            width={387}
            height={350}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full mt-[220px] lg:flex justify-start gap-x-[40px] relative z-0">
        <div className="hidden lg:block w-[111px] h-[95px] flex-shrink-0 aspect-square rounded-[40px] absolute -top-14 -left-[130px] z-20 animate-bounce">
          <Image
            src="/assets/img/svg/star-shape.svg"
            alt="Description"
            width={111}
            height={95}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-4/12">
          <h2 className="text-royal-blue text-[46px] leading-[60px] tracking-[0.92px]">
            <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.purposeEventTitle ?? ''}</span>
          </h2>
        </div>
        <div className="w-full lg:w-8/12 mt-[18px] lg:mt-0">
          <p className="text-[#545454] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}> {dictionary.summercamp?.purposeEventSubTitle ?? ''}</span>
          </p>
        </div>
      </div>
      <div className="w-full mt-[34px] lg:mt-[52px] lg:flex justify-center gap-[22px]">
        <div className="w-full lg:w-6/12 h-[362px] rounded-[16px] flex-shrink-0 relative z-0 overflow-hidden">
          <div className="w-full h-full bg-transparent purpose-bg-gradient z-20 absolute top-0 left-0 flex justify-center items-center">
            <div className="w-full h-[49px] px-5 absolute bottom-5 left-0 ">
              <div className="w-full">
                <span className="text-white text-[12px] leading-[16px] uppercase">
                  <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.purposeEventPartSubTitle ?? ''}</span>
                </span>
              </div>
              <div className="w-full">
                <span className="text-white text-[16px] lg:text-[24px] font-garet font-bold leading-[20px] lg:leading-[32px] capitalize">
                 <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.purposeEventPart1Title ?? ''}</span>
                </span>
              </div>
            </div>
          </div>
          <Image
            src="/assets/img/summerchamp/purpose-01.png"
            alt="Description"
            width={600}
            height={362}
            className="w-full h-full object-cover z-10"
          />
        </div>
        <div className="w-full lg:w-3/12 h-[362px] mt-[16px] lg:mt-0 rounded-[16px] flex-shrink-0 relative z-0 overflow-hidden">
          {" "}
          <div className="w-full h-full bg-transparent purpose-bg-gradient z-20 absolute top-0 left-0 flex justify-center items-center">
            <div className="w-full h-[49px] px-5 absolute bottom-5 left-0 ">
              <div className="w-full">
                <span className="text-white text-[12px] leading-[16px] uppercase">
                  <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.purposeEventPartSubTitle ?? ''}</span>
                </span>
              </div>
              <div className="w-full">
                <span className="text-white text-[16px] lg:text-[24px] leading-[20px] lg:leading-[32px] capitalize">
                 <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.purposeEventPart2Title ?? ''}</span>
                </span>
              </div>
            </div>
          </div>
          <Image
            src="/assets/img/summerchamp/purpose-02.png"
            alt="Description"
            width={290}
            height={362}
            className="w-full h-full object-cover z-10"
          />
        </div>
        <div className="w-full lg:w-3/12 h-[362px] mt-[16px] lg:mt-0 rounded-[16px] flex-shrink-0 relative z-0 overflow-hidden">
          {" "}
          <div className="w-full h-full bg-transparent purpose-bg-gradient z-20 absolute top-0 left-0 flex justify-center items-center">
            <div className="w-full h-[49px] px-5 absolute bottom-5 left-0 ">
              <div className="w-full">
                <span className="text-white text-[12px] font-semibold leading-[16px] uppercase">
                  <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.purposeEventPartSubTitle ?? ''}</span>
                </span>
              </div>
              <div className="w-full">
                <span className="text-white text-[16px] lg:text-[24px] leading-[20px] lg:leading-[32px] capitalize">
                 <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.purposeEventPart3Title ?? ''}</span>
                </span>
              </div>
            </div>
          </div>
          <Image
            src="/assets/img/summerchamp/purpose-03.png"
            alt="Description"
            width={290}
            height={362}
            className="w-full h-full object-cover z-10"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePurpose;
