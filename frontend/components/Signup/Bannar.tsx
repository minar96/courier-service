"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon, Wrapper } from "../UI";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { signupUser, resetSignup } from "@/src/redux/slices/signupSlice";
import type { Locale } from "@/i18n-config";

interface SignupDictionary {
  signup: {
    title: string;
    nothave: string;
    login: string;
    name: string;
    namePlaceholder: string;
    mobile: string;
    mobilePlaceholder: string;
    password: string;
    confirmPassword: string;
    button: string;
  };
}

interface Props {
  lang: Locale;
  dictionary: SignupDictionary;
}

const Bannar = ({ lang, dictionary }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state) => state.signup ?? {});

  const [formData, setFormData] = useState({
    full_name: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });
  const [localError, setLocalError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setLocalError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (formData.password !== formData.confirm_password) {
      setLocalError("Passwords do not match");
      return;
    }

    try {
      const payload = {
        name: formData.full_name,
        phone: formData.mobile,
        password: formData.password,
      };

      await dispatch(signupUser(payload)).unwrap();
      dispatch(resetSignup());
      router.push(`/${lang}/login`);
    } catch (err: any) {
      const message = err?.message || err?.data?.message || "Signup failed";
      setLocalError(message);
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            <span className={lang === "bn" ? "font-noto-sans-regular" : "font-mikado-regular"}>
              {dictionary.signup.title}
            </span>
          </h2>
          
          <p className="mt-2 text-sm text-gray-600">
            <span className={lang === "bn" ? "font-noto-sans-regular" : "font-mikado-regular"}>
              {dictionary.signup.nothave}
            </span>{" "}
            <Link href={`/${lang}/login`} className="font-semibold text-indigo-600 hover:text-indigo-500">
              <span className={lang === "bn" ? "font-noto-sans-regular" : "font-mikado-regular"}>
                {dictionary.signup.login}
              </span>
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {(localError || error) && (
              <div className="text-sm text-red-600">
                {localError ?? error}
              </div>
            )}

            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                {dictionary.signup.name}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                value={formData.full_name}
                onChange={handleChange}
                placeholder={dictionary.signup.namePlaceholder}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                {dictionary.signup.mobile}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder={dictionary.signup.mobilePlaceholder}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {dictionary.signup.password}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                {dictionary.signup.confirmPassword}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                required
                value={formData.confirm_password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? "Signing up..." : dictionary.signup.button}
            </button>
          </form>
        </div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          src="/assets/img/signup/signup-banner.jpg"
          alt="Signup banner"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Bannar;
