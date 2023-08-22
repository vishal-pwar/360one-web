"use client";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import { useState } from "react";

interface SuiteCardsProps {
  cards: { title: string; text: string; icon: any }[];
  page: string;
}

const SuiteCards = ({ cards, page }: SuiteCardsProps) => {
  const [activeId, setActiveId] = useState<number>(-1);
  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(-1);
  };

  return (
    <div className="max-sm:h-[calc(574*var(--scale))] max-sm:mb-[calc(-80*var(--scale))] flex items-end gap-[calc(16*var(--scale))] h-[calc(600*var(--scale))] overflow-x-scroll w-[120%] pr-[calc(20*var(--scale))]">
      {cards?.map((cardItem: any, index: number) => {
        return (
          <div
            key={cardItem?.title}
            className={`max-sm:min-w-[calc(247*var(--scale))] max-sm:p-[calc(20*var(--scale))calc(25*var(--scale))] max-sm:translate-y-[calc(-80*var(--scale))] max-lg:min-w-[calc(281*var(--scale))] max-lg:p-[calc(21*var(--scale))calc(25*var(--scale))] max-lg:h-[calc(230*var(--scale))] min-w-[calc(439*var(--scale))] h-[calc(358*var(--scale))] bg-white p-[calc(30*var(--scale))calc(40*var(--scale))] flex flex-col overflow-hidden transition ease-linear duration-300
                                max-lg:hover:min-h-[calc(350*var(--scale))] hover:max-h-[calc(900*var(--scale))] hover:h-max hover:mt-0 hover:transition hover:ease-in-out hover:duration-300 hover:text-white hover:min-h-[calc(550*var(--scale))] ${
                                  page === "asset"
                                    ? "hover:bg-asset-purple"
                                    : "hover:bg-wealth-orange"
                                } `}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`max-lg:w-[calc(34*var(--scale))] max-lg:h-[calc(41*var(--scale))] max-lg:mb-[calc(16*var(--scale))] w-[calc(53*var(--scale))] h-[calc(64*var(--scale))] mb-[calc(24*var(--scale))] mt-auto ${
                activeId === index && "hidden"
              }`}
            >
              <Image
                src={getStrapiMedia(cardItem?.icon?.data?.attributes?.url)}
                className={`w-full h-full transition ease-in-out duration-300 ${
                  activeId === index &&
                  "mt-[calc(-90*var(--scale))] -translate-y-[100px]"
                }`}
                alt="360 One Wealth Management"
                title="360 One Wealth Management"
                height={64}
                width={53}
              />
            </div>
            <h5 className="max-md:text-[calc(14*var(--scale))] max-lg:text-[calc(18*var(--scale))] max-lg:mb-[calc(8*var(--scale))] text-[calc(1*var(--size-24))] tracking-[calc(0.87*var(--scale))] font-bold mb-[calc(12*var(--scale))]">
              {cardItem?.title}
            </h5>
            <p
              className={`max-lg:text-[calc(1*var(--size-16))] text-[calc(1*var(--size-20))] opacity-[0.8] leading-[1.4] line-clamp-3 ${
                activeId === index && "block"
              } `}
            >
              {cardItem?.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SuiteCards;
