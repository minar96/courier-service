"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';

import { type getDictionary } from "@/get-dictionary";

interface Props {
    slug: string;
    lang: string;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const CourseDetailsHero = ({ slug, lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full grid grid-cols-1 h-[950px] 2xl:h-[850px] xl:h-[850px] lg:h-[750px] md:h-[750px]">
      <div className="flex justify-start items-center mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[100px] md:mt-[100px]">
        <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
            <div className="w-full mt-[50px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-0 md:mt-0">
                <h1 className="text-[#22304A] font-mikado text-[44px] 2xl:text-[54px] xl:text-[54px] lg:text-[54px] md:text-[54px] leading-[59.8px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[-1px]">
                  {slug === 'pre-a1-starters'
                    ? 'Pre A1 Starters – The First Step in English'
                    : slug === 'a1-movers'
                    ? 'A1 Movers – The Next Step in English'
                    : slug === 'a2-flyers'
                    ? 'A2 Flyers – Ready for the Real World'
                    : 'Course Title Not Found'}
                </h1>
                <p className="text-[#333] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[16px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                  {slug === 'pre-a1-starters'
                    ? 
                     <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseDetailsHero.decripttionPreA1}</span>
                    : slug === 'a1-movers'
                    ? 
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseDetailsHero.descriptionA1Mover}</span>
                    
                    : slug === 'a2-flyers'
                    ? 
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseDetailsHero.descriptionA2Flyer}</span>
                    
                    : 'Course Title Not Found'}
                </p>
                <div className="mt-[32px] 2xl:mt-[44px] xl:mt-[44px] lg:mt-[44px] md:mt-[44px]">
                  <Link href="https://wa.me/8801617302013">
                    <div className="w-full 2xl:w-[204px] xl:w-[204px] lg:w-[204px] md:w-[204px] h-[64px] py-[14px]  text-[#fff] bg-[#397DC9] rounded-[49.13px] text-center text-[22.851px]">
                      <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>
                        {lang === 'bn' ? 'ভর্তি নিশ্চিত করুন' : ' Enroll Now'}
                      </span>
                    </div>
                  </Link>
                </div>
            </div>
            <div className="w-full">
                 <div className="text-center">
                      
                      {slug === 'pre-a1-starters'
                    ? 
                     <Image
                          src="/assets/img/course_details/course_hero_a1_mover.webp"
                          alt="Description"
                          width={400}
                          height={250}
                          className="w-full object-cover mx-auto"
                      />
                    : slug === 'a1-movers'
                    ? 
                    <Image
                      src="/assets/img/course_details/course_hero_a2_flyer.webp"
                      alt="Description"
                      width={400}
                      height={250}
                      unoptimized
                      className="w-full object-cover rounded-[24px]"
                    />

                    
                    : slug === 'a2-flyers'
                    ? 
                    <Image
                          src="/assets/img/course_details/course_hero_pre_a1.webp"
                          alt="Description"
                          width={400}
                          height={250}
                          className="w-full object-cover mx-auto"
                      />
                    
                    : 'Course Title Not Found'}
                  </div>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CourseDetailsHero;