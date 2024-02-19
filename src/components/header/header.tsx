"use client";
import { Link } from "@/components/link";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import BrandLogoWhite from "@/public/assets/icons/360-one-brand-logo-white.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ScrollUp from "../scroll-up";
import Ticker from "../ticker";

const responsiveNavItems = [
  {
    title: "Home",
    external: false,
    url: "/",
  },
  {
    title: "About Us",

    external: false,
    url: "/about-us",
  },
  {
    title: "360 ONE Wealth",

    external: false,
    url: "/wealth",
  },
  {
    title: "360 ONE Asset",

    external: false,
    url: "/asset",
  },
  {
    title: "Investor Relations",

    external: true,
    url: "https://www.360.one/investor-relations.html",
  },
  {
    title: "Reach Us",
    external: true,
    url: "https://www.iiflwealth.com/Connect/Reach-Us",
  },
  {
    title: "Perspective",

    external: false,
    url: "/perspective",
  },
  {
    title: "Client Login",
    url: "#",
    children: [
      {
        title: "AMC",
        href: "#",
        subChildren: [
          {
            title: "Portfolio Login",
            href: "https://wealthlogin.360.one/Wealth/#/login",
            external: true,
          },
          {
            title: "Online Trading",
            href: "https://onlinetrade.360.one/Express5/login#",
            external: true,
          },
          {
            title: "360 ONE Private Login",
            href: "https://wapp-private.360.one/wealthspectrum/app/loginWith",
            external: true,
          },
        ],
      },

      {
        title: "Wealth",
        href: "#",
        subChildren: [
          {
            title: "View PMS portfolio",
            href: "https://wappamc.360.one/wealthspectrum/app/login",
            external: true,
          },
          {
            title: "Invest in MF online",
            href: "https://iiflmf.com/",
            external: true,
          },
          {
            title: "Distributor Login",
            href: "https://wappamc.360.one/wealthspectrum/app/login",
            external: true,
          },
        ],
      },
    ],
  },
];

export const Header = ({ items, ticker }: { items?: any[]; ticker: any }) => {
  const [showDropdown, setShowDropdown] = useState<{
    [key: string]: boolean;
  }>({});

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
    setSmall(window.scrollY > 1);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleSetSmall);
    }
    return () => {
      window.removeEventListener("scroll", handleSetSmall);
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 1024) setResponsiveNavActive(false);
  }, [width]);

  return (
    <React.Fragment>
      {ticker && <Ticker ticker={ticker} />}
      <header
        className={`max-sm:p-[calc(24*var(--scale))calc(22*var(--scale))] max-md:p-[calc(20*var(--scale))calc(29*var(--scale))] max-lg:p-[calc(30*var(--scale))calc(37*var(--scale))] p-[calc(49*var(--scale))calc(51*var(--scale))] w-full fixed z-30 ${
          small
            ? "max-sm:py-[calc(20*var(--scale))] max-lg:py-[calc(20*var(--scale))] py-[calc(20*var(--scale))] border-b border-color-[rgb(233, 233, 233)]"
            : ""
        } transition-all ease-[ease] duration-300 ${
          responsiveNavActive ? "bg-black" : "bg-white"
        } ${ticker ? "top-8" : "top-0"} `}
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
              {items?.map((navItem: any, index: any) => {
                return (
                  <li
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    key={index}
                    className="relative"
                  >
                    <Link
                      className={`text-[calc(1*var(--size-18))] ${
                        navItem.href === pathname && "font-bold"
                      } peer`}
                      href={navItem.href || "/"}
                      target={`${navItem.external ? "_blank" : ""}`}
                    >
                      {navItem.name}
                    </Link>
                    {navItem.children?.length === 0 && (
                      <span
                        className={`absolute bottom-0 left-1/2 w-[45px] h-[2px] bg-black -translate-x-1/2 ease-out duration-500 ${
                          activeId === index || navItem.href === pathname
                            ? "scale-x-1"
                            : "scale-x-0"
                        }`}
                      ></span>
                    )}
                    {navItem.children?.length > 0 && (
                      <div
                        key={navItem.name}
                        className="hidden peer-hover:block hover:block absolute right-0 w-60 bg-white border border-gray-300 rounded shadow-lg z-10"
                      >
                        <ul className="flex flex-col gap-1">
                          {navItem.children?.map((child: any) => (
                            <li
                              key={child.title}
                              className="group block relative cursor-pointer"
                            >
                              <div className="w-full p-2 text-[14px] font-bold text-wealth-orange flex">
                                {child.title}
                              </div>
                              {child.subChildren.data.length > 0 ? (
                                <div>
                                  <ul className="flex flex-col">
                                    {child?.subChildren?.data?.map(
                                      (subChild: any) => (
                                        <li key={subChild?.attributes?.title}>
                                          <Link
                                            href={subChild?.href || "/"}
                                            target={`${
                                              subChild?.external ? "_blank" : ""
                                            }`}
                                            className="px-2 py-1"
                                          >
                                            {subChild?.attributes?.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

            {/* {responsiveNavActive && ( */}
            <nav
              className={`${
                responsiveNavActive ? "translate-y-0" : "translate-y-[-120%]"
              } flex transition-transform ease-in-out duration-[0.8s] absolute z-[400] max-sm:h-screen top-[80%] left-0 w-full bg-black pb-[calc(60*var(--scale))] overflow-y-auto`}
            >
              <div className="max-sm:p-[calc(20*var(--scale))calc(22*var(--scale))] max-sm:h-full max-md:p-[calc(48*var(--scale))calc(62*var(--scale))] p-[calc(48*var(--scale))calc(80*var(--scale))] w-full m-auto">
                <ul className="max-sm:items-start max-sm:h-full w-full flex flex-col items-center gap-[calc(20*var(--scale))]">
                  {responsiveNavItems?.map((item, index) => {
                    if (item.children) {
                      return (
                        <React.Fragment key={index}>
                          <span className=" text-white font-bold max-sm:text-[calc(18*var(--scale))] text-[calc(1*var(--size-38))]">
                            {item.title}
                          </span>
                          {item.children?.map((c) => {
                            return (
                              <li key={c.title}>
                                <div
                                  className="max-sm:items-start flex flex-col items-center text-white leading-[1.17] font-bold"
                                  onClick={handleResponsiveNav}
                                >
                                  <span className="max-sm:items-start flex flex-col gap-2  items-center text-white leading-[1.17] font-bold">
                                    <div>{c?.title}</div>
                                    <div className="flex flex-col gap-2">
                                      {c.subChildren.map((i: any) => {
                                        return (
                                          <div key={i.title}>
                                            <Link
                                              href={i?.href}
                                              target={`${
                                                i.external ? "_blank" : ""
                                              }`}
                                              className="max-sm:items-start flex flex-col items-center text-white leading-[1.17] font-bold"
                                              onClick={handleResponsiveNav}
                                            >
                                              <span className="max-sm:text-[calc(14*var(--scale))] text-[calc(1*var(--size-20))]">
                                                | {i?.title}
                                              </span>
                                            </Link>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </span>
                                </div>
                              </li>
                            );
                          })}
                        </React.Fragment>
                      );
                    } else
                      return (
                        <li key={item?.title}>
                          <Link
                            className="max-sm:items-start flex flex-col items-center text-white leading-[1.17] font-bold"
                            href={item?.url}
                            target={`${item.external ? "_blank" : ""}`}
                            onClick={handleResponsiveNav}
                          >
                            <span className="max-sm:text-[calc(18*var(--scale))] text-[calc(1*var(--size-38))]">
                              {item?.title}
                            </span>
                          </Link>
                        </li>
                      );
                  })}
                </ul>
              </div>
            </nav>
            {/* )} */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
