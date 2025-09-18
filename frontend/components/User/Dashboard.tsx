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
                     <p className="mt-2 text-[24px] text-gray-600 font-[600]">
                      <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.title}</span>{" "}
                    </p>
                     <div className="mt-[18px] max-w-sm w-full flex justify-center ">
                        <Link
                          href="/add-order"
                          className="w-full text-center rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                        <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.order}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-between gap-3 mt-[24px]">
                      <div className="bg-[#f7d5ac] h-[144px] w-full flex justify-center items-center rounded-[4px]">
                          <div>
                            <p className="mt-0 text-sm text-gray-600 text-center text-[16px] font-[500]">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>0</span>{" "}
                            </p>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500]">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.count}</span>{" "}
                            </p>
                          </div>
                      </div>
                      <div className="bg-[#f7d5ac] h-[144px] w-full flex justify-center items-center rounded-[4px]">
                          <div>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500] text-center">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>0</span>{" "}
                            </p>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500]">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.shipment}</span>{" "}
                            </p>
                          </div>
                      </div>
                      <div className="bg-[#f7d5ac] h-[144px] w-full flex justify-center items-center rounded-[4px]">
                          <div>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500] text-center">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>0</span>{" "}
                            </p>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500]">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.receiver}</span>{" "}
                            </p>
                          </div>
                      </div>
                      <div className="bg-[#f7d5ac] h-[144px] w-full flex justify-center items-center rounded-[4px]">
                          <div>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500] text-center">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>0</span>{" "}
                            </p>
                            <p className="mt-0 text-sm text-gray-600 text-[16px] font-[500]">
                              <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.return}</span>{" "}
                            </p>
                          </div>
                      </div>
                    </div>
                    <div className="mt-[24px] bg-[#d5d5d5] py-2 rounded-[4px] flex justify-center items-center">
                         <p className="text-sm text-gray-600 text-[16px] font-[500] m-0">
                            <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.manager}</span>{" "}
                          </p>
                    </div>
                    <div className="flex justify-between mt-[32px]">
                          <div className="flex justify-start items-center gap-3">
                              <p>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="62" height="61" viewBox="0 0 62 61" fill="none">
                                    <g clip-path="url(#clip0_9_2)">
                                      <path d="M31.003 57.5847L43.2854 54.5331C50.2962 48.8055 54.7616 40.1664 54.7616 30.5001C54.7616 15.5904 44.1404 3.12149 29.9359 0.0177536C13.3078 0.569494 0 14.0057 0 30.5C0 38.9723 3.51172 46.6371 9.18036 52.1641L31.003 57.5847Z" fill="#CBE2FF"/>
                                      <path d="M54.1185 30.5C54.1185 40.4977 49.2286 49.3708 41.6743 54.9332L52.8187 52.1643C58.4877 46.6374 62 38.9726 62 30.5C62 13.6553 48.1208 0 31 0C29.6651 0 28.3497 0.0831602 27.0592 0.244238C42.3193 2.14906 54.1185 14.9688 54.1185 30.5Z" fill="#BED8FB"/>
                                      <path d="M38.7041 11.5509C38.7041 9.99316 37.4206 8.73038 35.8373 8.73038H25.9583C22.3144 8.73038 19.3605 11.6367 19.3605 15.2218V22.4289H42.6358V15.324C42.6358 13.7662 41.3523 12.5034 39.769 12.5034H39.6724C39.5452 12.5035 39.4193 12.4788 39.3018 12.431C39.1844 12.3831 39.0776 12.313 38.9877 12.2245C38.8978 12.1361 38.8265 12.031 38.7778 11.9155C38.7292 11.7999 38.7041 11.676 38.7041 11.5509Z" fill="#365E7D"/>
                                      <path d="M39.769 12.5035H39.6724C39.4156 12.5035 39.1693 12.4031 38.9877 12.2244C38.8061 12.0458 38.7041 11.8035 38.7041 11.5508C38.7041 9.99304 37.4206 8.73027 35.8373 8.73027H34.7542V22.4288H42.6357V15.3239C42.6358 13.7663 41.3522 12.5035 39.769 12.5035Z" fill="#2B4D66"/>
                                      <path d="M51.4703 44.3626C50.6953 43.6093 49.7494 43.048 48.7106 42.725L40.2472 40.0887L31.0019 39.769L21.7528 40.0887L13.2894 42.725C10.4263 43.6169 8.48044 46.2311 8.48044 49.1859V51.4608C13.9041 57.0995 21.4921 60.7023 29.9362 60.9825C39.397 58.915 47.2682 52.6932 51.4703 44.3626Z" fill="#4A80AA"/>
                                      <path d="M53.5195 51.4606V49.1858C53.5195 47.0965 52.546 45.1785 50.9639 43.9182C46.47 52.9283 37.5925 59.4384 27.0665 60.7548C28.3528 60.9155 29.648 60.9973 30.9446 60.9999C32.1919 60.9983 33.4381 60.9274 34.6772 60.7876C42.0677 59.9283 48.6618 56.5111 53.5195 51.4606Z" fill="#407093"/>
                                      <path d="M31.7019 60.5434C33.5775 56.8798 38.4616 46.4769 37.0689 39.9787L31.0019 37.6556L24.9293 39.9788C23.4937 46.6775 28.728 57.5255 30.461 60.863C30.8768 60.7648 31.2905 60.6583 31.7019 60.5434Z" fill="#E4F6FF"/>
                                      <path d="M34.8989 57.6389L32.439 48.1176H29.5609L27.1071 57.613L30.1415 60.9366C30.9081 60.7638 31.6679 60.5629 32.4192 60.3341L34.8989 57.6389Z" fill="#E28086"/>
                                      <path d="M30.1889 60.9887C30.4402 60.9951 30.6919 60.9995 30.9446 61C31.2371 60.9995 31.5286 60.9945 31.8192 60.9865L33.3821 59.2877C32.1424 59.7157 30.876 60.065 29.5908 60.3336L30.1889 60.9887Z" fill="#DD636E"/>
                                      <path d="M36.1797 39.0999V33.7307H25.8165V39.0999C25.8165 41.9155 30.9981 44.991 30.9981 44.991C30.9981 44.991 36.1797 41.9155 36.1797 39.0999Z" fill="#FFDDCE"/>
                                      <path d="M42.6358 21.4832H40.6548C39.5531 21.4832 38.66 20.6045 38.66 19.5206V18.4465C38.66 17.0346 37.256 16.0363 35.8934 16.4794C32.7156 17.5128 29.2842 17.5131 26.1062 16.4801L26.1025 16.4789C24.7399 16.0361 23.3361 17.0344 23.3361 18.4462V19.5207C23.3361 20.6047 22.443 21.4833 21.3413 21.4833H19.3605V24.6927C19.3605 25.5128 20.0362 26.1777 20.8698 26.1777C21.1328 26.1777 21.3468 26.3804 21.3634 26.6387C21.6816 31.603 25.8723 35.533 30.9982 35.533C36.1241 35.533 40.3148 31.603 40.633 26.6387C40.6496 26.3805 40.8636 26.1777 41.1266 26.1777C41.9601 26.1777 42.6359 25.5129 42.6359 24.6927V21.4832H42.6358Z" fill="#FFDDCE"/>
                                      <path d="M40.6548 21.4832C39.5531 21.4832 38.66 20.6045 38.66 19.5206V18.4465C38.66 17.0346 37.2559 16.0363 35.8934 16.4794C35.518 16.6011 35.138 16.7087 34.7543 16.8019V27.4021C34.7012 30.851 32.7804 33.8526 29.9438 35.4748C30.2939 35.5129 30.6458 35.5322 30.9981 35.5327C36.124 35.5327 40.3147 31.6028 40.6329 26.6384C40.6495 26.3802 40.8634 26.1775 41.1265 26.1775C41.9599 26.1775 42.6358 25.5127 42.6358 24.6925V21.4831L40.6548 21.4832Z" fill="#FFCBBE"/>
                                      <path d="M25.8165 37.6556L21.7528 40.9042L26.0143 46.0884C26.2646 46.3281 26.5963 46.468 26.9453 46.4811C27.2944 46.4941 27.6359 46.3794 27.904 46.1591L31.1088 43.5253L25.8165 37.6556ZM36.1816 37.6556L31.1088 43.5253L34.1208 46.0592C34.3872 46.2832 34.7287 46.4018 35.079 46.3918C35.4293 46.3818 35.7633 46.244 36.0161 46.0052L40.2471 40.9042L36.1816 37.6556Z" fill="#F4FBFF"/>
                                      <path d="M25.8165 37.6556L19.8519 40.5387C19.744 40.5908 19.6479 40.6635 19.5689 40.7527C19.49 40.8418 19.43 40.9455 19.3923 41.0578C19.3547 41.17 19.3401 41.2885 19.3495 41.4063C19.359 41.5242 19.3922 41.639 19.4473 41.744L20.6158 43.9731C20.7634 44.2546 20.8162 44.5749 20.7665 44.8878C20.7169 45.2008 20.5673 45.49 20.3395 45.7138C20.0971 45.9518 19.8548 46.1898 19.6125 46.4278C19.2083 46.8248 19.0631 47.4113 19.2411 47.9453C20.6519 52.1768 27.4421 58.6474 30.0119 60.9886C30.1847 60.9931 30.3578 60.9962 30.5314 60.9981C28.6679 57.4319 22.0642 43.8829 25.8165 37.6556ZM41.6585 45.7137C41.4307 45.4899 41.2812 45.2006 41.2315 44.8877C41.1818 44.5748 41.2346 44.2545 41.3822 43.973L42.5508 41.7439C42.6058 41.6388 42.6391 41.524 42.6485 41.4062C42.6579 41.2884 42.6434 41.1699 42.6057 41.0576C42.5681 40.9454 42.508 40.8417 42.4291 40.7525C42.3502 40.6634 42.254 40.5907 42.1462 40.5385L36.1816 37.6556C39.9328 43.8813 33.3338 57.4245 31.4683 60.9952C31.6436 60.9922 31.8186 60.988 31.9932 60.9822C34.5683 58.6358 41.3475 52.173 42.757 47.9454C42.935 47.4114 42.7898 46.8249 42.3856 46.4279L41.6585 45.7137Z" fill="#365E7D"/>
                                      <path d="M31.1087 43.5253L27.953 46.1183L29.5609 48.1176H32.439L34.047 46.0003L31.1087 43.5253Z" fill="#DD636E"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_9_2">
                                        <rect width="62" height="61" fill="white"/>
                                      </clipPath>
                                    </defs>
                                  </svg> 
                              </p>
                              <div>
                                <p className="text-sm text-gray-600 text-[16px] font-[500] m-0">
                                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>Al Mamun</span>{" "}
                                </p>
                                <p className="text-sm text-gray-600 text-[16px] font-[500] m-0">
                                  <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>01300152150</span>{" "}
                                </p>
                              </div>
                          </div>
                          <div className="flex justify-start items-center gap-3">
                            <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 39 36" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9466 33.2463C31.3149 34.7682 27.5031 34.7196 23.3497 33.3364C19.3327 31.9985 14.9704 29.4105 11.0545 25.7958C7.1386 22.1811 4.33494 18.1545 2.88562 14.4465C1.38709 10.6125 1.33453 7.0939 2.9832 4.66467L3.06653 4.56356L5.5041 2.31349C6.00562 1.85063 6.66603 1.61909 7.32583 1.61909C7.98571 1.61909 8.64604 1.85056 9.14756 2.31349L15.1167 7.82346C15.6182 8.2864 15.869 8.89601 15.869 9.50506C15.869 10.1142 15.6182 10.7237 15.1168 11.1866L12.741 13.3798C12.3302 14.1566 12.4479 15.3164 13.0076 16.6217C13.6124 18.0319 14.7283 19.5771 16.2599 20.9909C17.7915 22.4047 19.4653 23.4347 20.993 23.9929C22.4072 24.5097 23.6636 24.6182 24.5053 24.2392L26.8811 22.0461C27.3826 21.5833 28.0429 21.3517 28.7028 21.3517C29.3627 21.3517 30.023 21.5832 30.5245 22.0461L36.4936 27.5561C36.9952 28.019 37.2459 28.6286 37.2459 29.2378C37.2459 29.8469 36.9952 30.4564 36.4936 30.9194L34.0561 33.1694L33.9466 33.2463Z" fill="#FD4755"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.3161 3.41009L5.504 2.31356C6.00552 1.85069 6.66593 1.61916 7.32573 1.61916C7.98561 1.61916 8.64594 1.85062 9.14745 2.31356L15.1166 7.82353C15.6181 8.28647 15.8689 8.89608 15.8689 9.50513C15.8689 10.1142 15.6181 10.7238 15.1167 11.1867L12.7409 13.3798C12.3301 14.1567 12.4478 15.3165 13.0075 16.6218C13.6123 18.032 14.7282 19.5772 16.2598 20.991C17.7914 22.4047 19.4652 23.4347 20.9929 23.993C22.4071 24.5097 23.6635 24.6183 24.5051 24.2393L23.3172 25.3358C22.4756 25.7149 21.2192 25.6063 19.805 25.0895C18.2773 24.5313 16.6034 23.5012 15.0718 22.0875C13.5402 20.6737 12.4244 19.1285 11.8196 17.7183C11.2598 16.413 11.1422 15.2532 11.5529 14.4764L13.9287 12.2832C14.4301 11.8204 14.6809 11.2108 14.6809 10.6016C14.6809 9.99253 14.4301 9.38299 13.9286 8.92005L7.95948 3.41009C7.45796 2.94722 6.79763 2.71568 6.13775 2.71568C5.47803 2.71568 4.81762 2.94722 4.3161 3.41009ZM25.6939 23.1419L26.881 22.0461C27.3825 21.5833 28.0428 21.3517 28.7027 21.3517C29.3626 21.3517 30.0229 21.5832 30.5244 22.0461L36.4935 27.5561C36.9951 28.019 37.2458 28.6286 37.2458 29.2378C37.2458 29.8469 36.9951 30.4564 36.4935 30.9194L35.3056 32.0159C35.8072 31.5529 36.0579 30.9434 36.0579 30.3343C36.0579 29.7252 35.8072 29.1156 35.3056 28.6526L29.3365 23.1427C28.835 22.6798 28.1747 22.4483 27.5148 22.4483C26.8554 22.4483 26.1953 22.6795 25.6939 23.1419Z" fill="#E4404D"/>
                              </svg>
                            </p>
                             <p className="text-sm text-red-600 text-[16px] font-[500] m-0">
                                <span className={lang === 'bn' ? 'font-noto-sans-regular' : 'font-mikado-regular'}>{dictionary.userDashboard.call}</span>{" "}
                              </p>
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
