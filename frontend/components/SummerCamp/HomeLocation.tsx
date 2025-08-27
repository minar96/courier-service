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
const HomeLocation = ({ lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full pt-[44px] lg:pt-[120px] pb-[22px] lg:pb-[42px] !px-5 lg:!px-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="w-full">
        {/* card 1 start */}
        <div className="w-full h-[364px] lg:h-[569px] px-[36px] py-[36px] lg:px-[50px] lg:py-[50px] z-10 bg-[#3A5DC4] rounded-[29px] lg:rounded-[40px]">
          <div className="w-full">
            <h2 className="text-white text-[24px] lg:text-[40px]">
              <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.locationTitle ?? ''}</span>
            </h2>
          </div>
          <div className="w-full mt-[27px] flex justify-start items-center gap-x-[33px]">
            <div className="w-[54px] lg:w-[74px] h-[72px] lg:h-[99px] flex-shrink-0 aspect-square">
              <Icon
                name="location"
                color="blueFF"
                size="74"
                className="hidden lg:block "
              />
              <Icon
                name="location"
                color="blueFF"
                size="54"
                className="block lg:hidden"
              />
            </div>
            <div className="w-full h-[99px]">
              <p className="text-white text-[16px] lg:text-[25px] font-garet font-bold leading-[33px]">
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.locationSubTitle ?? ''}</span>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start gap-x-8 mt-[86px] lg:mt-[191px]">
            <div className="w-6/12 h-[74px] flex justify-start items-center relative">
              <div className="w-[54px] lg:w-[74px] h-[54px] lg:h-[74px] flex-shrink-0 aspect-square rounded-[40px] absolute top-0 left-[0px] z-[1] overflow-hidden">
                <Image
                  src="/assets/img/summerchamp/location-01.png"
                  alt="Description"
                  width={74}
                  height={74}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[54px] lg:w-[74px] h-[54px] lg:h-[74px] flex-shrink-0 aspect-square rounded-[40px] absolute top-0 left-[32px] z-[2] overflow-hidden">
                <Image
                  src="/assets/img/summerchamp/location-02.png"
                  alt="Description"
                  width={74}
                  height={74}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[54px] lg:w-[74px] h-[54px] lg:h-[74px] flex-shrink-0 aspect-square rounded-[40px] absolute top-0 left-[64px] z-[3] overflow-hidden">
                <Image
                  src="/assets/img/summerchamp/location-03.png"
                  alt="Description"
                  width={74}
                  height={74}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-[54px] lg:w-[74px] h-[54px] lg:h-[74px] flex-shrink-0 aspect-square rounded-[40px] absolute top-0 left-[96px] z-[4] overflow-hidden">
                <Image
                  src="/assets/img/summerchamp/location-04.png"
                  alt="Description"
                  width={74}
                  height={74}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-6/12 h-[74px]">
              <Link
                href="https://wa.me/8801617302010"
                target="_blank"
                className="px-[16px] lg:px-[25px] py-[12px] lg:py-[25px]  h-[64px] border border-white rounded-full flex justify-center items-center gap-5 cursor-pointer hover:bg-gray-900 transition duration-300 ease-in-out"
              >
                <span className="text-white text-[18px] lg:text-[25px] leading-[24px] lg:leading-[33px]">
                  <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.locationBtn ?? ''}</span>
                </span>
                <Icon
                  name="arrow-union"
                  color="white"
                  size="17"
                  className="hidden lg:block "
                />
                <Icon
                  name="arrow-union"
                  color="white"
                  size="12"
                  className="block lg:hidden"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* card 1 end */}
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        {/* card 2 start */}
        <div className="w-full h-[170px] lg:h-[291px] px-[28px] lg:px-[50px] py-[22px] lg:py-[60px] bg-[#FEAB33] rounded-[23px] lg:rounded-[40px]">
          <div className="w-full">
            <h2 className="text-white text-[24px] lg:text-[40px] font-normal">
              <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.ageTitle ?? ''}</span>
            </h2>
          </div>
          <div className="w-full mt-[12px] lg:mt-[22px] flex justify-start items-center gap-x-[33px]">
            <div className="w-full">
              <p className="text-white text-[15px] lg:text-[22px] leading-[33px]">
               <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.ageSubTitle ?? ''}</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 2 end */}
        {/* card 3 start */}
        <div className="w-full h-[170px] lg:h-[258px] px-[28px] lg:px-[50px] py-[22px] lg:py-[60px] bg-[#0D9951] rounded-[23px] lg:rounded-[40px]">
          <div className="w-full">
            <h2 className="text-white  text-[24px] lg:text-[40px]">
              <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {dictionary.summercamp?.durationTitle ?? ''}</span>
            </h2>
          </div>
          <div className="w-full mt-[12px] lg:mt-[13px] flex justify-start items-center gap-x-[33px]">
            <div className="w-full">
              <p className="text-white text-[15px] lg:text-[22px] leading-[33px]">
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {dictionary.summercamp?.durationSubTitle ?? ''}</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 3 end */}
      </div>
    </Wrapper>
  );
};

export default HomeLocation;
