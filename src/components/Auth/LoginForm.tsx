"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

import facebookIcon from "../../../public/images/auth/facebook.png";
import googleIcon from "../../../public/images/auth/google.png";

export default function LoginForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign in is currently unavailable. Please try again later.");
  }

  function handleSocialLogin() {
    setMessage("Social sign in is currently unavailable. Please try again later.");
  }

  const inputClassName =
    "min-w-0 rounded-xl border border-[#E3E3E8] bg-white px-5 py-3 font-sans text-base text-[#27272B] outline-none placeholder:text-[#858792] focus:border-[#0645FF] focus:ring-2 focus:ring-[#0645FF]/10";

  return (
    <div className="flex min-w-0 flex-col rounded-3xl bg-white p-6 text-[#27272B] sm:p-10 lg:p-12">
      <p className="font-sans text-base text-[#0645FF]">
        Sign In
      </p>

      <h1 className="mt-1 font-poppins text-3xl font-semibold leading-tight sm:text-4xl">
        Welcome Back
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-9 grid gap-5"
      >
        <div className="grid gap-2">
          <label
            htmlFor="login-email"
            className="font-sans text-sm"
          >
            Email
          </label>

          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            required
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="login-password"
            className="font-sans text-sm"
          >
            Password
          </label>

          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            required
            className={inputClassName}
          />
        </div>

        <button
          type="submit"
          className="justify-self-end rounded-full bg-[#D4FB20] px-6 py-2.5 font-sans text-base font-medium text-[#171717] transition-colors hover:bg-[#C5EB12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
        >
          Sign In
        </button>
      </form>

      <div className="mt-16 flex items-center gap-3">
        <div className="flex-1 border-t border-[#DADBE0]" />

        <span className="font-sans text-sm text-[#858792]">
          or
        </span>

        <div className="flex-1 border-t border-[#DADBE0]" />
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          onClick={handleSocialLogin}
          className="rounded-3xl border border-[#DADBE0] bg-white p-4 transition-colors hover:bg-[#F4F4F6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
        >
          <Image
            src={facebookIcon}
            alt=""
            className="block h-auto max-w-full"
          />
        </button>

        <button
          type="button"
          aria-label="Sign in with Google"
          onClick={handleSocialLogin}
          className="rounded-3xl border border-[#DADBE0] bg-white p-4 transition-colors hover:bg-[#F4F4F6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
        >
          <Image
            src={googleIcon}
            alt=""
            className="block h-auto max-w-full"
          />
        </button>
      </div>

      {message && (
        <p
          role="status"
          className="mt-5 text-center font-sans text-sm leading-relaxed text-[#62626A]"
        >
          {message}
        </p>
      )}

      <p className="mt-auto pt-16 text-center font-sans text-sm text-[#858792]">
        New user?{" "}
        <Link
          href="/signup"
          className="rounded-sm text-[#0645FF] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}