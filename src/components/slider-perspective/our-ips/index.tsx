"use client";
import MediaCard from "@/components/perspective-mediaCard";
import { paramCase } from "@pantelwar/js-utils";
import { useRouter } from "next/navigation";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="w-full relative flex h-[2px] bg-[#FEA079] md:bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-white md:bg-black transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

const OurIpsSlider = ({ response }: ourIPsProps) => {
  const cards = response?.articles?.data?.concat(
    response?.articles?.data?.length < 8
      ? [...(response?.articles?.data || [])]
      : []
  );
  const needsDuplicates = response?.articles?.data?.length < 8;
  const duplicates = response?.articles?.data?.length;

  const router = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = response?.articles?.data?.length;
  const swiperRef = React.useRef<SwiperType>();
  return (
    <>
      {totalCards > 0 ? (
        <section className="relative text-black">
          <div className="xl:absolute xl:w-[50%] xl:top-[5%] px-6 sm:px-12 xl:pl-16">
            <div className="flex font-bold text-[28px] sm:text-[32px] md:text-[42px]">
              {response?.title}
            </div>
            <div className="flex font-normal text-base sm:text-lg md:text-xl my-2 sm:mb-9 md:mt-4 md:mb-12">
              {response?.subtitle}
            </div>
            <div className="hidden xl:flex flex-col gap-5">
              <CustomProgressBar
                currentIndex={
                  needsDuplicates
                    ? (activeIndex + duplicates - 2) % duplicates
                    : activeIndex
                }
                totalSlides={needsDuplicates ? duplicates : cards?.length}
              />
              <div className="flex justify-between">
                <div className="flex font-bold text-base md:text-2xl">
                  {needsDuplicates
                    ? `${((activeIndex + duplicates - 2) % duplicates) + 1} / ${
                        cards?.length - duplicates
                      }`
                    : `${
                        ((activeIndex + cards?.length - 2) % cards?.length) + 1
                      } / ${cards?.length}`}
                </div>
                <div className="flex z-[5] gap-4 items-center">
                  <button
                    className={`p-0 mt-[3px]`}
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <img
                      src={"assets/icons/Right-arrow-black.svg"}
                      alt="left arrow"
                      className="rotate-180"
                      onClick={() => swiperRef.current?.slidePrev()}
                    />
                  </button>
                  <button
                    className={`p-0 mt-[3px]`}
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <img
                      src={"assets/icons/Right-arrow-black.svg"}
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
              1280: {
                slidesPerView: totalCards >= 4 ? 4 : totalCards,
              },
            }}
          >
            {cards?.map((data: any, i: any) => {
              return (
                <SwiperSlide
                  key={i}
                  className={`flex ${
                    activeIndex === i
                      ? "xl:basis-[700px] 2xl:basis-[830px]"
                      : ""
                  }`}
                >
                  <div>
                    <MediaCard
                      mediaType={data?.attributes?.media_type}
                      media={data?.attributes?.cover}
                      thumbnail={data?.attributes?.video_thumbnail}
                      href={data?.attributes?.youtube_link || ""}
                      className={`object-cover w-full ${
                        activeIndex === i
                          ? "h-[265px] sm:h-[440px] md:h-[460px]"
                          : "h-[265px] sm:h-[440px] md:h-64"
                      }`}
                    />
                  </div>
                  {activeIndex === i ? (
                    <div className="flex flex-col items-end p-5 sm:p-9 md:p-12 gap-2 md:gap-4 w-full bg-[#FD7740]">
                      <div
                        dir="ltr"
                        className="flex items-end text-left font-bold text-lg sm:text-2xl md:text-[28px] text-white"
                      >
                        {data?.attributes?.tag}
                      </div>
                      <div
                        dir="ltr"
                        className="flex items-end text-left font-medium text-sm md:text-xl text-white"
                      >
                        {data?.attributes?.title}
                      </div>
                      <button
                        className={`hidden xl:flex py-4 px-7 border-2 border-white text-white text-sm font-bold font-space-grotesk ${
                          data?.attributes?.is_article === false
                            ? "hidden opacity-0"
                            : ""
                        }`}
                        onClick={() => {
                          router.push(
                            `/perspective/${paramCase(
                              data?.attributes?.type
                            )}/${data?.id}/${data?.attributes?.params_url}`
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

          <div className="flex justify-end bg-[#FD7740] md:bg-white">
            <div className="xl:hidden gap-5 pt-5 px-6 mb-10 flex whitespace-nowrap items-center w-full text-white">
              <CustomProgressBar
                currentIndex={
                  needsDuplicates
                    ? (activeIndex + duplicates - 2) % duplicates
                    : activeIndex
                }
                totalSlides={needsDuplicates ? duplicates : cards?.length}
              />
              <div className="flex justify-between">
                <div className="flex font-bold text-base md:text-2xl">
                  {needsDuplicates
                    ? `${((activeIndex + duplicates - 2) % duplicates) + 1} / ${
                        cards?.length - duplicates
                      }`
                    : `${
                        ((activeIndex + cards?.length - 2) % cards?.length) + 1
                      } / ${cards?.length}`}
                </div>
                <div className="z-[5] gap-4 items-center hidden md:flex">
                  <button onClick={() => swiperRef.current?.slidePrev()}>
                    <img
                      src={"assets/icons/Right-arrow-black.svg"}
                      alt="left arrow"
                      className="rotate-180"
                      onClick={() => swiperRef.current?.slidePrev()}
                    />
                  </button>
                  <button onClick={() => swiperRef.current?.slideNext()}>
                    <img
                      src={"assets/icons/Right-arrow-black.svg"}
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

export default OurIpsSlider;
