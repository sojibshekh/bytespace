import Image from "next/image";

import courses from "@/data/courses.json";
import CourseCard from "@/components/HomePage/CourseCard";

import ring from "../../../public/images/auth/ring.png";
import cone from "../../../public/images/auth/cone.png";
import whiteSquiggle from "../../../public/images/auth/white-squiggle.png";

const digitalCourse = courses.find(
  (course) => course.slug === "build-digital-asset",
);

const dataCourse = courses.find(
  (course) => course.slug === "the-power-of-big-data",
);

const studentImages = courses[0]?.studentImages ?? [];

type SignupArtworkProps = {
  title?: string;
  description?: string;
};

export default function SignupArtwork({
  title = "Sign up and come in",
  description = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
}: SignupArtworkProps) {
  return (
    <div className="min-w-0">
      <h2 className="font-poppins text-lg font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 font-sans text-base leading-relaxed text-white/90">
        {description}
      </p>

      <div className="relative isolate mt-10 grid grid-cols-12 grid-rows-12">
        {digitalCourse && (
          <div className="relative z-0 col-start-1 col-end-10 row-start-3 row-end-11 self-start">
            <CourseCard course={digitalCourse} />
          </div>
        )}

        {dataCourse && (
          <div className="relative z-10 col-start-4 col-end-13 row-start-1 row-end-10 self-start">
            <CourseCard course={dataCourse} />
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none relative z-20 col-start-2 col-end-6 row-start-2 row-end-5 self-start"
        >
          <Image src={ring} alt="" className="h-auto w-full" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none relative z-20 col-start-1 col-end-5 row-start-9 row-end-13 self-end"
        >
          <Image src={cone} alt="" className="h-auto w-full" />
        </div>

        <div className="relative z-20 col-start-6 col-end-13 row-start-10 row-end-13 self-end rounded-2xl bg-[#D4FB20] p-4 text-[#171717]">
          <p className="font-sans text-sm font-medium">
            Happy Students
          </p>

          <p className="mt-1 font-sans text-[10px]">
            4.5 (240){" "}
            <span aria-hidden="true" className="text-[#0645FF]">
              ★
            </span>
          </p>

          <div
            aria-label="More than two thousand happy students"
            className="mt-2 grid grid-cols-5 items-center"
          >
            {studentImages.slice(0, 4).map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative -mr-1 aspect-square overflow-hidden rounded-full border border-[#D4FB20]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 4vw, 8vw"
                  className="object-cover"
                />
              </div>
            ))}

            <span
              aria-hidden="true"
              className="relative flex aspect-square items-center justify-center rounded-full bg-[#171717] font-sans text-[10px] text-white"
            >
              2K+
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none relative z-30 col-start-10 col-end-13 row-start-8 row-end-11 self-center"
        >
          <Image src={whiteSquiggle} alt="" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}