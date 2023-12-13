import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

interface AboutUsCardsProps {
  cards: any;
}

const AboutUsCards = ({ cards }: AboutUsCardsProps) => {
  const cardsList = cards?.slice(0, 6);
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:gap-y-[calc(17*var(--scale))] max-md:gap-y-[calc(23*var(--scale))] max-md:grid-rows-2 max-lg:gap-y-[calc(40*var(--scale))] flex-1 grid grid-cols-2 grid-rows-2 place-items-center gap-y-[calc(71*var(--scale))] py-[calc(10*var(--scale))]">
      {cardsList?.map((card: any, index: number) => {
        const totalRows = Math.ceil(cardsList.length / 2);
        const rowNumber = Math.ceil((index + 1) / 2);
        return (
          <div
            key={card.title}
            className={`max-sm:flex-row max-sm:gap-[calc(21*var(--scale))] max-sm:items-start max-sm:p-0 max-lg:px-[calc(17*var(--scale))] max-lg:justify-start max-lg:before:h-[85%] max-md:after:w-[80%] max-md:after:bottom-[calc(-14*var(--scale))] max-lg:after:w-[65%] w-full h-full relative flex flex-col items-center justify-center px-[calc(84*var(--scale))]
                            before:content-[''] before:absolute before:h-full before:top-[50%] before:right-0 ${
                              index % 2 === 1
                                ? " before:w-0"
                                : " max-sm:before:w-0 before:w-[calc(1*var(--scale))]"
                            } before:bg-[#979797] before:-translate-y-[50%]
                            after:content-[''] after:absolute after:w-full after:left-[50%] ${
                              rowNumber === totalRows
                                ? "after:h-0"
                                : "max-sm:after:h-0 after:h-[calc(1*var(--scale))]"
                            }  after:bottom-[calc(-24*var(--scale))] after:bg-[#979797] after:-translate-x-[50%]`}
          >
            <div className="max-sm:h-[calc(40*var(--scale))] max-sm:w-[calc(40*var(--scale))] max-sm:mb-[calc(13*var(--scale))] max-md:h-[calc(23*var(--scale))] max-md:w-[calc(23*var(--scale))] max-md:mb-[calc(13*var(--scale))] max-lg:w-[calc(30.7*var(--scale))] max-lg:h-[calc(30.7*var(--scale))] max-lg:mb-[calc(17*var(--scale))] w-[calc(50*var(--scale))] h-[calc(50*var(--scale))] mb-[calc(28*var(--scale))]">
              <Image
                className="w-full h-full object-contain object-center"
                src={getStrapiMedia(card?.icon?.data?.attributes?.url)}
                // alt="card-icon"
                alt={getStrapiMedia(
                  card?.icon?.data?.attributes?.alternativeText
                )}
                width={50}
                height={50}
              />
            </div>
            <div className="max-sm:flex-1 max-sm:relative">
              <h5 className="max-sm:text-left max-sm:text-[calc(16*var(--scale))] max-sm:leading-[1.51] max-md:leading-[1.51] max-md:text-[calc(14*var(--scale))] max-lg:whitespace-nowrap max-lg: leading-[2.2] text-[calc(1*var(--size-20))] text-center font-bold">
                {card?.title}
              </h5>
              <span className="max-sm:text-left max-sm:text-[calc(14*var(--scale))] max-lg:leading-[1.35] leading-[1.43] text-[calc(1*var(--size-14))] text-center block">
                {card?.text}
              </span>
              {index !== cardsList?.length - 1 && (
                <div className="max-sm:w-full max-sm:mt-[calc(27*var(--scale))] max-sm:h-[calc(1*var(--scale))] max-sm:bg-[#979797]"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsCards;
