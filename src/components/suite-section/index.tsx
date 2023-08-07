"use client";
import { Link } from "@/ui";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface SuiteSectionProps {
  sectionContent: {
    title: string;
    subtitle: string;
    externalRoute: string;
    blurImg: StaticImageData;
    clearImg: StaticImageData;
    icon: StaticImageData;
    cardBackgroundColor: string;
    section: string;
    cardsList: {
      title: string;
      content: string;
      icon: StaticImageData;
    }[];
  };
}

const SuiteSection = ({ sectionContent }: SuiteSectionProps) => {
  const {
    title,
    subtitle,
    externalRoute,
    blurImg,
    clearImg,
    icon,
    cardsList,
    section,
    cardBackgroundColor,
  } = sectionContent;
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeId, setActiveId] = useState<number>(-1);
  let scrollEndTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(-1);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="overflow-x-clip">
      <div className="p-[calc(50*var(--scale))calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative before:content-[''] before:absolute before:bg-black before:w-[calc(1247*var(--scale))] before:h-[calc(735*var(--scale))] before:top-[calc(-91*var(--scale))] before:left-[calc(-125*var(--scale))] before:-z-10">
          <div className="flex text-white gap-[calc(53*var(--scale))] mb-[calc(80*var(--scale))]">
            <h2 className="text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] font-bold my-auto mx-0 max-w-[calc(228*var(--scale))]">
              {title}
            </h2>
            <div className="w-[calc(1*var(--scale))] bg-[#979797]"></div>
            <div>
              <p className="text-[calc(1*var(--size-20))] mb-[calc(24*var(--scale))] leading-[1.7] max-w-[calc(725*var(--scale))]">
                {subtitle}
              </p>
              <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href={externalRoute}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full h-full flex justify-center items-center"
                >
                  Know More
                </Link>
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-[calc(56*var(--scale))] before:content-[''] before:absolute before:bg-[#e7e2e0] before:w-[calc(1517*var(--scale))] before:h-[calc(1117*var(--scale))] before:top-[calc(-91*var(--scale))] before:left-[calc(-43*var(--scale))] before:-z-20">
            <div className="h-[calc(560*var(--scale))] w-full relative">
              <Image
                className={`absolute top-0 left-0 w-full h-full z-10 object-cover object-[left_center] transition-opacity ease-in duration-300 ${
                  isScrolling ? "opacity-1" : "opacity-0"
                }`}
                src={blurImg}
                alt="The 360 ONE Wealth Suite"
                title="The 360 ONE Wealth Suite"
              />
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
                src={clearImg}
                alt="The 360 ONE Wealth Suite"
                title="The 360 ONE Wealth Suite"
              />
              <div className="flex justify-center items-center absolute w-[calc(117*var(--scale))] h-[calc(115*var(--scale))] top-[calc(-45*var(--scale))] right-[calc(37*var(--scale))] z-10 bg-white">
                <Image
                  src={icon}
                  className="w-[calc(56.5*var(--scale))] h-[calc(75*var(--scale))]"
                  alt="360 One Wealth Management"
                  title="360 One Wealth Management"
                />
              </div>
            </div>
            <div className="h-[calc(358*var(--scale))] w-[109%] mt-auto flex items-end z-10">
              <div className="flex items-end gap-[calc(16*var(--scale))] h-[calc(600*var(--scale))] overflow-x-scroll w-[120%] pr-[calc(20*var(--scale))]">
                {cardsList.map((cardItem, index) => {
                  return (
                    <div
                      key={cardItem.title}
                      className={`min-w-[calc(439*var(--scale))] h-[calc(358*var(--scale))] bg-white p-[calc(30*var(--scale))calc(40*var(--scale))] flex flex-col overflow-hidden transition ease-linear duration-300
                                hover:max-h-[calc(900*var(--scale))] hover:h-full hover:mt-0 hover:transition hover:ease-in-out hover:duration-300 hover:text-white hover:min-h-[calc(550*var(--scale))] ${
                                  section === "asset"
                                    ? "hover:bg-asset-purple"
                                    : "hover:bg-wealth-orange"
                                } `}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`w-[calc(53*var(--scale))] h-[calc(64*var(--scale))] mb-[calc(24*var(--scale))] mt-auto ${
                          activeId === index && "hidden"
                        }`}
                      >
                        <Image
                          src={cardItem.icon}
                          className={`w-full h-full transition ease-in-out duration-300 ${
                            activeId === index &&
                            "mt-[calc(-90*var(--scale))] -translate-y-[100px]"
                          }`}
                          alt="360 One Wealth Management"
                          title="360 One Wealth Management"
                        />
                      </div>
                      <h5 className="text-[calc(1*var(--size-24))] tracking-[calc(0.87*var(--scale))] font-bold mb-[calc(12*var(--scale))]">
                        {cardItem.title}
                      </h5>
                      <p
                        className={`text-[calc(1*var(--size-20))] opacity-[0.8] leading-[1.4] line-clamp-3 ${
                          activeId === index && "block"
                        } `}
                      >
                        {cardItem.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
