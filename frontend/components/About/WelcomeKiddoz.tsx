"use client";

import React, { useEffect, useRef, useState } from "react";
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

const Bannar = ({ lang, dictionary }: Props) => {
  const [counter, setCounter] = useState(0);
      const [totalSuccess, setTotalSuccess] = useState(0);
      const [totalIelts, setTotalIelts] = useState(0);
      const statsRef = useRef(null);
      const initializedRef = useRef(false); // To avoid multiple initializations
  
      useEffect(() => {
          const target = statsRef.current;
          if (!target) return;
  
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting && !initializedRef.current) {
                          initializedRef.current = true;
                          initializeCounters();
                          observer.disconnect();
                      }
                  });
              },
              { threshold: 0.5 }
          );
  
          observer.observe(target);
  
          return () => {
              observer.disconnect();
          };
      }, []);
  
      const initializeCounters = () => {
          animateCount(setCounter, 15, 50);
          animateCount(setTotalSuccess, 5, 80);
          animateCount(setTotalIelts, 100, 80);
      };
  
      const animateCount = (
          setter: React.Dispatch<React.SetStateAction<number>>,
          target: number,
          interval: number
          ) => {
          let count = 0;
          const steps = 400; // increase this to make it slower (default was 100)
          const increment = Math.ceil(target / steps);
          const intervalId = setInterval(() => {
              count += increment;
              if (count >= target) {
              setter(target);
              clearInterval(intervalId);
              } else {
              setter(count);
              }
          }, interval);
      };
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-0">
          <div className="w-full">
              <p className="text-[#393939] text-[18px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px]">
                
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.AboutDetails.subTitle}</span>
              </p>
              <h1 className="text-[#464646] mt-4 font-[900] text-[28px] lg:max-w-md md:max-w-md 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] leading-[38px] 2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[44px] tracking-[-1px]">
                
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.AboutDetails.title}</span>
              </h1>
          </div>
          <div className="w-full mt-[12] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
              <p className="text-[#5E5E5E] text-[20px] leading-[30px] capitalize">
                
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.AboutDetails.description}</span>
              </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
          <div className="w-full">
              <ScrollFadeIn>
                <div className="mt-[49px]">
                    <Image
                        src="/assets/img/about/welcome.svg"
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-full 2xl:w-full xl:w-full lg:full md:full h-full 2xl:h-[429px] xl:h-[429px] lg:h-[429px] md:h-[429px] object-cover mx-auto"
                    />
                </div>
              </ScrollFadeIn>
          </div>
          <div className="w-full">
            <ScrollFadeIn>
                <div className="bg-[#3A5DC4] rounded-[12px] h-[292.23px] 2xl:h-[429px] xl:h-[429px] lg:h-[429px] md:h-[429px] mt-[23px] 2xl:mt-[55px] xl:mt-[55px] lg:mt-[55px] md:mt-[55px] px-[16px] flex justify-center items-center">
                    <div className="">
                      <div className="border-b border-[#6A9BC8] w-[290px] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px]" ref={statsRef}>
                        <h5 className="font-mikado text-[#fff] text-[50px] 2xl:text-[74px] xl:text-[74px] lg:text-[74px] md:text-[74px] leading-[64px] 2xl:leading-[94px] xl:leading-[94px] lg:leading-[94px] md:leading-[94px] text-center">{counter.toLocaleString()}</h5>
                        <p className="text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[#fff] font-mikado-regular text-center leading-[19px] 2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px] md:leading-[28px] pb-[12px]">Years of experience</p>
                      </div>
                      <div className="border-b border-[#6A9BC8] w-[290px] 2xl:w-[411px] xl:w-[411px] lg:w-[411px] md:w-[411px]">
                        <h5 className="font-mikado text-[#fff] text-[50px] 2xl:text-[74px] xl:text-[74px] lg:text-[74px] md:text-[74px] leading-[64px] 2xl:leading-[94px] xl:leading-[94px] lg:leading-[94px] md:leading-[94px] text-center">{totalSuccess.toLocaleString()}k</h5>
                        <p className="text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[#fff] font-mikado-regular text-center leading-[19px] 2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px] md:leading-[28px] pb-[12px]">Successful Students</p>
                      </div>
                      <div className="">
                        <h5 className="font-mikado text-[#fff] text-[50px] 2xl:text-[74px] xl:text-[74px] lg:text-[74px] md:text-[74px] leading-[64px] 2xl:leading-[94px] xl:leading-[94px] lg:leading-[94px] md:leading-[94px] text-center">{totalIelts.toLocaleString()}%</h5>
                        <p className="text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[#fff] font-mikado-regular text-center leading-[19px] 2xl:leading-[28px] xl:leading-[28px] lg:leading-[28px] md:leading-[28px] pb-[12px]">Client satisfaction rate</p>
                      </div>
                    </div>
                </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Bannar;