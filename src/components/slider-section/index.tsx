import { StaticImageData } from "next/image";
import { MutableRefObject } from "react";
import SwiperCardsNavigation from "../swiper-cards";

interface SliderSectionProps {
  nextRef: MutableRefObject<HTMLDivElement | null>;
  prevRef: MutableRefObject<HTMLDivElement | null>;
  cards: any;
  width?: number;
  hasPadding?: boolean;
  slidesPerView?: number;
}

const SliderSection = ({
  nextRef,
  prevRef,
  cards,
  width = 62.5,
  hasPadding,
  slidesPerView,
}: SliderSectionProps) => {
  return (
    <div
      className={`max-sm:w-full max-sm:pl-[14px] max-md:h-[calc(396*var(--scale))] max-md:w-[96%] max-lg:h-[calc(424*var(--scale))] max-lg:w-[71%] w-[${width}%] relative overflow-x-clip h-[calc(584*var(--scale))] ${
        hasPadding &&
        "max-lg:before:hidden before:content-[''] before:absolute before:w-[calc(176*var(--scale))] before:h-[calc(96*var(--scale))] before:bg-white before:top-[calc(-17*var(--scale))] before:left-0 pl-[calc(42*var(--scale))]"
      } `}
    >
      <SwiperCardsNavigation
        prevSwiperRef={prevRef}
        nextSwiperRef={nextRef}
        cards={cards}
        slidesPerView={slidesPerView}
      />
    </div>
  );
};

export default SliderSection;
