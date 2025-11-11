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
  const orders = [
    {
      id: 1,
      date: "2025-09-18",
      orderId: "ORD12345",
      receiver: "Minar Ahmed",
      payment: "Paid",
      status: "Delivered",
      infoChange: "Edit",
    },
    {
      id: 2,
      date: "2025-09-17",
      orderId: "ORD67890",
      receiver: "John Doe",
      payment: "Pending",
      status: "In Transit",
      infoChange: "Update",
    },
  ];
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
                    <div className="overflow-x-auto mt-4">
                      <table className="min-w-full divide-y divide-gray-200 border border-[#d5d5d5] rounded-lg shadow-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.sl}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.orderdate}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.orderid}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.receiverInfo}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.payInfo}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.deliveryStatus}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                              {dictionary.orderList.infoChange}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {orders.map((order, index) => (
                            <tr
                              key={order.id}
                              className="hover:bg-gray-50 transition-colors duration-200"
                            >
                              <td className="px-4 py-3 text-sm text-gray-600">
                                {index + 1}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">{order.orderId}</td>
                              <td className="px-4 py-3 text-sm text-gray-600">
                                {order.receiver}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600">
                                {order.payment}
                              </td>
                              <td className="px-4 py-3 text-sm font-medium text-green-600">
                                {order.status}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <button className="text-blue-600 hover:underline">
                                  {order.infoChange}
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        </main>
    </Layout>
  );
};

export default Bannar;
