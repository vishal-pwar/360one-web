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
import SliderSection from "@/components/slider-section";

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

const content = {
  title: "360 ONE",
  subtitle: "Know the team that anchors 360 ONE",
};

const TeamSliderSection = () => {
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
    <section className="max-sm:hidden">
      <div className="p-[calc(50*var(--scale))calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="pb-[calc(39*var(--scale))] border-black border-solid border-b-[calc(2*var(--scale))]">
          <h2 className="text-[calc(1*var(--size-38))] font-bold leading-[1.26] tracking-[calc(0.9*var(--scale))] mb-[calc(8*var(--scale))]">
            Our Leadership
          </h2>
          <p className="text-[calc(1*var(--size-20))] leading-[1.75] max-w-[calc(950*var(--scale))] opacity-[0.8]">
            Meet the professionals that lead 360 One’s wealth and asset business
            to help clients achieve more.
          </p>
        </div>
      </div>
      <section
        className="flex flex-row-reverse pt-[calc(63*var(--scale))] pb-[calc(80*var(--scale))] items-center relative before:bg-black before:w-[calc(760*var(--scale))] 
      before:-z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:transition before:ease-in-out before:duration-300"
      >
        <SliderSection
          nextRef={swiperNavNextRef}
          prevRef={swiperNavPrevRef}
          cards={boardOfDirectorsCards}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          currentSlideId={currentSlideId}
          totalSlides={boardOfDirectorsCards.length}
          width={68}
          content={content}
          contentFillColor="white"
          slidesPerView={3.2}
          hasPadding
        />
      </section>
    </section>
  );
};

export default TeamSliderSection;
