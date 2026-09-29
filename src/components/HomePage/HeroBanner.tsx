import Image from "next/image";

import heroStudent from "../../../public/images/hero/hero-student.png";
import ring from "../../../public/images/hero/ring.png";
import squiggle from "../../../public/images/hero/squiggle.png";
import whiteSquiggle from "../../../public/images/hero/white-squiggle.png";
import triangle from "../../../public/images/hero/triangle.png";
import cylinder from "../../../public/images/hero/cylinder.png";

import student1 from "../../../public/images/hero/student-1.png";
import student2 from "../../../public/images/hero/student-2.png";
import student3 from "../../../public/images/hero/student-3.png";
import student4 from "../../../public/images/hero/student-4.png";
import student5 from "../../../public/images/hero/student-5.png";
import student6 from "../../../public/images/hero/student-6.png";
import student7 from "../../../public/images/hero/student-7.png";

const studentImages = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
];

export default function HeroBanner() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#073BDD] text-white"
    >
      {/* Figma-র blue grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "clamp(4rem, 8vw, 8rem) clamp(4rem, 8vw, 8rem)",
        }}
      />

      {/* Figma-তে থাকা decorative images */}
      <Image
        src={squiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[8vw] top-[12vw] z-0 h-auto w-[24vw] rotate-[-14deg] sm:top-[8vw]"
      />
      <Image
        src={whiteSquiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[12vw] top-[32vw] z-0 h-auto w-[13vw] sm:top-[23vw]"
      />
      <Image
        src={cylinder}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10vw] top-[10vw] z-0 h-auto w-[27vw] rotate-[-16deg]"
      />
      <Image
        src={triangle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[7vw] top-[37vw] z-0 h-auto w-[13vw] sm:top-[22vw]"
      />
      <Image
        src={ring}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[5vw] bottom-[-5vw] z-0 h-auto w-[25vw]"
      />
      <Image
        src={whiteSquiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4vw] bottom-[-5vw] z-0 h-auto w-[21vw]"
      />

      <div className="relative z-10 mx-auto px-5 pt-12 text-center sm:px-8 sm:pt-16 lg:px-12 lg:pt-20 xl:px-20">
        <h1
          id="hero-heading"
          className="mx-auto text-balance text-[clamp(2.4rem,5.3vw,5.6rem)] font-semibold leading-[1.08] tracking-[-0.045em]"
        >
          Get Access to Hundreds
          <br className="hidden sm:block" />
          {" "}Courses Available
        </h1>

        <p className="mx-auto mt-6 text-pretty text-sm leading-6 text-white/90 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="/courses"
          method="get"
          role="search"
          className="mx-auto mt-9 flex items-center justify-center gap-3 sm:mt-12"
        >
          <label
            htmlFor="hero-search"
            className="flex min-w-0 flex-[0_1_28rem] items-center gap-3 rounded-full bg-white px-5 py-3 text-[#858A97]"
          >
            <span
              aria-hidden="true"
              className="relative inline-block h-4 w-4 shrink-0 rounded-full border-2 border-[#858A97] after:absolute after:-bottom-1 after:-right-1 after:h-2 after:w-[2px] after:-rotate-45 after:bg-[#858A97]"
            />
            <span className="sr-only">Search courses, topics or creators</span>
            <input
              id="hero-search"
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#20212A] outline-none placeholder:text-[#858A97]"
            />
          </label>
          <button
            type="submit"
            className="shrink-0 rounded-full bg-[#D5FF00] px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#c3ed00]"
          >
            Search
          </button>
        </form>

        <div className="relative mx-auto mt-12 grid items-end sm:mt-16">
          {/* Screenshot-এর lime semicircle */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[9vw] bottom-0 -z-10 aspect-[2/1] rounded-t-full bg-[#D5FF00] sm:inset-x-[13vw]"
          />

          <div className="relative mx-auto grid w-[min(65vw,34rem)] items-end sm:w-[min(49vw,34rem)]">
            <Image
              src={heroStudent}
              alt="ByteSpace student learning online"
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="absolute left-[7vw] top-[12%] rounded-2xl bg-white px-3 py-2 text-left text-[#24242B] shadow-lg sm:left-[16vw] sm:px-4 sm:py-3">
            <p className="text-xs font-medium sm:text-sm">UI/UX Design</p>
            <p className="text-[10px] text-[#9499A5] sm:text-xs">
              200 Courses · 1000+ Students
            </p>
          </div>

          <div className="absolute right-[2vw] top-[20%] rounded-2xl bg-white px-3 py-2 text-left text-[#24242B] shadow-lg sm:right-[13vw] sm:px-4 sm:py-3">
            <p className="text-[10px] sm:text-xs">Learning Progress</p>
            <p className="mt-1 text-2xl font-semibold leading-none sm:text-4xl">
              55%
            </p>
            <div className="mt-2 overflow-hidden rounded-full bg-[#F0F0F0]">
              <div className="h-1.5 w-[55%] rounded-full bg-[#D5FF00]" />
            </div>
          </div>

          <div className="absolute bottom-[9%] left-[1vw] rounded-2xl bg-white px-3 py-2 text-left text-[#24242B] shadow-lg sm:left-[11vw] sm:px-4 sm:py-3">
            <p className="text-xs font-medium sm:text-sm">Happy Students</p>
            <p className="text-[10px] text-[#9499A5] sm:text-xs">
              4.5 (240) ⭐
            </p>
            <div className="mt-2 flex items-center">
              {studentImages.map((student, index) => (
                <Image
                  key={index}
                  src={student}
                  alt=""
                  className="-mr-2 h-6 w-6 rounded-full border border-white object-cover sm:h-8 sm:w-8"
                />
              ))}
              <span className="ml-2 grid h-6 w-6 place-items-center rounded-full bg-[#D5FF00] text-[9px] font-semibold text-black sm:h-8 sm:w-8">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}