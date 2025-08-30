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
                    <h1 className="text-[#464646] font-mikado text-[36px] 2xl:text-[44px] xl:text-[44px] lg:text-[44px] md:text-[44px] leading-[59.8px] 2xl:leading-[70.2px] xl:leading-[70.2px] lg:leading-[70.2px] md:leading-[70.2px] tracking-[-1px]">Terms and Conditions (শর্তাবলী)</h1>
                    <p className="text-[#434343] text-[16px] 2xl:text-[24px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular leading-[36px] mb-12 mt-[18px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                        Kiddoz-এ আপনার কোর্স এবং সেবা ব্যবহারের জন্য নিম্নলিখিত শর্তাবলী প্রযোজ্য। আমাদের সেবা ব্যবহারের মাধ্যমে, আপনি এই শর্তাবলী মেনে চলতে সম্মত হন।যদি আপনি এই শর্তাবলী সম্মত না হন, তবে দয়া করে আমাদের সেবা ব্যবহার করবেন না।
                    </p>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">১. কোর্স এনরোলমেন্ট (ভর্তি)</h1>
                   
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            আপনি যদি Kiddoz-এর কোর্সে ভর্তি হন, তবে আপনাকে যথাযথ তথ্য প্রদান করতে হবে, যা সঠিক এবং আপডেট হওয়া উচিত।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            কোর্সের ভর্তি প্রক্রিয়া সম্পন্ন হওয়ার পর, আপনি আপনার একাউন্টে লগইন করে কোর্সের সামগ্রী অ্যাক্সেস করতে পারবেন।
                        </span>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">২. কোর্স ফি এবং পেমেন্ট</h1>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            কোর্স ফি সম্পূর্ণরূপে বা কিস্তিতে পরিশোধ করা যাবে, তবে প্রতিটি পেমেন্ট সফলভাবে সম্পন্ন হওয়া সাপেক্ষে কোর্সে ভর্তি প্রক্রিয়া পূর্ণ হবে।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            Kiddoz-এর কোনো কোর্সের জন্য প্রযোজ্য ডিসকাউন্ট, অফার বা বিশেষ মূল্য কেবল নির্দিষ্ট সময়কাল পর্যন্ত প্রযোজ্য হবে।
                        </span>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">৩. রিফান্ড নীতি (Refund Policy)</h1>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            রিফান্ডের জন্য শর্তাবলী অনুযায়ী আবেদন করা যাবে, তবে আবেদনটি নির্দিষ্ট সময়সীমার মধ্যে করতে হবে।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            রিফান্ডের জন্য আবেদন করার সময়সীমা পেরিয়ে গেলে বা যদি কোর্সের প্রথম মডিউল (অথবা এক (১) সপ্তাহ) শেষ হয়ে যায়, তবে রিফান্ড দেওয়া হবে না।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            রিফান্ড পাওয়ার শর্তসমূহ এবং আবেদন প্রক্রিয়া আমাদের Refund Policy অনুযায়ী সম্পন্ন হবে।
                        </span>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">৪. কপিরাইট এবং বৌদ্ধিক সম্পত্তি</h1>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            Kiddoz  সমস্ত কোর্স সামগ্রী, ভিডিও, গ্রাফিক্স, টেক্সট এবং অন্যান্য কন্টেন্টের কপিরাইটের মালিক।
                        </span>
                    </div>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            আপনি কোর্সের সামগ্রী শুধুমাত্র ব্যক্তিগত ব্যবহারের জন্য ব্যবহার করতে পারবেন। অন্য কোনো উদ্দেশ্যে পুনঃপ্রকাশ বা বিতরণ করা কঠোরভাবে নিষিদ্ধ।
                        </span>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <h1 className="text-[#464646] font-bold  font-mikado text-[18px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] leading-[59.8px] 2xl:leading-[53px] xl:leading-[53px] lg:leading-[53px] md:leading-[53px] tracking-[-1px]">৯. আইন এবং বিচারাধীনতা</h1>
                    <div className="flex justify-start gap-3">
                        <span className="mt-2"><FaCircle size={12} className="text-[#888]"/></span>
                         <span className="text-[#595959] text-[16px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] font-mikado-regular">
                            এই শর্তাবলী বাংলাদেশের আইন অনুযায়ী পরিচালিত হবে এবং কোনো বিরোধের ক্ষেত্রে বাংলাদেশী আদালত একমাত্র বিচারিক কর্তৃপক্ষ হিসেবে কাজ করবে।
                        </span>
                    </div>
                </div>                
            </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Body;