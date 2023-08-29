"use client";
import { Link } from "@/components/link";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import BrandLogoWhite from "@/public/assets/icons/360-one-brand-logo-white.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollUp from "../scroll-up";
import { usePathname } from "next/navigation";

const responsiveNavItems = [
  {
    title: {
      top: "",
      bottom: "Home",
    },
    url: "/",
  },
  {
    title: {
      top: "About",
      bottom: "Us",
    },
    url: "/about-us",
  },
  {
    title: {
      top: "360 ONE",
      bottom: "Wealth",
    },
    url: "/wealth-management",
  },
  {
    title: {
      top: "360 ONE",
      bottom: "Asset",
    },
    url: "/asset-management",
  },
  {
    title: {
      top: "Investor",
      bottom: "Relations",
    },
    url: "/",
  },
  {
    title: {
      top: "Reach",
      bottom: "Us",
    },
    url: "/",
  },
];

export const Header = ({ items }: { items: any }) => {
  const [small, setSmall] = useState(false);
  const [responsiveNavActive, setResponsiveNavActive] = useState(false);
  const [activeId, setActiveId] = useState<number>(-1);
  const pathname = usePathname();
  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(-1);
  };

  const handleResponsiveNav = () => {
    setResponsiveNavActive((prev) => !prev);
  };

  const handleSetSmall = () => {
    setSmall(window.scrollY > 100);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleSetSmall);
    }
    return () => {
      window.removeEventListener("scroll", handleSetSmall);
    };
  }, []);

  return (
    <header
      className={`max-sm:p-[calc(24*var(--scale))calc(22*var(--scale))] max-md:p-[calc(20*var(--scale))calc(29*var(--scale))] max-lg:p-[calc(30*var(--scale))calc(37*var(--scale))] p-[calc(49*var(--scale))calc(51*var(--scale))] w-full fixed top-0 z-30 duration-300 ${
        small
          ? "max-sm:py-[calc(20*var(--scale))] max-lg:py-[calc(20*var(--scale))] py-[calc(20*var(--scale))] border-b border-color-[rgb(233, 233, 233)]"
          : ""
      } ${responsiveNavActive ? "bg-black" : "bg-white"}`}
    >
      <ScrollUp />
      <div className="max-md:items-center w-full max-w-[calc(1600*var(--scale))] flex justify-between">
        <Link
          href="/"
          className="max-sm:w-[calc(50.5*var(--scale))] max-sm:h-[calc(52.5*var(--scale))] max-md:w-[calc(50.5*var(--scale))] max-md:h-[calc(52.5*var(--scale))] max-lg:w-[calc(60*var(--scale))] max-lg:h-[calc(62*var(--scale))] w-[calc(82*var(--scale))] h-[calc(86*var(--scale))] flex justify-center items-center z-10"
        >
          {responsiveNavActive ? (
            <Image
              className="w-full h-full"
              src={BrandLogoWhite}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
            />
          ) : (
            <Image
              className="w-full h-full"
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
            />
          )}
        </Link>
        <nav className="max-lg:hidden flex">
          <ul className="flex gap-[calc(50*var(--scale))] list-none h-[45%] m-0 p-0">
            {items.map((navItem: any, index: any) => {
              return (
                <li
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  key={navItem.name}
                  className="relative"
                >
                  <Link
                    className={`text-[calc(1*var(--size-18))] ${
                      navItem.href === pathname && "font-bold"
                    }`}
                    href={navItem.href || "/"}
                    target={`${navItem.external ? "_blank" : ""}`}
                  >
                    {navItem.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-1/2 w-[45px] h-[2px] bg-black -translate-x-1/2 ease-out duration-500 ${
                      activeId === index || navItem.href === pathname
                        ? "scale-x-1"
                        : "scale-x-0"
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden max-lg:flex">
          <div
            className="flex flex-col w-[24px] h-[20px] gap-[4px] origin-center z-20 relative"
            onClick={handleResponsiveNav}
          >
            <div
              className={`h-[3px]  w-full rounded-[calc(50*var(--scale))] transition-all duration-300 ${
                responsiveNavActive
                  ? "rotate-[405deg] bg-white absolute top-[50%] left-0"
                  : "bg-black"
              }`}
            ></div>
            <div
              className={`h-[3px] bg-black w-full rounded-[calc(50*var(--scale))] transition-all duration-300 ${
                responsiveNavActive && "hidden"
              }`}
            ></div>
            <div
              className={`h-[3px]  w-full rounded-[calc(50*var(--scale))] transition-all duration-300 ${
                responsiveNavActive
                  ? "-rotate-[405deg] bg-white absolute top-[50%] left-0"
                  : "bg-black"
              }`}
            ></div>
          </div>

          {responsiveNavActive && (
            <nav className="translate-y-0 absolute z-[400] max-sm:h-screen top-[80%] left-0 w-full bg-black pb-[calc(60*var(--scale))] transition-all duration-[0.8s] ease-in-out delay-0 overflow-y-auto">
              <div className="max-sm:p-[calc(20*var(--scale))calc(22*var(--scale))] max-sm:h-full max-md:p-[calc(48*var(--scale))calc(62*var(--scale))] p-[calc(48*var(--scale))calc(80*var(--scale))] w-full m-auto">
                <ul className="max-sm:items-start max-sm:h-full w-full flex flex-col items-center gap-[calc(30*var(--scale))]">
                  {responsiveNavItems.map((item, index) => {
                    return (
                      <li key={item.title.bottom + item.title.top}>
                        <Link
                          className="max-sm:items-start flex flex-col items-center text-white leading-[1.17] font-bold"
                          href={item.url}
                          onClick={handleResponsiveNav}
                        >
                          <span className="max-sm:text-[calc(16*var(--scale))] text-[calc(1*var(--size-20))]">
                            {item.title.top}
                          </span>
                          <span className="max-sm:text-[calc(24*var(--scale))] text-[calc(1*var(--size-38))]">
                            {item.title.bottom}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
