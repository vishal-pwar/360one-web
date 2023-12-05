"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import arrowImage from "@/public/assets/icons/Right-arrow-black.svg";
import React from "react";

interface ourIPsProps {
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

const OurIpsSlider = ({ response }: ourIPsProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = response?.cards?.length;
  const swiperRef = React.useRef<SwiperType>();
  return (
    <section className="relative">
      <div className="tablet:absolute tablet:w-[40%] tablet:top-[5%] p-6 phablet:p-12 tablet:p-0">
        <div className="flex font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
          {response?.title}
        </div>
        <div className="flex font-normal text-base phablet:text-lg tablet:text-xl mt-3 phablet:mb-9 tablet:mt-4 tablet:mb-24">
          {response?.subheading}
        </div>
        <div className="hidden desktop:flex flex-col gap-5">
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
            slidesPerView: totalCards >= 4 ? "4" : totalCards,
          },
        }}
      >
        {response?.cards?.map((data: any, i: any) => {
          return (
            <SwiperSlide
              key={i}
              className={`flex ${
                activeIndex === i
                  ? "tablet:basis-[600px] desktop:basis-[700px]"
                  : ""
              }`}
            >
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={i}
                  src={data?.image?.data?.attributes?.url}
                  alt="slider Image"
                  className={`object-cover w-full ${
                    activeIndex === i
                      ? "h-[265px] phablet:h-[440px] tablet:h-[460px]"
                      : "h-[265px] phablet:h-[440px] tablet:h-64"
                  }`}
                />
              </div>
              {activeIndex === i ? (
                <div className="flex flex-col items-end p-5 phablet:p-9 tablet:p-12 gap-2 tablet:gap-4 w-full bg-[#FD7740]">
                  <div className="flex items-end text-left font-bold text-lg phablet:text-2xl tablet:text-[28px] text-white">
                    {data?.title}
                  </div>
                  <div className="flex items-end text-left font-medium text-sm tablet:text-xl text-white">
                    {data?.subheading}
                  </div>
                  <button className=" hidden desktop:flex py-4 px-7 border-2 border-white text-white text-sm font-bold font-space-grotesk">
                    READ MORE
                  </button>
                </div>
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-end bg-[#FD7740] tablet:bg-white">
        <div className="desktop:hidden flex w-full tablet:basis-[500px] tablet:basis-[600px] flex-col gap-5 pt-5 px-6 tablet:px-0 mb-10">
          <CustomProgressBar
            currentIndex={activeIndex}
            totalSlides={response?.cards?.length}
          />
          <div className="flex justify-between">
            <div className="flex font-bold text-sm sm:text-base tablet:text-desktop">{`${
              activeIndex + 1
            } / ${response?.cards?.length}`}</div>
            <div className="flex z-[5] gap-4 items-center">
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

export default OurIpsSlider;
