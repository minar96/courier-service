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
          <div className="mx-auto w-full max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.orderForm.title}</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
             <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.nothave}</span>{" "}
              <Link
                href={`/${lang}/signup`}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.login}</span>
              </Link>
            </p>

            <form action="#" method="POST" className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-900"
                >
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.name}<span className="text-[#ff0000]">*</span></span>
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  placeholder={dictionary.signup.namePlaceholder}
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.mobile}<span className="text-[#ff0000]">*</span></span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={dictionary.signup.mobilePlaceholder}
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.password}<span className="text-[#ff0000]">*</span></span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.confirmPassword}<span className="text-[#ff0000]">*</span></span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
               <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.signup.button}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="relative hidden w-0 flex-1 lg:block mt-[20%]">
          <Image
                src="/assets/img/login/login-main.jpg"
                alt="Loading"
                width={400}
                height={250}
                className="w-full object-cover mx-auto rounded-3xl"
            />
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;
