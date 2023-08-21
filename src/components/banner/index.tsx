import { getAssetHeroSection } from "@/services/asset-management";
import { getWealthHeroSection } from "@/services/wealth-management";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

interface BannerProps {
  page: string;
}

const Banner = async ({ page }: BannerProps) => {
  const response =
    page === "asset"
      ? await getAssetHeroSection()
      : await getWealthHeroSection();
  const { title, text, image, icon } = response?.data?.attributes?.hero;
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url);
  const iconUrl = getStrapiMedia(icon?.data?.attributes?.url);

  return (
    <section className="max-lg:mb-[calc(170*var(--scale))] mb-[calc(190*var(--scale))]">
      <div className="max-lg:pl-[calc(86*var(--scale))] max-lg:pr-[calc(35*var(--scale))] max-lg:pt-[calc(122*var(--scale))] pt-[calc(178*var(--scale))] pb-0 px-[calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative">
          <div className="max-lg:w-[calc(767*var(--scale))] max-lg:h-[calc(405*var(--scale))] w-[calc(1200*var(--scale))] h-[calc(632*var(--scale))] relative">
            <Image
              className="w-full h-full object-cover object-center"
              src={imageUrl}
              alt="Wealth management"
              title="Wealth management services"
              width={3594}
              height={1899}
            />
            <div className="max-lg:w-[calc(760*var(--scale))] max-lg:h-[calc(347*var(--scale))] max-lg:bottom-[calc(-46*var(--scale))] max-lg:left-[calc(-44*var(--scale))] w-full h-[calc(542*var(--scale))] bg-black absolute bottom-[calc(-72*var(--scale))] left-[calc(-75*var(--scale))] -z-10"></div>
          </div>
          <div className="max-lg:w-[calc(465*var(--scale))] max-lg:bottom-[calc(-90*var(--scale))] max-lg:gap-[calc(20*var(--scale))] absolute right-0 w-[calc(668*var(--scale))] bottom-[calc(-40*var(--scale))] flex flex-col gap-[calc(35*var(--scale))]">
            <Image
              src={iconUrl}
              className="max-lg:w-[calc(47*var(--scale))] max-lg:h-[calc(64*var(--scale))] w-[calc(75*var(--scale))] h-[calc(100*var(--scale))] ml-auto"
              alt="360 One Wealth Management"
              title="360 One Wealth Management"
              width={76}
              height={100}
            />
            <div
              className={`max-lg:p-[calc(32*var(--scale))] max-lg:gap-[calc(10*var(--scale))] w-full p-[calc(57*var(--scale))] ${
                page === "asset" && "bg-asset-purple"
              } ${
                page === "wealth" && "bg-wealth-orange"
              } flex flex-col gap-[calc(16*var(--scale))] z-10`}
            >
              <h3 className="max-lg:max-w-[calc(314*var(--scale))] max-lg:mb-0 text-[calc(1*var(--size-38))] leading-[1.21] max-w-[calc(465*var(--scale))] text-white mb-[calc(8*var(--scale))] font-bold">
                {title}
              </h3>
              <p className="text-[calc(1*var(--size-20))] text-white leading-[1.5] opacity-[0.8]">
                {text}
              </p>
            </div>
            <div
              className={`max-lg:w-[calc(124*var(--scale))] max-lg:h-[calc(72*var(--scale))] max-lg:top-[calc(61*var(--scale))] max-lg:right-[calc(74*var(--scale))] absolute w-[calc(195*var(--scale))] h-[calc(112*var(--scale))] top-[calc(96*var(--scale))] ${
                page === "asset" && "bg-asset-purple-60"
              } ${
                page === "wealth" && "bg-wealth-orange-60"
              } right-[calc(55*var(--scale))]`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
