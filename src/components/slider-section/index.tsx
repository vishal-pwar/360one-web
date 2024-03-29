import { Dispatch, MutableRefObject, SetStateAction } from "react";
import SwiperCardsNavigation from "../swiper-cards";

interface SliderSectionProps {
  nextRef: MutableRefObject<HTMLDivElement | null>;
  prevRef: MutableRefObject<HTMLDivElement | null>;
  cards: any;
  hasPadding?: boolean;
  activeSlideId?: number;
  setActiveSlideId?: Dispatch<SetStateAction<number>>;
}

const SliderSection = ({
  nextRef,
  prevRef,
  cards,
  hasPadding,
  activeSlideId,
  setActiveSlideId,
}: SliderSectionProps) => {
  return (
    <div
      className={`max-sm:pl-[14px] max-sm:h-[calc(420*var(--scale))] max-md:h-[calc(396*var(--scale))] max-lg:h-[calc(424*var(--scale))] w-full relative overflow-x-clip h-[calc(584*var(--scale))] ${
        hasPadding &&
        "max-lg:before:hidden before:content-[''] before:absolute before:w-[calc(176*var(--scale))] before:h-[calc(96*var(--scale))] before:bg-white before:top-[calc(-17*var(--scale))] before:left-0 max-lg:pl-0 pl-[calc(42*var(--scale))]"
      } `}
    >
      <SwiperCardsNavigation
        prevSwiperRef={prevRef}
        nextSwiperRef={nextRef}
        cards={cards}
        activeSlideId={activeSlideId}
        setActiveSlideId={setActiveSlideId}
      />
    </div>
  );
};

export default SliderSection;
