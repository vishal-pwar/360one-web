"use client";
import MediaCard from "@/components/perspective-mediaCard";
import useWindowDimensions from "@/hooks/dimensions";
import { paramCase } from "@pantelwar/js-utils";
import { useRouter } from "next/navigation";
import React from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface viewpointprops {
  response: any;
}

const ViewpointSlider = ({ response }: viewpointprops) => {
  const router = useRouter();
  const windowDimensions = useWindowDimensions();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [firstPost, setFirstPost] = React.useState(1);
  const [secondPost, setSecondPost] = React.useState(2);
  const [thirdPost, setThirdPost] = React.useState(3);
  const [fourthPost, setFourthPost] = React.useState(4);
  const [fifthPost, setFifthPost] = React.useState(5);
  const [cardsPerSlide, setCardsPerSlide] = React.useState(2);

  const swiperRef = React.useRef<SwiperType>();
  const title = response?.title;
  const description = response?.description;

  const CustomProgressBar = ({
    currentIndex,
    totalSlides,
  }: {
    currentIndex: number;
    totalSlides: number;
  }) => {
    const progressPercentage = (currentIndex / totalSlides) * 100;
    return (
      <div className="relative w-full h-1 bg-gray-200">
        <div
          className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    );
  };

  React.useEffect(() => {
    const a = activeIndex * cardsPerSlide;
    setFirstPost(a);
    setSecondPost(a + 1);
    setThirdPost(a + 2);
    setFourthPost(a + 3);
    setFifthPost(a + 4);

    const breakpoint = "1280px";
    setCardsPerSlide(
      windowDimensions.width < parseInt(breakpoint.toString()) ? 2 : 5
    );
  }, [activeIndex, cardsPerSlide, windowDimensions]);

  return (
    <>
      {response?.articles?.data?.length > 3 ? (
        <section className="px-6 pt-10 sm:pt-7 sm:px-12 md:pt-12 md:pl-20 xl:pl-16 xl:pt-[75px] xl:py-[35px]">
          <div className="font-bold text-[28px] sm:text-[32px] md:text-[42px]">
            {title}
          </div>
          <div className="font-normal text-base sm:text-lg md:text-xl mt-2 mb-3 sm:mb-10 md:mb-0 md:mt-4 md:max-w-4xl">
            {description}
          </div>

          {response?.articles?.data?.length ? (
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              className="mySwiper"
              onSlideChange={(e) => {
                setActiveIndex(e.realIndex);
              }}
            >
              <>
                {Array(
                  Math.ceil(response?.articles?.data?.length / cardsPerSlide)
                )
                  ?.fill(null)
                  ?.map((card, i) => {
                    const firstCard = response?.articles?.data[firstPost];
                    const secondCard = response?.articles?.data[secondPost];
                    const thirdCard = response?.articles?.data[thirdPost];
                    const fourthCard = response?.articles?.data[fourthPost];
                    const fifthCard = response?.articles?.data[fifthPost];

                    return (
                      <SwiperSlide
                        key={i}
                        className="bg-[#333333] mt-3 sm:mt-4 xl:mt-10"
                      >
                        <div className="flex flex-col gap-11 bg-[#F4F0EF]">
                          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:gap-3 xl:gap-6 w-full">
                            {firstCard?.attributes?.title?.length > 0 ? (
                              <div
                                className="flex  md:flex-[7] flex-col bg-black cursor-pointer"
                                onClick={() => {
                                  if (
                                    firstCard?.attributes?.media_type ===
                                    "image"
                                  ) {
                                    router.push(
                                      `/perspective/${paramCase(
                                        firstCard?.attributes?.type
                                      )}/${firstCard?.id}/${firstCard
                                        ?.attributes?.params_url}`
                                    );
                                  }
                                }}
                              >
                                <p className="flex uppercase z-10 justify-center items-center font-semibold text-xs sm:text-sm text-white bg-orange-400 p-2 md:py-4 md:px-8 absolute mt-3 sm:mt-6 md:mt-8">
                                  {firstCard?.attributes?.tag}
                                </p>
                                <MediaCard
                                  mediaType={firstCard?.attributes?.media_type}
                                  media={firstCard?.attributes?.cover}
                                  thumbnail={
                                    firstCard?.attributes?.video_thumbnail
                                  }
                                  href={
                                    firstCard?.attributes?.youtube_link || ""
                                  }
                                  className="object-cover w-full h-[140px] sm:h-[380px] md:h-[400px] "
                                />
                                <div className="bg-[#333333] text-white flex flex-col gap-6 p-3 sm:p-6 md:p-9 xl:p-12 md:h-[100%]">
                                  <div className="line-clamp-2 font-medium sm:font-bold text-sm sm:text-base md:text-xl">
                                    {firstCard?.attributes?.title}
                                  </div>
                                  <div className="font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                                    {firstCard?.attributes?.publication_source}
                                  </div>
                                </div>
                              </div>
                            ) : null}

                            {secondCard?.attributes?.title?.length > 0 ? (
                              <div
                                className="flex md:flex-[5] flex-col cursor-pointer"
                                onClick={() => {
                                  if (
                                    secondCard?.attributes?.media_type ===
                                    "image"
                                  ) {
                                    router.push(
                                      `/perspective/${paramCase(
                                        secondCard?.attributes?.type
                                      )}/${secondCard?.id}/${secondCard
                                        ?.attributes?.params_url}`
                                    );
                                  }
                                }}
                              >
                                <p className="flex uppercase z-10 justify-center items-center font-semibold text-xs sm:text-sm text-white bg-orange-400 p-2 md:py-4 md:px-8 absolute mt-3 sm:mt-6 md:mt-8">
                                  {secondCard?.attributes?.tag}
                                </p>
                                <MediaCard
                                  mediaType={secondCard?.attributes?.media_type}
                                  media={secondCard?.attributes?.cover}
                                  thumbnail={
                                    secondCard?.attributes?.video_thumbnail
                                  }
                                  href={
                                    secondCard?.attributes?.youtube_link || ""
                                  }
                                  className="object-cover w-full h-[140px] sm:h-[380px] md:h-[400px] "
                                />
                                <div className="flex flex-col gap-6 text-black bg-white p-3 sm:p-6 md:p-9 xl:p-12 md:h-[100%]">
                                  <div className="line-clamp-2 font-medium sm:font-bold text-sm sm:text-base md:text-xl">
                                    {secondCard?.attributes?.title}
                                  </div>
                                  <div className="font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                                    {secondCard?.attributes?.publication_source}
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </div>

                          <div className="hidden xl:flex gap-6 w-full">
                            {thirdCard?.attributes?.title?.length > 0 ? (
                              <div
                                className="flex flex-[4] flex-col cursor-pointer"
                                onClick={() => {
                                  if (
                                    thirdCard?.attributes?.media_type ===
                                    "image"
                                  ) {
                                    router.push(
                                      `/perspective/${paramCase(
                                        thirdCard?.attributes?.type
                                      )}/${thirdCard?.id}/${thirdCard
                                        ?.attributes?.params_url}`
                                    );
                                  }
                                }}
                              >
                                <p className="flex uppercase justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                                  {thirdCard?.attributes?.tag}
                                </p>
                                <MediaCard
                                  mediaType={thirdCard?.attributes?.media_type}
                                  media={thirdCard?.attributes?.cover}
                                  thumbnail={
                                    thirdCard?.attributes?.video_thumbnail
                                  }
                                  href={
                                    thirdCard?.attributes?.youtube_link || ""
                                  }
                                  className="object-cover w-full h-full"
                                />
                                <div className=" flex flex-col gap-6 text-white bg-[#404546] p-9">
                                  <div className="line-clamp-2 font-medium sm:font-bold text-sm sm:text-base md:text-xl">
                                    {thirdCard?.attributes?.title}
                                  </div>
                                  <div className="font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                                    {thirdCard?.attributes?.publication_source}
                                  </div>
                                </div>
                              </div>
                            ) : null}
                            <div className="flex flex-col flex-[8] gap-6">
                              {fourthCard?.attributes?.title?.length > 0 ? (
                                <div
                                  className="flex cursor-pointer"
                                  onClick={() => {
                                    if (
                                      fourthCard?.attributes?.media_type ===
                                      "image"
                                    ) {
                                      router.push(
                                        `/perspective/${paramCase(
                                          fourthCard?.attributes?.type
                                        )}/${fourthCard?.id}/${fourthCard
                                          ?.attributes?.params_url}`
                                      );
                                    }
                                  }}
                                >
                                  <p className="flex uppercase justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                                    {fourthCard?.attributes?.tag}
                                  </p>
                                  <MediaCard
                                    mediaType={
                                      fourthCard?.attributes?.media_type
                                    }
                                    media={fourthCard?.attributes?.cover}
                                    thumbnail={
                                      fourthCard?.attributes?.video_thumbnail
                                    }
                                    href={
                                      fourthCard?.attributes?.youtube_link || ""
                                    }
                                    className="object-cover w-[400px] h-[300px]"
                                  />
                                  <div className="flex flex-col gap-6 h-full w-full text-white bg-[#404546] p-12 justify-center">
                                    <div className="line-clamp-2 font-medium sm:font-bold text-sm sm:text-base md:text-xl">
                                      {fourthCard?.attributes?.title}
                                    </div>
                                    <div className="font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                                      {
                                        fourthCard?.attributes
                                          ?.publication_source
                                      }
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {fifthCard?.attributes?.title?.length > 0 ? (
                                <div
                                  className="flex cursor-pointer"
                                  onClick={() => {
                                    if (
                                      fifthCard?.attributes?.media_type ===
                                      "image"
                                    ) {
                                      router.push(
                                        `/perspective/${paramCase(
                                          fifthCard?.attributes?.type
                                        )}/${fifthCard?.id}/${fifthCard
                                          ?.attributes?.params_url}`
                                      );
                                    }
                                  }}
                                >
                                  <p className="flex uppercase justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6 z-50">
                                    {fifthCard?.attributes?.tag}
                                  </p>
                                  <MediaCard
                                    mediaType={
                                      fifthCard?.attributes?.media_type
                                    }
                                    media={fifthCard?.attributes?.cover}
                                    thumbnail={
                                      fifthCard?.attributes?.video_thumbnail
                                    }
                                    href={
                                      fifthCard?.attributes?.youtube_link || ""
                                    }
                                    className="object-cover w-[400px] h-[300px] "
                                  />
                                  <div className="flex flex-col gap-6 h-full w-full text-black bg-white p-12 justify-center">
                                    <div className="line-clamp-2 font-medium sm:font-bold text-sm sm:text-base md:text-xl">
                                      {fifthCard?.attributes?.title}
                                    </div>
                                    <div className="font-normal text-xs sm:text-sm md:text-base xl:text-lg">
                                      {
                                        fifthCard?.attributes
                                          ?.publication_source
                                      }
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </>
            </Swiper>
          ) : null}

          <div className="mt-2 sm:mt-8 xl:mt-12 flex whitespace-nowrap items-baseline md:items-stretch md:flex-col w-full gap-5">
            <CustomProgressBar
              currentIndex={Math.min(
                activeIndex + 5,
                response?.articles?.data?.length
              )}
              totalSlides={response?.articles?.data?.length}
            />
            <div className="flex justify-between pb-12">
              <div className="flex font-bold text-sm sm:text-base md:text-2xl">{`${
                activeIndex + 1
              } / ${
                cardsPerSlide === 2
                  ? Math.ceil(response?.articles?.data?.length / cardsPerSlide)
                  : Math.floor(response?.articles?.data?.length / cardsPerSlide)
              }`}</div>
              <div className="hidden md:flex z-[5] gap-4 items-center">
                <button
                  // className={`p-0 mt-[3px] ${activeIndex === 0 ? "opacity-25" : ""
                  //     }`}
                  // disabled={activeIndex === 0}
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
                  // className={`p-0 ${activeIndex === totalCards - 1 ? "opacity-25" : ""
                  //     }`}
                  // disabled={activeIndex === totalCards - 1}
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
        </section>
      ) : null}
    </>
  );
};

export default ViewpointSlider;
