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

const CourseCategory = ({ lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 mt-[54px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] pb-[44px] 2xl:pb-[120px] xl:pb-[120px] lg:pb-[120px] md:pb-[120px]"> 
            <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-0">
                <h1 className="text-[#4C4C4C] text-[36px] 2xl:text-[54px] xl:text-[54px] text-left 2xl:text-left xl:text-left lg:text-center md:text-center lg:text-[42px] md:text-[42px] 
                font-[900] font-mikado-medium leading-[50.2px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[100px] md:mt-[100px]">
                    Cambridge English for Young Learners (YLE)
                </h1>
                <div className="hidden 2xl:block xl:block lg:block md:block">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[0px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[60px] md:mt-[60px]">
                        <ScrollFadeIn>
                            <Link href={`/${lang}/course/pre-a1-starters`}>
                                <div className="bg-[#0D9951] rounded-[24px] pt-5 ps-5 pr-5 pb-7 hidden 2xl:block xl:block lg:block md:block">
                                    <div className="text-center">
                                        <Image
                                            src="/assets/img/home/pre_a1_starter.webp"
                                            alt="Description"
                                            width={400}
                                            height={250}
                                            className="w-full object-cover mx-auto rounded-[18px]"
                                        />
                                    </div>
                                    <h3 className="text-[#FFF] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[24px] font-mikado leading-[37px] mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[18px] md:mt-[18px]">Pre A1 Starters – The First Step in English</h3>
                                    <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HomeCourseCategory.preA1SubTitle}</span>
                                    </p>
                                    {/* <p className="text-[24px] text-[#FFF] font-mikado leading-[36px] mt-[24px]">BDT 25,000/-</p> */}
                                </div>
                            </Link>
                        </ScrollFadeIn>
                        <ScrollFadeIn>
                            <Link href={`/${lang}/course/${'a1-movers'}`}>
                                <div className="bg-[#3A5DC4] rounded-[24px] pt-5 ps-5 pr-5 pb-7 hidden 2xl:block xl:block lg:block md:block">
                                    <div className="text-center">
                                        <Image
                                            src="/assets/img/home/a2_mover.webp"
                                            alt="Description"
                                            width={400}
                                            height={250}
                                            className="w-full object-cover mx-auto rounded-[18px]"
                                        />
                                    </div>
                                    <h3 className="text-[#FFF] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[24px] font-mikado leading-[37px] mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[18px] md:mt-[18px]">A1 Movers – The Next Step with Confidence</h3>
                                    <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                                        {dictionary.HomeCourseCategory.A1MoverSubTitle} 
                                    </p>
                                    {/* <p className="text-[24px] text-[#FFF] font-mikado leading-[36px] mt-[24px]">BDT 32,000/-</p> */}
                                </div>
                            </Link>
                        </ScrollFadeIn>
                        <ScrollFadeIn>
                            <Link href={`/${lang}/course/${'a2-flyers'}`}>
                                <div className="bg-[#FF9441] rounded-[24px] pt-5 ps-5 pr-5 pb-7 hidden 2xl:block xl:block lg:block md:block">
                                    <div className="text-center">
                                        <Image
                                            src="/assets/img/home/a2_flyer.webp"
                                            alt="Description"
                                            width={400}
                                            height={250}
                                            className="w-full object-cover mx-auto rounded-[18px]"
                                        />
                                    </div>
                                    <h3 className="text-[#FFF] text-[28px] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[24px] font-mikado leading-[37px] mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[18px] md:mt-[18px]">A2 Flyers – Ready for the Real World</h3>
                                    <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                                        {dictionary.HomeCourseCategory.A2FlyerSubTitle}    
                                    </p>
                                    {/* <p className="text-[24px] text-[#FFF] font-mikado leading-[36px] mt-[24px]">BDT 50,000/-</p> */}
                                </div>
                            </Link>
                        </ScrollFadeIn>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 mt-[20px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                    <Link href={`/${lang}/course/pre-a1-starters`}>
                        <div className="bg-[#0D9951] rounded-[6px] p-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                            <div className="flex flex-row gap-2">
                                <div className="w-[300px] h-full">
                                    <Image
                                        src="/assets/img/home/pre_a1_starter.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-[300px] h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">Pre A1 Starters - The First Step in English</h3>
                                    <p className="text-[#fff] text-[14px] leading-[20px] mt-1">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                            {dictionary.HomeCourseCategory.preA1SubTitle.slice(0, 66)}
                                        </span>
                                    </p>
                                    {/* <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 25,000/-</p> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/${lang}/course/${'a1-movers'}`}>
                        <div className="bg-[#3A5DC4] rounded-[6px] p-[16px] mt-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                            <div className="flex flex-row gap-2">
                                <div className="w-[300px] h-full">
                                    <Image
                                        src="/assets/img/home/a2_mover.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-[300px] h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">A1 Movers – The Next Step with Confidence</h3>
                                    <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                            {dictionary.HomeCourseCategory.A1MoverSubTitle.slice(0, 66)}
                                        </span>
                                    </p>
                                    {/* <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 25,000/-</p> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/${lang}/course/${'a2-flyers'}`}>
                        <div className="bg-[#FF9039] rounded-[6px] p-[16px] mt-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                            <div className="flex flex-row gap-2">
                                <div className="w-[300px] h-full">
                                    <Image
                                        src="/assets/img/home/a2_flyer.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-[300px] h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">A2 Flyers – Ready for the Real World</h3>
                                    <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">
                                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                            {dictionary.HomeCourseCategory.A2FlyerSubTitle.slice(0, 66)}
                                        </span>
                                    </p>
                                    {/* <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 50,000/-</p> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <h1 className="text-[#4C4C4C] text-[36px] 2xl:text-[54px] xl:text-[54px] lg:text-[54px] md:text-[54px] font-mikado leading-[70.2px] mt-[32px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">Our Others Courses</h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[24px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px]">
                    <div className="bg-[#0D9951] rounded-[24px] p-5 hidden 2xl:block xl:block lg:block md:block">
                        <div className="text-center">
                            <Image
                                src="/assets/img/home/course.svg"
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                        </div>
                        <h3 className="text-[#FFF] text-[28px] font-mikado leading-[37px] mt-[32px]">Creative Writing & Reading</h3>
                        <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                            From poems to comic strips, kids explore storytelling while becoming 
                        </p>
                        <p className="text-[24px] text-[#FFF] font-mikado leading-[36px] mt-[24px]">BDT 25,000/-</p>
                    </div>
                    <div className="bg-[#3A5DC4] rounded-[24px] p-5 hidden 2xl:block xl:block lg:block md:block">
                        <div className="text-center">
                            <Image
                                src="/assets/img/home/course.svg"
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                        </div>
                        <h3 className="text-[#FFF] text-[28px] font-mikado leading-[37px] mt-[32px]">Math &  Logic Adventures</h3>
                        <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                            From poems to comic strips, kids explore storytelling while becoming  
                        </p>
                        <p className="text-[24px] text-[#FFF] font-mikado leading-[36px] mt-[24px]">BDT 32,000/-</p>
                    </div>
                    <div className="bg-[#FF9441] rounded-[24px] p-5 hidden 2xl:block xl:block lg:block md:block">
                        <div className="text-center">
                            <Image
                                src="/assets/img/home/course.svg"
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                        </div>
                        <h3 className="text-[#FFF] text-[28px] font-mikado leading-[37px] mt-[32px]">Science & Curiosity</h3>
                        <p className="text-[#FFF] text-[16px] font-mikado-regular leading-[24px] mt-[12px]">
                            From poems to comic strips, kids explore storytelling while becoming   
                        </p>
                        <p className="text-[24px] text-[#FFF] font-mikado leading-[36px] mt-[24px]">BDT 50,000/-</p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1">
                    <div className="bg-[#0D9951] rounded-[6px] p-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        <div className="flex flex-row gap-2">
                            <div className="w-[300px] h-full">
                                <Image
                                    src="/assets/img/home/course.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-[300px] h-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">Pre A1 Starters - The First Step in English</h3>
                                <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">From poems to comic strips </p>
                                <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 25,000/-</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#3A5DC4] rounded-[6px] p-[16px] mt-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        <div className="flex flex-row gap-2">
                            <div className="w-[300px] h-full">
                                <Image
                                    src="/assets/img/home/course.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-[300px] h-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">A1 Movers – The Next Step with Confidence</h3>
                                <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">Kids explore storytelling while becoming  </p>
                                <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 25,000/-</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FF9039] rounded-[6px] p-[16px] mt-[16px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        <div className="flex flex-row gap-2">
                            <div className="w-[300px] h-full">
                                <Image
                                    src="/assets/img/home/course.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-[300px] h-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#fff] text-[16px] font-mikado leading-[24px]">A2 Flyers – Ready for the Real World</h3>
                                <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">Kids explore storytelling while</p>
                                <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 50,000/-</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div> 
        </Wrapper>
    );
};
export default CourseCategory;