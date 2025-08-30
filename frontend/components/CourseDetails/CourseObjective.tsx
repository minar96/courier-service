"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
    slug: string;
    lang: string;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}


const CourseObjective = ({ slug, lang, dictionary }: Props) => {
  let objectiveList: string[] = [];
  switch (slug) {
    case 'pre-a1-starters':
      objectiveList.push(...dictionary.CourseObjective.listPreA1);
      break;
    case 'a1-movers':
      objectiveList.push(...dictionary.CourseObjective.listA1Mover);
      break;
    case 'a2-flyers':
      objectiveList.push(...dictionary.CourseObjective.listA2Flyer);
      break;
    default:
      objectiveList.push("No objectives found.");
  }
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex justify-start items-center mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] mb-[60px] 2xl:mb-[120px] xl:mb-[120px] lg:mb-[120px] md:mb-[120px]">
        <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
            <div className="w-full">
                <h1 className="text-[#464646] font-[900] pt-[0] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.CourseObjective.title}</span>
                </h1>
                <p className="text-[#6E6E6E] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[18px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                     
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseObjective.subTitle}</span>
                </p>
                <ScrollFadeIn>
                <div className="mt-[22px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px]">
                  {objectiveList.map((s, idx) => (
                    <div  key={idx} className="rounded-[55px] custom-yellow-shadow bg-white mt-[24px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px] text-center 2xl:h-[87.277px] xl:h-[87.277px] lg:h-[87.277px] md:h-[87.277px] flex justify-center items-center px-[12px] 2xl:px-[12px] xl:px-[12px] lg:px-[20px] md:px-[20px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                      <h5 className="text-[#3F3F3F] text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px]">
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{s}</span>
                      </h5>
                    </div>
                  ))}
                  {/* <div className="rounded-[55px] custom-yellow-shadow bg-white text-center 2xl:h-[87.277px] xl:h-[87.277px] lg:h-[87.277px] md:h-[87.277px] flex justify-center items-center mt-[24px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px] px-[12px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                    <h5 className="text-[#3F3F3F] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px]">
                      Develop early communication skills in listening, speaking, reading, and writing
                    </h5>
                  </div>
                  <div className="rounded-[55px] custom-yellow-shadow bg-white text-center 2xl:h-[87.277px] xl:h-[87.277px] lg:h-[87.277px] md:h-[87.277px] flex justify-center items-center mt-[24px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px] px-[20px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                    <h5 className="text-[#3F3F3F] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px]">
                      Learn essential vocabulary and structures in real-life contexts
                    </h5>
                  </div>
                  <div className="rounded-[55px] custom-yellow-shadow bg-white text-center 2xl:h-[87.277px] xl:h-[87.277px] lg:h-[87.277px] md:h-[87.277px] flex justify-center items-center mt-[24px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px] px-[12px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                    <h5 className="text-[#3F3F3F] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px]">
                      Prepare children for A1 Movers, the next level in the YLE journey
                    </h5>
                  </div> */}
                </div>
                </ScrollFadeIn>
            </div>
            <div className="w-full relative">
              <ScrollFadeIn>
                <div className="text-center mt-[48px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
                  
                  {slug === 'pre-a1-starters'
                        ? 
                        <Image
                          src="/assets/img/course_details/course_objective.svg"
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-full object-cover mx-auto"
                        />
                        
                        : slug === 'a1-movers'
                        ? 
                        <Image
                            src="/assets/img/course_details/A1 Movers.webp"
                            alt="Description"
                            width={400}
                            height={250}
                            className="w-full object-cover mx-auto"
                        />
                        : slug === 'a2-flyers'
                        ? 
                        <Image
                          src="/assets/img/course_details/a2_flyer_course_objective.webp"
                          alt="Description"
                          width={400}
                          height={25}
                          className="w-full object-cover mx-auto rounded-[12px]"
                      />
                        : 'Course Title Not Found'
                  }
                </div>
                <div className="absolute top-[-22%] 2xl:top-[-5%] xl:top-[-5%] lg:top-[-5%] md:top-[-5%] left-[-18%] 2xl:left-[-20%] xl:left-[-20%] lg:left-[-20%] md:left-[-20%]">
                  <Image
                      src="/assets/img/course_details/course_objective_icon.svg"
                      alt="Description"
                      width={100}
                      height={100}
                      className="w-full object-cover mx-auto"
                  />
                </div>
              </ScrollFadeIn>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CourseObjective;