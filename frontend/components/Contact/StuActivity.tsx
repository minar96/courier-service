"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollFadeIn from "@/components/ScrollFadeIn";
const Location = () => {
    const images = [
        {
            src: '/assets/img/student_activity/group_1.svg',
            alt: 'Slide 1',
        },
        {
            src: '/assets/img/student_activity/group_1.svg',
            alt: 'Slide 2',
        },
        {
            src: '/assets/img/student_activity/group_1.svg',
            alt: 'Slide 3',
        },
    ]
  return (
    <Wrapper className="w-full pt-[44px] 2xl:pt-[120px] xl:pt-[120px] lg:pt-[120px] md:pt-[120px] pb-[44px] 2xl:pb-[120px] xl:pb-[120px] lg:pb-[120px] md:pb-[120px]">
        <div className="w-full grid grid-cols-1 px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
            <div className="w-full">
                <h1 className="text-[#22304A] font-mikado text-center text-[44px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[59.8px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[-1px]">Our Students Activity</h1>
            </div>
        </div>
        <ScrollFadeIn>
        <div className="hidden 2xl:block xl:block lg:block md:block">
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 mt-[60px]">
                <div className="col-span-2">
                    <div>
                        <Image
                            src="/assets/img/student_activity/group_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full h-[307px] object-cover rounded-[12px]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div>
                        <Image
                            src="/assets/img/student_activity/group_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full h-[307px] object-cover rounded-[12px]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div>
                        <Image
                            src="/assets/img/student_activity/group_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full h-[307px] object-cover rounded-[12px]"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden 2xl:block xl:block lg:block md:block">
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 mt-[24px]">
                <div className="w-full">
                    <div>
                        <Image
                            src="/assets/img/student_activity/group_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full h-[307px] object-cover rounded-[12px]"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div>
                        <Image
                            src="/assets/img/student_activity/group_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full h-[307px] object-cover rounded-[12px]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div>
                        <Image
                            src="/assets/img/student_activity/group_1.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full h-[307px] object-cover rounded-[12px]"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden">
            <div className="w-full grid grid-cols-1 px-5 mt-[24px]">
                <div className="w-full max-w-4xl mx-auto">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={true}
                        interval={3000}
                        transitionTime={500}
                        swipeable
                        emulateTouch
                    >
                        {images.map((image, index) => (
                        <div key={index}>
                            <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover"
                            />
                        </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
        </ScrollFadeIn>
    </Wrapper>
  );
};
export default Location;