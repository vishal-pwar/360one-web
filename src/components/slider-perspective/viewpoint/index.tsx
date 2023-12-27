"use client";
import React from "react";
import MediaCard from "@/components/perspective-mediaCard";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowImage from "@/public/assets/icons/Right-arrow-black.svg";
import Link from "next/link";

interface viewpointprops {
  response: any;
}

const ViewpointSlider = ({ response }: viewpointprops) => {
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

    const breakpoint = "1600px";
    setCardsPerSlide(screen.width < parseInt(breakpoint.toString()) ? 2 : 5);
  }, [activeIndex, cardsPerSlide]);

  return (
    <section className="px-6 pt-10 phablet:pt-7 phablet:px-12 tablet:pt-12 tablet:pl-20 desktop:pl-16 desktop:py-[75px]">
      <div className="font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
        {title}
      </div>
      <div className="font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-10 tablet:mb-0 tablet:mt-4 tablet:max-w-4xl">
        {description}
      </div>

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
          {Array(Math.ceil(response.cards.length / cardsPerSlide))
            .fill(null)
            .map((card, i) => {
              const firstCard = response?.cards?.[firstPost];
              const secondCard = response?.cards?.[secondPost];
              const thirdCard = response?.cards?.[thirdPost];
              const fourthCard = response?.cards?.[fourthPost];
              const fifthCard = response?.cards?.[fifthPost];

              return (
                <SwiperSlide
                  key={i}
                  className="bg-[#333333] mt-3 phablet:mt-4 desktop:mt-20"
                >
                  <div className="flex flex-col gap-11 bg-[#F4F0EF]">
                    <div className="flex flex-col gap-3 phablet:gap-4 tablet:flex-row tablet:gap-3 desktop:gap-6 w-full">
                      {firstCard?.title?.length > 0 ? (
                        <Link
                          href={firstCard?.href}
                          target="_blank"
                          className="flex tablet:flex-[7] flex-col bg-black"
                        >
                          <p className="flex z-10 justify-center items-center font-semibold text-xs phablet:text-sm text-white bg-orange-400 p-2 tablet:py-4 tablet:px-8 absolute mt-3 phablet:mt-6 tablet:mt-8">
                            {firstCard?.title}
                          </p>
                          <MediaCard
                            mediaType={firstCard?.mediaType}
                            media={firstCard?.media}
                            href={firstCard?.href}
                            className="object-cover w-full h-[140px] phablet:h-[380px] tablet:h-[400px]"
                          />
                          <div className="flex items-center text-white bg-[#333333] font-medium phablet:font-bold text-sm phablet:text-base tablet:text-xl p-3 phablet:p-6 tablet:p-9 desktop:p-12">
                            {firstCard?.subtitle}
                          </div>
                        </Link>
                      ) : null}

                      {secondCard?.title?.length > 0 ? (
                        <Link
                          href={secondCard?.href}
                          target="_blank"
                          className="flex tablet:flex-[5] flex-col bg-black"
                        >
                          <p className="flex z-10 justify-center items-center font-semibold text-xs phablet:text-sm text-white bg-orange-400 p-2 tablet:py-4 tablet:px-8 absolute mt-3 phablet:mt-6 tablet:mt-8">
                            {secondCard?.title}
                          </p>
                          <MediaCard
                            mediaType={secondCard?.mediaType}
                            media={secondCard?.media}
                            href={secondCard?.href}
                            className="object-cover w-full h-[140px] phablet:h-[380px] tablet:h-[400px]"
                          />
                          <div className="flex items-center text-black bg-white font-medium phablet:font-bold text-sm phablet:text-base tablet:text-xl p-3 phablet:p-6 tablet:p-9 desktop:p-12">
                            {secondCard?.subtitle}
                          </div>
                        </Link>
                      ) : null}
                    </div>
                    <div className="hidden desktop:flex gap-6 w-full">
                      {thirdCard?.title?.length > 0 ? (
                        <Link
                          href={thirdCard?.href}
                          target="_blank"
                          className="flex flex-[4] flex-col"
                        >
                          <p className="flex justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                            {thirdCard?.title}
                          </p>
                          <MediaCard
                            mediaType={thirdCard?.mediaType}
                            media={thirdCard?.media}
                            href={thirdCard?.href}
                            className="object-cover w-full h-[310px]"
                          />
                          <div className="flex items-center font-bold text-xl text-white bg-[#404546] p-9 h-full">
                            {thirdCard?.subtitle}
                          </div>
                        </Link>
                      ) : null}
                      <div className="flex flex-col flex-[8] gap-6">
                        {fourthCard?.title?.length > 0 ? (
                          <Link
                            href={fourthCard?.href}
                            target="_blank"
                            className="flex"
                          >
                            <p className="flex justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                              {fourthCard?.title}
                            </p>
                            <MediaCard
                              mediaType={fourthCard?.mediaType}
                              media={fourthCard?.media}
                              href={fourthCard?.href}
                              className="object-cover w-[400px] h-[230px]"
                            />
                            <div className="flex items-center font-bold text-3xl text-white bg-[#404546] p-12 h-full w-full">
                              {fourthCard?.subtitle}
                            </div>
                          </Link>
                        ) : null}
                        {fifthCard?.title?.length > 0 ? (
                          <Link
                            href={fifthCard?.href}
                            target="_blank"
                            className="flex"
                          >
                            <p className="flex justify-center items-center font-bold text-sm text-white bg-orange-400 py-4 px-10 absolute mt-6">
                              {fifthCard?.title}
                            </p>
                            <MediaCard
                              mediaType={fifthCard?.mediaType}
                              media={fifthCard?.media}
                              href={fifthCard?.href}
                              className="object-cover w-[400px] h-[230px]"
                            />
                            <div className="flex items-center font-bold text-3xl text-black bg-white p-12 h-full w-full">
                              {fifthCard?.subtitle}
                            </div>
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </>
      </Swiper>

      <div className="mt-2 phablet:mt-8 desktop:mt-12 flex whitespace-nowrap items-baseline tablet:items-stretch tablet:flex-col w-full gap-5">
        <CustomProgressBar
          currentIndex={Math.min(activeIndex + 5, response?.cards?.length)}
          totalSlides={response?.cards?.length}
        />
        <div className="flex justify-between pb-12">
          <div className="flex font-bold text-sm phablet:text-base tablet:text-2xl">{`${
            activeIndex + 1
          } / ${Math.max(response?.cards?.length / cardsPerSlide)}`}</div>
          <div className="hidden tablet:flex z-[5] gap-4 items-center">
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
    </section>
  );
};

export default ViewpointSlider;
