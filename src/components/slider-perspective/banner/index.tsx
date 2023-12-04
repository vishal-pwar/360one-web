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

interface BannerSliderProps {
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

const BannerSlider = ({ response }: BannerSliderProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = response?.cards?.length;
  const swiperRef = React.useRef<SwiperType>();

  return (
    <div className="relative">
      <div className="tablet:absolute tablet:w-[45%] tablet:top-[5%] tablet:pl-16">
        <div className="font-bold text-[28px] tablet:text-[52px] tablet:text-6xl text-white">
          The 360 ONE
        </div>
        <div className="font-bold text-[28px] tablet:text-[52px] tablet:text-6xl text-[#FD7740]">
          Perspective
        </div>
        <div className="font-normal text-lg phablet:text-xl text-white mt-2 mb-8">
          {response.subtitle}
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
            slidesPerView: totalCards >= 3 ? "3" : totalCards,
          },
        }}
      >
        {response?.cards?.map((data: any, i: any) => {
          return (
            <SwiperSlide
              key={i}
              className={`flex ${
                activeIndex === i
                  ? "tablet:basis-[500px] desktop:basis-[700px]"
                  : ""
              }`}
            >
              <div className="tablet:relative">
                <div className="hidden desktop:flex desktop:absolute bg-white left-0 mt-3 text-black font-bold text-sm py-2 px-5">
                  {data?.category}
                </div>
                <div className="hidden tablet:flex flex-col tablet:absolute tablet:w-full tablet:items-end bottom-0 pl-6 pb-5">
                  <div
                    className={`flex items-end text-left font-normal tablet:text-sm text-white ${
                      activeIndex === i ? `hidden` : ""
                    } `}
                  >
                    {data?.title}
                  </div>
                  <div
                    className={`flex items-end text-left font-bold tablet:text-xl desktop:text-2xl text-white ${
                      activeIndex === i ? `hidden` : ""
                    }`}
                  >
                    {data?.subtitle}
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={i}
                  src={data?.media?.data?.attributes?.url}
                  alt="banner slider Image"
                  className={`object-cover w-full ${
                    activeIndex === i
                      ? "h-[165px] phablet:h-[270px] tablet:h-[365px] desktop:h-[444px]"
                      : "h-[165px] phablet:h-[270px] tablet:h-[146px] desktop:h-[213px]"
                  }`}
                />
              </div>
              {activeIndex === i ? (
                <div className="flex flex-col items-end p-6 phablet:p-8 tablet:p-10 desktop:p-15 gap-1 phablet:gap-2 w-full bg-[#FD7740]">
                  <div className="flex items-end text-left font-normal text-sm text-white">
                    {data?.title}
                  </div>
                  <div className="flex items-end text-left font-bold text-base tablet:text-xl desktop:text-2xl text-white">
                    {data?.subtitle}
                  </div>
                  {/* <button className=" hidden desktop:flex py-4 px-7 border-2 border-white text-white text-sm font-bold font-space-grotesk">READ MORE</button> */}
                </div>
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-col w-full gap-5 pt-7 tablet:pl-16 tablet:pr-16">
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
  );
};

export default BannerSlider;
