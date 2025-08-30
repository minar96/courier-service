"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const HowItWorks = ({ lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 mt-[54px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
            <div className="w-full relative px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0 py-16">
                {/* <ScrollFadeIn>
                    <h2 className="text-[#4C4C4C] text-[36px] font-[500] 2xl:text-[48px] xl:text-[48px] lg:text-[42px] md:text-[42px] font-mikado-medium leading-[48px] 2xl:leading-[62px] xl:leading-[62px] lg:leading-[62px] md:leading-[62px] text-center text-lg max-w-2xl capitalize mx-auto">
                        <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.ChildProgress.title}</span>
                    </h2>
                </ScrollFadeIn> */}
                 {/* <p className="text-[#2e2d2d] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] font-mikado-regular leading-[30px] max-w-2xl mx-auto mb-12 text-center mt-[24px] 2xl:mt-3 xl:mt-3 lg:mt-3 md:mt-3">
                    Tracking your child’s progress begins with regular check-ins with teachers for insights on academics and behavior.
                </p> */}
                {/* <div className="w-full grid lg:grid-cols-3 gap-0 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 items-start mt-[32px] 2xl:mt-[78px] xl:mt-[78px] lg:mt-[78px] md:mt-[78px] px-0 2xl:px-0 xl:px-0 lg:px-6 md:px-6 sm:px-0">
                    <ScrollFadeIn>
                        <div className="2xl:text-center xl:text-center lg:text-center md:text-center 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto">
                            <div className="2xl:text-center xl:text-center lg:text-center md:text-center">
                                <Image
                                    src="/assets/img/home/child-progress-step-1.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-[110px] h-[110px] object-cover 2xl:text-center xl:text-center lg:text-center md:text-center mx-auto"
                                />
                            </div>
                            <h4 className="text-[#4B4B4B] text-[24px] font-[900] text-center xl:text-left lg:text-left md:text-left mt-[24px] 2xl:mt-[53px] xl:mt-[53px] lg:mt-[53px] md:mt-[53px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.ChildProgress.stepOneTitle}</span>
                            </h4>
                            <p className="text-[#505050] text-[18px] leading-[30px] 2xl:text-center text-center xl:text-center lg:text-center md:text-center mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.ChildProgress.stepOneSubTitle}</span>
                            </p>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className="text-center mx-auto mt-[44px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                            <div className="text-center">
                                <Image
                                    src="/assets/img/home/child-progress-step-2.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-[110px] h-[110px] object-cover mx-auto"
                                />
                            </div>
                            <h4 className="text-[#4B4B4B] text-[24px] font-[600] font-mikado-regular mt-[24px] 2xl:mt-[53px] xl:mt-[53px] lg:mt-[53px] md:mt-[53px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.ChildProgress.stepTwoTitle}</span>
                            </h4>
                            <p className="text-[#505050] text-[18px] font-mikado-regular leading-[30px] 2xl:text-center xl:text-center lg:text-center md:text-center mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.ChildProgress.stepTwoSubTitle}</span>
                            </p>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className="text-center mx-auto mt-[44px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                            <div className="text-center">
                                <Image
                                    src="/assets/img/home/child-progress-step-3.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-[110px] h-[110px] object-cover mx-auto"
                                />
                            </div>
                            <h4 className="text-[#4B4B4B] text-[24px] font-[900] mt-[24px] 2xl:mt-[53px] xl:mt-[53px] lg:mt-[53px] md:mt-[53px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.ChildProgress.stepThreeTitle}</span>
                            </h4>
                            <p className="text-[#363535] text-[18px] leading-[30px] 2xl:text-center xl:text-center lg:text-center md:text-center mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.ChildProgress.stepThreeSubTitle}</span>
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
                <div className="absolute top-[50%] 2xl:top-[50%] xl:top-[50%] lg:top-[40%] md:top-[50%] sm:top-[50%] left-[20%] 2xl:left-[20%] xl:left-[20%] lg:left-[22%] md:left-[20%] sm:left-[20%] hidden 2xl:block xl:block lg:block md:block">
                    <Image
                        src="/assets/img/home/arrow-up.svg"
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[287px] 2xl:w-[287px] xl:w-[287px] lg:w-[220px] md:w-[220px] sm:w-[287px] object-cover mx-auto"
                    />
                </div>
                <div className="absolute top-[50%] 2xl:top-[50%] xl:top-[50%] lg:top-[45%] md:top-[45%] sm:top-[50%] left-[55%] 2xl:left-[55%] xl:left-[55%] lg:left-[56%] md:left-[56%] sm:left-[55%] hidden 2xl:block xl:block lg:block md:block">
                    <Image
                        src="/assets/img/home/arrow-down.svg"
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[287px] 2xl:w-[287px] xl:w-[287px] lg:w-[220px] md:w-[220px] sm:w-[287px] object-cover mx-auto"
                    />
                </div>
                
                <div className="absolute top-[27%] left-[30%] hidden">
                    <Image
                        src="/assets/img/home/arrow-line-1.svg"
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[280px] object-cover"
                    />
                </div>
                <div className="absolute top-[55%] left-[0%] hidden">
                    <Image
                        src="/assets/img/home/arrow-line-2.svg"
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px] object-cover"
                    />
                </div> */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                       
                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>How it works</span>
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                        <div className="text-4xl font-black text-[#ff7a00]">1</div>
                        <div className="mt-2 font-medium">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>Create order</span>
                        </div>
                        <p className="text-sm text-zinc-300 mt-1">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Book from web or mobile in seconds.</span>
                        </p>
                        </div>
                        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                        <div className="text-4xl font-black text-[#ff7a00]">2</div>
                        <div className="mt-2 font-medium">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>We pick up</span>
                        </div>
                        <p className="text-sm text-zinc-300 mt-1">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Rider arrives at your address for pickup.</span>
                        </p>
                        </div>
                        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                        <div className="text-4xl font-black text-[#ff7a00]">3</div>
                        <div className="mt-2 font-medium">
                           
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> We deliver</span>
                        </div>
                        <p className="text-sm text-zinc-300 mt-1">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Customer gets updates & tracking link.</span>
                        </p>
                        </div>
                        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                        <div className="text-4xl font-black text-[#ff7a00]">4</div>
                        <div className="mt-2 font-medium">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>Payment</span>
                        </div>
                        <p className="text-sm text-zinc-300 mt-1">
                            
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Settled to your bank or MFS.</span>
                        </p>
                        </div>
                    </div>
                    </div>
            </div>
        </Wrapper>
        
    );
};
export default HowItWorks;