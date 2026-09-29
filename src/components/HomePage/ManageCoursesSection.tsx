import Image from "next/image";

import womanImage from "../../../public/images/hero/student-woman.png";
import decorationImage from "../../../public/images/manage/Frame.png";

import student1 from "../../../public/images/hero/student-1.png";
import student2 from "../../../public/images/hero/student-2.png";
import student3 from "../../../public/images/hero/student-3.png";
import student4 from "../../../public/images/hero/student-4.png";
import student5 from "../../../public/images/hero/student-5.png";
import student6 from "../../../public/images/hero/student-6.png";
import student7 from "../../../public/images/hero/student-7.png";

const students = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
];

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ManageCoursesSection() {
  return (
    <section
      aria-labelledby="manage-courses-heading"
      className="overflow-hidden bg-[#FAFAFA] bg-no-repeat px-5 py-16 text-[#27272B] sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
      style={{
        backgroundImage: [
          'url("/images/manage/Ellipse%2012.svg")',
          'url("/images/manage/Ellipse%208.svg")',
          'url("/images/manage/Ellipse%208.svg")',
        ].join(", "),
        backgroundPosition: "left bottom, left top, right bottom",
        backgroundSize: "45vw auto, 38vw auto, 45vw auto",
      }}
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative isolate grid aspect-square grid-cols-12 grid-rows-12">
    
          <div className="z-0 col-start-1 col-end-8 row-start-2 row-end-5 self-start rounded-2xl bg-[#063BEB] p-4 text-white sm:p-5">
            <p className="text-xs sm:text-sm">Total Revenue</p>
            <p className="text-[10px] text-white/80">July 1–28</p>

            <p className="mt-2 text-lg font-semibold sm:text-2xl">
              $120.29
            </p>

            <div className="mt-2 grid grid-cols-[3fr_2fr] overflow-hidden rounded-full bg-white/90">
              <span className="py-1 bg-[#D4FB20]" />
              <span />
            </div>
          </div>

          <div className="z-0 col-start-1 col-end-5 row-start-5 row-end-9 self-start rounded-2xl bg-[#063BEB] p-3 text-white sm:p-4">
            <p className="text-xs sm:text-sm">Year to Date</p>
            <p className="text-[10px] text-white/80">2023</p>

            <p className="mt-2 text-base font-semibold sm:text-xl">
              $1,200.38
            </p>

            <span className="mt-2 inline-flex rounded-full bg-[#D4FB20] px-2 py-1 text-[9px] font-medium text-black">
              +12$
            </span>
          </div>

       
          <div className="relative z-10 col-start-1 col-end-13 row-start-1 row-end-13">
            <Image
              src={womanImage}
              alt="ByteSpace creator holding a tablet"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-contain drop-shadow-2xl"
            />
          </div>

      
          <div
            aria-hidden="true"
            className="relative z-20 col-start-8 col-end-13 row-start-3 row-end-7"
          >
            <Image
              src={decorationImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 18vw, 36vw"
              className="object-contain"
            />
          </div>

      
          <div className="z-30 col-start-7 col-end-13 row-start-9 row-end-12 self-start rounded-2xl bg-white p-3 shadow-sm sm:p-4">
            <p className="text-xs font-medium sm:text-sm">
              Happy Students
            </p>

            <p className="text-[10px] text-[#9499A5]">
              <span className="text-[#27272B]">4.5</span> (240){" "}
              <span className="text-[#D4FB20]">★</span>
            </p>

            <div className="mt-2 grid grid-cols-8 items-center">
              {students.map((student, index) => (
                <Image
                  key={index}
                  src={student}
                  alt=""
                  className="aspect-square w-full rounded-full border border-white object-cover"
                />
              ))}

              <span className="grid aspect-square place-items-center rounded-full bg-[#D4FB20] text-[9px] font-semibold text-black">
                2K+
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2
            id="manage-courses-heading"
            className="text-balance text-[clamp(2rem,3.2vw,3.25rem)] font-semibold leading-tight tracking-tight"
          >
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>

          <p className="mt-8 text-sm leading-7 text-[#626266] sm:text-base">
            <strong className="font-semibold text-[#27272B]">
              ByteSpace
            </strong>{" "}
            supports individuals or entities in the creation, publication,
            and administration of educational courses.
          </p>

          <ul className="mt-8 space-y-4 sm:mt-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0645FF] px-1 text-xs font-bold leading-5 text-white"
                >
                  ✓
                </span>
                <span className="text-sm sm:text-base">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}