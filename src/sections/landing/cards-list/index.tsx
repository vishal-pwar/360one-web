import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

interface CardsListProps {
  cardsList: {
    title: string;
    icon: any;
  }[];
}

const CardsList = ({ cardsList }: CardsListProps) => {
  return (
    <div className="grid grid-cols-2 auto-rows-auto place-items-center gap-y-[calc(20*var(--scale))] pt-[calc(41*var(--scale))] flex-1">
      {cardsList.map((card, index) => {
        const totalRows = Math.ceil(cardsList.length / 2);
        const rowNumber = Math.ceil((index + 1) / 2);
        return (
          <div
            key={card.title}
            className={`w-full h-full flex flex-col items-center relative justify-center px-[calc(66*var(--scale))] 
                  before:content[''] before:absolute before:top-0 before:right-0 before:w-[calc(1*var(--scale))] ${
                    index % 2 === 1 ? "before:h-0" : "before:h-[80%]"
                  } before:bg-[#979797] after:content[''] after:absolute after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:h-[calc(1*var(--scale))] after:bg-[#979797] ${
                    rowNumber === totalRows ? "after:w-[100%]" : "after:w-[94%]"
                  }`}
          >
            <div className="w-[calc(60*var(--scale))] h-[calc(60*var(--scale))] mb-[calc(19*var(--scale))]">
              <Image
                className="w-full h-full object-contain object-center"
                src={getStrapiMedia(card.icon.data.attributes.url)}
                alt="card-icon"
                width={35}
                height={35}
              />
            </div>
            <span className="leading-[1.5] text-[calc(1*var(--size-16))] text-center block mb-auto">
              {card.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;
