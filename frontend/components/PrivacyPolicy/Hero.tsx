"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
const Hero = () => {
  return (
    <Wrapper className="w-full grid grid-cols-1 h-[276px] 2xl:h-[458px] xl:h-[458px] lg:h-[458px] md:h-[458px]">
      <div className="flex justify-start items-center mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]">
        <div className="w-full grid grid-cols-1 px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
            <div className="w-full">
                <h1 className="text-[#464646] font-mikado text-center text-[44px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[59.8px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[-1px]">Privacy Policy</h1>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;