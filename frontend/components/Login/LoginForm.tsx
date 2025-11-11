"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { loginUser } from "@/src/redux/slices/authSlice";

import { type getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

// Replace the getDictionary type with a proper interface
interface Dictionary {
  login: {
    title: string;
    nothave: string;
    signup: string;
    mobile: string;
    mobilePlaceholder: string;
    password: string;
    forgotPassword: string;
    button: string;
  };
}

interface Props {
  lang: Locale;
  dictionary: Dictionary;
}

const LoginForm = ({ lang, dictionary }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    mobile_no: "",
    password: "",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await dispatch(
      loginUser({
        mobile_no: formData.mobile_no,
        password: formData.password,
      })
    );

    if (loginUser.fulfilled.match(result)) {
      router.push("/dashboard");
    }
  };

  if (!isClient) {
    return null; // or a loading skeleton
  }

  return (
    <Wrapper className="w-full grid grid-cols-1">
      <div className="flex min-h-screen">
        {/* Left side */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16">
          <div className="mx-auto w-full max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              <span
                className={
                  lang === "bn"
                    ? "font-noto-sans-regular"
                    : "font-mikado-regular"
                }
              >
                {dictionary.login.title}
              </span>
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              <span
                className={
                  lang === "bn"
                    ? "font-noto-sans-regular"
                    : "font-mikado-regular"
                }
              >
                {dictionary.login.nothave}
              </span>{" "}
              <Link
                href={`/${lang}/signup`}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                <span
                  className={
                    lang === "bn"
                      ? "font-noto-sans-regular"
                      : "font-mikado-regular"
                  }
                >
                  {dictionary.login.signup}
                </span>
              </Link>
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  <span
                    className={
                      lang === "bn"
                        ? "font-noto-sans-regular"
                        : "font-mikado-regular"
                    }
                  >
                    {dictionary.login.mobile}
                    <span className="text-[#ff0000]">*</span>
                  </span>
                </label>
                <input
                  id="mobile_no"
                  name="mobile_no"
                  type="text"
                  placeholder={dictionary.login.mobilePlaceholder}
                  required
                  value={formData.mobile_no}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  <span
                    className={
                      lang === "bn"
                        ? "font-noto-sans-regular"
                        : "font-mikado-regular"
                    }
                  >
                    {dictionary.login.password}
                    <span className="text-[#ff0000]">*</span>
                  </span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="flex items-center justify-end">
                {/* <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  Remember me
                </label> */}
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <span
                    className={
                      lang === "bn"
                        ? "font-noto-sans-regular"
                        : "font-mikado-regular"
                    }
                  >
                    {dictionary.login.forgotPassword}
                  </span>
                </Link>
              </div>

              {error && (
                <div className="mb-4 text-sm text-red-600">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading
                  ? dictionary?.login?.button
                  : dictionary?.login?.button}
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

export default LoginForm;
