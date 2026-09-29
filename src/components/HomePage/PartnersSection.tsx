import Image from "next/image";

const partners = [
  { name: "Partner 1", image: "/images/partners/logo1.png", width: 167 },
  { name: "Partner 2", image: "/images/partners/logo2.png", width: 168 },
  { name: "Partner 3", image: "/images/partners/logo3.png", width: 170 },
  { name: "Partner 4", image: "/images/partners/logo4.png", width: 170 },
  { name: "Partner 5", image: "/images/partners/logo5.png", width: 169 },
];

export default function PartnersSection() {
  return (
    <section aria-label="Our partners" className="bg-[#F5F5F7]">
      <div className="mx-auto flex min-h-[170px] max-w-[1050px] flex-wrap items-center justify-center gap-x-8 gap-y-7 px-5 py-9 sm:justify-between lg:gap-x-5">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.image}
            alt={partner.name}
            width={partner.width}
            height={42}
            className="h-auto  object-contain lg:w-auto"
          />
        ))}
      </div>
    </section>
  );
}