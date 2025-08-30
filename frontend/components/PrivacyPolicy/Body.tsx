"use client";

import React from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaCircle } from "react-icons/fa";
const Body = () => {
  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex justify-start items-center my-[44px] 2xl:my-[120px] xl:my-[120px] lg:my-[120px] md:my-[120px]">
        <div className="w-full grid grid-cols-1 px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
            <div className="w-full">
                <div className="w-full">
                    <h1 className="text-[#464646] font-mikado text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[59.8px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[-1px]">Privacy Policy</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[24px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-12 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        Kiddoz-এ আমরা আপনার গোপনীয়তার প্রতি সম্মান জানাই এবং এটি সুরক্ষিত রাখতে আমাদের যথাসাধ্য চেষ্টা করি। আমাদের প্ল্যাটফর্ম ব্যবহার করার মাধ্যমে, আপনি এই গোপনীয়তা নীতির শর্তাবলী মেনে চলতে সম্মত হন। এই নীতির মাধ্যমে আমরা জানাই কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, সুরক্ষা এবং শেয়ার করা হয়।
                    </p>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">১. আমাদের দ্বারা সংগ্রহ করা তথ্য</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-3 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        আমরা বিভিন্ন ধরনের তথ্য সংগ্রহ করতে পারি, যেমন:
                    </p>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            ব্যক্তিগত তথ্য: নাম, ইমেইল ঠিকানা, ফোন নম্বর, অ্যাড্রেস, পেমেন্ট তথ্য ইত্যাদি।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            ব্যবহার তথ্য: আপনার প্ল্যাটফর্মে লগইন, কোর্স ক্রয়, এবং অন্যান্য কার্যক্রমের সংক্রান্ত তথ্য।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            টেকনিক্যাল তথ্য: ব্রাউজারের তথ্য, আইপি অ্যাড্রেস, কুকি ব্যবহার ইত্যাদি।
                        </span>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">২. তথ্য ব্যবহার</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-3 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        আমরা আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:
                    </p>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            কোর্স পরিষেবা প্রদান এবং আপনার একাউন্ট পরিচালনা।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            গ্রাহক সেবা এবং সহায়তা প্রদান।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            ওয়েবসাইটের উন্নয়ন এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করা।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            প্রচারণা, অফার এবং অন্যান্য বিজ্ঞাপন পাঠানো (যদি আপনি এই ধরনের যোগাযোগে সম্মত হয়ে থাকেন)।
                        </span>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">৩. তথ্য সুরক্ষা</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-3 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে শীর্ষস্থানীয় নিরাপত্তা ব্যবস্থা ব্যবহার করি। তবে, ইন্টারনেটের মাধ্যমে তথ্য প্রেরণ ১০০% নিরাপদ বলে নিশ্চিত করা সম্ভব নয়, এবং তাই আমরা সম্পূর্ণ নিরাপত্তা নিশ্চিত করতে পারি না।
                    </p>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">৪. তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-3 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না, তবে কিছু বিশেষ ক্ষেত্রে (যেমন সরকারি নির্দেশনা, আইনি প্রয়োজনীয়তা বা জরুরি পরিস্থিতি) তৃতীয় পক্ষের সাথে তথ্য শেয়ার করা হতে পারে।
                    </p>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">৫. নীতি পরিবর্তন</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-3 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        আমরা সময়ের সাথে সাথে এই গোপনীয়তা নীতিতে পরিবর্তন করতে পারি। কোনো পরিবর্তন হলে তা আমাদের ওয়েবসাইটে প্রকাশ করা হবে এবং আপনি এতে সম্মত হবেন।
                    </p>
                </div>
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Body;