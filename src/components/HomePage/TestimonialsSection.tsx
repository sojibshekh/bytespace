import Image from "next/image";

import sarahImage from "../../../public/images/testimonials/user1.png";
import jamesImage from "../../../public/images/testimonials/user2.png";
import alexImage from "../../../public/images/testimonials/user3.png";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: sarahImage,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: jamesImage,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: alexImage,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
        aria-labelledby="testimonials-heading"
        className="overflow-hidden bg-[#FAFAFA] bg-no-repeat px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20"
        style={{
            backgroundImage: [
            'url("/images/testimonials/ellipse8.svg")',
            'url("/images/testimonials/ellipse12.svg")',
            'url("/images/testimonials/ellipse11.svg")',
            ].join(", "),
            backgroundPosition: "left bottom, center top, right top",
            backgroundSize: "52vw auto, 52vw auto, 44vw auto",
        }}
        >
      <div className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
        <h2
          id="testimonials-heading"
          className="text-balance text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-tight tracking-tight text-black"
        >
          Discover What Our
          <br />
          Community Is Saying
        </h2>

        <p className="text-sm leading-7 text-[#5D5D60] sm:text-base">
          At ByteSpace, our vibrant community of learners and creators is at
          the heart of what we do. Hear directly from those who have
          experienced the transformative journey of learning and creating on
          our platform. Explore testimonials that reflect the diverse
          perspectives of enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="min-w-0 rounded-3xl bg-white p-6 sm:p-7"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="aspect-square w-[18vw] rounded-full object-cover sm:w-[12vw] md:w-[6vw]"
            />

            <h3 className="mt-5 text-base font-semibold text-black">
              {testimonial.name}
            </h3>
            <p className="mt-1 text-sm text-[#0645FF]">
              {testimonial.role}
            </p>

            <blockquote className="mt-7 text-sm leading-7 text-[#626266] sm:text-base">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}