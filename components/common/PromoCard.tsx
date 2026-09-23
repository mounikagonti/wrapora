import Image from "next/image";
import Link from "next/link";

interface PromoCardProps {
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
  buttonColor: string;
  mobileImageClassName?: string;
}

const PromoCard = ({
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
  image,
  backgroundColor,
  buttonColor,
  mobileImageClassName = "",
}: PromoCardProps) => {
  return (
    <div className="overflow-hidden rounded-md" style={{ backgroundColor }}>
      <div
        className="relative hidden min-h-[330] overflow-hidden rounded-md bg-cover bg-right bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-white/5" />

        <div className="relative z-10 flex min-h-[330] max-w-[55%] flex-col justify-center px-7 py-8 md:px-10">
          <h2 className="font-serif text-[24px] leading-[1.3] text-[#2f2927] md:text-[28px]">
            {title}
            <br />
            <span>{highlight}</span>
          </h2>

          <div className="my-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a071]" />
            <span className="text-[#c28d42]">♥</span>
            <span className="h-px w-10 bg-[#c5a071]" />
          </div>

          <p className="max-w-[310] text-[14px] leading-6 text-[#4d4846]">
            {description}
          </p>

          <Link
            href={buttonLink}
            className="mt-6 w-fit rounded-md px-6 py-3 text-[12px] font-bold tracking-wide text-white"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:hidden">
        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="font-serif text-[25px] leading-[1.3] text-[#2f2927] sm:text-[28px]">
            {title}
            <br />
            <span>{highlight}</span>
          </h2>

          <div className="my-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a071]" />
            <span className="text-[#c28d42]">♥</span>
            <span className="h-px w-10 bg-[#c5a071]" />
          </div>

          <p className="max-w-[500] text-[14px] leading-6 text-[#4d4846] sm:text-[15px]">
            {description}
          </p>

          <Link
            href={buttonLink}
            className="mt-6 w-fit rounded-md px-6 py-3 text-[12px] font-bold tracking-wide text-white"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </Link>
        </div>

        <div className="relative h-[220] w-full overflow-hidden sm:h-[260]">
          <Image
            src={image}
            alt={highlight}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className={`object-cover object-[65%_center] sm:object-[68%_center] ${mobileImageClassName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
