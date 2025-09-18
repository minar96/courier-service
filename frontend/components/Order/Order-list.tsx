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
                  <div className="mx-auto w-full bg-[#fff] drop-shadow-md p-[20px] rounded-[8px]">
                    <div className="flex justify-between">
                     <p className="mt-2 text-[20px] text-gray-600 font-[600]">
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderList.title}</span>{" "}
                    </p>
                     {/* <div className="mt-[18px] max-w-sm w-full flex justify-center ">
                        <Link
                          href="/add-order"
                          className="w-full text-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.order}</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
        </main>
    </Layout>
  );
};

export default Bannar;
