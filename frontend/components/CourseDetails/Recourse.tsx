import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
// import { useRouter } from 'next/navigation';
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
    slug: string;
    lang: string;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const Promot = ({ slug, lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1 ">
            <div className="mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] mb-[60px] 2xl:mb-[120px] xl:mb-[120px] lg:mb-[120px] md:mb-[120px] ">
                <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6 ">
                    <h1 className="text-[#464646] pt-[0] font-[900] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.CourseRecommanded.title}</span>
                    </h1>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[24px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px]">
                        {slug === 'pre-a1-starters'?'':
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
                        }
                        {slug === 'a1-movers'?'':
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
                        }
                        {slug === 'a2-flyers'?'':
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
                        }
                    </div>
                    <div className="w-full grid grid-cols-1">
                        {slug === 'pre-a1-starters'?'':
                            <ScrollFadeIn>
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
                                                <p className="text-[#fff] text-[14px] font-mikado-regular leading-[20px] mt-1">
                                                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>
                                                        {dictionary.HomeCourseCategory.preA1SubTitle.slice(0, 66)}
                                                    </span>
                                                </p>
                                                {/* <p className="text-[#fff] text-[16px] font-mikado-medium leading-[24px] mt-2">BDT 25,000/-</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollFadeIn>
                        }
                        {slug === 'a1-movers'?'':
                            <ScrollFadeIn>
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
                            </ScrollFadeIn>
                        }
                        {slug === 'a2-flyers'?'':
                            <ScrollFadeIn>
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
                            </ScrollFadeIn>
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default Promot;