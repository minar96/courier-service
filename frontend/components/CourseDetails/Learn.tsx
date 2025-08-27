"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Children } from 'react';
import ScrollFadeIn from "@/components/ScrollFadeIn";

import { type getDictionary } from "@/get-dictionary";

interface Props {
    slug: string;
    lang: string;
    dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const Learn = ({ slug, lang, dictionary }: Props) => {
    let learmItems: string[] = [];
    let childrenLearn: string[] = [];

    if (slug === 'pre-a1-starters') {
    learmItems = [
        "Family & friends",
        "Animals & colors",
        "Food & toys",
        "Body parts & clothes",
        "School objects & classroom language",
        "Everyday activities (eat, sleep, play, read, etc.)",
    ];

    const preA1List = dictionary.ChildWillLearn.listPreA1;
        if (Array.isArray(preA1List)) {
            childrenLearn.push(...preA1List);
        } else if (typeof preA1List === "string") {
            childrenLearn.push(preA1List);
        }

    } else if (slug === 'a1-movers') {
    learmItems = [
        "School and classroom life",
        "Daily routines and time",
        "Food, health, and hobbies",
        "Places in town, travel, and nature",
        "Describing people, actions, and feelings",
        "Common questions and answers for social interaction",
    ];

    const a1List = dictionary.ChildWillLearn.listA1Mover;
        if (Array.isArray(a1List)) {
            childrenLearn.push(...a1List);
        } else if (typeof a1List === "string") {
            childrenLearn.push(a1List);
        }

    } else if (slug === 'a2-flyers') {
    learmItems = [
        "School subjects and homework",
        "Holidays, hobbies, and daily routines",
        "Travel, weather, and directions",
        "Describing people, experiences, and future plans",
        "Simple storytelling and opinion-sharing",
    ];

    const a2List = dictionary.ChildWillLearn.listA2Flyer;
        if (Array.isArray(a2List)) {
            childrenLearn.push(...a2List);
        } else if (typeof a2List === "string") {
            childrenLearn.push(a2List);
        }
    }

  return (
    <Wrapper className="w-full grid grid-cols-1">
        <div className="flex justify-start items-center mt-[77px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] mb-[60px] 2xl:mb-[120px] xl:mb-[120px] lg:mb-[120px] md:mb-[120px]">
            <div className="w-full grid grid-cols-1 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
                <div className="w-full relative">
                    <h1 className="text-[#fff] text-center font-[900] pt-[0] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                         
                         <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.CourseChildLearn.title}</span>
                    </h1>
                    <p className="text-[#fff] text-center max-w-2xl mx-auto text-[20px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] leading-[30px] 2xl:leading-[36px] xl:leading-[36px] lg:leading-[36px] md:leading-[36px] tracking-[-1px] mt-[8px] 2xl:mt-[18px] xl:mt-[18px] lg:mt-[18px] md:mt-[18px]">
                        {slug === 'pre-a1-starters'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseChildLearn.subTitlePreA1}</span>
                            
                            : slug === 'a1-movers'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseChildLearn.subTitleA1Mover}</span>
                            
                            : slug === 'a2-flyers'
                            ? 
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.CourseChildLearn.subTitleA2Flyer}</span>
                            
                            : 'Course Title Not Found'
                        }
                    </p>
                    <ScrollFadeIn>
                    <div className="mt-[60px] hidden 2xl:block xl:block lg:block md:block">
                        <div className="w-[80%] mx-auto">
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {learmItems.map((s, idx) => (
                                    <div key={idx} className="rounded-[6px] bg-[#F7F9FD] text-[#333333] w-[288px] h-[143px] flex justify-center items-center text-center">
                                        <h5 className="text-[24px] font-mikado-medium leading-[36px] px-4">{s}</h5>
                                    </div>
                                ))}
                                {/* <div className="rounded-[6px] bg-[#F7F9FD] w-[288px] h-[143px] flex justify-center items-center">
                                    <h5 className="text-[24px] font-mikado-medium">Animals & colors</h5>
                                </div>
                                <div className="rounded-[6px] bg-[#F7F9FD] w-[288px] h-[143px] flex justify-center items-center">
                                    <h5 className="text-[24px] font-mikado-medium">Food & toys</h5>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-[24px] hidden 2xl:block xl:block lg:block md:block">
                        <div className="flex justify-center">
                            <div className="flex justify-start gap-5">
                                <div className="rounded-[6px] bg-[#F7F9FD] w-[288px] h-[143px] flex justify-center items-center">
                                    <h5 className="text-[24px] font-mikado-medium">Body parts & clothes</h5>
                                </div>
                                <div className="rounded-[6px] bg-[#F7F9FD] w-[288px] h-[143px] flex justify-center items-center text-center">
                                    <h5 className="text-[24px] font-mikado-medium">School objects & classroom language</h5>
                                </div>
                                <div className="rounded-[6px] bg-[#F7F9FD] w-[288px] h-[143px] flex justify-center items-center text-center">
                                    <h5 className="text-[24px] font-mikado-medium">Everyday activities (eat, sleep, play, read, etc.)</h5>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="mt-[22px] block 2xl:hidden xl:hidden lg:hidden md:hidden">
                        <div className="grid grid-cols-2 gap-3">
                            {learmItems.map((s, idx) => (
                                <div key={idx} className="rounded-[2px] bg-[#F7F9FD] text-center h-[82px] flex justify-center items-center">
                                    <h5 className="text-[16px] font-mikado-medium">{s}</h5>
                                </div>
                            ))}
                            {/* <div className="rounded-[2px] bg-[#F7F9FD] w-[185px] h-[82px] flex justify-center items-center">
                                <h5 className="text-[16px] font-mikado-medium">Animals & colors</h5>
                            </div> */}
                        </div>
                        {/* <div className="flex justify-between gap-3 mt-[16px]">
                            <div className="rounded-[2px] bg-[#F7F9FD] w-[185px] h-[82px] flex justify-center items-center">
                                <h5 className="text-[16px] font-mikado-medium">Body parts & clothes</h5>
                            </div>
                            <div className="rounded-[2px] text-center bg-[#F7F9FD] w-[185px] h-[82px] flex justify-center items-center">
                                <h5 className="text-[16px] font-mikado-medium">School objects & classroom language</h5>
                            </div>
                        </div>
                        <div className="flex justify-between gap-3 mt-[16px]">
                            <div className="rounded-[2px] bg-[#F7F9FD] w-[185px] h-[82px] flex justify-center items-center">
                                <h5 className="text-[16px] font-mikado-medium">Food & toys</h5>
                            </div>
                            <div className="rounded-[2px] text-center leading-[24px] bg-[#F7F9FD] w-[185px] h-[82px] flex justify-center items-center">
                                <h5 className="text-[16px] font-mikado-medium">Everyday activities (eat, sleep, play, read, etc.)</h5>
                            </div>
                        </div> */}
                    </div>
                    </ScrollFadeIn>
                    <div className=" absolute top-[-27%] 2xl:top-[-24%] xl:top-[-24%] lg:top-[-24%] md:top-[-24%] right-[-20%] 2xl:right-[0%] xl:right-[0%] lg:right-[0%] md:right-[0%]">
                        <Image
                            src="/assets/img/course_details/learn-icon-1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-[40%] 2xl:w-full xl:w-full lg:w-full md:w-full object-cover mx-auto"
                        />
                    </div>
                    
                    <div className=" absolute bottom-[-35%] 2xl:bottom-[-38%] xl:bottom-[-38%] lg:bottom-[-25%] md:bottom-[-38%] left-[-20%] 2xl:left-[-6%] xl:left-[-6%] lg:left-[-6%] md:left-[-6%]">
                        <Image
                            src="/assets/img/course_details/learn-icon-2.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-[70%] 2xl:w-full xl:w-full lg:full md:full object-cover mx-auto"
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2  mt-[120px]">
                    <div className="w-full relative ">
                        <h1 className="text-[#fff] pt-[0] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 text-[33px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                            
                             <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{dictionary.ChildWillLearn.title}</span>
                        </h1>
                        <ScrollFadeIn>
                            <div className="mt-[32px] 2xl:mt-[32px] xl:mt-[32px] lg:mt-[32px] md:mt-[32px]">
                                {childrenLearn.map((s, idx) => (
                                    <div key={idx} className="relative mt-[24px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px]">
                                        <div  className="rounded-[55px] custom-yellow-shadow bg-white 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[62px] flex justify-start items-center px-[12px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                                            <h5 className="text-[#525252] text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] ms-[30px] 2xl:ms-[60px] xl:ms-[60px] lg:ms-[50px] md:ms-[60px]">
                                                
                                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{s}</span>
                                            </h5>
                                        </div>
                                        <div className=" absolute top-[17%] 2xl:top-[19%] xl:top-[19%] lg:top-[15%] md:top-[19%] left-[-3%] 2xl:left-[-3%] xl:left-[-3%] lg:left-[-1%] md:left-[-3%]">
                                            <div className="w-[44px] 2xl:w-[54px] xl:w-[54px] lg:w-[54px] md:w-[54px] h-[44px] 2xl:h-[54px] xl:h-[54px] lg:h-[54px] md:h-[54px] border border-[#FEAB33] rounded-[50%] bg-[#fff] flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                                    <path d="M14.7679 28.943C14.6831 28.943 14.5991 28.9254 14.5213 28.8914C14.4436 28.8573 14.3737 28.8076 14.3161 28.7453L2.13224 15.5659C2.05102 15.478 1.99718 15.3684 1.9773 15.2504C1.95742 15.1324 1.97237 15.0112 2.02032 14.9015C2.06827 14.7919 2.14714 14.6987 2.24728 14.6332C2.34741 14.5677 2.46447 14.5328 2.58412 14.5328H8.44874C8.53679 14.5328 8.62382 14.5517 8.70394 14.5882C8.78407 14.6247 8.85544 14.678 8.91323 14.7444L12.9851 19.429C13.4252 18.4883 14.277 16.922 15.7719 15.0134C17.9819 12.1919 22.0926 8.04231 29.1254 4.29634C29.2613 4.22395 29.4195 4.20516 29.5686 4.24368C29.7177 4.28221 29.8469 4.37524 29.9308 4.50441C30.0147 4.63358 30.0471 4.7895 30.0216 4.94138C29.9961 5.09326 29.9145 5.23006 29.7931 5.32477C29.7663 5.34575 27.0546 7.48114 23.9339 11.3925C21.0618 14.9918 17.2438 20.8774 15.3651 28.4755C15.3321 28.609 15.2553 28.7276 15.1471 28.8124C15.0388 28.8972 14.9053 28.9432 14.7678 28.9432L14.7679 28.943Z" fill="#00C755"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="rounded-[55px] custom-yellow-shadow bg-white 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[62px] flex justify-start items-center mt-[24px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px] px-[12px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                                    <h5 className="text-[#525252] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] ms-[30px] 2xl:ms-[60px] xl:ms-[60px] lg:ms-[60px] md:ms-[60px]">
                                        Identify words and match them with pictures
                                    </h5>
                                </div>
                                <div className=" absolute top-[34%] 2xl:top-[36%] xl:top-[36%] lg:top-[36%] md:top-[36%] left-[-3%] 2xl:left-[-3%] xl:left-[-3%] lg:left-[-3%] md:left-[-3%]">
                                    <div className="w-[44px] 2xl:w-[54px] xl:w-[54px] lg:w-[54px] md:w-[54px] h-[44px] 2xl:h-[54px] xl:h-[54px] lg:h-[54px] md:h-[54px] border border-[#FEAB33] rounded-[50%] bg-[#fff] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.943C14.6831 28.943 14.5991 28.9254 14.5213 28.8914C14.4436 28.8573 14.3737 28.8076 14.3161 28.7453L2.13224 15.5659C2.05102 15.478 1.99718 15.3684 1.9773 15.2504C1.95742 15.1324 1.97237 15.0112 2.02032 14.9015C2.06827 14.7919 2.14714 14.6987 2.24728 14.6332C2.34741 14.5677 2.46447 14.5328 2.58412 14.5328H8.44874C8.53679 14.5328 8.62382 14.5517 8.70394 14.5882C8.78407 14.6247 8.85544 14.678 8.91323 14.7444L12.9851 19.429C13.4252 18.4883 14.277 16.922 15.7719 15.0134C17.9819 12.1919 22.0926 8.04231 29.1254 4.29634C29.2613 4.22395 29.4195 4.20516 29.5686 4.24368C29.7177 4.28221 29.8469 4.37524 29.9308 4.50441C30.0147 4.63358 30.0471 4.7895 30.0216 4.94138C29.9961 5.09326 29.9145 5.23006 29.7931 5.32477C29.7663 5.34575 27.0546 7.48114 23.9339 11.3925C21.0618 14.9918 17.2438 20.8774 15.3651 28.4755C15.3321 28.609 15.2553 28.7276 15.1471 28.8124C15.0388 28.8972 14.9053 28.9432 14.7678 28.9432L14.7679 28.943Z" fill="#00C755"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="rounded-[55px] custom-yellow-shadow bg-white 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[62px] flex justify-start items-center mt-[24px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px] px-[20px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                                    <h5 className="text-[#525252] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] ms-[25px] 2xl:ms-[60px] xl:ms-[60px] lg:ms-[60px] md:ms-[60px]">
                                        Answer basic questions about themselves
                                    </h5>
                                </div>
                                <div className=" absolute top-[54%] left-[-3%]">
                                    <div className="w-[44px] 2xl:w-[54px] xl:w-[54px] lg:w-[54px] md:w-[54px] h-[44px] 2xl:h-[54px] xl:h-[54px] lg:h-[54px] md:h-[54px] border border-[#FEAB33] rounded-[50%] bg-[#fff] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.943C14.6831 28.943 14.5991 28.9254 14.5213 28.8914C14.4436 28.8573 14.3737 28.8076 14.3161 28.7453L2.13224 15.5659C2.05102 15.478 1.99718 15.3684 1.9773 15.2504C1.95742 15.1324 1.97237 15.0112 2.02032 14.9015C2.06827 14.7919 2.14714 14.6987 2.24728 14.6332C2.34741 14.5677 2.46447 14.5328 2.58412 14.5328H8.44874C8.53679 14.5328 8.62382 14.5517 8.70394 14.5882C8.78407 14.6247 8.85544 14.678 8.91323 14.7444L12.9851 19.429C13.4252 18.4883 14.277 16.922 15.7719 15.0134C17.9819 12.1919 22.0926 8.04231 29.1254 4.29634C29.2613 4.22395 29.4195 4.20516 29.5686 4.24368C29.7177 4.28221 29.8469 4.37524 29.9308 4.50441C30.0147 4.63358 30.0471 4.7895 30.0216 4.94138C29.9961 5.09326 29.9145 5.23006 29.7931 5.32477C29.7663 5.34575 27.0546 7.48114 23.9339 11.3925C21.0618 14.9918 17.2438 20.8774 15.3651 28.4755C15.3321 28.609 15.2553 28.7276 15.1471 28.8124C15.0388 28.8972 14.9053 28.9432 14.7678 28.9432L14.7679 28.943Z" fill="#00C755"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="rounded-[55px] custom-yellow-shadow bg-white 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[62px] flex justify-start items-center mt-[24px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px] px-[12px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                                    <h5 className="text-[#525252] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] ms-[30px] 2xl:ms-[60px] xl:ms-[60px] lg:ms-[60px] md:ms-[60px]">
                                        Complete basic sentences
                                    </h5>
                                </div>
                                <div className=" absolute top-[71%] left-[-3%]">
                                    <div className="w-[44px] 2xl:w-[54px] xl:w-[54px] lg:w-[54px] md:w-[54px] h-[44px] 2xl:h-[54px] xl:h-[54px] lg:h-[54px] md:h-[54px] border border-[#FEAB33] rounded-[50%] bg-[#fff] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.943C14.6831 28.943 14.5991 28.9254 14.5213 28.8914C14.4436 28.8573 14.3737 28.8076 14.3161 28.7453L2.13224 15.5659C2.05102 15.478 1.99718 15.3684 1.9773 15.2504C1.95742 15.1324 1.97237 15.0112 2.02032 14.9015C2.06827 14.7919 2.14714 14.6987 2.24728 14.6332C2.34741 14.5677 2.46447 14.5328 2.58412 14.5328H8.44874C8.53679 14.5328 8.62382 14.5517 8.70394 14.5882C8.78407 14.6247 8.85544 14.678 8.91323 14.7444L12.9851 19.429C13.4252 18.4883 14.277 16.922 15.7719 15.0134C17.9819 12.1919 22.0926 8.04231 29.1254 4.29634C29.2613 4.22395 29.4195 4.20516 29.5686 4.24368C29.7177 4.28221 29.8469 4.37524 29.9308 4.50441C30.0147 4.63358 30.0471 4.7895 30.0216 4.94138C29.9961 5.09326 29.9145 5.23006 29.7931 5.32477C29.7663 5.34575 27.0546 7.48114 23.9339 11.3925C21.0618 14.9918 17.2438 20.8774 15.3651 28.4755C15.3321 28.609 15.2553 28.7276 15.1471 28.8124C15.0388 28.8972 14.9053 28.9432 14.7678 28.9432L14.7679 28.943Z" fill="#00C755"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="rounded-[55px] custom-yellow-shadow bg-white 2xl:h-[62px] xl:h-[62px] lg:h-[62px] md:h-[62px] flex justify-start items-center mt-[24px] 2xl:mt-[24px] xl:mt-[24px] lg:mt-[24px] md:mt-[24px] px-[12px] py-[12px] 2xl:py-0 xl:py-0 lg:py-0 md:py-0">
                                    <h5 className="text-[#525252] font-mikado-regular text-[16px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] ms-[30px] 2xl:ms-[60px] xl:ms-[60px] lg:ms-[60px] md:ms-[60px]">
                                        Speak short phrases using correct pronunciation
                                    </h5>
                                </div>
                                <div className=" absolute top-[89%] left-[-3%]">
                                    <div className="w-[44px] 2xl:w-[54px] xl:w-[54px] lg:w-[54px] md:w-[54px] h-[44px] 2xl:h-[54px] xl:h-[54px] lg:h-[54px] md:h-[54px] border border-[#FEAB33] rounded-[50%] bg-[#fff] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                            <path d="M14.7679 28.943C14.6831 28.943 14.5991 28.9254 14.5213 28.8914C14.4436 28.8573 14.3737 28.8076 14.3161 28.7453L2.13224 15.5659C2.05102 15.478 1.99718 15.3684 1.9773 15.2504C1.95742 15.1324 1.97237 15.0112 2.02032 14.9015C2.06827 14.7919 2.14714 14.6987 2.24728 14.6332C2.34741 14.5677 2.46447 14.5328 2.58412 14.5328H8.44874C8.53679 14.5328 8.62382 14.5517 8.70394 14.5882C8.78407 14.6247 8.85544 14.678 8.91323 14.7444L12.9851 19.429C13.4252 18.4883 14.277 16.922 15.7719 15.0134C17.9819 12.1919 22.0926 8.04231 29.1254 4.29634C29.2613 4.22395 29.4195 4.20516 29.5686 4.24368C29.7177 4.28221 29.8469 4.37524 29.9308 4.50441C30.0147 4.63358 30.0471 4.7895 30.0216 4.94138C29.9961 5.09326 29.9145 5.23006 29.7931 5.32477C29.7663 5.34575 27.0546 7.48114 23.9339 11.3925C21.0618 14.9918 17.2438 20.8774 15.3651 28.4755C15.3321 28.609 15.2553 28.7276 15.1471 28.8124C15.0388 28.8972 14.9053 28.9432 14.7678 28.9432L14.7679 28.943Z" fill="#00C755"/>
                                        </svg>
                                    </div>
                                </div> */}
                            </div>
                        </ScrollFadeIn>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <ScrollFadeIn>
                            <div className="text-center mt-[44px] 2xl:mt-[70px] xl:mt-[70px] lg:mt-[70px] md:mt-[70px] ms-0 2xl:ms-[120px] xl:ms-[120px] lg:ms-4 md:ms-4">
                                {slug === 'pre-a1-starters'
                                    ? 
                                    <Image
                                        src="/assets/img/course_details/learn_hero.svg"
                                        alt="Description"
                                        width={100}
                                        height={100}
                                        className="w-full object-cover mx-auto"
                                    />
                                    : slug === 'a1-movers'
                                    ? 
                                    <Image
                                        src="/assets/img/course_details/a1_mover_learn_hero.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-full object-cover mx-auto border-[3px] border-white rounded-[24px] "
                                    />
                                    
                                    : slug === 'a2-flyers'
                                    ? 
                                    <Image
                                        src="/assets/img/course_details/a2_flyer_learn_hero.webp"
                                        alt="Description"
                                        width={400}
                                        height={250}
                                        className="w-full object-cover mx-auto border-[3px] border-white rounded-[24px]"
                                    />
                                    
                                    : 'Course Title Not Found'}
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
    );
};
export default Learn;