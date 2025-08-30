"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import ScrollFadeIn from "@/components/ScrollFadeIn";
const Location = () => {
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex justify-start items-center mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] pb-[44px] 2xl:pb-[120px] xl:pb-[120px] lg:pb-[120px] md:pb-[120px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-6">
            <div className="w-full">
              <ScrollFadeIn>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4259655171372!2d90.3921064!3d23.874509399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5742b65a121%3A0xe0a1a4c81eda9da0!2sKhan%20Tower!5e0!3m2!1sen!2sbd!4v1734935623650!5m2!1sen!2sbd"
                    className="w-full h-[312px] 2xl:h-[391px] xl:h-[391px] lg:h-[391px] md:h-[391px] border-0 bg-[#fff] p-[4px] rounded-[8px]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </ScrollFadeIn>
            </div>
            <div className="w-full">
               <ScrollFadeIn>
                <div>
                    <Image
                        src="/assets/img/contact/branch_new.svg"
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-full h-full 2xl:h-[391px] xl:h-[391px] lg:h-[391px] md:h-[391px] object-cover rounded-[8px]"
                    />
                </div>
                </ScrollFadeIn>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Location;