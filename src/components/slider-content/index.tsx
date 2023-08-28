import { MutableRefObject } from "react";

interface SliderContentProps {
  nextRef: MutableRefObject<HTMLDivElement | null>;
  prevRef: MutableRefObject<HTMLDivElement | null>;
  handleNext: () => void;
  handlePrevious: () => void;
  currentSlideId: number;
  totalSlides: number;
  content: any;
  contentFillColor?: string;
}

const SliderContent = ({
  nextRef,
  prevRef,
  handleNext,
  handlePrevious,
  currentSlideId,
  totalSlides,
  content,
  contentFillColor,
}: SliderContentProps) => {
  return (
    <div className="flex flex-col h-full">
      <h2
        className={`max-md:max-w-full max-md:mb-[calc(4.6*var(--scale))] text-[calc(1*var(--size-42))] leading-[1.14] tracking-[calc(-1*var(--scale))] mt-auto mb-[calc(24*var(--scale))] max-w-[calc(287*var(--scale))] font-bold select-none text-${contentFillColor}`}
      >
        {content.title}
      </h2>
      <p
        className={`max-sm:max-w-[calc(247*var(--scale))] max-md:max-w-[calc(466*var(--scale))] max-md:w-full max-md:mb-[calc(16*var(--scale))] max-lg:w-full max-lg:max-w-full max-lg:mb-[calc(50*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.5] mb-[calc(139*var(--scale))] max-w-[calc(263*var(--scale))] select-none text-${contentFillColor}`}
      >
        {content.text}
      </p>
      <div
        className={`max-md:pt-[calc(14.5*var(--scale))] max-lg:pt-[calc(16*var(--scale))] flex items-center justify-between gap-[calc(18*var(--scale))] pt-[calc(25*var(--scale))] border-${contentFillColor} border-solid border-t-[calc(2*var(--scale))]`}
      >
        <div
          ref={prevRef}
          onClick={handlePrevious}
          className={`max-md:w-[calc(45*var(--scale))] max-md:h-[calc(11.5*var(--scale))] max-lg:w-[calc(34.3*var(--scale))] max-lg:h-[calc(9*var(--scale))] fill-${contentFillColor} opacity-[0.4] cursor-pointer w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] select-none hover:opacity-[1]`}
        >
          <svg
            className="h-full w-full"
            width="54"
            height="14"
            viewBox="0 0 54 14"
            xmlns="http://www.w3.org/2000/svg"
            fill={contentFillColor}
          >
            <path
              d="M8.75 14 0 7.583 8.653 0l.097 6.222h44.916v2.139H8.75z"
              fillRule="nonzero"
            ></path>
          </svg>
        </div>
        <div
          ref={nextRef}
          onClick={handleNext}
          className={`max-md:w-[calc(45*var(--scale))] max-md:h-[calc(11.5*var(--scale))] max-lg:w-[calc(34.3*var(--scale))] max-lg:h-[calc(9*var(--scale))] fill-${contentFillColor} opacity-[0.4] cursor-pointer w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] select-none hover:opacity-[1]`}
        >
          <svg
            className="h-full w-full"
            width="54"
            height="14"
            viewBox="0 0 54 14"
            xmlns="http://www.w3.org/2000/svg"
            fill={contentFillColor}
          >
            <path
              d="m44.916 14 8.75-6.417L45.013 0l-.097 6.222H0v2.139h44.916z"
              fillRule="nonzero"
            ></path>
          </svg>
        </div>
        <div
          className={`max-md:text-[calc(12*var(--scale))] max-lg:text-[calc(13*var(--scale))] items-end text-[calc(1*var(--size-20))] ml-auto select-none text-${contentFillColor} flex`}
        >
          <span className="max-md:text-[calc(24*var(--scale))] max-lg:text-[calc(24*var(--scale))] max-lg:mb-[-4px] max-lg:pr-[3px] mb-[-3px] text-[calc(30*var(--scale))] text-${contentFillColor} select-none">
            {currentSlideId}
          </span>
          <span className="max-md:text-[calc(12*var(--scale))] max-lg:text-[calc(13*var(--scale))] text-[calc(1*var(--size-20))] mb-[3px] text-${contentFillColor} select-none">
            /
          </span>
          <span className="max-md:text-[calc(12*var(--scale))] max-lg:text-[calc(13*var(--scale))] select-none text-[calc(1*var(--size-20))] text-${contentFillColor}">
            {totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
