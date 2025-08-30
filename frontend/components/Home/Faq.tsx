"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import activityData from "../../libs/data/home-page-faq.json";
import {FaChevronDown} from "react-icons/fa";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { type getDictionary } from "@/get-dictionary";
interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const Faq = ({ lang, dictionary }: Props) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const toggleAccordion = (index: number): void => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-5 pb-[60px] 2xl:pb-[120px] xl:pb-[120px] lg:pb-[120px] md:pb-[120px]"> 
            <div className="w-full grid grid-cols-1 lg:grid-cols-1 px-0 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
                <h2 className="text-[#424242] text-[36px] font-[900] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] leading-[60px] text-center pt-[44px] 2xl:pt-[120px] xl:pt-[120px] lg:pt-[120px] md:pt-[120px]">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado'}>{dictionary.Faq.title}</span>
                </h2>
                {/* <p className="text-[#7B7B7B] mx-5 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 text-[20px] font-mikado-regular leading-[28px] text-center mt-[18px]">
                    Our expert advisors can help you find the right workplace solution for you and your team.
                </p> */}
                <ScrollFadeIn>
                    <div className="w-full mt-[60px] px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
                        <div className="">
                            {dictionary.HomeFAQ.map((item: any, index: number) => (
                                <div key={index} className="border-b border-gray-100 mb-4">
                                    
                                    <button onClick={()=> toggleAccordion(index)} className="w-full flex justify-between items-center p-4 border-t-[4.157px] border-r-[4.157px] border-b-[8.314px] border-l-[4.157px] border-[#E2E4EB] bg-white hover:bg-gray-200 transition">
                                        <span className="text-[18px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[#565656] leading-[36px]">
                                            <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}>{item.title}</span>
                                        </span>
                                        <FaChevronDown className={`transform transition-transform text-[24px] text-[#565656] ${openIndex === index ? 'rotate-180':""}`}/>
                                    </button>
                                    <div className={`overflow-auto border-b-[8.314px] border-r-[4.157px] border-l-[4.157px] border-[#E2E4EB] bg-white ${openIndex === index ? 'max-h-50 p-4' : 'max-h-0'} transition-all duration-700 ease-in-out`}>
                                        {/* <p className="text-gray-700 " dangerouslySetInnerHTML={{
                                                __html: item.description,
                                            }}></p> */}
                                            <p className="text-gray-700">
                                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{item.description}</span>
                                            </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollFadeIn>
            </div>
        </Wrapper>
    );
};
export default Faq;