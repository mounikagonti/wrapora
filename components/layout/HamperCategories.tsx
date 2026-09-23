import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Birthday",
    subtitle: "Hampers",
    image: "/images/categories/birthday.png",
    href: "/occasions/birthday",
  },
  {
    title: "Anniversary",
    subtitle: "Hampers",
    image: "/images/categories/anniversary.png",
    href: "/occasions/anniversary",
  },
  {
    title: "Festive",
    subtitle: "Hampers",
    image: "/images/categories/festive.png",
    href: "/occasions/festive",
  },
  {
    title: "Thank You",
    subtitle: "Hampers",
    image: "/images/categories/thankyou.png",
    href: "/occasions/thank-you",
  },
  {
    title: "For Her",
    subtitle: "Hampers",
    image: "/images/categories/for-her.png",
    href: "/occasions/for-her",
  },
  {
    title: "For Him",
    subtitle: "Hampers",
    image: "/images/categories/for-him.png",
    href: "/occasions/for-him",
  },
];

const HamperCategories = () => {
  return (
    <section className="bg-[#f9f8f6] py-5 sm:py-6 lg:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex gap-5 overflow-x-auto pb-2
            scrollbar-hide
            sm:gap-8
            lg:grid lg:grid-cols-6 lg:gap-6
            lg:overflow-visible lg:pb-0
          "
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="
                flex min-w-[100] cursor-pointer
                flex-col items-center
                sm:min-w-[120]
                lg:min-w-0
              "
            >
              <div
                className="
                  relative h-[85] w-[85]
                  overflow-hidden rounded-full
                  sm:h-[100] sm:w-[100]
                  md:h-[110] md:w-[110]
                  lg:h-[115] lg:w-[115]
                "
              >
                <Image
                  src={category.image}
                  alt={`${category.title} Hampers`}
                  fill
                  sizes="
                    (max-width: 640px) 85px,
                    (max-width: 768px) 100px,
                    (max-width: 1024px) 110px,
                    115px
                  "
                  className="
                    object-cover
                    transition-transform duration-300
                    hover:scale-105
                  "
                />
              </div>

              <div
                className="
                  mt-2 text-center
                  text-[13px] leading-5
                  text-[#3f3835]
                  sm:mt-3 sm:text-[14px] sm:leading-6
                  md:text-[15px]
                "
              >
                <p>{category.title}</p>
                <p>{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HamperCategories;
