"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import arrowImage from "@/public/assets/icons/Right-arrow-black.svg";
import playIcon from "@/public/assets/icons/playIcon.svg";
import React from "react";
import { useRouter } from "next/navigation";

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
    <div className="relative w-full flex h-1 bg-[#ABA8A7]">
      <div
        className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const BannerSlider = ({ response }: BannerSliderProps) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = response?.cards?.length;
  const swiperRef = React.useRef<SwiperType>();

  return (
    <>
      <div className="relative bg-black p-6 phablet:p-12 tablet:p-0">
        <div className="tablet:absolute tablet:w-[50%] tablet:top-[15%] tablet:pl-16">
          <div className="font-bold text-[28px] tablet:text-[52px] tablet:text-6xl text-white">
            The 360 ONE
          </div>
          <div className="font-bold text-[28px] tablet:text-[52px] tablet:text-6xl text-[#FD7740]">
            Perspective
          </div>
          <div className="font-normal text-lg phablet:text-xl text-white mt-2 mb-8">
            {response?.subtitle}
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
          onSlideChange={(e) => setActiveIndex(e?.realIndex)}
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
                    ? "tablet:basis-[500px] desktop:basis-[750px]"
                    : ""
                }`}
              >
                <div className="tablet:relative bg-black">
                  <div className="hidden desktop:flex desktop:absolute bg-white left-0 mt-5 text-black font-bold text-sm py-2 px-5 z-20">
                    {data?.category}
                  </div>
                  <div className="hidden tablet:flex flex-col tablet:absolute tablet:w-full tablet:items-end bottom-0 pl-6 pb-5 z-20">
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
                  {data?.media?.data?.attributes?.mime?.startsWith("video/") ? (
                    <video
                      muted
                      playsInline
                      loop
                      autoPlay
                      className={`object-cover w-full ${
                        activeIndex === i
                          ? "h-[165px] phablet:h-[270px] tablet:h-[365px] desktop:h-[444px] object-cover"
                          : "h-[165px] phablet:h-[270px] tablet:h-[146px] desktop:h-[213px] opacity-60 object-cover"
                      }`}
                    >
                      <source
                        src={data?.media?.data?.attributes?.url}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={data?.media?.data?.attributes?.url}
                      // alt="banner slider Image"
                      alt={data?.media?.data?.attributes?.alternativeText}
                      className={`object-cover w-full ${
                        activeIndex === i
                          ? "h-[165px] phablet:h-[270px] tablet:h-[365px] desktop:h-[444px] object-cover"
                          : "h-[165px] phablet:h-[270px] tablet:h-[146px] desktop:h-[213px] opacity-40 object-cover"
                      }`}
                    />
                  )}
                </div>
                {activeIndex === i ? (
                  <div className="flex flex-row-reverse justify-between items-center p-6 phablet:p-8 tablet:p-10 desktop:p-16 gap-1 phablet:gap-2 w-full bg-[#FD7740]">
                    <div className="flex flex-col items-end">
                      <div className="flex items-end text-left font-normal text-sm text-white">
                        {data?.title}
                      </div>
                      <div className="flex items-end text-left font-bold text-base tablet:text-xl desktop:text-2xl text-white">
                        {data?.subtitle}
                      </div>
                    </div>
                    <div>
                      {data?.media?.data?.attributes?.mime?.startsWith(
                        "video/"
                      ) ? (
                        <div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <Image src={playIcon} alt="play" />
                        </div>
                      ) : (
                        <button
                          className=" hidden desktop:flex w-28 p-3 border-2 border-white text-white text-sm font-bold font-space-grotesk"
                          onClick={() => {
                            router.push(
                              `/perspective/Banner/${data?.article.data.id}/${data?.article?.data?.attributes?.article_url}`
                            );
                          }}
                        >
                          READ MORE
                        </button>
                      )}
                    </div>
                  </div>
                ) : null}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-[#F4F0EF] flex whitespace-nowrap items-center tablet:items-stretch tablet:flex-col w-full gap-5 pt-7 px-6 phablet:px-11 tablet:px-16">
        <CustomProgressBar
          currentIndex={activeIndex}
          totalSlides={response?.cards?.length}
        />
        <div className="flex tablet:justify-between">
          <div className="flex font-bold text-base tablet:text-2xl">
            {`${activeIndex + 1} / ${response?.cards?.length}`}
          </div>
          <div className="tablet:flex hidden z-[5] gap-4 items-center">
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
    </>
  );
};

export default BannerSlider;
