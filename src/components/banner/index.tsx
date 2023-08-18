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
    <section className="mb-[calc(190*var(--scale))] ">
      <div className="py-0 px-[calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative">
          <div className="w-[calc(1200*var(--scale))] h-[calc(632*var(--scale))] relative">
            <Image
              className="w-full h-full object-cover object-center"
              src={imageUrl}
              alt="Wealth management"
              title="Wealth management services"
              width={3594}
              height={1899}
            />
            <div className="w-full h-[calc(542*var(--scale))] bg-black absolute bottom-[calc(-72*var(--scale))] left-[calc(-75*var(--scale))] -z-10"></div>
          </div>
          <div className="absolute right-0 w-[calc(668*var(--scale))] bottom-[calc(-40*var(--scale))] flex flex-col gap-[calc(35*var(--scale))]">
            <Image
              src={iconUrl}
              className="w-[calc(75*var(--scale))] h-[calc(100*var(--scale))] ml-auto"
              alt="360 One Wealth Management"
              title="360 One Wealth Management"
              width={76}
              height={100}
            />
            <div
              className={`w-full p-[calc(57*var(--scale))] ${
                page === "asset" && "bg-asset-purple"
              } ${
                page === "wealth" && "bg-wealth-orange"
              } flex flex-col gap-[calc(16*var(--scale))] z-10`}
            >
              <h3 className="text-[calc(1*var(--size-38))] leading-[1.21] max-w-[calc(465*var(--scale))] text-white mb-[calc(8*var(--scale))] font-bold">
                {title}
              </h3>
              <p className="text-[calc(1*var(--size-20))] text-white leading-[1.5] opacity-[0.8]">
                {text}
              </p>
            </div>
            <div
              className={`absolute w-[calc(195*var(--scale))] h-[calc(112*var(--scale))] top-[calc(96*var(--scale))] ${
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
