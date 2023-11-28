"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowImage from "@/public/assets/icons/Right-arrow-black.svg";

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
    <div className="relative h-1 bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const ReportsSlider = ({ response }: reportsprops) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperType>();
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination, Navigation]}
          slidesPerView={4}
          spaceBetween={50}
          loop={true}
          className="mySwiper"
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
        >
          {response.cards.map((data: any, i: any) => {
            return (
              <SwiperSlide key={i} className="bg-[#333333]">
                <div className="flex flex-col gap-14 p-9">
                  <div>
                    <div className="font-space-grotesk font-bold text-2xl text-white">
                      {" "}
                      {data.title}
                    </div>
                    <div className="font-space-grotesk font-normal text-xl text-white mt-4">
                      {data.subtitle}
                    </div>
                  </div>
                  <button className="font-space-grotesk font-bold text-sm py-4 px-14 border-2 border-white text-white">
                    DOWNLOAD NOW
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <CustomProgressBar
          currentIndex={activeIndex}
          totalSlides={response.cards.length}
        />
        <div className="flex justify-between mt-4">
          <div className="flex font-space-grotesk font-bold text-sm sm:text-base lg:text-2xl">{`${
            activeIndex + 1
          } / ${response.cards.length}`}</div>
          <div className="flex z-[5] gap-4 items-center">
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
