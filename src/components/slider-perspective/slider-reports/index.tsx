"use client";
import arrowImage from "@/public/assets/icons/right-arrow-white.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="flex flex-col gap-4 sm:gap-8 md:gap-10 2xl:gap-12">
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
            1450: {
              slidesPerView: 4.5,
            },
          }}
        >
          {response?.reports_and_publications_cards?.data?.map(
            (card: any, i: any) => {
              return (
                <SwiperSlide
                  key={i}
                  className="bg-[#333333] mt-3 sm:mt-4 xl:mt-12"
                >
                  <div className="flex flex-col py-6 px-[22px] md:h-72 xl:h-80">
                    <div>
                      <div className="line-clamp-2 font-bold text-white text-base sm:text-2xl">
                        {card?.attributes?.title}
                      </div>
                      <div className="line-clamp-3 font-normal text-white mt-1 mb-6 md:mt-4 md:mb-14 text-sm md:text-xl">
                        {card?.attributes?.subtitle}
                      </div>
                    </div>

                    <Link
                      href={
                        card?.attributes?.report_type === "pdf"
                          ? card?.attributes?.pdf?.data?.attributes?.url || "#"
                          : card?.attributes?.campaign_url || "#"
                      }
                      target="_blank"
                      className="flex justify-center font-bold text-sm py-3 2xl:py-4 border-2 border-white text-white"
                    >
                      <button>DOWNLOAD NOW</button>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <div className="md:pr-12 flex whitespace-nowrap items-baseline md:items-stretch md:flex-col w-full gap-5">
        <CustomProgressBar
          currentIndex={activeIndex}
          totalSlides={response?.reports_and_publications_cards?.data?.length}
        />
        <div className="text-white flex justify-between">
          <div className="text-white flex font-bold text-sm sm:text-base md:text-2xl">{`${
            activeIndex + 1
          } / ${response?.reports_and_publications_cards?.data?.length}`}</div>
          <div className="text-white z-[5] gap-4 items-center hidden md:flex">
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
