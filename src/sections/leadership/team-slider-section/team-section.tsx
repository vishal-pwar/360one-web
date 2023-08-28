"use client";
import { useRef, useState } from "react";
import SliderSection from "@/components/slider-section";
import SliderContent from "@/components/slider-content";

const TeamSliderSection = ({
  cards,
  content,
}: {
  cards: any;
  content: any;
}) => {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
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
    <section>
      <div className="max-sm:pt-[calc(33*var(--scale))] max-sm:pb-[calc(22*var(--scale))] max-sm:px-[calc(21*var(--scale)sm max-md:pt-[calc(30*var(--scale))] max-md:pb-[calc(25*var(--scale))] max-md:px-[calc(28*var(--scale))] max-lg:pt-[calc(48*var(--scale))] max-lg:pb-[calc(29*var(--scale))] max-lg:px-[calc(36*var(--scale))] p-[calc(50*var(--scale))calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-md:pb-[calc(25*var(--scale))] max-lg:pb-[calc(27*var(--scale))] pb-[calc(39*var(--scale))] border-black border-solid border-b-[calc(2*var(--scale))]">
          <h2 className="max-sm:mb-[calc(8.7*var(--scale))] text-[calc(1*var(--size-38))] font-bold leading-[1.26] tracking-[calc(0.9*var(--scale))] mb-[calc(8*var(--scale))]">
            {content.sectionTitle}
          </h2>
          <p className="max-sm:max-w-full max-sm:leading-[1.43] max-lg:max-w-[calc(692*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.75] max-w-[calc(950*var(--scale))] opacity-[0.8]">
            {content.sectionText}
          </p>
        </div>
      </div>
      <section
        className="max-sm:pt-[calc(30*var(--scale))] max-sm:pb-[calc(37*var(--scale))] max-md:pt-[calc(45*var(--scale))] max-md:pb-[calc(28*var(--scale))] max-md:flex-col-reverse max-md:items-start max-lg:pt-[calc(38.5*var(--scale))] max-lg:pb-[calc(33.5*var(--scale))] flex flex-row-reverse pt-[calc(63*var(--scale))] pb-[calc(80*var(--scale))] items-center relative before:bg-black before:w-[calc(760*var(--scale))] 
      max-sm:before:w-full max-md:before:w-[calc(628*var(--scale))] max-lg:before:w-[calc(507*var(--scale))] before:-z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:transition before:ease-in-out before:duration-300"
      >
        <SliderSection
          nextRef={swiperNavNextRef}
          prevRef={swiperNavPrevRef}
          cards={cards}
          width={68}
          slidesPerView={3.2}
          hasPadding
        />
        <div className="max-md:w-full max-md:max-w-[calc(592*var(--scale))] h-full flex-1 select-none">
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
      </section>
    </section>
  );
};

export default TeamSliderSection;
