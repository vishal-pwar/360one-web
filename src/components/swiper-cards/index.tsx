"use client";
import React, { MutableRefObject, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

interface SwiperCardsNavigationProps {
  prevSwiperRef: MutableRefObject<HTMLElement | null>;
  nextSwiperRef: MutableRefObject<HTMLElement | null>;
}

const SwiperCardsNavigation = ({
  prevSwiperRef,
  nextSwiperRef,
}: SwiperCardsNavigationProps) => {
  return (
    <>
      <Swiper
        observer={true}
        observeParents={true}
        parallax={true}
        slidesPerView={3}
        spaceBetween={14}
        loop
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={{
          prevEl: prevSwiperRef.current,
          nextEl: nextSwiperRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onInit={(swiper) => {
          //   swiper.params.navigation.prevEl = prevSwiperRef.current;
          //   swiper.params.navigation.nextEl = nextSwiperRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCardsNavigation;
