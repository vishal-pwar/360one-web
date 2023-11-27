"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import arrowImage from "@/public/assets/icons/Right-arrow-black.svg";

interface curatedExperienceProps {
  response: any;
}

const CustomProgressBar = ({
  currentIndex,
  totalSlides,
}: {
  currentIndex: number;
  totalSlides: number;
}) => {
  const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="relative h-1 bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const CuratedExperienceSlider = ({ response }: curatedExperienceProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = response.cards.length;
  const swiperRef = React.useRef<SwiperType>();
  return (
    <section className="relative">
      <div className="lg:absolute lg:w-[55%] lg:top-[5%]">
        <div className="flex font-space-grotesk font-bold text-3xl lg:text-[42px]">
          {response.title}
        </div>
        <div className="flex font-space-grotesk font-normal text-base lg:text-xl mt-3 lg:mt-4 mb-4 sm:mb-6 lg:mb-24">
          {response.subheading}
        </div>
        <div className="hidden 2xl:flex flex-col gap-5 ">
          <CustomProgressBar
            currentIndex={activeIndex}
            totalSlides={response.cards.length}
          />
          <div>
            <div className="flex font-space-grotesk font-bold text-2xl">{`${
              activeIndex + 1
            } / ${response.cards.length}`}</div>
            <div className="flex absolute right-0 bottom-0 z-[5] gap-4 items-center">
              <button
                className={`p-0 mt-[3px] ${
                  activeIndex === 0 ? "opacity-25" : ""
                }`}
                disabled={activeIndex === 0}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src={arrowImage}
                  alt="left arrow"
                  className="rotate-180"
                  onClick={() => swiperRef.current?.slidePrev()}
                />
              </button>
              <button
                className={`p-0 ${
                  activeIndex === totalCards - 1 ? "opacity-25" : ""
                }`}
                disabled={activeIndex === totalCards - 1}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Image
                  src={arrowImage}
                  alt="right arrow"
                  // className='bg-black'
                  onClick={() => swiperRef.current?.slideNext()}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination]}
        dir="rtl"
        slidesPerView={1}
        loop={true}
        onSlideChange={(e) => setActiveIndex(e.realIndex)}
        className="curated-swiper w-full"
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {response.cards.map((data: any, i: any) => {
          return (
            <SwiperSlide
              key={i}
              className={`flex ${
                activeIndex === i ? "lg:basis-[400px] 2xl:basis-[630px]" : ""
              }`}
            >
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={i}
                  src={data.image.data.attributes.url}
                  alt="slider Image"
                  // className={`object-cover w-full ${activeIndex === i ? 'h-[500px] 2xl:h-[700px]' : 'h-64'}`}
                  className={`object-cover w-full ${
                    activeIndex === i
                      ? "h-[500px] 2xl:h-[700px]"
                      : "h-[500px] lg:h-64"
                  }
`}
                />
              </div>
              {activeIndex === i ? (
                <div className="flex flex-col items-end p-4 sm:p-6 lg:p-8 2xl:p-12 gap-2 xl:gap-4 w-full bottom-0 absolute">
                  <div className="flex items-end text-left font-space-grotesk font-bold text-lg sm:text-xl xl:text-[28px] text-white">
                    {data.title}
                  </div>
                  <div className="flex items-end text-left font-space-grotesk font-medium text-sm lg:text-lg xl:text-xl text-white">
                    {data.subheading}
                  </div>
                  <button className=" hidden 2xl:flex py-4 px-7 border-2 border-white text-white text-sm font-bold font-space-grotesk">
                    READ MORE
                  </button>
                </div>
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-end mr-4">
        <div className="2xl:hidden flex w-full lg:basis-[400px] flex-col gap-5 mt-9">
          <CustomProgressBar
            currentIndex={activeIndex}
            totalSlides={response.cards.length}
          />
          <div>
            <div className="flex font-space-grotesk font-bold text-sm sm:text-base lg:text-2xl">{`${
              activeIndex + 1
            } / ${response.cards.length}`}</div>
            <div className="flex absolute right-0 bottom-0 z-[5] gap-4 items-center">
              <button
                className={`p-0 mt-[3px] ${
                  activeIndex === 0 ? "opacity-25" : ""
                }`}
                disabled={activeIndex === 0}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src={arrowImage}
                  alt="left arrow"
                  className="rotate-180"
                  onClick={() => swiperRef.current?.slidePrev()}
                />
              </button>
              <button
                className={`p-0 ${
                  activeIndex === totalCards - 1 ? "opacity-25" : ""
                }`}
                disabled={activeIndex === totalCards - 1}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Image
                  src={arrowImage}
                  alt="right arrow"
                  // className='bg-black'
                  onClick={() => swiperRef.current?.slideNext()}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedExperienceSlider;
