"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { label: "Dashboard", href: "/user-dashboard" },
  { label: "New Orders", href: "/add-order-category" },
  { label: "Order List", href: "/order-list" },
  { label: "Tracking", href: "/profile" },
  { label: "Settings", href: "/settings" },
];

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname() ?? "";

  // Normalize paths (remove trailing slashes)
  const normalize = (p: string) => p.replace(/\/+$/, "");
  const current = normalize(pathname);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, i) => {
            const href = normalize(item.href);

            // robust active check:
            const isActive =
              current === href || // exact match
              current.startsWith(href + "/") || // nested route (e.g. /user-dashboard/settings)
              current.endsWith(href); // covers prefixed locales like /en/user-dashboard

            return (
              <Link
                key={i}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`block px-3 py-2 rounded-lg transition flex items-center gap-2 ${
                  isActive
                    ? "bg-[#f97075] text-white font-semibold border-l-4 border-[#b3181b] pl-3"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <header className="sticky top-0 z-40 bg-white shadow-lg h-16 flex justify-end items-center px-6 lg:px-16">
          <button className="mr-4 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex justify-start gap-2 items-center">
            <p className="text-[14px] font-mikado-regular font-bold text-gray-900 cursor-pointer">
              Name
            </p>
            <ChevronDown className="text-gray-700 w-4" />
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
