import Image from "next/image";
import Link from "next/link";

import squiggle from "../../../public/images/hero/squiggle.png";
import whiteSquiggle from "../../../public/images/hero/white-squiggle.png";
import triangle from "../../../public/images/hero/triangle.png";
import ring from "../../../public/images/hero/ring.png";
import cylinder from "../../../public/images/hero/cylinder.png";

export default function CreatorSection() {
  return (
    <section
      aria-labelledby="creator-heading"
      className="relative isolate overflow-hidden bg-[#073CE0] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
   
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.11) 1px, transparent 1px)",
          backgroundSize: "clamp(4rem, 8vw, 8rem) clamp(4rem, 8vw, 8rem)",
        }}
      />

  
      <Image
        src={squiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[8vw] -top-[8vw] -z-10 h-auto w-[22vw] -rotate-12"
      />
      <Image
        src={whiteSquiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[10vw] -top-[4vw] -z-10 h-auto w-[13vw]"
      />
      <Image
        src={triangle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9vw] top-[8vw] -z-10 h-auto w-[19vw] -rotate-12"
      />
      <Image
        src={ring}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[15vw] -left-[6vw] -z-10 h-auto w-[28vw]"
      />
      <Image
        src={triangle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[10vw] -top-[5vw] -z-10 h-auto w-[15vw] rotate-12"
      />
      <Image
        src={cylinder}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-[11vw] -top-[9vw] -z-10 h-auto w-[29vw] -rotate-12"
      />
      <Image
        src={squiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[16vw] -right-[8vw] -z-10 h-auto w-[24vw] -rotate-12"
      />

      <div className="relative z-10 mx-auto grid grid-cols-1 justify-items-center text-center md:grid-cols-[1fr_4fr_1fr]">
        <div className="md:col-start-2">
          <h2
            id="creator-heading"
            className="text-balance text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-tight tracking-tight"
          >
            Unlock Your Potential as a
            <br className="hidden sm:block" />
            {" "}Creator with ByteSpace
          </h2>

          <p className="mt-7 text-sm leading-7 text-white/85 sm:text-base">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize
            our Course Editor, and showcase your expertise by publishing your
            finest course on the ByteSpace Course Library.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-full bg-[#D4FB20] px-7 py-3 text-sm font-medium text-[#111111] transition-colors hover:bg-[#B7E900]"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}