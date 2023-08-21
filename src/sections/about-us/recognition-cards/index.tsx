import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

interface RecognitionCardsProps {
  cards: any;
}

const RecognitionCards = ({ cards }: RecognitionCardsProps) => {
  return (
    <div className="flex justify-between gap-[calc(10*var(--scale))]">
      {cards.map((card: any, index: number) => {
        return (
          <>
            <div className="max-lg:max-w-[calc(164*var(--scale))] max-w-[calc(278*var(--scale))] flex flex-col">
              <Image
                className="w-[calc(46*var(--scale))] h-[calc(42*var(--scale))] mb-[calc(8*var(--scale))]"
                src={getStrapiMedia(card?.icon?.data?.attributes?.url)}
                alt="accolades"
                title="accolades"
                width={46}
                height={42}
              />
              <p className="text-[calc(1*var(--size-14))] leading-[1.43] tracking-[calc(0.53*var(--scale))]">
                {card.accolade}
              </p>
              <div className="h-[calc(1*var(--scale))] w-[calc(35*var(--scale))] bg-black mt-[calc(15*var(--scale))] mb-[calc(22*var(--scale))]"></div>
              <h5 className="max-lg:mb-[calc(24*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.3] tracking-[calc(0.72*var(--scale))] mb-[calc(25*var(--scale))] font-bold">
                {card.title}
              </h5>
              <Image
                className="max-lg:mt-0 w-[calc(125*var(--scale))] h-[calc(86*var(--scale))] mt-auto mb-[calc(8*var(--scale))]"
                src={getStrapiMedia(card?.image?.data?.attributes?.url)}
                alt="accolades"
                title="accolades"
                width={125}
                height={86}
              />
            </div>
            <div className="max-lg:w-[calc(0.6*var(--scale))] w-[calc(1*var(--scale))] h-auto bg-[#979797]"></div>
          </>
        );
      })}
    </div>
  );
};

export default RecognitionCards;
