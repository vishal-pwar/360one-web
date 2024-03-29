"use client";

import SliderContent from "@/components/slider-content";
import SliderSection from "@/components/slider-section";
import { useRef, useState } from "react";

const BodSliderSection = ({ cards, content }: { cards: any; content: any }) => {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [activeSlideId, setActiveSlideId] = useState(-1);
  const length = cards?.length;
  const handleNext = () => {
    setCurrentSlideId((prevNumber) =>
      prevNumber < length ? prevNumber + 1 : 1
    );
  };

  const handlePrevious = () => {
    setCurrentSlideId((prevNumber) =>
      prevNumber > 1 ? prevNumber - 1 : length
    );
  };

  return (
    <section
      className={`max-sm:pt-[calc(120.5*var(--scale))] max-sm:pb-[calc(23*var(--scale))] max-sm:flex-col-reverse max-md:pt-[calc(112.5*var(--scale))] max-md:pb-[calc(36*var(--scale))] max-md:flex-col-reverse max-md:items-start max-lg:pt-[calc(172*var(--scale))] max-lg:pb-[calc(45.5*var(--scale))] pt-[calc(230*var(--scale))] relative flex items-center py-[calc(53.5*var(--scale))]
      max-sm:before:h-[calc(458*var(--scale))] overflow-hidden max-sm:before:w-full max-md:before:w-[calc(588*var(--scale))] max-md:before:h-[calc(457*var(--scale))] max-md:before:left-0 max-md:before:top-[inherit] max-md:before:bottom-0 max-lg:before:h-full before:content-[''] before:-z-10 before:absolute before:left-0 before:top-0 before:h-full ${
        activeSlideId > -1
          ? "max-md:before:w-full max-md:before:translate-x-0 max-lg:before:left-[calc(36*var(--scale))] before:max-lg:w-[calc(988*var(--scale))] before:max-lg:translate-x-0 before:w-[calc(1476*var(--scale))] before:translate-x-[8.4%]"
          : "max-lg:before:left-[calc(36*var(--scale))] max-lg:before:w-[calc(588*var(--scale))] before:w-[calc(954*var(--scale))]"
      } before:bg-[#c1b6b1] before:transition-all before:ease-in-out before:duration-300
      `}
    >
      <div
        className={`${
          activeSlideId > -1
            ? "w-full"
            : "max-sm:w-full max-md:w-[96%] max-lg:w-[71%] w-[65.2%]"
        } `}
      >
        <SliderSection
          nextRef={swiperNavPrevRef}
          prevRef={swiperNavNextRef}
          cards={cards}
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        />
      </div>
      <div
        className={`max-sm:w-full max-md:w-full max-md:max-w-[calc(592*var(--scale))] h-full flex-1 select-none ${
          activeSlideId > -1 && "max-md:block hidden"
        }`}
      >
        <div className="max-sm:pb-[calc(59*var(--scale))] max-sm:pr-[calc(20*var(--scale))] max-md:pl-[calc(28*var(--scale))] max-md:pr-[calc(35*var(--scale))] max-md:pt-0 max-md:pb-[calc(48*var(--scale))] max-lg:pl-[calc(30*var(--scale))] max-lg:pr-[calc(35*var(--scale))] max-lg:py-[calc(24*var(--scale))] h-full w-full max-w-[calc(1600*var(--scale))] m-auto p-[calc(50*var(--scale))calc(125*var(--scale))]">
          <SliderContent
            nextRef={swiperNavNextRef}
            prevRef={swiperNavPrevRef}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            currentSlideId={currentSlideId}
            totalSlides={cards?.length}
            content={content}
            contentFillColor="black"
          />
        </div>
      </div>
      <div
        className={`max-md:w-[calc(12.8*var(--scale))] max-md:h-[calc(87*var(--scale))] max-md:top-[calc(184*var(--scale))] max-lg:w-[calc(15*var(--scale))] max-lg:h-[calc(100*var(--scale))] w-[calc(40*var(--scale))] h-[calc(245*var(--scale))] bg-black absolute top-[50%] right-0 -translate-y-[50%] ${
          activeSlideId > -1 && "max-md:block hidden"
        }`}
      ></div>
    </section>
  );
};

export default BodSliderSection;
