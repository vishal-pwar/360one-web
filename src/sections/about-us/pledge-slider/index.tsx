"use client";
import Image from "next/image";
import { useState } from "react";
import { getStrapiMedia } from "@/utils/api-helpers";

interface PledgeSliderProps {
  cards: any;
}

const PledgeSlider = ({ cards }: PledgeSliderProps) => {
  const newCardsArray = cards ? [...cards, ...cards, ...cards] : [];
  const [scrollPos, setScrollPos] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(500);
  const [isVisible, setIsVisible] = useState(true);

  const handleTextVisibility = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 501);
  };
  const handlePrev = () => {
    setScrollPos((prev) => (prev % 4) - 1);
    if (scrollPos === -4) setTransitionDuration(0);
    else setTransitionDuration(500);
    handleTextVisibility();
  };

  const handleNext = () => {
    setScrollPos((prev) => (prev % 4) + 1);
    if (scrollPos === 4) setTransitionDuration(0);
    else setTransitionDuration(500);
    handleTextVisibility();
  };

  const getHorizontalOffset = () => {
    if (scrollPos === 0)
      return "max-sm:translate-x-[calc(-1019*var(--scale))] max-md:translate-x-[calc(-1018*var(--scale))] max-lg:translate-x-[calc(-1048*var(--scale))] translate-x-[calc(-1672*var(--scale))]";
    if (scrollPos === 1)
      return "max-sm:translate-x-[calc(-1274*var(--scale))] max-md:translate-x-[calc(-1275*var(--scale))] max-lg:translate-x-[calc(-1311.6*var(--scale))] translate-x-[calc(-2090*var(--scale))]";
    if (scrollPos === 2)
      return "max-sm:translate-x-[calc(-1528*var(--scale))] max-md:translate-x-[calc(-1532*var(--scale))] max-lg:translate-x-[calc(-1575.2*var(--scale))] translate-x-[calc(-2508*var(--scale))]";
    if (scrollPos === 3)
      return "max-sm:translate-x-[calc(-1784*var(--scale))] max-md:translate-x-[calc(-1789*var(--scale))] max-lg:translate-x-[calc(-1838.8*var(--scale))] translate-x-[calc(-2926*var(--scale))]";
    if (scrollPos === 4)
      return "max-sm:translate-x-[calc(-2039*var(--scale))] max-md:translate-x-[calc(-2046*var(--scale))] max-lg:translate-x-[calc(-2102.4*var(--scale))] translate-x-[calc(-3344*var(--scale))]";
    if (scrollPos === -1)
      return "max-sm:translate-x-[calc(-764*var(--scale))] max-md:translate-x-[calc(-761*var(--scale))] max-lg:translate-x-[calc(-784.4*var(--scale))] translate-x-[calc(-1254*var(--scale))]";
    if (scrollPos === -2)
      return "max-sm:translate-x-[calc(-509*var(--scale))] max-md:translate-x-[calc(-504*var(--scale))] max-lg:translate-x-[calc(-520.8*var(--scale))] translate-x-[calc(-836*var(--scale))]";
    if (scrollPos === -3)
      return "max-sm:translate-x-[calc(-255*var(--scale))] max-md:translate-x-[calc(-247*var(--scale))] max-lg:translate-x-[calc(-257.2*var(--scale))] translate-x-[calc(-418*var(--scale))]";
    if (scrollPos === -4)
      return "max-sm:translate-x-0 max-md:translate-x-[calc(-0*var(--scale))] translate-x-0";
  };

  const translateX = getHorizontalOffset();

  return (
    <div className="max-sm:max-w-full max-sm:min-w-full max-sm:h-[calc(602*var(--scale))] max-md:min-w-[103.9%] max-lg:min-w-[calc(603*var(--scale))] min-w-[calc(947*var(--scale))] w-full overflow-hidden">
      <div className="max-sm:w-full max-sm:h-full max-md:h-[calc(378*var(--scale))] max-md:w-[calc(916*var(--scale))] max-lg:h-[calc(416*var(--scale))] w-auto flex flex-row overflow-hidden h-[calc(702*var(--scale))]">
        <div className="relative w-full h-full z-10 flex transition-transform box-content">
          {newCardsArray?.map((card, index) => {
            const lastIndex = 4 + scrollPos;
            return (
              <div
                key={card?.title + index}
                className={`transition-all ${
                  transitionDuration === 0 ? "duration-0" : "duration-500"
                } ease-[ease] delay-0 ${translateX} ${
                  index === lastIndex
                    ? "max-sm:w-full max-sm:h-full max-md:w-[calc(652*var(--scale))] max-md:h-[calc(378*var(--scale))] max-lg:w-[calc(542*var(--scale))] max-lg:h-[calc(416*var(--scale))] w-[calc(796*var(--scale))] h-[calc(702*var(--scale))]"
                    : "max-lg:w-[calc(245*var(--scale))] max-lg:h-[calc(177*var(--scale))] w-[calc(401*var(--scale))] h-[calc(277*var(--scale))] mr-0"
                } max-sm:flex-col max-sm:mt-0 max-sm:mr-[calc(10*var(--scale))] mr-[calc(17*var(--scale))] max-md:mr-[calc(9.7*var(--scale))] flex flex-row-reverse mt-auto flex-shrink-0 relative overflow-hidden`}
              >
                <Image
                  className="max-sm:h-[calc(203*var(--scale))] max-sm:w-[calc(353*var(--scale))] max-md:w-[calc(299*var(--scale))] max-lg:w-[calc(245*var(--scale))] w-[calc(401*var(--scale))] h-full object-cover object-[center_18%]"
                  src={getStrapiMedia(card?.image?.data?.attributes?.url)}
                  alt="pledge-slider-image"
                  width={401}
                  height={702}
                />
                <div
                  className={`${
                    index === lastIndex
                      ? "max-md:w-[calc(353*var(--scale))] max-sm:h-[calc(399*var(--scale))] max-sm:pl-[calc(22*var(--scale))] max-sm:pr-[calc(54*var(--scale))] max-sm:pt-[calc(73*var(--scale))] max-md:h-[calc(338*var(--scale))] max-md:pt-[calc(95*var(--scale))] max-md:pl-[calc(31*var(--scale))] max-md:pr-[calc(49*var(--scale))] max-lg:w-[calc(297*var(--scale))] max-lg:h-[calc(391*var(--scale))] max-lg:pt-[calc(69*var(--scale))] max-lg:pl-[calc(57.6*var(--scale))] max-lg:pr-[calc(35.4*var(--scale))] w-[calc(395*var(--scale))]"
                      : "hidden max-lg:w-[calc(245*var(--scale))] max-lg:h-[calc(177*var(--scale))]"
                  } max-lg:pl-[calc(57.6*var(--scale))] max-lg:pr-[calc(35.4*var(--scale))] max-lg:pt-[calc(69*var(--scale))] p-[calc(50*var(--scale))] pt-[calc(105*var(--scale))] h-[calc(618*var(--scale))] bg-[#e7e2e0] mt-auto relative`}
                >
                  <div className="max-sm:top-[calc(31*var(--scale))] max-sm:gap-[calc(10*var(--scale))] max-md:top-[calc(49.2*var(--scale))] max-md:gap-[calc(14.6*var(--scale))] max-lg:top-[calc(30*var(--scale))] max-lg:gap-[calc(11.7*var(--scale))] absolute top-[calc(52*var(--scale))] gap-[calc(18.3*var(--scale))] flex items-center ">
                    <div
                      onClick={handlePrev}
                      className="max-sm:w-[calc(42.7*var(--scale))] max-sm:h-[calc(11*var(--scale))] max-md:w-[calc(42.7*var(--scale))] max-md:h-[calc(11*var(--scale))] max-lg:w-[calc(34.3*var(--scale))] max-lg:h-[calc(9*var(--scale))] w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center opacity-[0.2] hover:opacity-[1]"
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
                      className="max-sm:w-[calc(42.7*var(--scale))] max-sm:h-[calc(11*var(--scale))] max-md:w-[calc(42.7*var(--scale))] max-md:h-[calc(11*var(--scale))] max-lg:w-[calc(34.3*var(--scale))] max-lg:h-[calc(9*var(--scale))] w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center"
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
                  <h3 className="max-sm:text-[calc(20*var(--scale))] max-sm:leading-[1.4] max-sm:mb-[calc(8*var(--scale))] max-md:text-[calc(16*var(--scale))] max-md:leading-[0.94] max-md:mb-[calc(16*var(--scale))] max-lg:text-[calc(18*var(--scale))] max-lg:leading-[1.11] max-lg:mb-[calc(15*var(--scale))] text-[calc(28*var(--scale))] leading-[1.14] mb-[calc(24*var(--scale))] font-bold text-black tracking-[calc(1.01*var(--scale))]">
                    {card?.title}
                  </h3>
                  {isVisible && (
                    <p className="max-sm:text-[calc(14*var(--scale))] max-sm:leading-[1.4] max-md:text-[calc(13.5*var(--scale))] max-md:leading-[1.2] max-lg:leading-[1.1] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:text-[calc(1*var(--size-16))] text-[calc(1*var(--size-18))] leading-[1.4] tracking-[calc(0.65*var(--scale))]">
                      {card?.text}
                    </p>
                  )}
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
