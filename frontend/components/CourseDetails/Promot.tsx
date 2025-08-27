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
            <div className="mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
                <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6 ">
                    <ScrollFadeIn>
                        <div className="bg-promot bg-cover bg-no-repeat bg-center h-[440px] rounded-[18px] flex justify-center items-center">
                            <div>
                                <h1 className="text-[#fff] max-w-5xl font-[900] text-center pt-[0] 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 2xl:px-0 xl:px-0 lg:px-6 md:px-6 text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[46.8px] 2xl:leading-[57.2px] xl:leading-[57.2px] lg:leading-[57.2px] md:leading-[57.2px] tracking-[0px]">
                                    {slug === 'pre-a1-starters'
                                        ? 
                                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.CoursePromotPreA1.title}</span>
                                        
                                        : slug === 'a1-movers'
                                        ? 
                                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.CoursePromotA1Movers.title}</span>
                                       
                                        : slug === 'a2-flyers'
                                        ? 
                                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado'}>{dictionary.CoursePromotA2Flyer.title}</span>
                                        
                                        : 'Course Title Not Found'
                                    }
                                </h1>
                                <Link href="https://wa.me/8801617302013">
                                    <div className="flex justify-center mt-[32px]">
                                        <div className="bg-[#fff] flex justify-center items-center font-[600] h-[35px] 2xl:h-[64px] xl:h-[64px] lg:h-[64px] md:h-[64px] text-center rounded-[49.13px] w-[90%] 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] text-[14px] 2xl:text-[20px] xl:text-[20px lg:text-[20px] md:text-[20px] text-[#397DC9]">
                                            {slug === 'pre-a1-starters'
                                                ? 
                                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.CoursePromotPreA1.button}</span>
                                                
                                                : slug === 'a1-movers'
                                                ? 
                                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.CoursePromotA1Movers.button}</span>
                                                
                                                : slug === 'a2-flyers'
                                                ? 
                                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.CoursePromotA1Movers.button}</span>
                                                
                                                : 'Course Title Not Found'
                                            }
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </Wrapper>
    );
};
export default Promot;