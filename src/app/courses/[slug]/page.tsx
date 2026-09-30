import type { Metadata } from "next";
import { notFound } from "next/navigation";

import courses from "@/data/courses.json";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import CourseDetails from "@/components/Courses/CourseDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | ByteSpace",
    };
  }

  return {
    title: `${course.title} | ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <div className="bg-[#073CE0]">
        <Header />
      </div>

      <main>
        <CourseDetails key={course.id} course={course} />
      </main>

      <Footer />
    </>
  );
}