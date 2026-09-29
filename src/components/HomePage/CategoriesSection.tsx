import Image from "next/image";

import designIcon from "../../../public/images/categories/design.png";
import developmentIcon from "../../../public/images/categories/development.png";
import softwareIcon from "../../../public/images/categories/software.png";
import businessIcon from "../../../public/images/categories/business.png";
import marketingIcon from "../../../public/images/categories/marketing.png";
import photographyIcon from "../../../public/images/categories/photography.png";

const categories = [
  { name: "Design", icon: designIcon },
  { name: "Development", icon: developmentIcon },
  { name: "IT & Software", icon: softwareIcon },
  { name: "Business", icon: businessIcon },
  { name: "Marketing", icon: marketingIcon },
  { name: "Photography", icon: photographyIcon },
];

export default function CategoriesSection() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="bg-white px-5 py-16 text-[#27272B] sm:px-8 sm:py-20 lg:px-12 xl:px-20"
    >
      <div className="grid gap-5 text-center lg:grid-cols-12">
        <h2
          id="categories-heading"
          className="text-4xl text-[#080B1C] lg:col-span-12"
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="section-description text-[#858792] lg:col-span-10 lg:col-start-2">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:mt-16 xl:grid-cols-6 xl:gap-8">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex min-w-0 flex-col items-center justify-center gap-4 rounded-3xl border border-[#CDCED4] px-3 py-8 text-center"
          >
            <div
              aria-hidden="true"
              className="rounded-full bg-[#D4FB20] p-4"
            >
              <Image
                src={category.icon}
                alt=""
                className="block h-auto w-auto"
              />
            </div>

            <h3 className="font-['Satoshi'] text-xl font-normal leading-snug">
              {category.name}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}