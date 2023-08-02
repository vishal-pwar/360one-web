"use client";
import Image from "next/image";
import WealthManagementBanner from "../../../../public/assets/images/wealth-banner-clear.jpg";
import WealthManagementBlurBanner from "../../../../public/assets/images/wealth-banner-blur.jpg";
import AssetBanner from "../../../../public/assets/images/asset-banner-clear.jpg";
import AssetBannerBlurBanner from "../../../../public/assets/images/asset-banner-blur.jpg";
import WealthTopRightBrandmark from "../../../../public/assets/icons/360-one-brandmark-wealth-top-right-white.svg";
import AssetTopRightBrandmark from "../../../../public/assets/icons/360-one-brandmark-asset-top-right-white.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

const OfferingsSection = () => {
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
    <section className="mt-[calc(40*var(--scale))]">
      <div
        className="relative p-[calc(82*var(--scale))calc(125*var(--scale))calc(215*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto 
      before:content-[''] before:w-[85%] before:h-[calc(800*var(--scale))] before:bg-black before:top-0 before:left-0 before:absolute before:z-0 after:content-[''] 
      after:w-[80%] after:h-[calc(900*var(--scale))] after:bg-black after:bottom-0 after:right-0 after:absolute after:-z-10"
      >
        <h2 className="text-[calc(1*var(--size-38))] -tracking-[calc(0.9*var(--scale))] leading-[1.16] text-white mb-[calc(16*var(--scale))] font-bold relative">
          360 ONE Offerings
        </h2>
        <p className="text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(40*var(--scale))] max-w-[calc(995*var(--scale))] opacity-[0.8]">
          Both our Wealth and Asset businesses have a deeply synergistic
          relationship. Our insights into the Indian economy, and our
          understanding of the needs of our Wealth clients, enable the Assets
          team to identify new opportunities and products that we can offer
          first to our Wealth clients. This flywheel effect powers growth.
        </p>
        <div className="w-full h-[calc(632*var(--scale))] relative">
          {/* translate-y-[11.315px] transition ease-linear duration-150 */}
          <div className="h-full w-[91.4%] ml-auto relative">
            <Image
              className={`absolute top-0 left-0 w-full h-full z-10 object-cover object-[left_center] transition-opacity ease-in duration-300 ${
                isScrolling ? "opacity-1" : "opacity-0"
              }`}
              src={WealthManagementBlurBanner}
              alt="Wealth management"
              title="Wealth management services"
            />
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
              src={WealthManagementBanner}
              alt="Wealth management"
              title="Wealth management services"
            />
          </div>
          {/* use parallex */}
          <div className="absolute bottom-[-18%] w-[calc(667*var(--scale))] min-h-[calc(418*var(--scale))] z-10">
            <div className="w-full h-full px-[calc(60*var(--scale))] pb-[calc(40*var(--scale))] pt-[calc(60*var(--scale))] text-white bg-[#fd7740]">
              <h2 className="text-[calc(1*var(--size-38))] mb-[calc(16*var(--scale))] font-bold">
                360 ONE Wealth
              </h2>
              <p className="text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(30*var(--scale))] max-w-[calc(480*var(--scale))]">
                Our focus is on advising clients to preserve, manage and grow
                their wealth and legacy. This is consistently achieved through
                deep research and having the best team of product experts across
                all asset classes. With this unique proposition, we are truly
                able to align with our clients’ interests to be on the same side
                of the table.
              </p>
              <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center"
                >
                  Visit 360 One Wealth
                </Link>
              </button>
            </div>
            {/* translate-x-[50%] -translate-y-[50%] */}
            <div className="h-[calc(144*var(--scale))] w-[calc(146*var(--scale))] absolute top-[50%] right-[calc(-70*var(--scale))] bg-white flex justify-center items-center">
              <Image
                className="w-[calc(75*var(--scale))] h-[calc(100*var(--scale))]"
                src={WealthTopRightBrandmark}
                alt="360 ONE Wealth Management"
                title="360 ONE Wealth Management"
              />
            </div>
          </div>
        </div>
        <div className="mt-[calc(266*var(--scale))] w-full h-[calc(632*var(--scale))] relative">
          <div className="ml-0 mr-auto w-[91.4%] h-full relative z-10">
            <Image
              className={`absolute top-0 left-0 w-full h-full z-10 object-cover object-[left_center] transition-opacity ease-in duration-300 ${
                isScrolling ? "opacity-1" : "opacity-0"
              }`}
              src={AssetBannerBlurBanner}
              alt="Asset management services"
              title="Asset management services in India"
            />
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
              src={AssetBanner}
              alt="Asset management services"
              title="Asset management services in India"
            />
          </div>
          <div className="right-0 absolute bottom-[-18%] w-[calc(667*var(--scale))] min-h-[calc(418*var(--scale))] z-10">
            <div className="w-full h-full px-[calc(60*var(--scale))] pb-[calc(40*var(--scale))] pt-[calc(60*var(--scale))] text-white bg-[#5a32ff]">
              <h2 className="text-[calc(1*var(--size-38))] mb-[calc(16*var(--scale))] font-bold">
                360 ONE Asset
              </h2>
              <p className="text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(30*var(--scale))] max-w-[calc(480*var(--scale))]">
                As India’s leading alternates-focused firm, we offer products
                across multiple asset classes. With deep-domain knowledge, a
                strong understanding of the Indian markets and a highly
                experienced investment team, we are focussed on creating the
                right risk-adjusted alpha for our clients.
              </p>
              <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center"
                >
                  Visit 360 One Asset
                </Link>
              </button>
            </div>
            <div className="top-[-18%] left-[40%] h-[calc(144*var(--scale))] w-[calc(146*var(--scale))] absolute right-[calc(-70*var(--scale))] bg-white flex justify-center items-center">
              <Image
                className="w-[calc(75*var(--scale))] h-[calc(100*var(--scale))]"
                src={AssetTopRightBrandmark}
                alt="360 ONE Asset Management"
                title="360 ONE Asset Management"
              />
            </div>
            <div className="absolute h-[calc(62*var(--scale))] w-[calc(112*var(--scale))] bg-[#7b5bff] top-[calc(-34*var(--scale))] right-[calc(54*var(--scale))] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
