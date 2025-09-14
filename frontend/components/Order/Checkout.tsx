"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ for active link
import { type getDictionary } from "@/get-dictionary";
import { Menu, X } from "lucide-react";

interface Props {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const Bannar = ({ lang, dictionary }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // ✅ detect current route

  const menuItems = [
    { label: "Dashboard", href: "#" },
    { label: "New Orders", href: "/add-order-category" },
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                className={`block px-3 py-2 rounded-lg ${
                  isActive
                    ? "bg-gray-200 text-gray-900 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content (Header + Page) */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white shadow-lg h-16  px-6 lg:px-16">
          {/* Mobile menu button */}
          <div className="flex justify-end items-center mt-4">
            <button
              className="mr-4 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-bold hidden lg:block text-gray-900 flex justify-end">
                Name
              </h1>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-6 pb-12 lg:px-16 pt-[32px] overflow-y-auto ">
              <div className="">
                {/* Left side */}
                <div className="flex flex-1 flex-col justify-center px-6 pb-12 lg:px-16 ">
                  <div className="mx-auto w-full max-w-sm bg-[#fff] drop-shadow-md p-[20px] rounded-[8px]">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.checkout.title}</span>
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
      </div>
    </div>
  );
};

export default Bannar;
