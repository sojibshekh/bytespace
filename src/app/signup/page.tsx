import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import SignupArtwork from "@/components/Auth/SignupArtwork";
import SignupForm from "@/components/Auth/SignupForm";

import logo from "../../../public/images/Header_Logo.png";

export const metadata: Metadata = {
  title: "Sign Up | ByteSpace",
  description: "Create your ByteSpace account and start learning.",
};

export default function SignupPage() {
  return (
    <main
      className="min-h-dvh bg-[#073CE0] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 xl:px-20"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)",
        backgroundSize: "8vw 8vw",
      }}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-12">
          <Link
            href="/"
            aria-label="ByteSpace home"
            className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Image
              src={logo}
              alt="ByteSpace"
              className="h-auto max-w-full"
              priority
            />
          </Link>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <SignupArtwork />
        </div>

        <div className="grid min-w-0 lg:col-span-6 lg:col-start-7">
          <SignupForm />
        </div>
      </div>
    </main>
  );
}