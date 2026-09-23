"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Award, Gift, Heart } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero-images/hero-img-3.png",
    title: "CREATE A GIFT",
    highlight: "THEY’LL REMEMBER",
    description:
      "Thoughtfully curated hampers for every occasion. Because every moment deserves something special.",
  },
  {
    id: 2,
    image: "/images/hero-images/hero-img-3.png",
    title: "MAKE EVERY MOMENT",
    highlight: "FEEL SPECIAL",
    description:
      "Beautifully curated gifts made to celebrate the people and moments that matter most.",
  },
  {
    id: 3,
    image: "/images/hero-images/hero-img-3.png",
    title: "GIVE A GIFT",
    highlight: "FROM THE HEART",
    description:
      "Choose thoughtful gifts and create unforgettable memories with our premium hampers.",
  },
  {
    id: 4,
    image: "/images/hero-images/hero-img-3.png",
    title: "CELEBRATE WITH",
    highlight: "SOMETHING SPECIAL",
    description:
      "Make birthdays, anniversaries and special occasions memorable with thoughtfully curated hampers.",
  },
];

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Products",
  },
  {
    icon: Heart,
    title: "Handpicked",
    description: "With Love",
  },
  {
    icon: Gift,
    title: "Beautifully",
    description: "Packaged",
  },
];

const HeroSlider = () => {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
    autoplay.reset();
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
    autoplay.reset();
  }, [emblaApi, autoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
      autoplay.reset();
    },
    [emblaApi, autoplay],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-[#fff4ef]">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  fill
                  priority={slide.id === 1}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              <div className="relative z-10 mx-auto flex min-h-[520] max-w-7xl items-center px-5 py-16 lg:min-h-[560] lg:px-8">
                <div className="w-full max-w-[500] text-center lg:ml-8">
                  <h1 className="font-serif text-3xl font-semibold leading-[1.2] text-[#351c16] sm:text-4xl lg:text-[40px]">
                    {slide.title}
                    <br />
                    {slide.highlight}
                  </h1>

                  <div className="my-5 flex items-center justify-center gap-3">
                    <span className="h-px w-16 bg-[#d9a27e]" />

                    <Heart className="h-4 w-4 fill-[#d9a27e] text-[#d9a27e]" />

                    <span className="h-px w-16 bg-[#d9a27e]" />
                  </div>

                  <p className="mx-auto max-w-[390] text-sm leading-6 text-[#4f403b] sm:text-base">
                    {slide.description}
                  </p>

                  <div className="mx-auto mt-7 flex w-full max-w-[320px] flex-col gap-3">
                    <a
                      href="/shop"
                      className="w-full rounded-md bg-[#8f211b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#741b16]"
                    >
                      SHOP READY-MADE HAMPERS
                    </a>

                    <a
                      href="/build-your-hamper"
                      className="w-full rounded-md border border-[#8f211b] bg-white/70 px-6 py-3 text-sm font-semibold text-[#6e211b] transition hover:bg-white"
                    >
                      BUILD YOUR OWN HAMPER
                    </a>
                  </div>

                  <div className="mt-9 flex flex-wrap justify-center gap-6">
                    {features.map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <div
                          key={feature.title}
                          className="flex items-center gap-2"
                        >
                          <Icon
                            className="h-7 w-7 text-[#c77a21]"
                            strokeWidth={1.5}
                          />

                          <div className="text-left text-xs text-[#332722]">
                            <p className="font-medium">{feature.title}</p>

                            <p>{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#351c16] shadow-sm transition hover:bg-white sm:left-6"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#351c16] shadow-sm transition hover:bg-white sm:right-6"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selectedIndex === index}
            className={`h-2.5 rounded-full transition-all ${
              selectedIndex === index ? "w-7 bg-[#8f211b]" : "w-2.5 bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
