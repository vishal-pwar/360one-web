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
    <div className="max-sm:max-w-full max-sm:min-w-full max-sm:h-[calc(602*var(--scale))] max-lg:min-w-[calc(603*var(--scale))] min-w-[calc(947*var(--scale))] w-full overflow-hidden">
      <div className="max-sm:w-full max-sm:h-full max-lg:h-[calc(416*var(--scale))] w-auto flex flex-row overflow-hidden h-[calc(702*var(--scale))]">
        <div className="relative w-full h-full z-10 flex transition-transform box-content">
          {pledgeCards.map((card, index) => {
            return (
              <div
                key={card.title}
                className={`transition-all duration-500 ease-[ease] delay-0 ${
                  index === firstIndex
                    ? "max-sm:w-full max-sm:mr-0 max-sm:h-[calc(399*var(--scale))] max-lg:w-[calc(542*var(--scale))] max-lg:h-[calc(416*var(--scale))] w-[calc(796*var(--scale))] h-[calc(702*var(--scale))] mr-[calc(17*var(--scale))]"
                    : "max-lg:w-[calc(245*var(--scale))] max-lg:h-[calc(177*var(--scale))] w-[calc(401*var(--scale))] h-[calc(277*var(--scale))] mr-0"
                } max-sm:flex-col max-sm:mt-0 flex flex-row-reverse mt-auto flex-shrink-0 relative`}
              >
                <Image
                  className="max-sm:h-[calc(203*var(--scale))] max-sm:w-[calc(353*var(--scale))] max-lg:w-[calc(245*var(--scale))] w-[calc(401*var(--scale))] h-full object-cover object-[center_18%]"
                  src={getStrapiMedia(card?.image?.data?.attributes?.url)}
                  alt="pledge-slider-image"
                  width={401}
                  height={702}
                />
                <div
                  className={`${
                    index === firstIndex
                      ? "max-md:w-[calc(353*var(--scale))] max-sm:h-[calc(399*var(--scale))] max-sm:pl-[calc(22*var(--scale))] max-sm:pr-[calc(54*var(--scale))] max-sm:pt-[calc(73*var(--scale))] max-lg:w-[calc(297*var(--scale))] max-lg:h-[calc(391*var(--scale))] max-lg:pt-[calc(69*var(--scale))] max-lg:pl-[calc(57.6*var(--scale))] max-lg:pr-[calc(35.4*var(--scale))] w-[calc(395*var(--scale))]"
                      : "hidden max-lg:w-[calc(245*var(--scale))] max-lg:h-[calc(177*var(--scale))]"
                  } max-lg:pl-[calc(57.6*var(--scale))] max-lg:pr-[calc(35.4*var(--scale))] max-lg:pt-[calc(69*var(--scale))] p-[calc(50*var(--scale))] pt-[calc(105*var(--scale))] h-[calc(618*var(--scale))] bg-[#e7e2e0] mt-auto relative`}
                >
                  <div className="max-sm:top-[calc(31*var(--scale))] max-sm:gap-[calc(10*var(--scale))] max-lg:top-[calc(30*var(--scale))] max-lg:gap-[calc(11.7*var(--scale))] absolute top-[calc(52*var(--scale))] gap-[calc(18.3*var(--scale))] flex items-center ">
                    <div
                      onClick={handlePrev}
                      className="max-sm:w-[calc(42.7*var(--scale))] max-sm:h-[calc(11*var(--scale))] max-lg:w-[calc(34.3*var(--scale))] max-lg:h-[calc(9*var(--scale))] w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center opacity-[0.2] hover:opacity-[1]"
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
                      className="max-sm:w-[calc(42.7*var(--scale))] max-sm:h-[calc(11*var(--scale))] max-lg:w-[calc(34.3*var(--scale))] max-lg:h-[calc(9*var(--scale))] w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center"
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
                  <h3 className="max-sm:text-[calc(20*var(--scale))] max-sm:leading-[1.4] max-sm:mb-[calc(8*var(--scale))] max-lg:text-[calc(18*var(--scale))] max-lg:leading-[1.11] max-lg:mb-[calc(15*var(--scale))] text-[calc(28*var(--scale))] leading-[1.14] mb-[calc(24*var(--scale))] font-bold text-black tracking-[calc(1.01*var(--scale))]">
                    {card.title}
                  </h3>
                  <p className="max-sm:text-[calc(14*var(--scale))] max-sm:leading-[1.4] max-lg:leading-[1.1] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:text-[calc(1*var(--size-16))] text-[calc(1*var(--size-18))] leading-[1.4] tracking-[calc(0.65*var(--scale))]">
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
