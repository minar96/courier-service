"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ for active link
import { type getDictionary } from "@/get-dictionary";
import { Menu, X } from "lucide-react";
import Layout from "@/components/User/Layout";
interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const Bannar = ({ lang, dictionary }: Props) => {
  
  return (
    <Layout>
        {/* Page Content */}
        <main className="flex-1 px-6 pb-12 lg:px-16 pt-[32px] overflow-y-auto ">
              <div className="">
                {/* Left side */}
                <div className="flex flex-1 flex-col justify-center px-6 pb-12 lg:px-16 ">
                  <div className="mx-auto w-full max-w-sm bg-[#fff] drop-shadow-md p-[20px] rounded-[8px]">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Dashboard{dictionary.checkout.title}</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.subTitle}</span>{" "}
                    </p>
                    <div className="mt-[44px]">
                      <div className="flex justify-between">
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.name}</span>
                        </p>
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Minar Ahmed</span>
                        </p>
                      </div>
                      <div className="flex justify-between mt-[16px]">
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.email}</span>
                        </p>
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>minar.barc@gmail.com</span>
                        </p>
                      </div>
                      <div className="flex justify-between mt-[16px]">
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.address}</span>
                        </p>
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Uttara, Dhaka</span>
                        </p>
                      </div>
                      <div className="flex justify-between mt-[16px]">
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.weight}</span>
                        </p>
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>5kg</span>
                        </p>
                      </div>
                      <div className="flex justify-between mt-[16px]">
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.shiping}</span>
                        </p>
                        <p className="text-[16px]">
                          <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>200TK</span>
                        </p>
                      </div>
                      <div className="mt-[18px] w-full flex justify-center">
                        <Link
                          href="/forgot-password"
                          className="w-full text-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.button}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </main>
    </Layout>
  );
};

export default Bannar;
