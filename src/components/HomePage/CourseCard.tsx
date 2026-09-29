import Image from "next/image";
import Link from "next/link";

import courses from "@/data/courses.json";

export type Course = (typeof courses)[number];

type CourseCardProps = {
  course: Course;
};

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return [
    hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "",
    minutes > 0 ? `${minutes} mins` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function CourseCard({ course }: CourseCardProps) {
  const visibleStudents = course.studentImages.slice(0, 4);
  const remainingStudents = Math.max(
    0,
    course.studentCount - visibleStudents.length,
  );

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: course.currency,
    maximumFractionDigits: 0,
  }).format(course.price);

  return (
    <article className="flex min-w-0 flex-col rounded-3xl border border-[#DADBE0] bg-white p-3">
      <Link
        href={`/courses/${course.slug}`}
        aria-label={`View ${course.title}`}
        className="relative isolate block overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
      >
        <div className="relative aspect-[7/4]">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-x-2 bottom-3 flex flex-wrap items-center justify-between gap-1 font-sans text-[10px] leading-normal text-[#47474E]">
          <span className="rounded-full bg-white/80 px-2 py-1">
            {course.lessonCount} Lessons
          </span>

          <span className="rounded-full bg-white/80 px-2 py-1">
            {formatDuration(course.durationMinutes)}
          </span>

          <span className="rounded-full bg-white/80 px-2 py-1">
            {course.commentCount} Comments
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-1 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 font-poppins text-base font-semibold leading-snug text-[#171717]">
            <Link
              href={`/courses/${course.slug}`}
              title={course.title}
              className="block truncate rounded-sm transition-colors hover:text-[#0645FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
            >
              {course.title}
            </Link>
          </h3>

          <p
            aria-label={`${course.rating} out of 5 from ${course.reviewCount} reviews`}
            className="shrink-0 font-sans text-sm leading-snug text-[#66666D]"
          >
            {course.rating.toFixed(1)}{" "}
            <span aria-hidden="true" className="text-[#C8C9CF]">
              ★
            </span>
          </p>
        </div>

        <p className="mt-1 font-sans text-xs leading-normal text-[#66666D]">
          by{" "}
          <span className="text-[#0645FF]">
            {course.author.name}
          </span>
        </p>

        <div className="mt-4 grid grid-cols-12 items-center gap-2">
          <span className="col-span-5 justify-self-start rounded-full bg-[#F4F4F6] px-3 py-1.5 font-sans text-[10px] leading-normal text-[#62626A]">
            {course.level}
          </span>

          <div
            aria-label={`${course.studentCount} students enrolled`}
            className="col-span-6 col-start-7 grid grid-cols-5 items-center"
          >
            {visibleStudents.map((src, index) => (
              <div
                key={`${course.id}-student-${index}`}
                className="relative -mr-1 aspect-square overflow-hidden rounded-full border border-white"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 3vw, 6vw"
                  className="object-cover"
                />
              </div>
            ))}

            <span
              aria-hidden="true"
              className="relative flex aspect-square items-center justify-center rounded-full border border-white bg-[#D4FB20] font-sans text-[9px] font-medium text-[#27272B]"
            >
              {remainingStudents}+
            </span>
          </div>
        </div>

        <p className="mt-4 font-sans leading-normal">
          <span className="text-lg font-bold text-[#0645FF]">
            {formattedPrice}
          </span>

          <span className="text-[10px] text-[#62626A]">
            /{course.accessType}
          </span>
        </p>
      </div>
    </article>
  );
}