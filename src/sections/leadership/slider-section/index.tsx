"use client";
import SwiperCardsNavigation from "@/components/swiper-cards";
import { useRef } from "react";

const cards = [
  { title: "Card 1" },
  { title: "Card 2" },
  { title: "Card 3" },
  { title: "Card 4" },
  // Add more cards as needed
];
const SliderSection = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <section
      className="relative flex items-center py-[calc(53.5*var(--scale))]
      
      "
    >
      <div className="w-[62.5%] relative overflow-x-clip h-[calc(584*var(--scale))]">
        <SwiperCardsNavigation
          prevSwiperRef={swiperNavPrevRef}
          nextSwiperRef={swiperNavNextRef}
        />
      </div>
      <div className="h-full flex-1 select-none">
        <div className="h-full w-full max-w-[calc(1600*var(--scale))] m-auto p-[calc(50*var(--scale))calc(125*var(--scale))]">
          <div className="flex flex-col h-full">
            <h2 className="text-[calc(1*var(--size-42))] leading-[1.14] tracking-[calc(-1*var(--scale))] mt-auto mb-[calc(24*var(--scale))] max-w-[calc(287*var(--scale))] font-bold select-none">
              360 ONE Board of Directors
            </h2>
            <p className="text-[calc(1*var(--size-20))] leading-[1.5] mb-[calc(139*var(--scale))] max-w-[calc(263*var(--scale))] select-none">
              Know the individuals who provide foresight and direction to 360
              ONE.
            </p>
            <div className="flex items-center justify-between gap-[calc(18*var(--scale))] pt-[calc(25*var(--scale))] border-black border-solid border-t-[calc(2*var(--scale))]">
              <div
                ref={swiperNavPrevRef}
                className="fill-black opacity-[0.4] cursor-pointer w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] select-none hover:opacity-[1]"
              >
                <svg
                  width="54"
                  height="14"
                  viewBox="0 0 54 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 14 0 7.583 8.653 0l.097 6.222h44.916v2.139H8.75z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </div>
              <div
                ref={swiperNavNextRef}
                className="fill-black opacity-[0.4] cursor-pointer w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] select-none hover:opacity-[1]"
              >
                <svg
                  width="54"
                  height="14"
                  viewBox="0 0 54 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m44.916 14 8.75-6.417L45.013 0l-.097 6.222H0v2.139h44.916z"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </div>
              <div className="text-[calc(1*var(--size-20))] ml-auto select-none">
                <span className="text-[calc(30*var(--scale))] select-none">
                  1
                </span>
                {" / "}
                <span className="select-none">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
