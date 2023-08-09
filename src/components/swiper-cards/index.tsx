"use client";
import React, { MutableRefObject, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import CloseIcon from "../../../public/assets/icons/icons8-cancel.svg";

interface SwiperCardsNavigationProps {
  prevSwiperRef: MutableRefObject<HTMLElement | null>;
  nextSwiperRef: MutableRefObject<HTMLElement | null>;
  cards: { name: string; designation: string; image: StaticImageData }[];
}

const SwiperCardsNavigation = ({
  prevSwiperRef,
  nextSwiperRef,
  cards,
}: SwiperCardsNavigationProps) => {
  const [showCardContent, setShowCardContent] = useState(false);
  return (
    <>
      <Swiper
        className="h-full w-full"
        slidesPerView={3}
        spaceBetween={12}
        loop
        navigation={{
          prevEl: prevSwiperRef.current,
          nextEl: nextSwiperRef.current,
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevSwiperRef.current;
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextSwiperRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide
              className="w-[298.5px] relative shrink-0 h-full after:content-[''] after:absolute after:h-[calc(270*var(--scale))] after:bottom-0 after:left-0 after:w-full after:bg-gradient-to-b after:from-[#00000000] after:to-[#0b0b0b]"
              key={card.name}
              onClick={() => setShowCardContent(true)}
            >
              <Image
                className="w-[calc(326*var(--scale))] h-full object-cover object-center select-none"
                src={card.image}
                alt={`${card.name}-${card.designation}`}
                title={`${card.name}-${card.designation}`}
              />
              <div className="absolute bottom-0 px-[calc(40*var(--scale))] min-h-[calc(120*var(--scale))] z-10 flex flex-col w-full max-w-[calc(326*var(--scale))]">
                <h3 className="text-[calc(1*var(--size-24))] font-bold text-white leading-[1.17] tracking-[calc(0.87*var(--scale))] mb-[calc(6*var(--scale))] select-none text-left">
                  {card.name}
                </h3>
                <p className="text-[calc(1*var(--size-16))] opacity-[0.8] font-[500] text-white tracking-[calc(0.58*var(--scale))] select-none text-left">
                  {card.designation}
                </p>
              </div>
              <div className="z-10 bg-white h-full py-[calc(60*var(--scale))] pointer-events-none flex flex-col p-0">
                <h4 className="text-[calc(28*var(--scale))] font-bold text-white leading-[1.5] tracking-[calc(1.01*var(--scale))] mb-[calc(4*var(--scale))] select-none text-left">
                  {card.name}
                </h4>
                <span className="text-[calc(1*var(--size-16))] leading-[1.63] tracking-[calc(0.58*var(--scale))] mb-[calc(32*var(--scale))] block opacity-[0] text-left select-none"></span>
              </div>
              <div className="h-[calc(24*var(--scale))] w-[calc(24*var(--scale))] right-[calc(30*var(--scale))] cursor-pointer absolute z-20 opacity-0 transition ease-out duration-0">
                <Image
                  className="h-full w-full"
                  src={CloseIcon}
                  alt="close-icon"
                  title="close-icon"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperCardsNavigation;
