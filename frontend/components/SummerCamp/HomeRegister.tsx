"use client";

import React from "react";
import Link from "next/link";
import { Icon, Wrapper } from "../UI";

const homeRegister = () => {
  return (
    <Wrapper className="w-full pt-[22px] lg:pt-[42px] pb-[44px] lg:pb-[120px] !px-5 lg:!px-0 ">
      <div className="w-full px-6 lg:px-[31px] py-5 lg:py-[75px] bg-[#FFF] rounded-[12px]">
        <div className="w-full flex flex-col justify-center items-center -space-y-[52px]">
          <span className="text-royal-blue text-[62px] font-bold font-peace-sans leading-[96px] uppercase">
            Brain
          </span>
          <span className="text-[62px] text-[#FBA923] font-bukhari-script">
            Voyage
          </span>
        </div>
        <div className="w-full mt-3 px-0 lg:px-[136px] text-center">
          <span className="text-[22px] text-[#EF3220] leading-[33px] text-center font-[200]">
            Brain Voyage is a day-long gamified event with hands-on experience
            where your kids speak, create, build, and explore!
          </span>
        </div>

        <div className="w-full mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="w-full bg-[#3A5DC4] bg-[url(/assets/img/home/frame-1.png)] bg-no-repeat h-[262px] rounded-[5px]">
            <ul className="list-disc px-10 py-10">
              <li className="text-[#fff] text-[17px] font-garet font-bold leading-[27px]">
                Simple Robotics
              </li>
              <li className="text-[#fff] text-[17px] font-garet font-bold leading-[27px]">
                Math Scavenger Hunt
              </li>
              <li className="text-[#fff] text-[17px] font-garet font-bold leading-[27px]">
                Comic Strip & Animation
              </li>
              <li className="text-[#fff] text-[17px] font-garet font-bold leading-[27px]">
                Storytelling & Public Speaking
              </li>
            </ul>
          </div>
          <div className="w-full bg-[#FFB72C] h-[262px] text-center flex justify-center items-center px-3 rounded-[5px]">
            <span className="text-[#612C80] text-[18px] font-garet text-center font-bold leading-[27px]">
              Join the fun, hands-on experience where kids speak, create, learn,
              and explore!!
            </span>
          </div>
          <div className="w-full bg-[#E13125] h-[262px] text-center px-3 rounded-[5px]">
            <div className="h-full flex flex-col  justify-center items-center">
              <span className="text-[#FFF] text-[18px] font-garet text-center font-bold leading-[27px]">
                Register now!
              </span>
              <br />
              <span className="text-[#FFF] text-[30px] font-garet text-center font-bold leading-[27px]">
                TK 1500
              </span>
            </div>
          </div>
          <div className="w-full bg-[#51B59F] bg-[url(/assets/img/home/frame-2.png)] bg-no-repeat bg-center object-cover h-[262px] flex flex-col justify-center items-center rounded-[5px]">
            <span>
              <Icon name="location-map" color="red27" size="64" />
            </span>
            <span className="text-[#FFF] text-[18px] font-garet text-center font-bold leading-[27px]">
              Gazipur
            </span>
            <br />
            <span className="text-[#FFF] text-[30px] font-garet text-center font-bold leading-[27px]">
              Base Camp
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[60px]">
          <Link
            href="https://wa.me/8801617302010"
              target="_blank"
            className="bg-[#3A5DC4] py-3 px-4 text-[17px] font-garet font-bold leading-[27px] text-white rounded-4xl"
          >
            Register Now
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default homeRegister;
