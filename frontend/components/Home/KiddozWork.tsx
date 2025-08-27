"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { type getDictionary } from "@/get-dictionary";
interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}
const KiddozWork = ({ lang, dictionary }: Props) => {
  return (
        <Wrapper className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px] px-5 2xl:px-0 xl:px-0 lg:px-6 md:px-0">
          <div className="w-full relative">
              <h2 className="text-[#4C4C4C] text-[36px] font-[900] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] leading-[62px] text-center text-lg max-w-2xl capitalize mx-auto">
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-medium'}>{dictionary.KiddozWork.title}</span>
              </h2>
              <p className="text-[#252525] text-[20px] 2xl:text-[24px] xl:text-[20px] lg:text-[20px] md:text-[20px] leading-[30px] mx-auto text-center">
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.KiddozWork.subTitle}</span>
                  
              </p>
          </div>
          <div className="hidden 2xl:hidden xl:hidden lg:hidden md:hidden">
            <div className="w-full  grid grid-cols-1 lg:grid-cols-4 gap-8 mt-[32px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px]">
                <ScrollFadeIn>
                  <div className="bg-[#3A5DC4] rounded-[12px] p-5 h-[300px]">
                      <div className="text-center flex justify-center mt-[22px]">
                        <Icon name="pick-a-program" color="black" size="40" />
                      </div>
                      <h3 className="text-[#FFF] text-[28px] font-mikado leading-[45px] text-center mt-[10]">Pick a Program</h3>
                      <p className="text-[#FFF] text-[20px] font-mikado-regular leading-[30px] text-center mt-[12]">Choose what sparks your child's interest</p>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <div className="bg-[#EF3220] rounded-[12px] p-5 h-[300px]">
                      <div className="text-center flex justify-center mt-[22px]">
                        <Icon name="start-exploring" color="black" size="40" />
                      </div>
                      <h3 className="text-[#FFF] text-[28px] font-mikado leading-[45px] text-center mt-[10]">Start Exploring</h3>
                      <p className="text-[#FFF] text-[20px] font-mikado-regular leading-[30px] text-center mt-[12]">Weekly hands-on sessions, led by trained mentors</p>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <div className="bg-[#51B59F] rounded-[12px] p-5 h-[300px]">
                      <div className="text-center flex justify-center mt-[22px]">
                        <Icon name="celebrate-growth" color="black" size="40" />
                      </div>
                      <h3 className="text-[#FFF] text-[28px] font-mikado leading-[45px] text-center mt-[10]">Celebrate Growth</h3>
                      <p className="text-[#FFF] text-[20px] font-mikado-regular leading-[30px] text-center mt-[12]">Each program ends with a showcase, fair, or challenge</p>
                  </div>
                </ScrollFadeIn>
                <ScrollFadeIn>
                  <div className="bg-[#FF9039] rounded-[12px] p-5 h-[300px]">
                      <div className="text-center flex justify-center mt-[22px]">
                        <Icon name="take-home-skills" color="black" size="40" />
                      </div>
                      <h3 className="text-[#FFF] text-[28px] font-mikado leading-[45px] text-center mt-[10]">Take Home Skills</h3>
                      <p className="text-[#FFF] text-[20px] font-mikado-regular leading-[30px] text-center mt-[12]">Kids leave with more confidence, creativity & life-ready tools</p>
                  </div>
                </ScrollFadeIn>
            </div>
          </div>
          <div className="hidden 2xl:block xl:block lg:block md:block">
            <div className="w-full grid grid-cols-1 mt-[32px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px]">
                <div className="relative">
                  <Image
                        src={dictionary.KiddozWork.railLineImg}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-full"
                    />
                    <div className="absolute top-[-6%] 2xl:top-[-6%] xl:top-[-6%] lg:top-[-9%] md:top-[-11%] left-[5%]">
                      <Image
                        src={dictionary.KiddozWork.part1}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px] 2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[180px]"
                      />
                    </div>
                    <div className="absolute top-[15%] 2xl:top-[15%] xl:top-[15%] lg:top-[13%] md:top-[15%] left-[21%] 2xl:left-[21%] xl:left-[21%] lg:left-[23%] md:left-[23%]">
                      <Image
                        src={dictionary.KiddozWork.part2}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px] 2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[180px]"
                      />
                    </div>
                    <div className="absolute top-[55%] 2xl:top-[55%] xl:top-[55%] lg:top-[50%] md:top-[50%] left-[35%] 2xl:left-[35%] xl:left-[35%] lg:left-[33%] md:left-[33%]">
                      <Image
                        src={dictionary.KiddozWork.part3}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px] 2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[180px]"
                      />
                    </div>
                    <div className="absolute top-[52%] 2xl:top-[52%] xl:top-[52%] lg:top-[50%] md:top-[50%] left-[56%]">
                      <Image
                        src={dictionary.KiddozWork.part4}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px] 2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[180px]"
                      />
                    </div>
                    <div className="absolute top-[-7%] 2xl:top-[-7%] xl:top-[-7%] lg:top-[-11%] md:top-[-7%] left-[52%] 2xl:left-[52%] xl:left-[52%] lg:left-[51%] md:left-[51%]">
                      <Image
                        src={dictionary.KiddozWork.part5}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px] 2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[180px]"
                      />
                    </div>
                    <div className="absolute top-[-6%] left-[84%]">
                      <Image
                        src={dictionary.KiddozWork.part6}
                        alt="Description"
                        width={100}
                        height={100}
                        className="w-[200px]"
                      />
                    </div>
                </div>
            </div>
          </div>
           <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden">
             <div className="w-full grid grid-cols-1 mt-[32px] 2xl:mt-[80px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px]">
                <div className="mt-[0px]">
                    <Image
                          src={dictionary.KiddozWork.part1bangla}
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-[60%] mx-auto"
                    />
                </div>
                <div className="mt-[0px]">
                    <Image
                          src={dictionary.KiddozWork.part2bangla}
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-[60%] mx-auto"
                    />
                </div>
                <div className="mt-[0px]">
                    <Image
                          src={dictionary.KiddozWork.part3bangla}
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-[60%] mx-auto"
                    />
                </div>
                <div className="mt-[0px]">
                    <Image
                          src={dictionary.KiddozWork.part4bangla}
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-[60%] mx-auto"
                    />
                </div>
                <div className="mt-[0px]">
                    <Image
                          src={dictionary.KiddozWork.part5bangla}
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-[60%] mx-auto"
                    />
                </div>
                <div className="mt-[0px]">
                    <Image
                          src={dictionary.KiddozWork.part6bangla}
                          alt="Description"
                          width={100}
                          height={100}
                          className="w-[60%] mx-auto"
                    />
                </div>
             </div>
           </div>
        </Wrapper>
  );
};
export default KiddozWork;