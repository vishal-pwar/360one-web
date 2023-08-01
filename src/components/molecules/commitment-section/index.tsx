"use client";
import Image from "next/image";
import CommitmentBanner from "../../../../public/assets/images/commitment.png";
import CommitmentBlurBanner from "../../../../public/assets/images/commitment-blur.png";
import BrandLogoBlack from "../../../../public/assets/icons/360-one-brand-logo-black.svg";
import BadgeIcon from "../../../../public/assets/icons/badge-icon.svg";
import GaugeIcon from "../../../../public/assets/icons/gauge-icon.svg";
import StarIcon from "../../../../public/assets/icons/star.svg";
import BulbIcon from "../../../../public/assets/icons/bulb-icon.svg";
import HeartIcon from "../../../../public/assets/icons/heart-icon.svg";
import PuzzleIcon from "../../../../public/assets/icons/puzzle-icon.svg";
import ClockIcon from "../../../../public/assets/icons/clock-icon.svg";
import AgileIcon from "../../../../public/assets/icons/agile-icon.svg";
import { useEffect, useState } from "react";
import CardsList from "../cards-list";

const cardsList = [
  {
    content: "Validated track record of delivering results",
    icon: BadgeIcon,
  },
  {
    content: "Unbiased advice that is centred around client goals",
    icon: GaugeIcon,
  },
  {
    content: "A thorough investment framework with deep-rooted expertise",
    icon: StarIcon,
  },
  {
    content:
      "Innovative product strategies, crafted to suit evolving client priorities",
    icon: BulbIcon,
  },
];

const bottomCardsList = [
  {
    content: "Access to innovative products",
    icon: HeartIcon,
  },
  {
    content: "Bespoke experiences curated for the entire family",
    icon: PuzzleIcon,
  },
  {
    content: "Our culture of being always on and responsive",
    icon: ClockIcon,
  },
  {
    content: "Ability to decipher complex client needs and package solutions",
    icon: AgileIcon,
  },
];

const CommitmentSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  let scrollEndTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollEndTimeout) {
      clearTimeout(scrollEndTimeout);
    }
    scrollEndTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
    };
  }, []);
  return (
    <section className="p-[calc(100*var(--scale))calc(125*var(--scale))calc(50*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <div className="flex flex-col">
        <h2 className="text-[calc(1*var(--size-42))] mt-0 mb-[calc(16*var(--scale))] font-bold">
          The 360 ONE Commitment
        </h2>
        <p className="text-[calc(1*var(--size-20))] mt-0 mb-[calc(32*var(--scale))] max-w-[calc(1278*var(--scale))] leading-[1.5]">
          Our new name states our approach to service. 360 denotes the holistic
          view we take of the ONE person whose interests are always first: Our
          Client. It is manifested through our purpose: Performance Plus.
        </p>
        <div className="w-full h-[calc(560*var(--scale))] relative">
          <Image
            className={`absolute top-0 left-0 w-full h-full z-10 object-cover object-[left_center] transition-opacity ease-in duration-300 ${
              isScrolling ? "opacity-1" : "opacity-0"
            }`}
            src={CommitmentBlurBanner}
            alt="360 ONE Commitment"
            title="The 360 ONE Commitment"
          />
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
            src={CommitmentBanner}
            alt="360 ONE Commitment"
            title="The 360 ONE Commitment"
          />
          <div className="w-[calc(146*var(--scale))] h-[calc(146*var(--scale))] absolute p-[calc(30*var(--scale))calc(33*var(--scale))] bg-white b-[calc(-41*var(--scale))] left-[calc(53*var(--scale))] bottom-[calc(-41*var(--scale))] z-10 -translate-y-[31.7409px] transition ease-in duration-150">
            <Image
              className="w-full h-full rotate-90"
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
            />
          </div>
        </div>
        <div className="flex gap-[calc(77*var(--scale))]">
          <div className="w-[40%] py-[calc(105*var(--scale))] pl-[calc(53*var(--scale))] pr-[calc(74*var(--scale))] relative before:content[''] before:absolute before:w-[calc(100%+(53*var(--scale)))] before:h-[calc(100%+(180*var(--scale)))] before:bg-[#c1b6b1] before:bottom-0 before:right-0 before:-z-10">
            <h2 className="text-[calc(1*var(--size-32))] mt-0 mb-[calc(23*var(--scale))] mr-[3rem] leading-[1] font-bold">
              The 360 ONE Performance edge
            </h2>
            <p className="m-0 text-[calc(1*var(--size-20))] leading-[1.6]">
              Performance for us is hard, long-term and objectively measured by
              numbers. It is our commitment to our clients, towards delivering
              long-term performance, through ups and downs.
            </p>
          </div>
          <CardsList cardsList={cardsList} />
        </div>
        <div className="flex gap-[calc(77*var(--scale))]">
          <div className="py-[calc(105*var(--scale))] pl-[calc(53 * var(--scale))] pr-[calc(74*var(--scale))] relative w-[40%]">
            <h3 className="text-[calc(1*var(--size-32))] leading-[1] max-w-[calc(346*var(--scale))] mt-[0] mb-[calc(23*var(--scale))] font-bold">
              The 360 ONE Plus Advantage
            </h3>
            <p className="text-[calc(1*var(--size-20))] leading-[1.6]">
              Our clients tell us that they deeply value the depth of
              relationships we build with each of them. For us, no two clients
              are alike and hence our solutions are distinct, variable and
              personalized to the needs of each and every client.
            </p>
          </div>
          <CardsList cardsList={bottomCardsList} />
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
