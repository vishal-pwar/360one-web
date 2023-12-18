"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowImage from "@/public/assets/icons/right-arrow-white.svg";

interface reportsprops {
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
    <div className="relative w-full h-1 bg-[#4C4C4C]">
      <div
        className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const ReportsSlider = ({ response }: reportsprops) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperType>();
  return (
    <div className="flex flex-col gap-4 phablet:gap-8 tablet:gap-10 2xl:gap-12">
      <div>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          className="mySwiper"
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
        >
          {response?.cards?.map((card: any, i: any) => {
            return (
              <SwiperSlide
                key={i}
                className="bg-[#333333] mt-3 phablet:mt-4 desktop:mt-20"
              >
                <div className="flex flex-col py-6 px-[22px]">
                  <div>
                    <div className="font-bold text-white text-base phablet:text-2xl">
                      {card.title}
                    </div>
                    <div className="font-normal text-white mt-1 mb-6 tablet:mt-4 tablet:mb-14 text-sm tablet:text-xl">
                      {card.subtitle}
                    </div>
                  </div>
                  <button className="font-bold text-sm py-3 2xl:py-4 border-2 border-white text-white">
                    DOWNLOAD NOW
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="tablet:pr-12 flex whitespace-nowrap items-baseline tablet:items-stretch tablet:flex-col w-full gap-5">
        <CustomProgressBar
          currentIndex={activeIndex}
          totalSlides={response?.cards?.length}
        />
        <div className="text-white flex justify-between">
          <div className="text-white flex font-bold text-sm phablet:text-base tablet:text-2xl">{`${
            activeIndex + 1
          } / ${response?.cards?.length}`}</div>
          <div className="text-white z-[5] gap-4 items-center hidden tablet:flex">
            <button
              // className={`p-0 mt-[3px] ${activeIndex === 0 ? "opacity-25" : ""
              //     }`}
              // disabled={activeIndex === 0}
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
              // className={`p-0 ${activeIndex === totalCards - 1 ? "opacity-25" : ""
              //     }`}
              // disabled={activeIndex === totalCards - 1}
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
  );
};

export default ReportsSlider;
