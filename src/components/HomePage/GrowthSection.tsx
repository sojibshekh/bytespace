import Image from "next/image";

import courseImage from "../../../public/images/growth/course-design.jpg";
import studentImage from "../../../public/images/growth/student-man.png";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <section
      aria-labelledby="growth-heading"
      className="overflow-hidden bg-[#FAFAFA] bg-no-repeat px-5 py-16 text-[#27272B] sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
      style={{
        backgroundImage:
          'url("/images/growth/Ellipse%2011.svg"), url("/images/growth/Ellipse%208.svg")',
        backgroundPosition: "left top, right bottom",
        backgroundSize: "52vw auto, 48vw auto",
      }}
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <h2
            id="growth-heading"
            className="text-balance text-[clamp(2rem,3.2vw,3.25rem)] font-semibold leading-[1.12] tracking-tight"
          >
            Your Path to Professional
            <br className="hidden sm:block" />
            {" "}Growth Starts Here!
          </h2>

          <p className="mt-8 text-sm leading-7 text-[#626266] sm:text-base sm:leading-8">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:mt-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-[#5D5D63] sm:text-base">
                  {stat.label}
                </dt>
                <dd className="mb-1 text-[clamp(1.6rem,2.5vw,2.5rem)] font-semibold leading-none text-[#0645FF]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative isolate aspect-[1.12]">
        
          <div className="absolute left-0 top-0 z-0 w-[58vw] overflow-hidden rounded-2xl border border-[#E6E6E9] bg-white shadow-sm sm:w-[48vw] lg:w-[27vw]">
            <div className="relative">
              <Image
                src={courseImage}
                alt="Students planning a UI/UX design project"
                className="aspect-[1.7] w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 flex gap-2 text-[10px] text-[#49494E]">
                <span className="rounded-full bg-white/85 px-2 py-1">
                  17 Lessons
                </span>
                <span className="rounded-full bg-white/85 px-2 py-1">
                  2 hours 16 mins
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-black sm:text-base">
                Learn Figma from Basic
              </h3>
              <p className="mt-1 text-xs text-[#626266]">
                by <span className="text-[#0645FF]">purepearl studio</span>
              </p>
              <p className="mt-4 text-sm text-[#0645FF]">
                <strong>$25</strong>
                <span className="text-[#787880]">/lifetime</span>
              </p>
            </div>
          </div>

      
          <Image
            src={studentImage}
            alt="Student learning with headphones and a laptop"
            className="absolute bottom-0 left-[8vw] z-10 h-auto w-[63vw] drop-shadow-2xl sm:left-[10vw] sm:w-[52vw] lg:left-[5vw] lg:w-[31vw]"
          />

          <div
            aria-hidden="true"
            className="absolute right-[2vw] top-[8vw] z-10 aspect-square w-[18vw] sm:right-[5vw] sm:top-[5vw] sm:w-[14vw] lg:right-0 lg:top-[3vw] lg:w-[10vw]"
          >
            <Image
              src="/images/growth/Frame.png"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1024px) 10vw, (min-width: 640px) 14vw, 18vw"
              className="object-contain brightness-125 sepia saturate-[8] hue-rotate-[25deg]"
            />
          </div>

      
          <div className="absolute right-0 top-[22vw] z-20 rounded-2xl bg-white p-3 shadow-lg sm:top-[18vw] sm:p-4 lg:top-[13vw] lg:p-5">
            <p className="text-[10px] text-[#44444A] sm:text-xs">
              Learning Progress
            </p>
            <p className="mt-1 text-2xl font-semibold leading-none text-[#27272B] sm:text-4xl">
              55%
            </p>
            <div className="mt-3 overflow-hidden rounded-full bg-[#F0F0F0]">
              <div className="h-1.5 w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}