"use client";
import Image from "next/image";
import { useState } from "react";
import { getStrapiMedia } from "@/utils/api-helpers";

interface PledgeSliderProps {
  cards: any;
}

const PledgeSlider = ({ cards }: PledgeSliderProps) => {
  const firstIndex = 0;
  const [pledgeCards, setPledgeCards] = useState([...cards]);
  const handlePrev = () => {
    setPledgeCards((prev) => {
      const newArr = [...prev];
      const lastElement = newArr.pop();
      newArr.unshift(lastElement!);
      return newArr;
    });
  };

  const handleNext = () => {
    setPledgeCards((prev) => {
      const newArr = [...prev];
      const firstElement = newArr.shift();
      newArr.push(firstElement!);
      return newArr;
    });
  };
  return (
    <div className="min-w-[calc(947*var(--scale))] w-full overflow-hidden">
      <div className="w-auto flex flex-row overflow-hidden h-[calc(702*var(--scale))]">
        <div className="relative w-full h-full z-10 flex transition-transform box-content">
          {pledgeCards.map((card, index) => {
            return (
              <div
                key={card.title}
                className={`transition-all duration-500 ease-[ease] delay-0 ${
                  index === firstIndex
                    ? "w-[calc(796*var(--scale))] h-[calc(702*var(--scale))] mr-[calc(17*var(--scale))]"
                    : "w-[calc(401*var(--scale))] h-[calc(277*var(--scale))] mr-0"
                }  flex flex-row-reverse mt-auto flex-shrink-0 relative`}
              >
                <Image
                  className="w-[calc(401*var(--scale))] h-full object-cover object-[center_18%]"
                  src={getStrapiMedia(card?.image?.data?.attributes?.url)}
                  alt="pledge-slider-image"
                  width={401}
                  height={702}
                />
                <div
                  className={`${
                    index === firstIndex
                      ? "w-[calc(395*var(--scale))]"
                      : "hidden"
                  } p-[calc(50*var(--scale))] pt-[calc(105*var(--scale))] h-[calc(618*var(--scale))] bg-[#e7e2e0] mt-auto relative`}
                >
                  <div className="absolute top-[calc(52*var(--scale))] gap-[calc(18.3*var(--scale))] flex items-center ">
                    <div
                      onClick={handlePrev}
                      className="w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center opacity-[0.2] hover:opacity-[1]"
                    >
                      <svg
                        width="54"
                        height="14"
                        viewBox="0 0 54 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 14 0 7.583 8.653 0l.097 6.222h44.916v2.139H8.75z"
                          fill="#000"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </div>
                    <div
                      onClick={handleNext}
                      className="w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center"
                    >
                      <svg
                        width="54"
                        height="14"
                        viewBox="0 0 54 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m44.916 14 8.75-6.417L45.013 0l-.097 6.222H0v2.139h44.916z"
                          fill="#000"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[calc(28*var(--scale))] leading-[1.14] mb-[calc(24*var(--scale))] font-bold text-black tracking-[calc(1.01*var(--scale))]">
                    {card.title}
                  </h3>
                  <p className="text-[calc(1*var(--size-18))] leading-[1.4] tracking-[calc(0.65*var(--scale))]">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PledgeSlider;