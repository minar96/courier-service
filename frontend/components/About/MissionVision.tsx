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

const MissionVision = ({ lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex justify-start items-center mt-[54px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] mb-[60px] 2xl:mb-[120px] xl:mb-[120px] lg:mb-[120px] md:mb-[120px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
            <div className="w-full">
                <ScrollFadeIn>
                    <div className="bg-[#3A5DC4] w-[65px] 2xl:w-[84px] xl:w-[84px] lg:w-[84px] md:w-[84px] h-[65px] 2xl:h-[84px] xl:h-[84px] lg:h-[84px] md:h-[84px] rounded-[50%] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M11.6016 9.9C12.6016 9.6 13.6016 9.5 14.6016 9.5C16.2016 9.5 17.8016 9.9 19.2016 10.6C18.2016 8.4 15.7016 7.4 13.5016 8.3C12.7016 8.7 12.1016 9.2 11.6016 9.9ZM28.8016 10.6C30.2016 9.9 31.8016 9.5 33.4016 9.5C34.4016 9.5 35.4016 9.7 36.4016 9.9C35.5016 8.7 34.2016 8 32.7016 8C31.0016 8 29.4016 9 28.8016 10.6ZM28.8016 20C32.8016 17.4 38.0016 17.3 42.0016 19.8L38.9016 13.6C38.8016 13.4 38.7016 13.3 38.5016 13.2C38.5016 13.2 36.9016 11.6 33.3016 11.6C31.0016 11.6 29.6016 12.2 28.4016 13.3C28.2016 13.4 28.1016 13.7 28.0016 13.9L27.5016 17H26.4016C26.1016 16.8 25.9016 16.6 25.6016 16.5C24.6016 16.1 23.5016 16.1 22.5016 16.5C22.2016 16.6 21.9016 16.8 21.7016 17H20.6016L20.0016 13.8C20.0016 13.7 19.9016 13.5 19.9016 13.5C18.0016 11.9 16.2016 11.6 14.7016 11.6C13.0016 11.6 12.1016 11.5 9.50156 13.2C9.30156 13.3 9.20156 13.4 9.10156 13.6L6.10156 19.8C10.1016 17.4 15.2016 17.4 19.2016 20C19.9016 20.5 24.0016 25.5 24.0016 25.5C24.0016 25.5 28.0016 20.5 28.8016 20Z" fill="white"/>
                            <path d="M12.5 20C6.7 20 2 24.7 2 30.5C2 36.3 6.7 41 12.5 41C18.3 41 23 36.3 23 30.5C23 24.7 18.3 20 12.5 20ZM12.5 37.4C8.7 37.4 5.5 34.3 5.5 30.4C5.5 26.6 8.6 23.4 12.5 23.4C16.4 23.4 19.5 26.5 19.5 30.4C19.5 34.3 16.3 37.4 12.5 37.4ZM35.5 20C29.7 20 25 24.7 25 30.5C25 36.3 29.7 41 35.5 41C41.3 41 46 36.3 46 30.5C46 24.7 41.3 20 35.5 20ZM35.5 37.4C31.7 37.4 28.5 34.3 28.5 30.4C28.5 26.6 31.6 23.4 35.5 23.4C39.4 23.4 42.5 26.5 42.5 30.4C42.5 34.3 39.3 37.4 35.5 37.4Z" fill="white"/>
                        </svg>
                    </div>
                    <h1 className="text-[#22304A] font-[900] text-[28px] 2xl:text-[38px] xl:text-[38px] lg:text-[38px] md:text-[38px] leading-[42px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[0px] mt-[18px] 2xl:mt-[28px] xl:mt-[28px] lg:mt-[28px] md:mt-[28px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.AboutMissionVision.visionTitle}</span>
                    </h1>
                    <p className="text-[#363636] max-w-2xl text-[18px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[24px] 2xl:leading-[30px] xl:leading-[30px] lg:leading-[30px] md:leading-[30px] tracking-[-1px] mt-[8px] 2xl:mt-[4px] xl:mt-[4px] lg:mt-[4px] md:mt-[4px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.AboutMissionVision.visionDescription}</span>
                    </p>
                </ScrollFadeIn>
            </div>
            <div className="w-full">
                <ScrollFadeIn>
                    <div className="bg-[#3A5DC4] w-[65px] 2xl:w-[84px] xl:w-[84px] lg:w-[84px] md:w-[84px] h-[65px] 2xl:h-[84px] xl:h-[84px] lg:h-[84px] md:h-[84px] rounded-[50%] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clip-path="url(#clip0_468_11557)">
                                <path d="M20 28C18.896 28 18 28.896 18 30C18 31.104 18.896 32 20 32C21.104 32 22 31.104 22 30C22 28.896 21.104 28 20 28Z" fill="white"/>
                                <path d="M20 26C22.206 26 24 27.794 24 30C24 32.206 22.206 34 20 34C17.794 34 16 32.206 16 30C16 27.794 17.794 26 20 26ZM20 24C16.686 24 14 26.687 14 30C14 33.314 16.686 36 20 36C23.313 36 26 33.314 26 30C26 26.686 23.313 24 20 24Z" fill="white"/>
                                <path d="M20 20C25.514 20 30 24.486 30 30C30 35.514 25.514 40 20 40C14.486 40 10 35.514 10 30C10 24.486 14.486 20 20 20ZM20 18C13.373 18 8 23.373 8 30C8 36.627 13.373 42 20 42C26.627 42 32 36.627 32 30C32 23.373 26.627 18 20 18Z" fill="white"/>
                                <path d="M20 14C28.822 14 36 21.178 36 30C36 38.822 28.822 46 20 46C11.178 46 4 38.822 4 30C4 21.178 11.178 14 20 14ZM20 12C10.06 12 2 20.06 2 30C2 39.94 10.06 48 20 48C29.94 48 38 39.94 38 30C38 20.06 29.94 12 20 12Z" fill="white"/>
                                <path d="M42.7072 8.70715L41.293 7.29295L19.293 29.293L20.7072 30.7072L42.7072 8.70715Z" fill="white"/>
                                <path d="M41.0017 4.911V7V9H43.0017H45.0857C43.7757 11.891 41.6387 15.24 39.4257 15.24C38.5267 15.24 37.5137 14.683 36.4157 13.586C34.4407 11.611 34.7327 10.421 34.8287 10.03C35.3147 8.047 38.2687 6.146 41.0017 4.911ZM43.0017 2C43.0017 2 27.0017 7 35.0017 15C36.6017 16.6 38.0817 17.24 39.4257 17.24C44.8017 17.24 48.0017 7 48.0017 7H43.0017V2Z" fill="white"/>
                                <path d="M39 5H37V12H39V5Z" fill="white"/>
                                <path d="M3.00025 48C2.74425 48 2.48825 47.902 2.29325 47.707C1.90225 47.316 1.90225 46.684 2.29325 46.293L6.56525 42.021C6.95625 41.63 7.58825 41.63 7.97925 42.021C8.37025 42.412 8.37025 43.044 7.97925 43.435L3.70725 47.707C3.51225 47.902 3.25625 48 3.00025 48Z" fill="white"/>
                                <path d="M36.9998 48C36.7438 48 36.4878 47.902 36.2928 47.707L32.0198 43.434C31.6288 43.043 31.6288 42.411 32.0198 42.02C32.4108 41.629 33.0428 41.629 33.4338 42.02L37.7068 46.293C38.0978 46.684 38.0978 47.316 37.7068 47.707C37.5118 47.902 37.2558 48 36.9998 48Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_468_11557">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h1 className="text-[#22304A] text-[28px] font-[900] 2xl:text-[38px] xl:text-[38px] lg:text-[38px] md:text-[38px] leading-[42px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[0px] mt-[18px] 2xl:mt-[28px] xl:mt-[28px] lg:mt-[28px] md:mt-[28px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.AboutMissionVision.missionTitle}</span>
                    </h1>
                    <p className="text-[#363636] max-w-2xl text-[18px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[24px] 2xl:leading-[30px] xl:leading-[30px] lg:leading-[30px] md:leading-[30px] tracking-[-1px] mt-[8px] 2xl:mt-[4px] xl:mt-[4px] lg:mt-[4px] md:mt-[4px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.AboutMissionVision.missionDescription}</span>
                    </p>
                </ScrollFadeIn>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default MissionVision;