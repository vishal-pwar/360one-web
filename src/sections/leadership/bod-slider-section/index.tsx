"use client";
import SwiperCardsNavigation from "@/components/swiper-cards";
import NileshVikramsey from "@/public/assets/images/nilesh-vikramsey.png";
import NirmalJain from "@/public/assets/images/nirmal-jain.png";
import Venkatraman from "@/public/assets/images/venkataraman-rajamani.png";
import Karan from "@/public/assets/images/karan.png";
import YatinShah from "@/public/assets/images/yatin-shah.png";
import Geeta from "@/public/assets/images/geeta.png";
import Subbaraman from "@/public/assets/images/Mr-S-Narayan-1.jpeg";
import Pankaj from "@/public/assets/images/Pankaj-Vaish .jpeg";
import Pavninder from "@/public/assets/images/Pavninder-Singh.jpeg";
import Rishi from "@/public/assets/images/Rishi-Mandawat.jpeg";

import { useRef, useState } from "react";

const boardOfDirectorsCards = [
  {
    name: "Nilesh Vikamsey",
    designation: "Independent Director, Chairman",
    image: NileshVikramsey,
  },
  {
    name: "Nirmal Jain",
    designation: "Non-Executive Director and Promoter",
    image: NirmalJain,
  },
  {
    name: "Venkataraman Rajamani",
    designation: "Non-Executive Director and Promoter",
    image: Venkatraman,
  },
  { name: "Karan Bhagat", designation: "Managing Director", image: Karan },
  {
    name: "Yatin Shah",
    designation: "Non-Executive Director",
    image: YatinShah,
  },
  { name: "Geeta Mathur", designation: "Independent Director", image: Geeta },
  {
    name: "Subbaraman Narayan",
    designation: "Independent Director",
    image: Subbaraman,
  },
  { name: "Pankaj Vaish", designation: "Independent Director", image: Pankaj },
  {
    name: "Pavninder Singh",
    designation: "Nominee Director",
    image: Pavninder,
  },
  { name: "Rishi Mandawat", designation: "Nominee Director", image: Rishi },
  // Add more cards as needed
];
const SliderSection = () => {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const handleNext = () => {
    setCurrentSlideId((prevNumber) => (prevNumber < 10 ? prevNumber + 1 : 1));
  };

  const handlePrevious = () => {
    setCurrentSlideId((prevNumber) => (prevNumber > 1 ? prevNumber - 1 : 10));
  };
  return (
    <section
      className="relative flex items-center py-[calc(53.5*var(--scale))]
      before:content-[''] before:-z-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[calc(954*var(--scale))] before:bg-[#c1b6b1]
      "
    >
      <div className="w-[62.5%] relative overflow-x-clip h-[calc(584*var(--scale))]">
        <SwiperCardsNavigation
          prevSwiperRef={swiperNavPrevRef}
          nextSwiperRef={swiperNavNextRef}
          cards={boardOfDirectorsCards}
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
                ref={swiperNavNextRef}
                onClick={handlePrevious}
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
                ref={swiperNavPrevRef}
                onClick={handleNext}
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
                  {currentSlideId}
                </span>
                {" / "}
                <span className="select-none">
                  {boardOfDirectorsCards.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(40*var(--scale))] h-[calc(245*var(--scale))] bg-black absolute top-[50%] right-0 -translate-y-[50%]"></div>
    </section>
  );
};

export default SliderSection;
