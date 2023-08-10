"use client";
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
  title: "360 ONE Wealth",
  subtitle:
    "Meet the team that is the driving force behind our wealth management business.",
};

const WealthSliderSection = () => {
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
      className="pt-[calc(98*var(--scale))] pb-[calc(53*var(--scale))] mt-[calc(64*var(--scale))] flex items-center relative 
      before:bg-wealth-orange before:w-[calc(646*var(--scale))] before:right-0 before:-z-10 before:content-[''] before:absolute before:top-0 before:h-full
      after:content-[''] after:bg-wealth-orange after:absolute after:top-[calc(-60*var(--scale))] after:w-[calc(60*var(--scale))] after:right-[calc(645*var(--scale))] after:h-[calc(60*var(--scale))] after:z-20"
    >
      <SliderSection
        nextRef={swiperNavNextRef}
        prevRef={swiperNavPrevRef}
        cards={boardOfDirectorsCards}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentSlideId={currentSlideId}
        totalSlides={boardOfDirectorsCards.length}
        content={content}
        contentFillColor="white"
      />
      <div className="w-[calc(40*var(--scale))] h-[calc(245*var(--scale))] bg-white absolute top-[50%] right-0 -translate-y-[50%]"></div>
    </section>
  );
};

export default WealthSliderSection;
