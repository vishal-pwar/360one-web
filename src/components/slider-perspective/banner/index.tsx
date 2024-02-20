"use client";
import VideoPLayer from "@/components/video-player";
import useWindowDimensions from "@/hooks/dimensions";
import Link from "next/link";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  const [activeIndex, setActiveIndex] = React.useState(2);
  const windowDimensions = useWindowDimensions();

  const cards = response?.articles?.data?.concat(
    response?.articles?.data?.length < 8
      ? [...(response?.articles?.data || [])]
      : []
  );
  const totalCards = cards?.length || 0;
  const swiperRef = React.useRef<SwiperType>();

  const needsDuplicates = response?.articles?.data?.length < 8;
  const duplicates = response?.articles?.data?.length;

  return (
    <>
      {totalCards > 0 ? (
        <>
          <div className="relative bg-black p-6 sm:px-12 sm:pt-12 xl:p-0">
            <div className="xl:absolute xl:w-[50%] xl:top-[20%] xl:pl-16">
              <div className="font-bold text-[28px] md:text-[52px] xl:text-2xl text-white">
                The 360 ONE
              </div>
              <div className="mb-4 font-bold text-[28px] md:text-[52px] xl:text-6xl text-[#FD7740]">
                Perspective
              </div>
              <div className="font-normal text-lg sm:text-xl text-white my-2">
                {response?.subtitle}
              </div>
            </div>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination]}
              dir="ltr"
              slidesPerView={1}
              loop={true}
              onSlideChange={(e) => {
                setActiveIndex((e?.realIndex + 2) % cards?.length);
              }}
              className="curated-swiper w-full"
              breakpoints={{
                1280: {
                  slidesPerView: totalCards >= 3 ? 4 : totalCards,
                },
              }}
            >
              {cards?.map((data: any, i: any) => {
                return (
                  <SwiperSlide
                    key={i}
                    className={`flex xl:pl-7 ${
                      activeIndex === i ? "xl:basis-[730px]" : ""
                    }`}
                  >
                    <div className="xl:relative bg-black">
                      <div className="hidden uppercase xl:flex md:absolute bg-white left-0 mt-5 text-black font-bold text-sm py-2 px-5 z-20">
                        {data?.attributes?.type}
                      </div>
                      <div className="hidden xl:flex flex-col md:absolute md:w-full bottom-0 pl-6 pb-5 z-20">
                        <div
                          className={` flex items-end text-left font-normal md:text-sm text-white mb-2 ${
                            activeIndex === i ? `hidden` : ""
                          } `}
                        >
                          {data?.attributes?.tag}
                        </div>
                        <div
                          className={`flex items-end text-left font-bold md:text-xl xl:text-2xl text-white ${
                            activeIndex === i ? `hidden` : ""
                          }`}
                        >
                          <p className="line-clamp-2">
                            {data?.attributes?.title}
                          </p>
                        </div>
                      </div>
                      {data?.attributes?.media_type?.includes("video") ? (
                        <div className="relative flex items-center justify-center">
                          <img
                            src={
                              data?.attributes?.video_thumbnail?.data
                                ?.attributes?.url
                            }
                            alt={
                              data?.attributes?.video_thumbnail?.data
                                ?.attributes?.alternativeText
                            }
                            className={`object-cover w-full ${
                              activeIndex === i
                                ? "h-[165px] sm:h-[270px] md:h-[465px] xl:h-[444px] object-cover"
                                : "h-[165px] sm:h-[270px] md:h-[465px] xl:h-[213px] opacity-60 object-cover"
                            }`}
                          />
                        </div>
                      ) : (
                        <img
                          key={i}
                          src={data?.attributes?.cover?.data?.attributes?.url}
                          alt={
                            data?.attributes?.cover?.data?.attributes
                              ?.alternativeText
                          }
                          className={`object-cover w-full ${
                            activeIndex === i
                              ? "h-[165px] sm:h-[270px] md:h-[465px] xl:h-[444px] object-cover"
                              : "h-[165px] sm:h-[270px] md:h-[465px] xl:h-[213px] opacity-40 object-cover"
                          }`}
                        />
                      )}
                    </div>

                    {activeIndex ===
                    i + (windowDimensions.width < 1280 ? 2 : 0) ? (
                      <div className="flex justify-between items-center p-6 sm:p-8 md:p-10 xl:p-16 gap-1 sm:gap-2 w-full bg-[#FD7740] xl:min-h-[200px]">
                        <div className="flex flex-col flex-[11]">
                          <div className="flex uppercase items-end text-left font-normal text-sm text-white mb-2">
                            {data?.attributes?.tag}
                          </div>

                          <div className="flex items-end text-left font-bold text-base md:text-xl xl:text-2xl text-white">
                            <p className="line-clamp-2">
                              {data?.attributes?.title}
                            </p>
                          </div>
                        </div>

                        <div className="flex-[1]">
                          {data?.attributes?.media_type?.includes("video") ? (
                            <VideoPLayer
                              iconUrl={"assets/icons/playIcon.svg"}
                              videoUrl={
                                data?.attributes?.cover?.data?.attributes?.url
                              }
                            />
                          ) : (
                            <>
                              {data?.attributes?.media_type?.includes(
                                "youtube"
                              ) ? (
                                <Link
                                  href={data?.attributes?.youtube_link || "/"}
                                  target="_blank"
                                >
                                  <button className="justify-center font-bold text-sm w-32 p-3 border-2 border-white text-white">
                                    WATCH NOW
                                  </button>
                                </Link>
                              ) : (
                                <Link
                                  href={`/perspective/${data?.attributes?.type}/${data?.id}/${data?.attributes?.params_url}`}
                                >
                                  <>
                                    <button
                                      className={`hidden ${
                                        data?.attributes?.is_article === false
                                          ? "hidden"
                                          : "xl:flex"
                                      } w-32 justify-center p-3 border-2 border-white text-white text-sm font-bold font-space-grotesk`}
                                    >
                                      READ MORE
                                    </button>

                                    <img
                                      src={"assets/icons/right-arrow-white.svg"}
                                      alt="Read More"
                                      className={`xl:hidden ${
                                        data?.attributes?.is_article === false
                                          ? "hidden"
                                          : "xl:flex"
                                      }`}
                                    />
                                  </>
                                </Link>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ) : null}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="bg-[#F4F0EF] flex whitespace-nowrap items-center md:items-stretch md:flex-col w-full gap-5 pt-6 px-6 sm:px-11 md:px-16">
            <CustomProgressBar
              currentIndex={
                needsDuplicates
                  ? (activeIndex + duplicates - 2) % duplicates
                  : activeIndex
              }
              totalSlides={needsDuplicates ? duplicates : cards?.length}
            />
            <div className="flex md:justify-between">
              <div className="flex font-bold text-base md:text-2xl">
                {needsDuplicates
                  ? `${((activeIndex + duplicates - 2) % duplicates) + 1} / ${
                      cards?.length - duplicates
                    }`
                  : `${
                      ((activeIndex + cards?.length - 2) % cards?.length) + 1
                    } / ${cards?.length}`}
              </div>
              <div className="md:flex hidden z-[5] gap-4 items-center">
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
                  className={`p-0`}
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
        </>
      ) : null}
    </>
  );
};

export default BannerSlider;
