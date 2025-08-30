"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon, Wrapper } from "../UI";
import ScrollFadeIn from "@/components/ScrollFadeIn";
interface FormData {
  email: string;
  password: string;
  user_name?: string;
  phone_number?: string;
  message?: string;
}

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    user_name: "",
    phone_number: "",
    message: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/store`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors",
        credentials: "include", // only if you use cookies/session auth
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ ${data.message || "Data Upload Successfully"}`);
      } else {
        setMessage(`❌ ${data.message || "Login failed"}`);
      }
    } catch (error) {
      setMessage("❌ Network error or server is not responding");
    }
  };

  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="mt-[44px] 2xl:mt-[120px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-6 md:px-6">
          <div className="w-full">
            {/* Contact Info */}
            <ScrollFadeIn>
            <div>
              <h5 className="text-[#353535] font-mikado-medium text-[28px] 2xl:text-[44px] leading-[42px] 2xl:leading-[70.2px] tracking-[-1px]">
                Contact Us
              </h5>
              <p className="text-[#3A3A3A] font-mikado-medium text-[18px] 2xl:text-[20px] leading-[30px] 2xl:leading-[36px] mt-[18px]">
                Email Address
              </p>
              <p className="text-[#5E5E5E] font-mikado-regular text-[16px] 2xl:text-[18px] leading-[30px] 2xl:leading-[36px] mt-[12px]">
                Kiddoz@gmail.com
              </p>
            </div>

            <div className="mt-[29px]">
              <p className="text-[#3A3A3A] font-mikado-medium text-[18px] 2xl:text-[20px] leading-[30px] 2xl:leading-[36px] mt-[18px]">
                Phone Number
              </p>
              <p className="text-[#5E5E5E] font-mikado-regular text-[16px] 2xl:text-[18px] leading-[30px] 2xl:leading-[36px] mt-[12px]">
                01617-302013
              </p>
              {/* <p className="text-[#5E5E5E] font-mikado-regular text-[16px] 2xl:text-[18px] leading-[30px] 2xl:leading-[36px] mt-[12px]">
                01617-302011
              </p> */}
            </div>

            <div className="mt-[29px]">
              <p className="text-[#3A3A3A] font-mikado-medium text-[18px] 2xl:text-[20px] leading-[30px] 2xl:leading-[36px] mt-[18px]">
                Our Location
              </p>
              <p className="text-[#5E5E5E] font-mikado-regular max-w-sm text-[20px] 2xl:text-[24px] leading-[30px] 2xl:leading-[36px] mt-[12px]">
                Level-3, House: 14-16 Khan Tower
                <br />
                Sonargaon Janapath, Sector-11
                <br />
                Uttara, Dhaka 1230
              </p>
            </div>
            </ScrollFadeIn>
          </div>

          {/* Form */}
          <div className="w-full">
            <ScrollFadeIn>
              <div className="bg-[#3A5DC4] rounded-[8px] p-5 mt-[52px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
                <h5 className="font-mikado-medium text-white text-[29px] 2xl:text-[44px]">
                  Send a message
                </h5>

                <form onSubmit={handleSubmit} className="space-y-4 mt-[34px]">
                  <div>
                    <label className="font-mikado-regular text-white text-[20px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      onChange={handleChange}
                      className="w-full border-0 border-b border-white py-1 px-2 text-[20px] bg-transparent text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-mikado-regular text-white text-[20px]">
                      +880
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      onChange={handleChange}
                      className="w-full border-0 border-b border-white py-1 px-2 text-[20px] bg-transparent text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-mikado-regular text-white text-[20px]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      className="w-full border-0 border-b border-white py-1 px-2 text-[20px] bg-transparent text-white focus:outline-none"
                    />
                  </div>

                  <div className="text-end mt-[37px]">
                    <button
                      type="submit"
                      className="bg-white font-mikado-medium cursor-pointer text-[#3A5DC4] w-full 2xl:w-[189px] h-[44px] 2xl:h-[64px] rounded-[46px] text-[18px]"
                    >
                      Send Message
                    </button>
                  </div>

                  {message && (
                    <p className="text-white font-mikado-regular text-[16px]">
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
