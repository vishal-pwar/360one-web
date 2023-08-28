"use client";
import Image from "next/image";
import LeftArrow from "../../../../public/assets/icons/left-arrow.svg";
import RightArrow from "../../../../public/assets/icons/right-arrow.svg";
import { useState } from "react";
import { Link } from "@/ui";
import { getStrapiMedia } from "@/utils/api-helpers";

interface LeadershipSliderProps {
  cards: any;
  link: string;
}

const LeadershipSlider = ({ cards, link }: LeadershipSliderProps) => {
  const lastIndex = cards.length - 1;
  const [leadershipCards, setLeadershipCards] = useState([...cards]);

  const variableCardHeightStyles = [
    "translate-y-[calc(42*var(--scale))]",
    "translate-y-[calc(105*var(--scale))]",
    "translate-y-[calc(-36*var(--scale))]",
    "translate-y-[calc(20*var(--scale))]",
  ];

  const handleNext = () => {
    setLeadershipCards((prev) => {
      const newArr = [...prev];
      const lastElement = newArr.pop();
      newArr.unshift(lastElement!);
      return newArr;
    });
  };

  const handlePrev = () => {
    setLeadershipCards((prev) => {
      const newArr = [...prev];
      const firstElement = newArr.shift();
      newArr.push(firstElement!);
      return newArr;
    });
  };

  return (
    <div className="max-sm:min-h-[calc(680*var(--scale))] max-sm:pb-[calc(144*var(--scale))] max-sm:mt-0 max-sm:pt-[calc(10*var(--scale))] max-md:pt-[calc(52*var(--scale))] max-md:min-h-[calc(542*var(--scale))] max-md:pb-[calc(64*var(--scale))] max-md:w-full max-lg:mt-[calc(40*var(--scale))] max-lg:min-h-[calc(593*var(--scale))] max-lg:pt-[calc(57*var(--scale))] w-[109.5%] justify-end pt-[calc(82*var(--scale))] pb-[calc(105*var(--scale))] relative mt-[calc(50*var(--scale))] overflow-hidden ">
      <div className="relative w-full h-full z-10 flex flex-row transition-transform box-content">
        {leadershipCards.map((card, index) => {
          return (
            <div
              key={card.name}
              className={`max-sm:ml-[calc(30*var(--scale))] max-sm:flex-col flex max-md:ml-[calc(7.1*var(--scale))] max-lg:ml-[calc(11.2*var(--scale))] ${
                index === lastIndex
                  ? "max-sm:w-[calc(320*var(--scale))] max-sm:h-fit max-md:w-[calc(399*var(--scale))] max-md:h-[calc(426*var(--scale))] max-lg:w-[calc(499*var(--scale))] max-lg:h-[calc(430*var(--scale))] w-[calc(781*var(--scale))] h-[calc(590*var(--scale))]"
                  : "max-sm:hidden max-md:w-[calc(102*var(--scale))] max-lg:w-[calc(135*var(--scale))] max-lg:h-[calc(351*var(--scale))] w-[calc(212*var(--scale))] h-[calc(590*var(--scale))]"
              } ${
                index !== lastIndex && variableCardHeightStyles[index]
              } ml-[16px] overflow-hidden relative transition-all duration-500 ease-[ease] delay-[0s]`}
            >
              {/* transition-all duration-500 ease-[ease] delay-[0s] */}
              <div
                className={` ${
                  index === lastIndex
                    ? "max-sm:w-full max-sm:h-[calc(216*var(--scale))] max-md:w-[calc(156*var(--scale))] max-md:h-[calc(280*var(--scale))] max-lg:w-[calc(208*var(--scale))] w-[calc(326*var(--scale))]"
                    : "max-md:w-[calc(102*var(--scale))] max-md:h-[calc(263*var(--scale))] max-lg:w-[calc(135*var(--scale))] w-[calc(212*var(--scale))]"
                } relative transition-all duration-500 ease-[ease] delay-300`}
              >
                <Image
                  className={`max-sm:hidden max-md:w-[calc(156*var(--scale))] max-md:h-[calc(280*var(--scale))] w-full h-full object-cover object-top`}
                  src={getStrapiMedia(card?.clearImage?.data?.attributes?.url)}
                  alt={`${card.name} - ${card.designation}`}
                  title={`${card.name} - ${card.designation}`}
                  fill={true}
                />
                <Image
                  className={`max-sm:hidden max-md:w-[calc(102*var(--scale))] max-md:h-[calc(263*var(--scale))] absolute top-0 left-0 w-full h-full object-cover object-top ${
                    index === lastIndex && "hidden"
                  }`}
                  src={getStrapiMedia(card?.blurImage?.data?.attributes?.url)}
                  alt={`${card.name} - ${card.designation}`}
                  title={`${card.name} - ${card.designation}`}
                  fill={true}
                />
                <Image
                  className={`hidden w-full h-full object-cover object-top ${
                    index === lastIndex ? "max-sm:block" : ""
                  } ${index === lastIndex - 1 && "max-sm:block"}`}
                  src={getStrapiMedia(card?.mobileImage?.data?.attributes?.url)}
                  alt={`${card.name} - ${card.designation}`}
                  title={`${card.name} - ${card.designation}`}
                  fill={true}
                />
              </div>
              <div
                className={`max-sm:w-full max-sm:h-[calc(350*var(--scale))] max-sm:max-h-max max-sm:px-[calc(28*var(--scale))] max-sm:pt-[calc(28*var(--scale))] max-sm:pb-[calc(20*var(--scale))] max-sm:ml-0 max-sm:overflow-hidden
                max-md:ml-[calc(-70*var(--scale))] max-md:w-[calc(313*var(--scale))] max-md:pl-[calc(86*var(--scale))] max-md:pr-[calc(17*var(--scale))] max-md:pt-[calc(38*var(--scale))] max-md:pb-[calc(10*var(--scale))]
                max-lg:w-[calc(291*var(--scale))] max-lg:px-[calc(32*var(--scale))] max-lg:pt-[calc(50*var(--scale))] max-lg:pb-[calc(10*var(--scale))] w-[calc(455*var(--scale))] px-[calc(50*var(--scale))] pt-[calc(80*var(--scale))] pb-[calc(20*var(--scale))] bg-white ${
                  index !== lastIndex && "hidden"
                }`}
              >
                {/* transition-all duration-500 ease-[ease] delay-[0s] */}
                <h4 className="max-sm:text-[calc(18*var(--scale))] max-sm:mb-[calc(8.5*var(--scale))] max-md:leading-[1.26] max-md:mb-[calc(4.2*var(--scale))] max-md:tracking-[calc(0.58*var(--scale))] max-md:text-[calc(16*var(--scale))] max-lg:text-[calc(18*var(--scale))] max-lg:leading-[1.49] max-lg:tracking-[calc(0.65*var(--scale))] max-lg:mb-[calc(1.6*var(--scale))] text-[calc(28*var(--scale))] leading-[1.5] mb-[calc(4*var(--scale))] font-bold text-black tracking-[calc(1.01*var(--scale))] ">
                  {card.name}
                </h4>
                <span className="max-sm:mb-[calc(16.5*var(--scale))] max-md:leading-[1.04] max-md:mb-[calc(8.7*var(--scale))] max-md:tracking-[calc(0.43*var(--scale))] max-lg:text-[calc(1*var(--size-14))] max-lg:leading-[1.39] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:mb-[calc(21*var(--scale))] text-[calc(1*var(--size-16))] leading-[1.63] block mb-[calc(33*var(--scale))] text-black tracking-[calc(0.58*var(--scale))] ">
                  {card.designation}
                </span>
                <p className="max-md:text-[calc(14*var(--scale))] max-md:leading-[1.3] max-md:tracking-[calc(0.51*var(--scale))] max-lg:text-[calc(1*var(--size-16))] max-lg:leading-[1.43] max-lg:tracking-[calc(0.51*var(--scale))] text-[calc(1*var(--size-18))] leading-[1.78] tracking-[calc(0.65*var(--scale))] text-left">
                  {card.about}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-sm:top-[initial] max-sm:bottom-[calc(85*var(--scale))] max-sm:right-[initial] max-sm:left-[calc(39*var(--scale))] max-sm:w-[calc(167*var(--scale))] max-sm:h-[calc(59*var(--scale))] max-sm:gap-[calc(12*var(--scale))] max-md:w-[calc(118*var(--scale))] max-md:h-[calc(52*var(--scale))] max-md:gap-[calc(5*var(--scale))] max-lg:w-[calc(139*var(--scale))] max-lg:h-[calc(56*var(--scale))] flex items-center justify-center gap-[calc(18*var(--scale))] bg-black w-[calc(218*var(--scale))] h-[calc(82*var(--scale))] absolute top-0 right-0 z-20">
        <button
          onClick={handlePrev}
          className="max-md:w-[calc(36*var(--scale))] max-lg:w-[calc(34*var(--scale))] max-lg:h-[calc(9*var(--scale))] cursor-pointer bg-none outline-none border-none flex items-center justify-center w-[calc(54*var(--scale))] h-[calc(14*var(--scale))] opacity-[0.2] hover:opacity-[1]"
        >
          <Image className="h-full w-full" src={LeftArrow} alt="left-arrow" />
        </button>
        <button
          onClick={handleNext}
          className="max-md:w-[calc(36*var(--scale))] max-lg:w-[calc(34*var(--scale))] max-lg:h-[calc(9*var(--scale))] cursor-pointer bg-none outline-none border-none flex items-center justify-center w-[calc(54*var(--scale))] h-[calc(14*var(--scale))] opacity-[1]"
        >
          <Image className="h-full w-full" src={RightArrow} alt="right-arrow" />
        </button>
      </div>
      <button
        className="max-sm:bottom-0 max-sm:right-[50%] max-sm:translate-x-[50%] max-md:bottom-0 max-md:w-[calc(250*var(--scale))] max-lg:w-[calc(246*var(--scale))] max-lg:bottom-[calc(40*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] w-[calc(280*var(--scale))] ml-auto z-10 absolute bottom-[calc(20*var(--scale))] right-0
                    text-black border-black p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]"
      >
        <Link
          href={link}
          className="w-full h-full flex justify-center items-center"
        >
          View our Board & Leaders
        </Link>
      </button>
    </div>
  );
};

export default LeadershipSlider;
