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
            <div className="w-full grid grid-cols-1 px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                <h1 className="text-[#22304A] max-w-2xl mx-auto font-mikado text-[28px] 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] leading-[42px] 2xl:leading-[46.8px] xl:leading-[46.8px] lg:leading-[46.8px] md:leading-[46.8px] tracking-[0px]">Our Team</h1>
                <p className="text-[#22304A] text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] max-w-3xl mx-auto text-center font-mikado-regular leading-[24px] 2xl:leading-[30px] xl:leading-[30px] lg:leading-[30px] md:leading-[30px] mt-[4px] 2xl:mt-[18px] xl:2xl:mt-[18px] lg:2xl:mt-[18px] md:2xl:mt-[18px]">
                    Led by experienced educators, our team is dedicated to making English learning simple, effective, and accessible for all.
                </p>
                <ScrollFadeIn>
                    <div className="flex justify-center mt-[12px] 2xl:mt-[60px] xl:mt-[60px] lg:mt-[60px] md:mt-[60px]">
                        <div className="flex justify-start gap-5">
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        <div className="flex justify-center mt-[16px] 2xl:mt-[60px] xl:mt-[60px] lg:mt-[60px] md:mt-[60px]">
                            <div className="flex justify-start gap-5">
                                <div className="w-full">
                                    <Image
                                        src="/assets/img/about/team.svg"
                                        alt="Description"
                                        width={100}
                                        height={100}
                                        className="w-full rounded-[4px] object-cover mx-auto"
                                    />
                                </div>
                                <div className="w-full">
                                    <Image
                                        src="/assets/img/about/team.svg"
                                        alt="Description"
                                        width={100}
                                        height={100}
                                        className="w-full rounded-[4px] object-cover mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        <div className="flex justify-center mt-[16px] 2xl:mt-[60px] xl:mt-[60px] lg:mt-[60px] md:mt-[60px]">
                            <div className="flex justify-start gap-5">
                                <div className="w-full">
                                    <Image
                                        src="/assets/img/about/team.svg"
                                        alt="Description"
                                        width={100}
                                        height={100}
                                        className="w-full rounded-[4px] object-cover mx-auto"
                                    />
                                </div>
                                <div className="w-full">
                                    <Image
                                        src="/assets/img/about/team.svg"
                                        alt="Description"
                                        width={100}
                                        height={100}
                                        className="w-full rounded-[4px] object-cover mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden 2xl:block xl:block lg:block md:block">
                        <div className="grid grid-cols-3 gap-5 mt-[60px]">
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden 2xl:block xl:block lg:block md:block">
                        <div className="grid grid-cols-3 gap-5 mt-[60px]">
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/assets/img/about/team.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full rounded-[4px] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollFadeIn>
            </div>
        </div>
    </Wrapper>
    );
};
export default MissionVision;