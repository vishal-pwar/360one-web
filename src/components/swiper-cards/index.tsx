"use client";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CloseIcon from "../../../public/assets/icons/icons8-cancel.svg";

export type Card = {
  id: number;
  name: string;
  designation: string;
  about: string;
  image: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: null;
        caption: null;
        width: number;
        height: number;
        formats: any;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        createdAt: Date;
        updatedAt: Date;
      };
    };
  };
};

interface SwiperCardsNavigationProps {
  prevSwiperRef: MutableRefObject<HTMLElement | null>;
  nextSwiperRef: MutableRefObject<HTMLElement | null>;
  cards: Card[];
  activeSlideId?: number;
  setActiveSlideId?: Dispatch<SetStateAction<number>>;
}

const SwiperCardsNavigation = ({
  prevSwiperRef,
  nextSwiperRef,
  cards,
  activeSlideId,
  setActiveSlideId,
}: SwiperCardsNavigationProps) => {
  const [spaceBetween, setSpaceBetween] = useState(12);
  const [isVisible, setIsVisible] = useState(true);

  const handleTextVisibility = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 301);
  };

  const handleOpenDetailsPanel = (index: number) => {
    if (activeSlideId !== index) {
      setActiveSlideId?.(index);
      handleTextVisibility();
    }
  };

  const handleCloseDetailsPanel = () => {
    setIsVisible(false);
    setActiveSlideId?.(-1);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 450) {
        setSpaceBetween(7.8);
      } else if (width >= 450 && width < 768) {
        setSpaceBetween(7.8);
      } else if (width >= 768 && width < 1024) {
        setSpaceBetween(14);
      } else {
        setSpaceBetween(12);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        className="h-full w-full cursor-grab"
        slidesPerView={"auto"}
        spaceBetween={spaceBetween}
        loop
        navigation={{
          prevEl: prevSwiperRef?.current,
          nextEl: nextSwiperRef?.current,
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevSwiperRef?.current;
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextSwiperRef?.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {cards?.map((card, index: number) => {
          return (
            <SwiperSlide
              className={`max-lg:overflow-hidden flex ${
                activeSlideId === index
                  ? "max-sm:!w-[calc(331*var(--scale))] max-sm:after:w-0 max-md:!w-[calc(714*var(--scale))] max-lg:!w-[calc(743*var(--scale))] !w-[calc(992*var(--scale))]"
                  : "max-sm:!w-[291.1px] max-md:!w-[calc(232*var(--scale))] max-lg:!w-[calc(232*var(--scale))] !w-[calc(326*var(--scale))]"
              } relative shrink-0 h-full max-sm:after:w-[291.1px] max-md:after:w-[calc(232*var(--scale))] max-lg:after:w-[calc(232*var(--scale))] after:w-[calc(326*var(--scale))] after:content-[''] after:absolute after:h-[calc(270*var(--scale))] after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-[#00000000] after:to-[#0b0b0b]`}
              key={card?.name}
              onClick={() => handleOpenDetailsPanel(index)}
            >
              <div
                className={`h-full max-sm:w-full max-lg:w-[calc(232*var(--scale))] w-[calc(326*var(--scale))] ${
                  activeSlideId === index && "max-sm:hidden"
                }`}
              >
                <Image
                  className="max-sm:w-[291.1px] max-md:w-[calc(232*var(--scale))] max-lg:w-[calc(232*var(--scale))] w-full h-full object-cover object-center select-none"
                  src={getStrapiMedia(card?.image?.data?.attributes?.url)}
                  alt={`${card?.name}-${card?.designation}`}
                  title={`${card?.name}-${card?.designation}`}
                  width={500}
                  height={750}
                />
                <div className="max-lg:px-[calc(24*var(--scale))] max-lg:max-w-[calc(232*var(--scale))] absolute bottom-0 px-[calc(40*var(--scale))] min-h-[calc(120*var(--scale))] z-10 flex flex-col w-full max-w-[calc(326*var(--scale))]">
                  <h3 className="text-[calc(1*var(--size-24))] font-bold text-white leading-[1.17] tracking-[calc(0.87*var(--scale))] mb-[calc(6*var(--scale))] select-none text-left">
                    {card?.name}
                  </h3>
                  <p className="text-[calc(1*var(--size-16))] opacity-[0.8] font-[500] text-white tracking-[calc(0.58*var(--scale))] select-none text-left">
                    {card?.designation}
                  </p>
                </div>
              </div>
              <div
                className={`absolute top-0 bg-white h-full flex flex-col p-0 transition-[width] duration-300 ease-[ease] ${
                  activeSlideId === index
                    ? "max-sm:w-[calc(331*var(--scale))] max-md:w-[calc(482*var(--scale))] max-lg:w-[calc(511*var(--scale))] w-[calc(666*var(--scale))] max-sm:left-0 max-lg:left-[calc(232*var(--scale))] left-[calc(326*var(--scale))] max-sm:p-[calc(24*var(--scale))] max-sm:pr-[calc(30*var(--scale))] max-md:py-[calc(31*var(--scale))] max-md:pl-[calc(41*var(--scale))] max-md:pr-[calc(28*var(--scale))] max-lg:p-[calc(40*var(--scale))] max-lg:pr-[calc(70*var(--scale))] py-[calc(60*var(--scale))] pl-[calc(70*var(--scale))] pr-[calc(57*var(--scale))] z-10"
                    : "w-0 p-0 -z-10 opacity-0"
                }`}
              >
                <div className={`${isVisible ? "block" : "hidden"}`}>
                  <h4
                    className={`max-sm:text-[calc(18*var(--scale))] max-lg:text-[calc(20*var(--scale))] max-lg:leading-[1.34] max-lg:mb-[calc(1.3*var(--scale))] text-[calc(28*var(--scale))] font-bold text-black leading-[1.5] tracking-[calc(1.01*var(--scale))] mb-[calc(4*var(--scale))] select-none text-left`}
                  >
                    {card?.name}
                  </h4>
                  <span
                    className={`max-sm:mb-[calc(14*var(--scale))] max-md:mb-[calc(16*var(--scale))] max-md:text-[calc(14*var(--scale))] max-lg:mb-[calc(21.4*var(--scale))] text-[calc(1*var(--size-16))] leading-[1.63] tracking-[calc(0.58*var(--scale))] mb-[calc(32*var(--scale))] block text-left select-none`}
                  >
                    {card?.designation}
                  </span>
                  <p
                    className={`max-sm:text-[calc(13*var(--scale))] max-md:text-[calc(14*var(--scale))] max-lg:text-[calc(1*var(--size-16))] max-lg:leading-[1.71] max-lg:tracking-[calc(0.51*var(--scale))] text-[calc(1*var(--size-18))] leading-[1.78] tracking-[calc(0.65*var(--scale))] block text-left select-none`}
                  >
                    {card?.about}
                  </p>
                  <div
                    onClick={handleCloseDetailsPanel}
                    className={`${
                      activeSlideId === index ? "block" : "hidden"
                    } max-lg:w-[calc(16.4*var(--scale))] w-[calc(24*var(--scale))] max-lg:h-[calc(16.4*var(--scale))] max-lg:top-[calc(10*var(--scale))] max-lg:right-[calc(10*var(--scale))] h-[calc(24*var(--scale))] top-[calc(30*var(--scale))] right-[calc(30*var(--scale))] cursor-pointer absolute`}
                  >
                    <Image
                      className="h-full w-full"
                      src={CloseIcon}
                      alt="close-icon"
                      title="close-icon"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperCardsNavigation;
