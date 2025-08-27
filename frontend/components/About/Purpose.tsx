"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import ScrollFadeIn from "@/components/ScrollFadeIn";
const MissionVision = () => {
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex justify-start items-center mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] mb-[60px] 2xl:mb-[120px] xl:mb-[120px] lg:mb-[120px] md:mb-[120px]">
        <div className="w-full grid grid-cols-1 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
            <h1 className="text-[#22304A] max-w-2xl mx-auto font-mikado text-[28px] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] leading-[36px] 2xl:leading-[46.8px] xl:leading-[46.8px] lg:leading-[46.8px] md:leading-[46.8px] tracking-[0px]">Our journey is driven by growth, passion, and purpose—one we’re proud to share.</h1>
            <p className="text-[#22304A] text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] max-w-4xl mx-auto lg:text-center font-mikado-regular leading-[30px] capitalize mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                Established in 2009, we started as a passionate team dedicated to empowering learners. Recognizing the importance of innovative and effective language learning, we set out to help students master English with confidence in an evolving world.
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[18px] 2xl:mt-[60px] xl:mt-[60px] lg:mt-[60px] md:mt-[60px]">
                <div className="w-full">
                    <ScrollFadeIn>
                        <Image
                            src="/assets/img/about/purpose_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full rounded-[4px] h-full 2xl:h-[562px] xl:h-[562px] lg:h-[562px] md:h-[562px] object-cover mx-auto"
                        />
                    </ScrollFadeIn>
                </div>
                <div className="w-full">
                    <ScrollFadeIn>
                        <Image
                            src="/assets/img/about/purpose_2.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full rounded-[4px] h-[325px] object-cover mx-auto"
                        />
                        <div className="w-full gap-6 mt-[24px] flex justify-start">
                            <div className="col-span-2">
                                <div className="">
                                    <Image
                                        src="/assets/img/about/purpose_3.svg"
                                        alt="Description"
                                        width={100}
                                        height={100}
                                        className="w-full rounded-[4px] h-[213px] object-cover mx-auto"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <Image
                                    src="/assets/img/about/purpose_4.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full h-[213px] rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
    );
};
export default MissionVision;