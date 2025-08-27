"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ScrollFadeIn from "@/components/ScrollFadeIn";
type ContentItem = {
  title: string;
  description: string;
};

import { type getDictionary } from "@/get-dictionary";

interface Props {
    slug: string;
    lang: string;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const SkillFocus = ({ slug, lang, dictionary }: Props) => {
  let contentItems: ContentItem[] = [];

  switch (slug) {
    case 'pre-a1-starters':
      contentItems.push(...dictionary.SkillFocus.listPreA1);
      break;
    case 'a1-movers':
      contentItems.push(...dictionary.SkillFocus.listA1Mover);
      break;
    case 'a2-flyers':
      contentItems.push(...dictionary.SkillFocus.listA2Flyer);
      break;
    // default:
    //   contentItems.push("No objectives found.");
  }
    

  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex justify-start items-center mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
        <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-20 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
          <div className="w-full relative order-2 lg:order-1">
            <ScrollFadeIn>
            <div className="text-center">
              {slug === 'pre-a1-starters'
                    ? 
                    <Image
                      src="/assets/img/course_details/skill_focus_hero.svg"
                      alt="Description"
                      width={100}
                      height={100}
                      className="w-full object-cover mx-auto"
                    />
                    
                    : slug === 'a1-movers'
                    ? 
                      <Image
                        src="/assets/img/course_details/a1_mover_skill_focus.webp"
                        alt="Description"
                        width={400}
                        height={250}
                        className="w-full object-cover mx-auto border-[6px] border-white rounded-[12px]"
                      />
                    : slug === 'a2-flyers'
                    ? 
                    <Image
                      src="/assets/img/course_details/a2_flyer_skill_focus_hero.webp"
                      alt="Description"
                      width={400}
                      height={250}
                      className="w-full object-cover mx-auto border-[6px] border-white rounded-[12px]"
                    />
                    : 'Course Title Not Found'
                }
            </div>
            </ScrollFadeIn>
            <div className="absolute top-[-55%] 2xl:top-[-25%] xl:top-[-25%] lg:top-[-25%] md:top-[-25%] right-[-15%] 2xl:right-[65%] xl:right-[65%] lg:right-[65%] md:right-[65%]">
              <Image
                src="/assets/img/course_details/skill_focus_icon_1.svg"
                alt="Description"
                width={100}
                height={100}
                className="w-full object-cover mx-auto"
              />
            </div>
          </div>
          <div className="w-full order-1 lg:order-2">
            <ScrollFadeIn>
            <h1 className="text-[#464646] pt-[0] font-[900] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
              
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.SkillFocus.title}</span>
            </h1>
            <p className="text-[#6E6E6E] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[18px]">
              
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.SkillFocus.subTitle}</span>
            </p>
            {contentItems.map((s, idx) => (
              <p
                key={idx}
                className="text-[#6E6E6E] text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[18px]"
              >
                <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado-medium'}>{s.title}:</span> 
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{s.description}</span>
                
              </p>
            ))}
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SkillFocus;
