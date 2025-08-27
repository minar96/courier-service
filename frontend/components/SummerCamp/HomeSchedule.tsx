"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Wrapper } from "../UI";
import scheduleItems from "../../libs/data/scheduleI.json";
import scheduleItemsBangla from "../../libs/data/scheduleIBangla.json";
import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const HomeSchedule = ({ lang, dictionary }: Props) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure hydration-safe rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Wrapper className="w-full pt-[116px] pb-[40px] !px-5 lg:!px-0">
      <div className="w-full lg:flex lg:justify-start gap-x-5">
        <div className="w-full lg:w-4/12">
          <div className="w-full">
            <h2 className="text-white text-[48px] font-peace-sans font-normal leading-[58px] tracking-[0.92px]">
              Schedule
            </h2>
            <h2 className="text-[#FEAB33] text-[48px] font-peace-sans font-normal leading-[58px] tracking-[0.92px]">
              Overview
            </h2>
          </div>
          {/* <div className="w-full mt-[32px]">
            <button
              type="button"
              className="flex flex-shrink-0 items-center justify-center gap-3 px-[40px] py-[20px] h-[64px] bg-white/33 rounded-[25px] cursor-pointer hover:bg-[#3A9B7A] transition duration-300 ease-in-out"
            >
              <span className="text-[#FFFFFF] text-[22px] font-garet font-bold leading-[34px]">
                DOWNLOAD SCHEDULE
              </span>
            </button>
          </div> */}
        </div>

        <div className="w-full lg:w-8/12 mt-[32px] lg:mt-0">
          <div className="w-full grid grid-cols-1">
            
              {(lang === 'bn' ? scheduleItemsBangla : scheduleItems).map((item, index) => (
                <div
                  className="w-full min-h-[50px] h-full mb-[30px] flex justify-start items-start gap-5"
                  key={index}
                >
                  <div className="w-[250px] h-[28px]">
                    <span className="text-white text-[16px] leading-[28px]">
                      <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {item.time}</span>
                    </span>
                  </div>

                  <div className="w-[34px] h-full flex justify-center items-center relative z-0">
                    <div className="w-[34px] h-[34px] bg-white rounded-[34px] text-center absolute top-4 -translate-y-1/2 flex justify-center items-center z-20">
                      <span className="text-black text-[16px] leading-[25px]">
                        <span className={lang === 'bn' ? 'font-noto-sans' : 'font-mikado'}> {item.id}</span>
                      </span>
                    </div>
                    <div className="w-[2px] h-full bg-white opacity-50 z-10"></div>
                  </div>

                  <div className="w-full">
                    <div className="w-full">
                      <span className="text-white text-[18px] font-garet font-bold leading-[30px]">
                        <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}> {item.title}</span>
                      </span>
                    </div>

                    <div className="w-full mt-2">
                      {isClient && item.description ? (
                        <div
                          className={`text-white text-[15px] font-bold leading-[27px] ${
                            lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'
                          }`}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      ) : (
                        <div className="text-white text-[15px] font-i font-bold leading-[27px]">
                          {/* Optional fallback text or loader */}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              ))}

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSchedule;
