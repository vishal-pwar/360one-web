"use client";
import arrowImage from "@/public/assets/icons/right-arrow-white.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

  const cards = response?.articles?.data?.concat(
    response?.articles?.data?.length < 8
      ? [...(response?.articles?.data || [])]
      : []
  );
  const totalCards = response?.articles?.data?.length;
  const swiperRef = React.useRef<SwiperType>();

  const needsDuplicates = response?.articles?.data?.length < 8;
  const duplicates = response?.articles?.data?.length;

  return (
    <>
      {totalCards > 0 ? (
        <section className="relative text-white p-6 phablet:p-12 tablet:pl-20 windowDesktop:pl-16">
          <div className="tablet:absolute tablet:w-[50%] tablet:top-[15%]">
            <div className="flex font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
              {response?.title}
            </div>
            <div className="flex font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-4 phablet:mb-6 tablet:mt-4">
              {response?.subtitle}
            </div>
            <div className="hidden windowDesktop:flex flex-col gap-5 mt-28">
              <CustomProgressBar
                currentIndex={
                  needsDuplicates
                    ? (activeIndex + duplicates - 2) % duplicates
                    : activeIndex
                }
                totalSlides={needsDuplicates ? duplicates : cards?.length}
              />
              <div>
                <div className="flex font-bold text-2xl">
                  {needsDuplicates
                    ? `${((activeIndex + duplicates - 2) % duplicates) + 1} / ${
                        cards?.length - duplicates
                      }`
                    : `${
                        ((activeIndex + cards?.length - 2) % cards?.length) + 1
                      } / ${cards?.length}`}
                </div>
                <div className="flex absolute right-0 bottom-0 z-[5] gap-4 items-center">
                  <button
                    // className={`p-0 mt-[3px] ${
                    //   activeIndex === 0 ? "opacity-25" : ""
                    // }`}
                    // disabled={activeIndex === 0}
                    className={`p-0 mt-[3px]`}
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
                    // className={`p-0 ${
                    //   activeIndex === totalCards - 1 ? "opacity-25" : ""
                    // }`}
                    // disabled={activeIndex === totalCards - 1}
                    className={`p-0`}
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
            {cards?.map((data: any, i: any) => {
              return (
                <SwiperSlide
                  key={i}
                  className={`flex pl-7 ${
                    activeIndex === i
                      ? "tablet:basis-[450px] windowDesktop:basis-[600px]"
                      : ""
                  }`}
                >
                  <div className="bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      key={i}
                      src={data?.attributes?.cover?.data?.attributes?.url}
                      alt={
                        data?.attributes?.cover?.data?.attributes
                          ?.alternativeText
                      }
                      className={`object-cover w-full ${
                        activeIndex === i
                          ? "h-[366px] tablet:h-[521px] windowDesktop:h-[700px] opacity-60"
                          : "h-[366px] tablet:h-48 windowDesktop:h-60 opacity-90"
                      }`}
                    />
                  </div>
                  {activeIndex === i ? (
                    <div className="flex flex-col items-end p-4 phablet:p-9 windowDesktop:p-12 gap-2 windowDesktop:gap-4 w-full bottom-0 absolute">
                      <div className="flex items-end text-left font-bold text-lg phablet:text-[28px] text-white">
                        {data?.attributes?.tag}
                      </div>
                      <div className="flex items-end text-left font-medium text-sm tablet:text-lg windowDesktop:text-xl text-white">
                        {data?.attributes?.title}
                      </div>
                      <button
                        className={`py-4 px-7 border-2 border-white text-white text-sm font-bold font-space-grotesk ${
                          data?.attributes?.is_article === false
                            ? "hidden"
                            : "flex"
                        }`}
                        onClick={() => {
                          router.push(
                            `/perspective/${data?.attributes?.type}/${data?.id}/${data?.attributes?.params_url}`
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
            <div className="windowDesktop:hidden w-full tablet:basis-[450px] windowDesktop::basis-[800px] gap-5 mt-4 phablet:mt-8 tablet:mt-9 flex whitespace-nowrap items-center tablet:items-stretch tablet:flex-col">
              <CustomProgressBar
                currentIndex={activeIndex}
                totalSlides={response?.articles?.data?.length}
              />
              <div className="flex justify-between">
                <div className="flex font-bold text-sm phablet:text-base tablet:text-2xl text-white">{`${
                  activeIndex + 1
                } / ${response?.articles?.data?.length}`}</div>
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
      ) : null}
    </>
  );
};

export default CuratedExperienceSlider;
