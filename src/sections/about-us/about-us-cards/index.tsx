import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

interface AboutUsCardsProps {
  cards: any;
}

const AboutUsCards = ({ cards }: AboutUsCardsProps) => {
  return (
    <div className="flex-1 grid grid-cols-2 grid-rows-2 place-items-center gap-y-[calc(71*var(--scale))] py-[calc(10*var(--scale))]">
      {cards.map((card: any, index: number) => {
        const totalRows = Math.ceil(cards.length / 2);
        const rowNumber = Math.ceil((index + 1) / 2);
        return (
          <div
            key={card.title}
            className={`w-full h-full relative flex flex-col items-center justify-center px-[calc(84*var(--scale))]
                            before:content-[''] before:absolute before:h-full before:top-[50%] before:right-0 ${
                              index % 2 === 1
                                ? " before:w-0"
                                : " before:w-[calc(1*var(--scale))]"
                            } before:bg-[#979797] before:-translate-y-[50%]
                            after:content-[''] after:absolute after:w-full after:left-[50%] ${
                              rowNumber === totalRows
                                ? "after:h-0"
                                : "after:h-[calc(1*var(--scale))]"
                            }  after:bottom-[calc(-24*var(--scale))] after:bg-[#979797] after:-translate-x-[50%]`}
          >
            <div className="w-[calc(50*var(--scale))] h-[calc(50*var(--scale))] mb-[calc(28*var(--scale))]">
              <Image
                className="w-full h-full object-contain object-center"
                src={getStrapiMedia(card?.icon?.data?.attributes?.url)}
                alt="card-icon"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h5 className="leading-[2.2] text-[calc(1*var(--size-20))] text-center font-bold">
                {card.title}
              </h5>
              <span className="leading-[1.43] text-[calc(1*var(--size-14))] text-center block">
                {card.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsCards;
