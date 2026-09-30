"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import footerLogo from "../../../public/images/logo-footer.png";

const footerLinks = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/categories/business" },
    { label: "IT", href: "/categories/it" },
    { label: "Design", href: "/categories/design" },
  ],
  [
    { label: "Development", href: "/categories/development" },
    { label: "Marketing", href: "/categories/marketing" },
    { label: "Photography", href: "/categories/photography" },
    { label: "Finance", href: "/categories/finance" },
    { label: "Sport", href: "/categories/sport" },
  ],
  [
    { label: "Become a Creator", href: "/creators" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

export default function Footer() {
  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
   
  }

  return (
    <footer className="bg-white text-[#27272B]">
      <div className="px-[6%] pb-7 pt-14 lg:px-[8%] lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-[8%]">
          <div className="min-w-0">
            <Link
              href="/"
              aria-label="ByteSpace home"
              className="block w-[42%] sm:w-[30%] lg:w-[36%]"
            >
              <Image
                src={footerLogo}
                alt="ByteSpace"
                className="block w-full"
              />
            </Link>

            <p className="mt-4 text-xs leading-6 text-[#45454B]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-[#D7D8DC] bg-white px-5 py-3 text-sm outline-none placeholder:text-[#52525B] focus:border-[#193FEA]"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-medium text-[#151515] transition-colors hover:bg-[#B6EB09]"
              >
                Search
              </button>
            </form>

            <p className="mt-5 text-[11px] leading-5 text-[#505058]">
              By subscribing, you agree to our{" "}
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 sm:gap-x-7"
          >
            {footerLinks.map((column, index) => (
              <ul key={index} className="space-y-5">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs leading-5 transition-colors hover:text-[#193FEA]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-[#DADBE0] pt-6 text-[11px] sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookies-settings" className="hover:underline">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}