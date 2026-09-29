import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/Header_Logo.png";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Header() {
  return (
    <header className="relative z-20 bg-[#073BDD] text-white">
      <div className="mx-auto grid grid-cols-[1fr_auto] items-center gap-5 px-5 py-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12 xl:px-20">
        <Link href="/" aria-label="ByteSpace home" className="justify-self-start">
          <Image
            src={logo}
            alt="ByteSpace"
            priority
            className="h-auto w-auto max-w-full"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm transition-opacity hover:opacity-75"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-self-end gap-7 lg:flex">
          <Link href="/login" className="text-sm hover:opacity-75">
            Sign In
          </Link>
          <Link href="/signup" className="text-sm hover:opacity-75">
            Join Us
          </Link>
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="relative block h-5 w-4 rounded-[2px] border-2 border-white before:absolute before:-top-[7px] before:left-[3px] before:h-[7px] before:w-[6px] before:rounded-t-full before:border-2 before:border-b-0 before:border-white"
          />
        </div>

        <details className="group justify-self-end lg:hidden">
          <summary className="cursor-pointer list-none text-sm font-medium [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-full border-t border-white/20 bg-[#073BDD] px-5 py-5 shadow-lg sm:px-8"
          >
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/login">Sign In</Link>
              </li>
              <li>
                <Link href="/signup">Join Us</Link>
              </li>
              <li>
                <Link href="/cart">Shopping bag</Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}