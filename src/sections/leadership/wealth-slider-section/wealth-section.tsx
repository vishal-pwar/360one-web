"use client";
import { useRef, useState } from "react";
import SliderSection from "@/components/slider-section";
import SliderContent from "@/components/slider-content";

const WealthSliderSection = ({
  cards,
  content,
}: {
  cards: any;
  content: any;
}) => {
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
      className={`max-sm:pt-[calc(30*var(--scale))] max-sm:pb-[calc(29*var(--scale))] max-sm:mt-[calc(30*var(--scale))] max-md:pt-[calc(45*var(--scale))] max-md:pb-[calc(28*var(--scale))] max-md:flex-col-reverse max-md:items-start max-lg:pt-[calc(34*var(--scale))] max-lg:pb-[calc(35*var(--scale))] pt-[calc(98*var(--scale))] pb-[calc(53*var(--scale))] mt-[calc(64*var(--scale))] flex items-center relative 
      max-md:before:w-[calc(620*var(--scale))] before:bg-wealth-orange ${
        activeSlideId > -1
          ? "max-md:before:w-full max-lg:before:w-[calc(988*var(--scale))] before:w-[calc(1476*var(--scale))] before:translate-x-0 before:right-[inherit] before:left-[initial] after:max-lg:translate-x-[calc(428*var(--scale))] after:translate-x-[calc(348*var(--scale))]"
          : "max-lg:before:w-[calc(428*var(--scale))] before:w-[calc(646*var(--scale))] before:right-0"
      } before:-z-10 before:content-[''] before:absolute before:top-0 before:h-full before:transition-all before:duration-300 before:ease-in-out
      max-md:after:hidden max-lg:after:w-[calc(40*var(--scale))] max-lg:after:h-[calc(40*var(--scale))] max-lg:after:top-[calc(-40*var(--scale))] max-lg:after:right-[calc(428*var(--scale))] after:content-[''] after:bg-wealth-orange after:absolute after:top-[calc(-60*var(--scale))] after:w-[calc(60*var(--scale))] after:right-[calc(645*var(--scale))] after:h-[calc(60*var(--scale))] after:z-20 after:transition-all after:duration-300 after:ease-in-out`}
    >
      <div
        className={`max-sm:w-full ${
          activeSlideId > -1
            ? "w-full"
            : "max-md:w-[96%] max-lg:w-[71%] w-[65.2%]"
        }`}
      >
        <SliderSection
          nextRef={swiperNavNextRef}
          prevRef={swiperNavPrevRef}
          cards={cards}
          activeSlideId={activeSlideId}
          setActiveSlideId={setActiveSlideId}
        />
      </div>
      <div
        className={`max-md:ml-auto max-md:mr-[calc(57*var(--scale))] max-md:w-full max-md:max-w-[calc(532*var(--scale))] h-full flex-1 select-none ${
          activeSlideId > -1 && "max-md:block hidden"
        }`}
      >
        <div className="max-sm:pb-[calc(20*var(--scale))] max-sm:pr-[calc(20*var(--scale))] max-md:pl-[calc(28*var(--scale))] max-md:pr-[calc(35*var(--scale))] max-md:pt-0 max-md:pb-[calc(48*var(--scale))] max-lg:pl-[calc(30*var(--scale))] max-lg:pr-[calc(35*var(--scale))] max-lg:py-[calc(24*var(--scale))] h-full w-full max-w-[calc(1600*var(--scale))] m-auto p-[calc(50*var(--scale))calc(125*var(--scale))]">
          <SliderContent
            nextRef={swiperNavNextRef}
            prevRef={swiperNavPrevRef}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            currentSlideId={currentSlideId}
            totalSlides={cards?.length}
            content={content}
            contentFillColor="white"
          />
        </div>
      </div>
      <div
        className={`max-sm:w-[calc(13*var(--scale))] max-sm:h-[calc(105*var(--scale))] max-md:w-[calc(15*var(--scale))] max-md:h-[calc(124*var(--scale))] max-lg:w-[calc(15*var(--scale))] max-lg:h-[calc(100*var(--scale))] w-[calc(40*var(--scale))] h-[calc(245*var(--scale))] bg-white absolute top-[50%] right-0 -translate-y-[50%] ${
          activeSlideId > -1 && "max-md:block hidden"
        }`}
      ></div>
    </section>
  );
};

export default WealthSliderSection;
