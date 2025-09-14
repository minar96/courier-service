"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { type getDictionary } from "@/get-dictionary";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const OrderForm = ({ lang, dictionary }: Props) => {
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex min-h-screen">
        {/* Left side */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-12 lg:px-16">
          <div className="mx-auto w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.title}</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
             <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.subTitle}</span>{" "}
            </p>

            <form action="#" method="POST" className="mt-8 space-y-6">
              <div className="flex justify-start gap-4">
                <div className="w-full">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.yourAddress}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder={dictionary.orderForm.yourAddressPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.weight}<span className="text-[#ff0000]">*</span></span>
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      placeholder={dictionary.orderForm.weightPlaceholder}
                      required
                      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                    />
                </div>
              </div>
              <h5 className="text-[28px]">
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.orderForm.customerTitle}</span>
              </h5>
              <div className="flex justify-start gap-4">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.customerEmail}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={dictionary.orderForm.customerEmailPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.customerName}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder={dictionary.orderForm.customerNamePlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.customerPhone}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={dictionary.orderForm.customerPhonePlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.customerEmail}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={dictionary.orderForm.customerEmailPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-start gap-4">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.country}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={dictionary.orderForm.countryPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.city}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder={dictionary.orderForm.cityPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.suburn}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={dictionary.orderForm.suburnPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.detailsAddress}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={dictionary.orderForm.detailsAddressPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
               <h5 className="text-[28px]">
                <span className={lang === 'bn' ? 'font-noto-sans-medium' : 'font-mikado-medium'}>{dictionary.orderForm.productTitle}</span>
              </h5>
              <div className="flex justify-start gap-4">
                <div className="w-full">
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.product}<span className="text-[#ff0000]">*</span></span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder={dictionary.orderForm.productPlaceholder}
                    required
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                  />
                </div>
                <div className="w-full">
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.collection}<span className="text-[#ff0000]">*</span></span>
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="date"
                      placeholder={dictionary.orderForm.weightPlaceholder}
                      required
                      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                    />
                </div>
                <div className="w-full"></div>
              </div>
             
              

              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
               <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.button}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;
