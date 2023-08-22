import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

interface CardsListProps {
  cardsList: {
    title: string;
    icon: any;
  }[];
}

const CardsList = ({ cardsList }: CardsListProps) => {
  const cards = cardsList.splice(0, 4);
  return (
    <div className="max-sm:pt-[calc(8*var(--scale))] max-sm:gap-0 max-sm:flex max-sm:flex-col max-md:pt-[calc(40*var(--scale))] grid grid-cols-2 auto-rows-auto place-items-center gap-y-[calc(20*var(--scale))] pt-[calc(41*var(--scale))] flex-1">
      {cards.map((card, index) => {
        const totalRows = Math.ceil(cardsList.length / 2);
        const rowNumber = Math.ceil((index + 1) / 2);
        return (
          <div
            key={card.title}
            className={`max-sm:p-0 max-sm:w-full max-sm:max-w-full max-sm:before:w-0 max-sm:after:h-0 max-md:flex-row max-md:items-center max-md:gap-[calc(16*var(--scale))] max-md:px-[calc(20*var(--scale))]  max-lg:px-[calc(20*var(--scale))] max-lg:pb-[calc(20*var(--scale))] max-lg:pt-[calc(30*var(--scale))] w-full h-full flex flex-col items-center relative justify-center px-[calc(66*var(--scale))] 
                  before:content[''] before:absolute before:top-0 before:right-0 before:w-[calc(1*var(--scale))] ${
                    index % 2 === 1 ? "before:h-0" : "before:h-[80%]"
                  } before:bg-[#979797] after:content[''] after:absolute after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:h-[calc(1*var(--scale))] after:bg-[#979797] ${
                    rowNumber === totalRows ? "after:w-[100%]" : "after:w-[94%]"
                  }`}
          >
            <div className="max-sm:w-[calc(54*var(--scale))] max-sm:h-[calc(54*var(--scale))] max-sm:min-w-[calc(54*var(--scale))] max-md:mb-0 max-lg:w-[calc(38*var(--scale))] max-lg:h-[calc(38*var(--scale))] w-[calc(60*var(--scale))] h-[calc(60*var(--scale))] mb-[calc(19*var(--scale))]">
              <Image
                className="w-full h-full object-contain object-center"
                src={getStrapiMedia(card.icon.data.attributes.url)}
                alt="card-icon"
                width={35}
                height={35}
              />
            </div>
            <span className="max-sm:py-[calc(30*var(--scale))] max-sm:pr-[calc(10*var(--scale))] max-sm:border-solid max-sm:border-[#97979780 max-sm:border-b-[calc(1*var(--scale))] max-sm:block max-sm:w-[calc(261*var(--scale))] max-md:flex-1 max-md:text-left leading-[1.5] text-[calc(1*var(--size-16))] text-center block mb-auto">
              {card.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;
