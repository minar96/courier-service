"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { type getDictionary } from "@/get-dictionary";
interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const CapturingMoment = ({ lang, dictionary }: Props) => {
    const [counter, setCounter] = useState(0);
    const [totalSuccess, setTotalSuccess] = useState(0);
    const [totalIelts, setTotalIelts] = useState(0);
    const [percentageSatis, setPercentageSatis] = useState(0);
    const statsRef = useRef(null);
    const initializedRef = useRef(false); // To avoid multiple initializations

    useEffect(() => {
        const target = statsRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !initializedRef.current) {
                        initializedRef.current = true;
                        initializeCounters();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, []);

    const initializeCounters = () => {
        animateCount(setCounter, 500, 50);
        animateCount(setTotalSuccess, 20, 80);
        animateCount(setTotalIelts, 15, 80);
        animateCount(setPercentageSatis, 95, 80);
    };

    const animateCount = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        target: number,
        interval: number
        ) => {
        let count = 0;
        const steps = 400; // increase this to make it slower (default was 100)
        const increment = Math.ceil(target / steps);
        const intervalId = setInterval(() => {
            count += increment;
            if (count >= target) {
            setter(target);
            clearInterval(intervalId);
            } else {
            setter(count);
            }
        }, interval);
    };

    return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
            <div className="w-full px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-0">
                <h2 className="text-[#4C4C4C] text-[36px] font-[600] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] leading-[62px] text-center text-lg max-w-2xl capitalize mx-auto">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.CapturingMoments.title}</span>
                </h2>
                <ScrollFadeIn>
                    <div className="mt-[32px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[60px] md:mt-[60px]">
                        <Image
                            src="/assets/img/home/capturing-moment.svg"
                            alt="Description"
                            width={100}
                            height={100}
                            className="w-full object-cover mx-auto"
                        />
                    </div>
                </ScrollFadeIn>
                <div
                    className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 2xl:gap-8 xl:gap-8 lg:gap-5 md:gap-5 mt-[50px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] all-stats" ref={statsRef}>
                    <ScrollFadeIn>
                        <div className="bg-[#3A5DC4] rounded-[60px] py-[12px] text-center">
                            <h5 className="font-mikado text-[28px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] leading-[32px] 2xl:leading-[52px] xl:leading-[52px] lg:leading-[52px] md:leading-[52px] text-[#fff]">
                                {counter.toLocaleString()}+
                            </h5>
                            <p className="font-mikado-regular text-[18px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] leading-[30px] text-[#fff]">
                                Students
                            </p>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className="bg-[#3A5DC4] rounded-[60px] py-[12px] text-center">
                            <h5 className="font-mikado text-[28px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] leading-[32px] 2xl:leading-[52px] xl:leading-[52px] lg:leading-[52px] md:leading-[52px] text-[#fff]">
                                {totalSuccess.toLocaleString()}+
                            </h5>
                            <p className="font-mikado-regular text-[18px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] leading-[30px] text-[#fff]">
                                Expert Teacher
                            </p>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className="bg-[#3A5DC4] rounded-[60px] py-[12px] text-center">
                            <h5 className="font-mikado text-[28px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] leading-[32px] 2xl:leading-[52px] xl:leading-[52px] lg:leading-[52px] md:leading-[52px] text-[#fff]">
                                {totalIelts.toLocaleString()}+
                            </h5>
                            <p className="font-mikado-regular text-[18px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] leading-[30px] text-[#fff]">
                                Years of Experience
                            </p>
                        </div>
                    </ScrollFadeIn>
                    <ScrollFadeIn>
                        <div className="bg-[#3A5DC4] rounded-[60px] py-[12px] text-center">
                            <h5 className="font-mikado text-[28px] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] leading-[32px] 2xl:leading-[52px] xl:leading-[52px] lg:leading-[52px] md:leading-[52px] text-[#fff]">
                                {percentageSatis.toLocaleString()}%
                            </h5>
                            <p className="font-mikado-regular text-[18px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] leading-[30px] text-[#fff]">
                                Parents Satisfaction
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </Wrapper>
    );
};

export default CapturingMoment;
