"use client";
import VideoPLayer from "@/components/video-player";
import arrowImage from "@/public/assets/icons/Right-arrow-black.svg";
import PlayIcon from "@/public/assets/icons/playIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const cards = [
    ...response.reports_and_publications_cards.data,
    ...response.curated_experiences_cards.data,
    ...response.ips_cards.data,
    ...response.viewpoint_cards.data,
  ];

  const router = useRouter();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalCards = cards?.length;
  const swiperRef = React.useRef<SwiperType>();

  return (
    <>
      <div className="relative bg-black p-6 phablet:p-12 tablet:p-0">
        <div className="tablet:absolute tablet:w-[55%] tablet:top-[20%] tablet:pl-16">
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
              slidesPerView: totalCards >= 3 ? 4 : totalCards,
            },
          }}
        >
          {cards?.map((data: any, i: any) => {
            return (
              <SwiperSlide
                key={i}
                className={`flex ${
                  activeIndex === i
                    ? "tablet:basis-[500px] desktop:basis-[730px]"
                    : ""
                }`}
              >
                <div className="tablet:relative bg-black">
                  <div className="hidden desktop:flex desktop:absolute bg-white left-0 mt-5 text-black font-bold text-sm py-2 px-5 z-20">
                    {data?.attributes?.component_name}
                  </div>
                  <div className="hidden tablet:flex flex-col tablet:absolute tablet:w-full tablet:items-end bottom-0 pl-6 pb-5 z-20">
                    <div
                      className={`flex items-end text-left font-normal tablet:text-sm text-white ${
                        activeIndex === i ? `hidden` : ""
                      } `}
                    >
                      {data?.attributes?.banner_tag}
                    </div>
                    <div
                      className={`flex items-end text-left font-bold tablet:text-xl desktop:text-2xl text-white ${
                        activeIndex === i ? `hidden` : ""
                      }`}
                    >
                      {data?.attributes?.title}
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {data?.attributes?.media?.data?.attributes?.mime?.startsWith(
                    "video/"
                  ) ? (
                    // <div className="relative flex items-center justify-center">
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={data?.attributes?.thumbnail?.data?.attributes?.url}
                        alt={
                          data?.attributes?.thumbnail?.data?.attributes
                            ?.alternativeText
                        }
                        className={`object-cover w-full ${
                          activeIndex === i
                            ? "h-[165px] phablet:h-[270px] tablet:h-[365px] desktop:h-[444px] object-cover"
                            : "h-[165px] phablet:h-[270px] tablet:h-[146px] desktop:h-[213px] opacity-60 object-cover"
                        }`}
                      />
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={data?.attributes?.media?.data?.attributes?.url}
                      alt={
                        data?.attributes?.media?.data?.attributes
                          ?.alternativeText
                      }
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
                        {data?.attributes?.banner_tag}
                      </div>
                      <div className="flex items-end text-left font-bold text-base tablet:text-xl desktop:text-2xl text-white">
                        {data?.attributes?.title}
                      </div>
                    </div>

                    <div>
                      {data?.attributes?.media?.data?.attributes?.mime?.startsWith(
                        "video/"
                      ) ? (
                        <div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <VideoPLayer
                            iconUrl={PlayIcon}
                            videoUrl={
                              data?.attributes?.media?.data?.attributes?.url
                            }
                          />
                        </div>
                      ) : (
                        <>
                          {data?.attributes.article === undefined ? null : (
                            <button
                              className=" hidden desktop:flex w-28 p-3 border-2 border-white text-white text-sm font-bold font-space-grotesk"
                              onClick={() => {
                                let componentPath = "";
                                if (
                                  data?.attributes?.component_name.includes(
                                    "Curated"
                                  )
                                ) {
                                  componentPath = "experiences";
                                } else if (
                                  data?.attributes?.component_name.includes(
                                    "Our"
                                  )
                                ) {
                                  componentPath = "Ips";
                                }

                                router.push(
                                  `/perspective/${componentPath}/${data?.id}/${data?.attributes.article?.data?.attributes?.params_url}`
                                );
                              }}
                            >
                              READ MORE
                            </button>
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
      <div className="bg-[#F4F0EF] flex whitespace-nowrap items-center tablet:items-stretch tablet:flex-col w-full gap-5 pt-7 px-6 phablet:px-11 tablet:px-16">
        <CustomProgressBar
          currentIndex={activeIndex}
          totalSlides={cards?.length}
        />
        <div className="flex tablet:justify-between">
          <div className="flex font-bold text-base tablet:text-2xl">
            {`${activeIndex + 1} / ${cards?.length}`}
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
