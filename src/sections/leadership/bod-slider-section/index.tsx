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
  title: "360 ONE Board of Directors",
  subtitle:
    "Know the individuals who provide foresight and direction to 360 ONE",
};

const BodSliderSection = () => {
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
      className="max-lg:pt-[calc(122*var(--scale))] pt-[calc(210*var(--scale))] relative flex items-center py-[calc(53.5*var(--scale))]
      before:content-[''] before:-z-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[calc(954*var(--scale))] before:bg-[#c1b6b1]
      "
    >
      <SliderSection
        nextRef={swiperNavNextRef}
        prevRef={swiperNavPrevRef}
        cards={boardOfDirectorsCards}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentSlideId={currentSlideId}
        totalSlides={boardOfDirectorsCards.length}
        width={62.5}
        content={content}
        contentFillColor="black"
      />
      <div className="w-[calc(40*var(--scale))] h-[calc(245*var(--scale))] bg-black absolute top-[50%] right-0 -translate-y-[50%]"></div>
    </section>
  );
};

export default BodSliderSection;
