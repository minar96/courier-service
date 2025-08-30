"use client";

import { useState } from "react";
import Image from "next/image";

import { Icon, Wrapper } from "../UI";
import { FaPlus, FaMinus } from "react-icons/fa";
import summercampData from "@/libs/data//summercamp.json";


export default function homeActivity() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className="w-full pt-[44px] lg:pt-[120px] pb-[22px] lg:pb-[65px] !px-5 lg:!px-0 ">
      <div className="w-full">
        <h2 className="text-royal-blue text-[24px] lg:text-[48px] font-peace-sans leading-[30px] lg:leading-[58px]">
          Activity Descriptions
        </h2>
      </div>
      <div className="w-full mt-[59px] grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[128px]">
        <div className="w-full mxa-w-[598px]">
            <div className="max-w-2xl mx-auto bg-transparent rounded-lg shadow divide-y divide-gray-300">
                {summercampData.map((item, index) => (
                  <div key={item.id}>
                    <div
                      className="flex items-center justify-between px-4 py-5 cursor-pointer hover:bg-[#f7ebdd] transition"
                      onClick={() => toggle(index)}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-medium text-gray-800 w-6 text-[28px]">{`0${item.id}`}</span>
                        <span className="text-md font-semibold text-gray-700 ms-[12px] mt-[2px]">
                          {item.title}
                        </span>
                      </div>
                      <div className="text-gray-500">
                        {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                      </div>
                    </div>

                    {/* Accordion Body */}
                    {openIndex === index && (
                      <div
                        className="px-10 pb-6 text-gray-700 text-sm space-y-3"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                ))}
              </div>
        </div>
        <div className="w-full mt-[32] lg:mt-0 flex justify-center items-center">
          <div className="w-full mxa-w-[496px] h-[349px] rounded-[18px] flex-shrink-0 overflow-hidden">
            <Image
              src="/assets/img/home/activity.png"
              alt="Description"
              width={496}
              height={349}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
    
  );
}
