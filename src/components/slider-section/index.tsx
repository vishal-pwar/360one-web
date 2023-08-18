import { StaticImageData } from "next/image";
import { MutableRefObject } from "react";
import SwiperCardsNavigation from "../swiper-cards";
import SliderContent from "../slider-content";

interface SliderSectionProps {
  nextRef: MutableRefObject<HTMLDivElement | null>;
  prevRef: MutableRefObject<HTMLDivElement | null>;
  handleNext: () => void;
  handlePrevious: () => void;
  currentSlideId: number;
  totalSlides: number;
  slidesPerView?: number;
  cards: {
    name: string;
    designation: string;
    image: StaticImageData;
  }[];
  width?: number;
  content: {
    title: string;
    subtitle: string;
  };
  contentFillColor: string;
  hasPadding?: boolean;
}

const SliderSection = ({
  nextRef,
  prevRef,
  cards,
  handleNext,
  handlePrevious,
  currentSlideId,
  totalSlides,
  width = 62.5,
  content,
  contentFillColor,
  slidesPerView,
  hasPadding,
}: SliderSectionProps) => {
  return (
    <>
      <div
        className={`w-[${width}%] relative overflow-x-clip h-[calc(584*var(--scale))] ${
          hasPadding &&
          "before:content-[''] before:absolute before:w-[calc(176*var(--scale))] before:h-[calc(96*var(--scale))] before:bg-white before:top-[calc(-17*var(--scale))] before:left-0 pl-[calc(42*var(--scale))]"
        } `}
      >
        <SwiperCardsNavigation
          prevSwiperRef={prevRef}
          nextSwiperRef={nextRef}
          cards={cards}
          slidesPerView={slidesPerView}
        />
      </div>
      <SliderContent
        nextRef={nextRef}
        prevRef={prevRef}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentSlideId={currentSlideId}
        totalSlides={totalSlides}
        content={content}
        contentFillColor={contentFillColor}
      />
    </>
  );
};

export default SliderSection;
