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

const SkillFocus = ({ slug, lang, dictionary }: Props) => {
    let objectiveList: string[] = [];
    switch (slug) {
    case 'pre-a1-starters':
        if (Array.isArray(dictionary.HowTeach.listPreA1)) {
            objectiveList.push(...dictionary.HowTeach.listPreA1);
        }
        break;
    case 'a1-movers':
        if (Array.isArray(dictionary.HowTeach.listA1Mover)) {
            objectiveList.push(...dictionary.HowTeach.listA1Mover);
        }
        break;
    case 'a2-flyers':
        if (Array.isArray(dictionary.HowTeach.listA2Flyer)) {
            objectiveList.push(...dictionary.HowTeach.listA2Flyer);
        }
        break;
    default:
        objectiveList.push("No objectives found.");
    }
  return (
        <Wrapper className="w-full grid grid-cols-1">
            <div className="mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
                <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                    <h1 className="text-[#464646] 2xl:text-center xl:text-center lg:text-center md:text-center pt-[0] font-[900] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.HowTeach.title}</span>
                    </h1>
                    <p className="text-[#4B4B4B] 2xl:text-center xl:text-center lg:text-center text-[20px] 2xl:text-[24px] 2xl:lg:max-w-4xl xl:lg:max-w-4xl lg:max-w-2xl lg:mx-auto xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[0px] mt-[12px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                        
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.HowTeach.subTitle}</span>
                    </p>   
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-5 2xl:px-0 xl:px-0 lg:px-5 md:px-0">
                    <div className="w-full mt-[22px] 2xl:mt-[93px] xl:mt-[93px] lg:mt-[93px] md:mt-[93px]">
                        <ScrollFadeIn>
                        <div className="">
                            {slug === 'pre-a1-starters'
                                ? 
                                <Image
                                    src="/assets/img/course_details/how_teach_1.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] object-cover"
                                />
                                
                                : slug === 'a1-movers'
                                ? 
                                <Image
                                    src="/assets/img/course_details/a1_mover_how_teach_1.webp"
                                    alt="Description"
                                    width={400}
                                    height={250}
                                    className="w-full 2xl:w-[72%] xl:w-[72%] lg:w-[70%] md:w-[70%] object-cover rounded-[8px]"
                                />
                                : slug === 'a2-flyers'
                                ? 
                                <Image
                                    src="/assets/img/course_details/a1_mover_how_teach_1.webp"
                                    alt="Description"
                                    width={400}
                                    height={250}
                                    className="w-full 2xl:w-[72%] xl:w-[72%] lg:w-[70%] md:w-[70%] object-cover rounded-[8px]"
                                />
                                : 'Course Title Not Found'
                            }
                        </div>
                        <div className="text-center mt-[16px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px]">
                            {slug === 'pre-a1-starters'
                                ? 
                                <Image
                                    src="/assets/img/course_details/how_teach_2.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full object-cover mx-auto"
                                />
                                
                                : slug === 'a1-movers'
                                ? 
                                <Image
                                    src="/assets/img/course_details/a1_mover_how_teach_2.webp"
                                    alt="Description"
                                    width={400}
                                    height={250}
                                    className="w-full object-cover mx-auto rounded-[8px]"
                                />
                                : slug === 'a2-flyers'
                                ? 
                                <Image
                                    src="/assets/img/course_details/a2_flyer_how_teach_2.webp"
                                    alt="Description"
                                    width={400}
                                    height={250}
                                    className="w-full object-cover mx-auto rounded-[8px]"
                                />
                                : 'Course Title Not Found'
                            }
                        </div>
                        </ScrollFadeIn>
                    </div>
                    <div className="col-span-2 mt-[20px] 2xl:mt-[93px] xl:mt-[93px] lg:mt-[93px] md:mt-[93px] 2xl:flex xl:flex lg:flex md:flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end relative">
                        
                        <div className=" 2xl:absolute xl:absolute lg:absolute md:absolute left-[3%] top-[2%] 2xl:top-[2%] xl:top-[2%] lg:top-[0%] md:top-[0%]">
                            {slug === 'pre-a1-starters'
                                ? 
                                <Image
                                    src="/assets/img/course_details/how_teach_3.svg"
                                    alt="Description"
                                    width={100}
                                    height={100}
                                    className="w-full 2xl:w-full xl:w-full lg:w-[330px] md:w-[330px]"
                                />
                                
                                : slug === 'a1-movers'
                                ? 
                                <Image
                                    src="/assets/img/course_details/a1_mover_how_teach_3.webp"
                                    alt="Description"
                                    width={400}
                                    height={250}
                                    className="w-full 2xl:w-[395px] xl:w-[395px] lg:w-[330px] md:w-[330px] rounded-[8px]"
                                />
                                : slug === 'a2-flyers'
                                ? 
                                <Image
                                    src="/assets/img/course_details/a2_flyer_how_teach_3.webp"
                                    alt="Description"
                                    width={400}
                                    height={250}
                                    className="w-full 2xl:w-[395px] xl:w-[395px] lg:w-[330px] md:w-[330px] rounded-[8px]"
                                />
                                : 'Course Title Not Found'
                            }
                        </div>
                        
                        <div className="bg-[#D77121] w-full 2xl:w-[450px] xl:w-[450px] lg:w-[360px] md:[450px] h-[450px] 2xl:h-[450px] xl:h-[450px] lg:h-[400px] md:h-[400px] rounded-bl-[8px] rounded-br-[8px] 2x:rounded-[8px] xl:rounded-[8px] lg:rounded-[8px] md:rounded-[8px] mt-0 2xl:mt-[50px] xl:mt-[50px] lg:mt-[20px] md:mt-[20px] flex justify-start items-center">
                            <div className="ms-[20px] 2xl:ms-[60px] xl:ms-[60px] lg:ms-[60px] md:ms-[60px] mr-[20px]">
                                {objectiveList.map((s, idx) => (
                                    <div key={idx} className="flex justify-start gap-3">
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                                <path d="M14.7679 28.9444C14.6831 28.9444 14.5991 28.9269 14.5213 28.8928C14.4436 28.8588 14.3737 28.8091 14.3161 28.7467L2.13224 15.5673C2.05102 15.4795 1.99718 15.3698 1.9773 15.2519C1.95742 15.1339 1.97237 15.0126 2.02032 14.903C2.06827 14.7934 2.14714 14.7001 2.24728 14.6346C2.34741 14.5691 2.46447 14.5342 2.58412 14.5342H8.44874C8.53679 14.5342 8.62382 14.5531 8.70394 14.5897C8.78407 14.6262 8.85544 14.6794 8.91323 14.7459L12.9851 19.4304C13.4252 18.4897 14.277 16.9235 15.7719 15.0149C17.9819 12.1934 22.0926 8.04377 29.1254 4.2978C29.2613 4.22541 29.4195 4.20663 29.5686 4.24515C29.7177 4.28367 29.8469 4.3767 29.9308 4.50587C30.0147 4.63504 30.0471 4.79096 30.0216 4.94284C29.9961 5.09472 29.9145 5.23152 29.7931 5.32623C29.7663 5.34722 27.0546 7.4826 23.9339 11.3939C21.0618 14.9933 17.2438 20.8788 15.3651 28.477C15.3321 28.6105 15.2553 28.7291 15.1471 28.8139C15.0388 28.8986 14.9053 28.9447 14.7678 28.9447L14.7679 28.9444Z" fill="white"/>
                                            </svg>
                                        </p>
                                        <p className="text-[#fff] text-[22px] 2xl:text-[22px] xl:text-[22px] lg:text-[16px] md:text-[16px] leading-[32px]">
                                            
                                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{s}</span>
                                        </p>
                                    </div>
                                ))}
                                {/* <div className="flex justify-start gap-3 mt-[10]">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.9444C14.6831 28.9444 14.5991 28.9269 14.5213 28.8928C14.4436 28.8588 14.3737 28.8091 14.3161 28.7467L2.13224 15.5673C2.05102 15.4795 1.99718 15.3698 1.9773 15.2519C1.95742 15.1339 1.97237 15.0126 2.02032 14.903C2.06827 14.7934 2.14714 14.7001 2.24728 14.6346C2.34741 14.5691 2.46447 14.5342 2.58412 14.5342H8.44874C8.53679 14.5342 8.62382 14.5531 8.70394 14.5897C8.78407 14.6262 8.85544 14.6794 8.91323 14.7459L12.9851 19.4304C13.4252 18.4897 14.277 16.9235 15.7719 15.0149C17.9819 12.1934 22.0926 8.04377 29.1254 4.2978C29.2613 4.22541 29.4195 4.20663 29.5686 4.24515C29.7177 4.28367 29.8469 4.3767 29.9308 4.50587C30.0147 4.63504 30.0471 4.79096 30.0216 4.94284C29.9961 5.09472 29.9145 5.23152 29.7931 5.32623C29.7663 5.34722 27.0546 7.4826 23.9339 11.3939C21.0618 14.9933 17.2438 20.8788 15.3651 28.477C15.3321 28.6105 15.2553 28.7291 15.1471 28.8139C15.0388 28.8986 14.9053 28.9447 14.7678 28.9447L14.7679 28.9444Z" fill="white"/>
                                            </svg>
                                    </p>
                                    <p className="text-[#fff] text-[22px] leading-[33px] font-mikado-regular">Colorful visuals and real-life objects</p>
                                </div>
                                <div className="flex justify-start gap-3 mt-[10]">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.9444C14.6831 28.9444 14.5991 28.9269 14.5213 28.8928C14.4436 28.8588 14.3737 28.8091 14.3161 28.7467L2.13224 15.5673C2.05102 15.4795 1.99718 15.3698 1.9773 15.2519C1.95742 15.1339 1.97237 15.0126 2.02032 14.903C2.06827 14.7934 2.14714 14.7001 2.24728 14.6346C2.34741 14.5691 2.46447 14.5342 2.58412 14.5342H8.44874C8.53679 14.5342 8.62382 14.5531 8.70394 14.5897C8.78407 14.6262 8.85544 14.6794 8.91323 14.7459L12.9851 19.4304C13.4252 18.4897 14.277 16.9235 15.7719 15.0149C17.9819 12.1934 22.0926 8.04377 29.1254 4.2978C29.2613 4.22541 29.4195 4.20663 29.5686 4.24515C29.7177 4.28367 29.8469 4.3767 29.9308 4.50587C30.0147 4.63504 30.0471 4.79096 30.0216 4.94284C29.9961 5.09472 29.9145 5.23152 29.7931 5.32623C29.7663 5.34722 27.0546 7.4826 23.9339 11.3939C21.0618 14.9933 17.2438 20.8788 15.3651 28.477C15.3321 28.6105 15.2553 28.7291 15.1471 28.8139C15.0388 28.8986 14.9053 28.9447 14.7678 28.9447L14.7679 28.9444Z" fill="white"/>
                                            </svg>
                                    </p>
                                    <p className="text-[#fff] text-[22px] leading-[33px] font-mikado-regular">Cambridge-endorsed books and materials</p>
                                </div>
                                <div className="flex justify-start gap-3 mt-[10]">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.9444C14.6831 28.9444 14.5991 28.9269 14.5213 28.8928C14.4436 28.8588 14.3737 28.8091 14.3161 28.7467L2.13224 15.5673C2.05102 15.4795 1.99718 15.3698 1.9773 15.2519C1.95742 15.1339 1.97237 15.0126 2.02032 14.903C2.06827 14.7934 2.14714 14.7001 2.24728 14.6346C2.34741 14.5691 2.46447 14.5342 2.58412 14.5342H8.44874C8.53679 14.5342 8.62382 14.5531 8.70394 14.5897C8.78407 14.6262 8.85544 14.6794 8.91323 14.7459L12.9851 19.4304C13.4252 18.4897 14.277 16.9235 15.7719 15.0149C17.9819 12.1934 22.0926 8.04377 29.1254 4.2978C29.2613 4.22541 29.4195 4.20663 29.5686 4.24515C29.7177 4.28367 29.8469 4.3767 29.9308 4.50587C30.0147 4.63504 30.0471 4.79096 30.0216 4.94284C29.9961 5.09472 29.9145 5.23152 29.7931 5.32623C29.7663 5.34722 27.0546 7.4826 23.9339 11.3939C21.0618 14.9933 17.2438 20.8788 15.3651 28.477C15.3321 28.6105 15.2553 28.7291 15.1471 28.8139C15.0388 28.8986 14.9053 28.9447 14.7678 28.9447L14.7679 28.9444Z" fill="white"/>
                                            </svg>
                                    </p>
                                    <p className="text-[#fff] text-[22px] leading-[33px] font-mikado-regular">Songs, stories, and chants for language retention</p>
                                </div>
                                <div className="flex justify-start gap-3 mt-[10]">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.9444C14.6831 28.9444 14.5991 28.9269 14.5213 28.8928C14.4436 28.8588 14.3737 28.8091 14.3161 28.7467L2.13224 15.5673C2.05102 15.4795 1.99718 15.3698 1.9773 15.2519C1.95742 15.1339 1.97237 15.0126 2.02032 14.903C2.06827 14.7934 2.14714 14.7001 2.24728 14.6346C2.34741 14.5691 2.46447 14.5342 2.58412 14.5342H8.44874C8.53679 14.5342 8.62382 14.5531 8.70394 14.5897C8.78407 14.6262 8.85544 14.6794 8.91323 14.7459L12.9851 19.4304C13.4252 18.4897 14.277 16.9235 15.7719 15.0149C17.9819 12.1934 22.0926 8.04377 29.1254 4.2978C29.2613 4.22541 29.4195 4.20663 29.5686 4.24515C29.7177 4.28367 29.8469 4.3767 29.9308 4.50587C30.0147 4.63504 30.0471 4.79096 30.0216 4.94284C29.9961 5.09472 29.9145 5.23152 29.7931 5.32623C29.7663 5.34722 27.0546 7.4826 23.9339 11.3939C21.0618 14.9933 17.2438 20.8788 15.3651 28.477C15.3321 28.6105 15.2553 28.7291 15.1471 28.8139C15.0388 28.8986 14.9053 28.9447 14.7678 28.9447L14.7679 28.9444Z" fill="white"/>
                                            </svg>
                                    </p>
                                    <p className="text-[#fff] text-[22px] leading-[33px] font-mikado-regular">Regular progress tracking and feedback</p>
                                </div> */}
                            </div>
                        </div>
                       
                        <div className=" absolute left-[-25%] 2xl:left-[-15%] xl:left-[-15%] lg:left-[-15%] md:left-[-15%] bottom-[35%] 2xl:bottom-[-18%] xl:bottom-[-18%] lg:bottom-[-18%] md:bottom-[-18%]">
                            <Image
                                src="/assets/img/course_details/learn-icon-1.svg"
                                alt="Description"
                                width={100}
                                height={100}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default SkillFocus;