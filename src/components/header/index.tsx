"use client";
import { Link } from "@/components/link";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
const headerNavItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About us",
    route: "/",
  },
  {
    name: "360 ONE Wealth",
    route: "/",
  },
  {
    name: "360 ONE Asset",
    route: "/",
  },
  {
    name: "Investor Relations",
    route: "/",
  },
  {
    name: "Reach us",
    route: "/",
  },
];

const Header = () => {
  const [small, setSmall] = useState(false);
  const [activeId, setActiveId] = useState<number>(-1);
  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(-1);
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
      className={`p-[calc(49*var(--scale))calc(51*var(--scale))] w-full sticky top-0 bg-white z-30  duration-300 ${
        small &&
        "py-[calc(20*var(--scale))] border-b border-color-[rgb(233, 233, 233)]"
      }`}
    >
      <div className="w-full max-w-[calc(1600*var(--scale))] flex justify-between">
        <Link
          href="/"
          className="w-[calc(82*var(--scale))] h-[calc(86*var(--scale))] flex justify-center items-center z-10"
        >
          <Image
            className="w-full h-full"
            src={BrandLogoBlack}
            alt="360 ONE - Asset & Wealth management"
            title="360 One"
          />
        </Link>
        <nav className="flex">
          <ul className="flex gap-[calc(50*var(--scale))] list-none h-[45%] m-0 p-0">
            {headerNavItems.map((navItem, index) => {
              return (
                <li
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  key={navItem.name}
                  className="relative"
                >
                  <Link href={navItem.route}>{navItem.name}</Link>
                  <span
                    className={`absolute bottom-0 left-1/2 w-[45px] h-[2px] bg-black -translate-x-1/2 ease-out duration-500 ${
                      activeId === index ? "scale-x-1" : "scale-x-0"
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
