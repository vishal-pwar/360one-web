"use client";
import Image from "next/image";
import LeftArrow from "../../../../public/assets/icons/left-arrow.svg";
import RightArrow from "../../../../public/assets/icons/right-arrow.svg";
import CsrParfi from "../../../../public/assets/images/csr-parfi.jpg";
import CsrIndustry from "../../../../public/assets/images/csr-industree.jpg";
import CsrArth from "../../../../public/assets/images/csr-arth.jpg";
import CsrCiie from "../../../../public/assets/images/csr-ciie.jpg";
import { useState } from "react";

const pledgeCardsList = [
  {
    title: "Outcome-based, pay-for-success, co-pay paradigm",
    body: "We provided best-in-class training and pan-India placement to underprivileged youth from Jharkhand. Improved leverage through co-funding resulted in 2.5X students getting trained and placed, and up to 4X increase in their earnings. Partner: PARFI",
    image: CsrParfi,
  },
  {
    title: "Smart financing solution",
    body: "We contributed to a ‘zero-interest revolving grant’ that provided cash flow and access to working capital for vulnerable women artisans who lacked creditworthiness and financial footprint to afford loans from mainstream providers. Capacity building training, access to raw materials and market linkages were also offered. Partners: Collective Good Foundation & Industree Foundation.",
    image: CsrIndustry,
  },
  {
    title: "Financial literacy & behavioural change program",
    body: "Improved borrowing behaviour is a matter of consistent practice and discipline. This financial literacy & inclusion program provided nano and micro entrepreneurs training and access to commercial capital, coupled with positive communication nudges and incentives for timely repayment of loans and good credit behaviour. Partners: Collective Good Foundation & Arth.",
    image: CsrArth,
  },
  {
    title: "Fintech incubator for inclusive finance start-ups",
    body: "We entered into a partnership with India’s leading inclusive fintech incubation platform at IIM-A called CIIE.CO that provides transformational support to inclusive lending start-ups that serve low- and middle-income segments. Partner: CIIE.CO",
    image: CsrCiie,
  },
];

const PledgeSlider = () => {
  const firstIndex = 0;
  const [pledgeCards, setPledgeCards] = useState([...pledgeCardsList]);
  const handlePrev = () => {
    setPledgeCards((prev) => {
      const newArr = [...prev];
      const lastElement = newArr.pop();
      newArr.unshift(lastElement!);
      return newArr;
    });
  };

  const handleNext = () => {
    setPledgeCards((prev) => {
      const newArr = [...prev];
      const firstElement = newArr.shift();
      newArr.push(firstElement!);
      return newArr;
    });
  };
  return (
    <div className="min-w-[calc(947*var(--scale))] w-full overflow-hidden">
      <div className="w-auto flex flex-row overflow-hidden h-[calc(702*var(--scale))]">
        <div className="relative w-full h-full z-10 flex transition-transform box-content">
          {pledgeCards.map((card, index) => {
            return (
              <div
                key={card.title}
                className={`transition-all duration-500 ease-[ease] delay-0 ${
                  index === firstIndex
                    ? "w-[calc(796*var(--scale))] h-[calc(702*var(--scale))] mr-[calc(17*var(--scale))]"
                    : "w-[calc(401*var(--scale))] h-[calc(277*var(--scale))] mr-0"
                }  flex flex-row-reverse mt-auto flex-shrink-0 relative`}
              >
                <Image
                  className="transition-all duration-500 ease-[ease] delay-500 w-[calc(401*var(--scale))] h-full object-cover object-[center_18%]"
                  src={card.image}
                  alt="pledge-slider-image"
                />
                <div
                  className={`${
                    index === firstIndex
                      ? "w-[calc(395*var(--scale))]"
                      : "hidden"
                  } transition-all duration-500 ease-[ease] delay-0 p-[calc(50*var(--scale))] pt-[calc(105*var(--scale))] h-[calc(618*var(--scale))] bg-[#e7e2e0] mt-auto relative`}
                >
                  <div className="absolute top-[calc(52*var(--scale))] gap-[calc(18.3*var(--scale))] flex items-center transition-all duration-0 ease-[ease] delay-[0s]">
                    <div
                      onClick={handlePrev}
                      className="w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center opacity-[0.2] hover:opacity-[1]"
                    >
                      <svg
                        width="54"
                        height="14"
                        viewBox="0 0 54 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.75 14 0 7.583 8.653 0l.097 6.222h44.916v2.139H8.75z"
                          fill="#000"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </div>
                    <div
                      onClick={handleNext}
                      className="w-[calc(53.7*var(--scale))] h-[calc(14*var(--scale))] cursor-pointer flex items-center justify-center"
                    >
                      <svg
                        width="54"
                        height="14"
                        viewBox="0 0 54 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m44.916 14 8.75-6.417L45.013 0l-.097 6.222H0v2.139h44.916z"
                          fill="#000"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[calc(28*var(--scale))] leading-[1.14] mb-[calc(24*var(--scale))] font-bold text-black tracking-[calc(1.01*var(--scale))] transition-all duration-0 ease-in-out delay-0">
                    {card.title}
                  </h3>
                  <p className="text-[calc(1*var(--size-18))] leading-[1.4] tracking-[calc(0.65*var(--scale))] transition-all duration-0 ease-in-out delay-0">
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PledgeSlider;
