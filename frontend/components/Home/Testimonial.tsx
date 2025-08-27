"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import Carousel from "../UI/MultiSlideCarousel";
import ScrollFadeIn from "@/components/ScrollFadeIn";
const Testimonial = () => {
    const slides = [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
        "https://i.ibb.co/XXR8kzF/3.png",
    ];
    
    return (
        <Wrapper className="w-full mt-[60px] sm:mt-[80px] lg:mt-[120px]">
            <div className="w-full py-[60px] sm:py-[80px] lg:py-[120px] px-4 sm:px-6 lg:px-8">
                <div className="2xl:text-center xl:text-center lg:text-center md:text-center mb-8 sm:mb-12">
                    <p className="text-[#FFF] text-[16px] sm:text-[16px] font-mikado-regular leading-[20px] sm:leading-[24px] tracking-[1.28px] mb-2">
                        Testimonials
                    </p>
                    <h2 className="mt-[16px] text-[#FFF] text-[36px] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] font-mikado leading-[36px] sm:leading-[46px] lg:leading-[62.4px] tracking-[-0.5px] sm:tracking-[-0.72px] lg:tracking-[-0.96px]">
                        What Parents Say
                    </h2>
                </div>
                <ScrollFadeIn>
                    <div className="w-full">
                        <Carousel 
                            itemsPerView={{
                                mobile: 1,
                                tablet: 2,
                                desktop: 4
                            }}
                        >
                            {slides.map((s, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px]"
                                >
                                    <div>
                                        <div className="flex justify-start mb-3 sm:mb-4">
                                            <p className="text-orange-400 text-lg sm:text-xl">★★★★☆</p>
                                        </div>
                                        <p className="text-[#282556] text-left mb-4 sm:mb-6 font-mikado-regular text-[18px] sm:text-base leading-[25px]">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                            maximus quam malesuada est pellentesque rhoncus.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-start gap-2 sm:gap-3 mt-auto">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex-shrink-0" />
                                        <div className="text-left">
                                            <p className="text-sm sm:text-base font-bold text-gray-900">Customer Name</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Company</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </ScrollFadeIn>
            </div>
        </Wrapper>
    );
};

export default Testimonial;