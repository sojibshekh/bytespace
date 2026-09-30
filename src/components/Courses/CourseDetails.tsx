"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { Course } from "@/components/HomePage/CourseCard";

type CourseDetailsProps = {
  course: Course;
};

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

const gridBackground = {
  backgroundImage:
    "linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)",
  backgroundSize: "8vw 8vw",
};

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return [
    hours ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "",
    minutes ? `${minutes} mins` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function CourseDetails({
  course,
}: CourseDetailsProps) {
  const id = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [activeTab, setActiveTab] = useState<Tab>("About");
  const [shareMessage, setShareMessage] = useState("");

  const lessons = course.modules.flatMap((module) => module.lessons);
  const previewLessons = lessons.slice(0, 3);
  const remainingLessons = lessons.length - previewLessons.length;

  const previewVideo: string | null = course.previewVideo;

  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: course.currency,
    maximumFractionDigits: 0,
  }).format(course.price);

  async function handleShare() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: course.title,
          text: course.subtitle,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);
      setShareMessage("Course link copied.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setShareMessage("Please copy the page URL to share this course.");
    }
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveTab(tabs[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <section
        aria-labelledby={`${id}-title`}
        className="bg-[#073CE0] px-5 pb-8 pt-8 text-white sm:px-8 lg:px-12 xl:px-20"
        style={gridBackground}
      >
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="min-w-0 flex-1">
            <h1
              id={`${id}-title`}
              className="font-poppins text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl"
            >
              {course.title}
            </h1>

            <p className="mt-2 font-sans text-lg leading-relaxed">
              {course.subtitle}
            </p>

            <p className="mt-4 font-sans text-sm text-white/90">
              by {course.author.name}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 font-sans text-xs text-[#27272B]">
              <span className="rounded-full bg-white px-4 py-2">
                {course.level}
              </span>

              <span className="rounded-full bg-white px-4 py-2">
                <span aria-hidden="true" className="text-[#0645FF]">
                  ★
                </span>{" "}
                {course.rating.toFixed(1)} ({course.reviewCount} reviews)
              </span>

              <span className="rounded-full bg-white px-4 py-2">
                {course.studentCount} Students
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="rounded-full bg-[#D4FB20] px-5 py-2 font-sans text-sm text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Share
            </button>

            <p
              role="status"
              className="mt-2 font-sans text-xs text-white/90"
            >
              {shareMessage}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Course content"
        className="relative isolate grid grid-cols-1 bg-white px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-x-10 lg:px-12 lg:pb-24 xl:gap-x-16 xl:px-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 col-start-1 -col-end-1 row-start-1 row-end-2 -mx-5 bg-[#073CE0] sm:-mx-8 lg:-mx-12 xl:-mx-20"
          style={gridBackground}
        />

        <div className="min-w-0 pb-10 lg:col-span-8 lg:col-start-1 lg:row-start-1">
          {previewVideo ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={course.coverImage}
              aria-label={`${course.title} preview`}
              className="block aspect-video w-full rounded-2xl bg-black object-contain"
            >
              <source src={previewVideo} />
              Your browser does not support video playback.
            </video>
          ) : (
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        <aside className="relative mb-10 min-w-0 self-start rounded-2xl border border-[#E2E3E8] bg-white p-5 text-[#27272B] sm:p-6 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2">
          <h2 className="font-sans text-base font-bold">
            {course.lessonCount} Lessons (
            {formatDuration(course.durationMinutes)})
          </h2>

          <ol className="mt-4 space-y-4">
            {previewLessons.map((lesson, index) => (
              <li
                key={lesson.id}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 font-sans text-xs"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span className="leading-relaxed">
                  {lesson.title}
                </span>

                <span className="whitespace-nowrap text-[#0645FF]">
                  {lesson.durationMinutes} mins
                </span>
              </li>
            ))}
          </ol>

          {remainingLessons > 0 && (
            <p className="mt-4 font-sans text-xs text-[#858792]">
              {remainingLessons} more{" "}
              {remainingLessons === 1 ? "lesson" : "lessons"}
            </p>
          )}

          <p className="mt-6 font-sans text-sm leading-relaxed text-[#858792]">
            Ready to Dive In? Enroll Now and Start Building Your Digital
            Future!
          </p>

          <p className="mt-4 font-sans">
            <span className="text-3xl font-bold text-[#0645FF]">
              {price}
            </span>

            <span className="text-xs text-[#858792]">
              /{course.accessType}
            </span>
          </p>

          <Link
            href="/signup"
            className="mt-4 block rounded-full bg-[#D4FB20] px-5 py-3 text-center font-sans text-sm font-medium text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
          >
            Enroll Now
          </Link>

          <h3 className="mt-6 font-sans text-base font-bold">
            This course include
          </h3>

          <ul className="mt-4 space-y-3 font-sans text-sm text-[#858792]">
            {course.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 border-t border-[#E2E3E8] pt-5">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <div className="relative aspect-square w-[clamp(2rem,3vw,3rem)] overflow-hidden rounded-full">
                <Image
                  src={course.author.avatar}
                  alt={course.author.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 font-sans">
                <p className="text-sm font-medium">
                  {course.author.name}
                </p>

                <p className="mt-1 text-xs text-[#858792]">
                  {course.author.role}
                </p>
              </div>
            </div>

            <p className="mt-4 font-sans text-sm leading-relaxed text-[#858792]">
              {course.author.bio}
            </p>

            <details className="mt-4 font-sans text-sm">
              <summary className="cursor-pointer rounded-full border border-[#E2E3E8] px-4 py-2 text-[#62626A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]">
                See Full Profile
              </summary>

              <div className="mt-3 space-y-2 text-[#62626A]">
                <p className="font-medium">{course.author.name}</p>
                <p>{course.author.role}</p>
                <p className="leading-relaxed">{course.author.bio}</p>
              </div>
            </details>
          </div>
        </aside>

        <div className="min-w-0 pt-8 lg:col-span-8 lg:col-start-1 lg:row-start-2">
          <div
            role="tablist"
            aria-label="Course details"
            className="flex flex-wrap gap-3"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`${id}-tab-${tab}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`${id}-panel`}
                tabIndex={activeTab === tab ? 0 : -1}
                onClick={() => setActiveTab(tab)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`rounded-full px-4 py-2.5 font-sans text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF] ${
                  activeTab === tab
                    ? "bg-[#D4FB20] text-[#171717]"
                    : "bg-[#F4F4F6] text-[#62626A] hover:bg-[#E8E8ED]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${activeTab}`}
            tabIndex={0}
            className="mt-7 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
          >
            {activeTab === "About" && (
              <div>
                <h2 className="font-sans text-lg font-bold text-[#27272B]">
                  Description
                </h2>

                <div className="mt-4 space-y-5 font-sans text-base leading-relaxed text-[#858792]">
                  {course.description.map((paragraph, index) => (
                    <p key={`${course.id}-description-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {course.sneakPeekImages.length > 0 && (
                  <div className="mt-7">
                    <h2 className="font-sans text-lg font-bold text-[#27272B]">
                      Sneak Peek
                    </h2>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {course.sneakPeekImages.map((src, index) => (
                        <div
                          key={`${src}-${index}`}
                          className="relative aspect-[4/3] overflow-hidden rounded-xl"
                        >
                          <Image
                            src={src}
                            alt={`${course.title} preview ${index + 1}`}
                            fill
                            sizes="(min-width: 1024px) 16vw, 40vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-7">
                  <h2 className="font-sans text-lg font-bold text-[#27272B]">
                    Key Points
                  </h2>

                  <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-[#858792]">
                    {course.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="text-[#0645FF]"
                        >
                          ✓
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "Lessons" && (
              <div>
                <h2 className="font-sans text-lg font-bold text-[#27272B]">
                  Course Curriculum
                </h2>

                <p className="mt-2 font-sans text-sm text-[#858792]">
                  {course.modules.length} modules · {lessons.length} lessons
                  · {formatDuration(course.durationMinutes)}
                </p>

                <div className="mt-5 space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <details
                      key={module.id}
                      open={moduleIndex === 0}
                      className="rounded-2xl border border-[#E2E3E8] p-4 sm:p-5"
                    >
                      <summary className="cursor-pointer font-sans text-base font-bold text-[#27272B]">
                        {module.title}
                      </summary>

                      <ol className="mt-5 divide-y divide-[#E2E3E8]">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lesson.id}
                            className="py-4 first:pt-0 last:pb-0"
                          >
                            <div className="flex items-start justify-between gap-4 font-sans">
                              <h3 className="text-sm font-medium text-[#27272B]">
                                {String(lessonIndex + 1).padStart(2, "0")}.
                                {" "}
                                {lesson.title}
                              </h3>

                              <span className="shrink-0 text-xs text-[#0645FF]">
                                {lesson.durationMinutes} mins
                              </span>
                            </div>

                            <p className="mt-2 font-sans text-sm leading-relaxed text-[#858792]">
                              {lesson.description}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Reviews" && (
              <div>
                <h2 className="font-sans text-lg font-bold text-[#27272B]">
                  Student Reviews
                </h2>

                <p className="mt-2 font-sans text-sm text-[#858792]">
                  <span className="font-bold text-[#27272B]">
                    {course.rating.toFixed(1)}
                  </span>{" "}
                  out of 5 · {course.reviewCount} reviews
                </p>

                <div className="mt-5 space-y-4">
                  {course.reviews.map((review) => (
                    <article
                      key={review.id}
                      className="rounded-2xl border border-[#E2E3E8] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative aspect-square w-[clamp(2rem,3vw,3rem)] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1 font-sans">
                          <h3 className="text-base font-bold text-[#27272B]">
                            {review.name}
                          </h3>

                          <time
                            dateTime={review.date}
                            className="mt-1 block text-xs text-[#858792]"
                          >
                            {new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              timeZone: "UTC",
                            }).format(new Date(review.date))}
                          </time>
                        </div>

                        <span className="shrink-0 font-sans text-sm text-[#0645FF]">
                          {review.rating} ★
                        </span>
                      </div>

                      <p className="mt-4 font-sans text-base leading-relaxed text-[#858792]">
                        {review.comment}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}