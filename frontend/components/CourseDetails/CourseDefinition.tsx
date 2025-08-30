"use client";

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

const CourseDetailsCourseDefinition = ({ slug, lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full grid grid-cols-1 h-[800px] 2xl:h-[676px] xl:h-[676px] lg:h-[676px] md:h-[676px]">
        <div className="flex justify-start 2xl:items-center xl:items-center lg:items-center md:items-center">
            <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
                <div className="w-full order-2 lg:order-1">
                    <ScrollFadeIn>
                        <div className="text-center mt-[13px] 2xl:mt-[60px] xl:mt-[60px] lg:mt-[60px] md:mt-[60px]">
                            <Image
                                src="/assets/img/course_details/course_definition.svg"
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full object-cover mx-auto"
                            />
                        </div>
                    </ScrollFadeIn>
                </div>
                <div className="w-full order-1 lg:order-2">
                    <ScrollFadeIn>
                        <h1 className="text-[#FFF] pt-[44px] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                            
                            {slug === 'pre-a1-starters'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.CourseDefinationPreA1.title}</span>
                                : slug === 'a1-movers'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.CourseDefinationA1Mover.title}</span>
                                
                                : slug === 'a2-flyers'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.CourseDefinationA2Flyers.title}</span>
                               
                                : 'Course Title Not Found'
                            }
                        </h1>
                        <p className="text-[#fff] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[16px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                            {slug === 'pre-a1-starters'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseDefinationPreA1.DefinitionPart1}</span>
                                
                                : slug === 'a1-movers'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseDefinationA1Mover.DefinitionPart1}</span>
                                : slug === 'a2-flyers'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseDefinationA2Flyers.DefinitionPart1}</span>
                                : 'Course Title Not Found'
                            }
                        </p>
                        <p className="text-[#fff] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[16px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                            {slug === 'pre-a1-starters'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{ dictionary.CourseDefinationPreA1.DefinitionPart2}</span>
                                : slug === 'a1-movers'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{ dictionary.CourseDefinationA1Mover.DefinitionPart2}</span>
                                : slug === 'a2-flyers'
                                ? 
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{ dictionary.CourseDefinationA2Flyers.DefinitionPart2}</span>
                                : 'Course Title Not Found'
                            }
                        </p>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    </Wrapper>
      );
    };
    export default CourseDetailsCourseDefinition;