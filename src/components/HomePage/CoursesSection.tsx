"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import courses from "@/data/courses.json";
import CourseCard from "@/components/HomePage/CourseCard";

const mainCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const additionalCategories = Array.from(
  new Set(courses.map((course) => course.category)),
).filter((category) => !mainCategories.includes(category));

export default function CoursesSection() {
  const sectionId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMore, setShowMore] = useState(false);

  const visibleCategories = showMore
    ? [...mainCategories, ...additionalCategories]
    : mainCategories;

  const filteredCourses = courses.filter((course) =>
    activeCategory === "Featured"
      ? course.featured
      : course.category === activeCategory,
  );

  const activeIndex = visibleCategories.indexOf(activeCategory);
  const panelId = `${sectionId}-courses`;

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % visibleCategories.length;
        break;

      case "ArrowLeft":
        nextIndex =
          (index - 1 + visibleCategories.length) %
          visibleCategories.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = visibleCategories.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveCategory(visibleCategories[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  function toggleMoreCategories() {
    if (showMore && additionalCategories.includes(activeCategory)) {
      setActiveCategory("Featured");
    }

    setShowMore((previous) => !previous);
  }

  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-20"
    >
      <div className="grid gap-5 text-center lg:grid-cols-12">
        <h2
          id={`${sectionId}-heading`}
          className="font-poppins text-3xl font-semibold leading-tight text-[#080B1C] sm:text-4xl lg:col-span-12"
        >
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="font-sans text-lg leading-relaxed text-[#858792] lg:col-span-10 lg:col-start-2">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different fields,
          from technology to the arts, and make a difference in your career
          and life.
        </p>
      </div>

      <div className="mt-9 grid lg:grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          <div
            role="tablist"
            aria-label="Course categories"
            className="flex flex-wrap justify-center gap-x-3 gap-y-4"
          >
            {visibleCategories.map((category, index) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={`${sectionId}-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategory(category)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`rounded-full px-4 py-2.5 font-sans text-sm leading-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF] ${
                    isActive
                      ? "bg-[#D4FB20] text-[#171717]"
                      : "bg-[#F4F4F6] text-[#494950] hover:bg-[#E8E8ED]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {additionalCategories.length > 0 && (
            <div className="mt-4 text-center">
              <button
                type="button"
                aria-expanded={showMore}
                onClick={toggleMoreCategories}
                className="rounded-full px-3 py-2 font-sans text-sm text-[#0645FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF]"
              >
                {showMore ? "− Less" : "+ More"}
              </button>
            </div>
          )}
        </div>
      </div>

      <p role="status" className="sr-only">
        {filteredCourses.length} courses in {activeCategory}
      </p>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${sectionId}-tab-${activeIndex}`}
        tabIndex={0}
        className="mt-12 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0645FF] lg:mt-14"
      >
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center font-sans text-base text-[#858792]">
            No courses available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}