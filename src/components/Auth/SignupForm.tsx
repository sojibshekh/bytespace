"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

export default function SignupForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Account creation is not available yet. Please try again later.",
    );
  }

  const inputClassName =
    "min-w-0 rounded-xl border border-[#E3E3E8] bg-white px-5 py-3 font-sans text-base text-[#27272B] outline-none placeholder:text-[#858792] focus:border-[#0645FF] focus:ring-2 focus:ring-[#0645FF]/10";

  return (
    <div className="flex min-w-0 flex-col rounded-3xl bg-white p-6 text-[#27272B] sm:p-10 lg:p-12">
      <p className="font-sans text-base text-[#0645FF]">
        Create an Account
      </p>

      <h1 className="mt-1 font-poppins text-3xl font-semibold leading-tight sm:text-4xl">
        Welcome to
        <br />
        ByteSpace
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-9 grid gap-5"
      >
        <div className="grid gap-2">
          <label
            htmlFor="signup-name"
            className="font-sans text-sm"
          >
            Full Name
          </label>

          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jamie Davis"
            required
            minLength={2}
            maxLength={100}
            className={inputClassName}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="signup-email"
            className="font-sans text-sm"
          >
            Email
          </label>

          <input
            id="signup-email"
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
            htmlFor="signup-password"
            className="font-sans text-sm"
          >
            Password
          </label>

          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="********"
            required
            minLength={8}
            aria-describedby="signup-password-hint"
            className={inputClassName}
          />

          <p id="signup-password-hint" className="sr-only">
            Use at least eight characters.
          </p>
        </div>

        <button
          type="submit"
          className="justify-self-end rounded-full bg-[#D4FB20] px-6 py-2.5 font-sans text-base font-medium text-[#171717] transition-colors hover:bg-[#C5EB12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
        >
          Continue
        </button>

        <p
          role="status"
          className="font-sans text-sm leading-relaxed text-[#62626A]"
        >
          {message}
        </p>
      </form>

      <p className="mt-auto pt-16 text-center font-sans text-sm text-[#62626A] sm:pt-20">
        Already have an account?{" "}
        <Link
          href="/login"
          className="rounded-sm text-[#0645FF] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
        >
          Login
        </Link>
      </p>
    </div>
  );
}