"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import arrowImage from "@/public/assets/icons/right-arrow-white.svg";
import { useRouter } from "next/navigation";

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
    <div className="w-full relative h-1 bg-[#4C4C4C]">
      <div
        className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const CuratedExperienceSlider = ({ response }: curatedExperienceProps) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = response?.cards?.length;
  const swiperRef = React.useRef<SwiperType>();
  return (
    <section className="relative text-white p-6 phablet:p-12 tablet:pl-20 desktop:pl-16">
      <div className="tablet:absolute tablet:w-[50%] tablet:top-[15%]">
        <div className="flex font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
          {response?.title}
        </div>
        <div className="flex font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-4 phablet:mb-6 tablet:mt-4">
          {response?.subtitle}
        </div>
        <div className="hidden desktop:flex flex-col gap-5 mt-28">
          <CustomProgressBar
            currentIndex={activeIndex}
            totalSlides={response?.cards?.length}
          />
          <div>
            <div className="flex font-bold text-2xl">{`${
              activeIndex + 1
            } / ${response?.cards?.length}`}</div>
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
          1200: {
            slidesPerView: totalCards >= 4 ? 4 : totalCards,
          },
        }}
      >
        {response?.cards?.map((data: any, i: any) => {
          return (
            <SwiperSlide
              key={i}
              className={`flex ${
                activeIndex === i
                  ? "tablet:basis-[450px] desktop:basis-[650px]"
                  : ""
              }`}
            >
              <div className="bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={i}
                  src={data?.media?.data?.attributes?.url}
                  alt={data?.media?.data?.attributes?.alternativeText}
                  className={`object-cover w-full ${
                    activeIndex === i
                      ? "h-[366px] tablet:h-[521px] desktop:h-[700px] opacity-60"
                      : "h-[366px] tablet:h-48 desktop:h-60"
                  }`}
                />
              </div>
              {activeIndex === i ? (
                <div className="flex flex-col items-end p-4 phablet:p-9 desktop:p-12 gap-2 desktop:gap-4 w-full bottom-0 absolute">
                  <div className="flex items-end text-left font-bold text-lg phablet:text-[28px] text-white">
                    {data?.title}
                  </div>
                  <div className="flex items-end text-left font-medium text-sm tablet:text-lg desktop:text-xl text-white">
                    {data?.subtitle}
                  </div>
                  <button
                    className="hidden desktop:flex py-4 px-7 border-2 border-white text-white text-sm font-bold font-space-grotesk"
                    onClick={() => {
                      router.push(
                        `/perspective/experiences/${data?.article?.data?.id}/${data?.article?.data?.attributes?.article_url}`
                      );
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-end">
        <div className="desktop:hidden w-full tablet:basis-[450px] desktop::basis-[800px] gap-5 mt-4 phablet:mt-8 tablet:mt-9 flex whitespace-nowrap items-center tablet:items-stretch tablet:flex-col">
          <CustomProgressBar
            currentIndex={activeIndex}
            totalSlides={response?.cards?.length}
          />
          <div className="flex justify-between">
            <div className="flex font-bold text-sm phablet:text-base tablet:text-2xl text-white">{`${
              activeIndex + 1
            } / ${response?.cards?.length}`}</div>
            <div className="z-[5] gap-4 hidden tablet:flex">
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
                  className="rotate-180 opacity-5"
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
