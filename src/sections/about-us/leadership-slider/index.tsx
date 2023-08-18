"use client";
import Image from "next/image";
import YatinShahClear from "../../../../public/assets/images/yatinShah-clear.jpg";
import YatinShahBlur from "../../../../public/assets/images/yatinShah-blur.jpg";
import KaranClear from "../../../../public/assets/images/karan.png";
import KaranBlur from "../../../../public/assets/images/karanbhagat-blur.jpg";
import AnoopMaheshwariBlur from "../../../../public/assets/images/anupMaheshwari-blur.jpg";
import AnoopMaheshwariClear from "../../../../public/assets/images/anupMaheshwari-clear.jpg";
import AnirudhTapariaClear from "../../../../public/assets/images/Anirudha-taparia.jpg";
import AnirudhTapariaBlur from "../../../../public/assets/images/Anirudha-taparia-blur.jpg";
import LeftArrow from "../../../../public/assets/icons/left-arrow.svg";
import RightArrow from "../../../../public/assets/icons/right-arrow.svg";
import { useState } from "react";
import { Link } from "@/ui";

let leaderCards = [
  {
    name: "Anirudha Taparia",
    designation: "Co-Founder and Joint CEO",
    about:
      "Anirudha has more than two decades of experience in the financial services industry across consumer, commercial and private banking. He has been instrumental in building 360 ONE’s wealth and asset management business globally. He is responsible for the wealth advisory practice across business verticals and geographies",
    clearImage: AnirudhTapariaClear,
    blurImage: AnirudhTapariaBlur,
    translateY: "translate-y-[calc(42*var(--scale))]",
  },
  {
    name: "Anup Maheshwari",
    designation: "Co-Founder and CIO",
    about:
      "Anup has more than 25 years of experience in financial services. He focuses on investment and strategy for 360 ONE’s business including mutual funds and Alternative Investment Funds (AIFs). He plays a key role in meeting the company's aggressive growth goals while also being responsible for product development and devising an innovative investment strategy",
    clearImage: AnoopMaheshwariClear,
    blurImage: AnoopMaheshwariBlur,
    translateY: "translate-y-[calc(105*var(--scale))]",
  },

  {
    name: "Yatin Shah",
    designation: "Co-founder, 360 ONE",
    about:
      "Yatin has more than two decades of experience in the financial services industry across equity research and private wealth management. He focuses on 360 ONE’s wealth advisory practice apart from client services, marketing and client experiences. He is responsible for introducing the 360 ONE proposition to new clients, as well as expanding the relationship with existing clients",
    clearImage: YatinShahClear,
    blurImage: YatinShahBlur,
    translateY: "translate-y-[calc(-36*var(--scale))]",
  },
  {
    name: "Karan Bhagat",
    designation: "Founder, MD and CEO, 360 ONE ",
    about:
      "Karan has more than two decades of experience in the financial services industry. He provides direction and leadership towards the achievement of 360 ONE's strategic goals and objectives. He has built a team of talented professionals, who work with and for some of the most distinguished family offices, institutions and wealthy families in India and abroad",
    clearImage: KaranClear,
    blurImage: KaranBlur,
    translateY: "translate-y-[calc(20*var(--scale))]",
  },
];

const LeadershipSlider = () => {
  const lastIndex = leaderCards.length - 1;
  const [leadershipCards, setLeadershipCards] = useState([...leaderCards]);
  const handleNext = () => {
    setLeadershipCards((prev) => {
      const newArr = [...prev];
      const lastElement = newArr.pop();
      newArr.unshift(lastElement!);
      return newArr;
    });
  };

  const handlePrev = () => {
    setLeadershipCards((prev) => {
      const newArr = [...prev];
      const firstElement = newArr.shift();
      newArr.push(firstElement!);
      return newArr;
    });
  };

  return (
    <div className="w-[109.5%] justify-end pt-[calc(82*var(--scale))] pb-[calc(105*var(--scale))] relative mt-[calc(50*var(--scale))] overflow-hidden ">
      <div className="relative w-full h-full z-10 flex flex-row transition-transform box-content">
        {leadershipCards.map((card, index) => {
          return (
            <div
              key={card.name}
              className={`flex h-[calc(590*var(--scale))]  ${
                index === lastIndex
                  ? "w-[calc(781*var(--scale))]"
                  : "w-[calc(212*var(--scale))]"
              } ${
                index !== lastIndex && card.translateY
              } ml-[16px] overflow-hidden relative transition-all duration-500 ease-[ease] delay-[0s]`}
            >
              <div
                className={` ${
                  index === lastIndex
                    ? "w-[calc(326*var(--scale))]"
                    : "w-[calc(212*var(--scale))]"
                }  relative transition-all duration-500 ease-[ease] delay-[0s]`}
              >
                <Image
                  className={`w-full h-full object-cover object-top`}
                  src={card.clearImage}
                  alt="Yatin Shah - Co-founder, 360 ONE"
                  title="Yatin Shah - Co-founder, 360 ONE"
                />
                <Image
                  className={`absolute top-0 left-0 w-full h-full object-cover object-top ${
                    index === lastIndex && "hidden"
                  } `}
                  src={card.blurImage}
                  alt="Anup Maheshwari - Co-Founder and CIO, Asset"
                  title="Anup Maheshwari - Co-Founder and CIO, Asset"
                />
              </div>
              <div
                className={`w-[calc(455*var(--scale))] px-[calc(50*var(--scale))] pt-[calc(80*var(--scale))] pb-[calc(20*var(--scale))] transition-all duration-500 ease-[ease] delay-[0s] bg-white ${
                  index !== lastIndex && "hidden"
                }`}
              >
                <h4 className="text-[calc(28*var(--scale))] leading-[1.5] mb-[calc(4*var(--scale))] font-bold text-black tracking-[calc(1.01*var(--scale))] transition-all duration-300 ease-in-out delay-300">
                  {card.name}
                </h4>
                <span className="text-[calc(1*var(--size-16))] leading-[1.63] block mb-[calc(33*var(--scale))] text-black tracking-[calc(0.58*var(--scale))] transition-all duration-300 ease-in-out delay-300">
                  {card.designation}
                </span>
                <p className="text-[calc(1*var(--size-18))] leading-[1.78] tracking-[calc(0.65*var(--scale))] text-left transition-all duration-300 ease-in-out delay-300">
                  {card.about}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-[calc(18*var(--scale))] bg-black w-[calc(218*var(--scale))] h-[calc(82*var(--scale))] absolute top-0 right-0 z-20">
        <button
          onClick={handlePrev}
          className="cursor-pointer bg-none outline-none border-none flex items-center justify-center w-[calc(54*var(--scale))] h-[calc(14*var(--scale))] opacity-[0.2] hover:opacity-[1]"
        >
          <Image className="h-full w-full" src={LeftArrow} alt="left-arrow" />
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer bg-none outline-none border-none flex items-center justify-center w-[calc(54*var(--scale))] h-[calc(14*var(--scale))] opacity-[1]"
        >
          <Image className="h-full w-full" src={RightArrow} alt="right-arrow" />
        </button>
      </div>
      <button
        className="w-[calc(280*var(--scale))] ml-auto z-10 absolute bottom-[calc(20*var(--scale))] right-0
                    text-black border-black p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]"
      >
        <Link
          href="/leadership"
          className="w-full h-full flex justify-center items-center"
        >
          View our Board & Leaders
        </Link>
      </button>
    </div>
  );
};

export default LeadershipSlider;
