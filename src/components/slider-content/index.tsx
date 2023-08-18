import { MutableRefObject } from "react";

interface SliderContentProps {
  nextRef: MutableRefObject<HTMLDivElement | null>;
  prevRef: MutableRefObject<HTMLDivElement | null>;
  handleNext: () => void;
  handlePrevious: () => void;
  currentSlideId: number;
  totalSlides: number;
  content: {
    title: string;
    subtitle: string;
  };
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
    <div className="h-full flex-1 select-none">
      <div className="h-full w-full max-w-[calc(1600*var(--scale))] m-auto p-[calc(50*var(--scale))calc(125*var(--scale))]">
        <div className="flex flex-col h-full">
          <h2
            className={`text-[calc(1*var(--size-42))] leading-[1.14] tracking-[calc(-1*var(--scale))] mt-auto mb-[calc(24*var(--scale))] max-w-[calc(287*var(--scale))] font-bold select-none text-${contentFillColor}`}
          >
            {content.title}
          </h2>
          <p
            className={`text-[calc(1*var(--size-20))] leading-[1.5] mb-[calc(139*var(--scale))] max-w-[calc(263*var(--scale))] select-none text-${contentFillColor}`}
          >
            {content.subtitle}
          </p>
          <div
            className={`flex items-center justify-between gap-[calc(18*var(--scale))] pt-[calc(25*var(--scale))] border-${contentFillColor} border-solid border-t-[calc(2*var(--scale))]`}
          >
            <div
              ref={nextRef}
              onClick={handlePrevious}
              className={`fill-${contentFillColor} opacity-[0.4] cursor-pointer w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] select-none hover:opacity-[1]`}
            >
              <svg
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
              ref={prevRef}
              onClick={handleNext}
              className={`fill-${contentFillColor} opacity-[0.4] cursor-pointer w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] select-none hover:opacity-[1]`}
            >
              <svg
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
              className={`text-[calc(1*var(--size-20))] ml-auto select-none text-${contentFillColor}`}
            >
              <span className="text-[calc(30*var(--scale))] text-inherit select-none">
                {currentSlideId}
              </span>
              {" / "}
              <span className="select-none text-inherit">{totalSlides}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
