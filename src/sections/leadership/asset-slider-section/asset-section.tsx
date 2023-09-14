"use client";
import { useRef, useState } from "react";
import SliderSection from "@/components/slider-section";
import SliderContent from "@/components/slider-content";

const AssetSliderSection = ({
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
  const length = cards.length;
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
      className={`max-sm:pt-[calc(30*var(--scale))] max-sm:pb-[calc(36*var(--scale))] max-sm:mt-[calc(30*var(--scale))] max-md:pt-[calc(33*var(--scale))] max-md:pb-[calc(33*var(--scale))] max-md:mt-[calc(50*var(--scale))] max-md:mb-[calc(12*var(--scale))] max-md:flex-col-reverse max-lg:pt-[calc(35*var(--scale))] max-lg:pb-[calc(55*var(--scale))] max-lg:mt-[calc(40.3*var(--scale))] max-lg:mb-[calc(20*var(--scale))] flex flex-row-reverse items-center relative pt-[calc(79*var(--scale))] pb-[calc(72*var(--scale))] my-[calc(100*var(--scale))]
    max-sm:before:w-full max-md:before:w-[calc(620*var(--scale))] max-lg:before:w-[calc(428*var(--scale))] before:bg-asset-purple before:left-0 before:-z-10 before:content-[''] before:absolute before:top-0 before:h-full before:transition-all before:ease-in-out before:duration-300 ${
      activeSlideId > -1
        ? "max-md:before:w-full max-lg:before:w-[calc(988*var(--scale))] max-lg:before:translate-x-0 before:w-[calc(1476*var(--scale))] before:translate-x-[8.4%] max-lg:after:translate-x-[calc(556*var(--scale))] after:translate-x-[calc(-740*var(--scale))]"
        : "before:w-[calc(1061*var(--scale))]"
    }
    max-md:after:hidden max-lg:after:w-[calc(40*var(--scale))] max-lg:after:h-[calc(40*var(--scale))] max-lg:after:top-[calc(-40*var(--scale))] max-lg:after:left-[calc(428*var(--scale))] after:content-[''] after:bg-asset-purple after:absolute after:bottom-[calc(-60*var(--scale))] after:w-[calc(60*var(--scale))] after:left-[calc(1061*var(--scale))] after:h-[calc(60*var(--scale))] after:z-20 after:transition-all after:duration-300 after:ease-in-out after:delay-200`}
    >
      <div
        className={`max-sm:w-full max-md:w-full max-md:pl-[14px] ${
          activeSlideId > -1 ? "w-full" : "max-lg:w-[71%] w-[65.2%]"
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
        className={`max-md:mr-auto max-md:w-full max-md:max-w-[calc(532*var(--scale))] h-full flex-1 select-none ${
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
            totalSlides={cards.length}
            content={content}
            contentFillColor="white"
          />
        </div>
      </div>
      <div
        className={`max-sm:hidden max-md:w-[calc(11*var(--scale))] max-md:h-[calc(80*var(--scale))] max-md:top-[calc(129*var(--scale))] max-lg:w-[calc(16*var(--scale))] max-lg:h-[calc(107*var(--scale))] max-lg:top-[calc(131*var(--scale))] max-lg:translate-x-0 max-lg:translate-y-0 w-[calc(40*var(--scale))] h-[calc(245*var(--scale))] bg-white absolute top-[50%] left-0 -translate-y-[50%] ${
          activeSlideId > -1 && "max-md:block hidden"
        }`}
      ></div>
    </section>
  );
};

export default AssetSliderSection;
