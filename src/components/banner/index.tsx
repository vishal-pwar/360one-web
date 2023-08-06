import Image, { StaticImageData } from "next/image";
import WealthBanner from "../../../public/assets/images/wealth-banner.png";
import BrandmarkWealthTopRightWhiteLogo from "../../../public/assets/icons/360-one-brandmark-wealth-top-right-white.svg";

interface BannerProps {
  image: StaticImageData;
  cardBackgroundColor: string;
  cardLayerColor: string;
  title: string;
  content: string;
  icon: StaticImageData;
}

const Banner = ({
  image,
  cardBackgroundColor,
  cardLayerColor,
  title,
  content,
  icon,
}: BannerProps) => {
  return (
    <section className="mb-[calc(190*var(--scale))] ">
      <div className="py-0 px-[calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative">
          <div className="w-[calc(1200*var(--scale))] h-[calc(632*var(--scale))] relative">
            <Image
              className="w-full h-full object-cover object-center"
              src={WealthBanner}
              alt="Wealth management"
              title="Wealth management services"
            />
            <div className="w-full h-[calc(542*var(--scale))] bg-black absolute bottom-[calc(-72*var(--scale))] left-[calc(-75*var(--scale))] -z-10"></div>
          </div>
          <div className="absolute right-0 w-[calc(668*var(--scale))] bottom-[calc(-40*var(--scale))] flex flex-col gap-[calc(35*var(--scale))]">
            <Image
              src={BrandmarkWealthTopRightWhiteLogo}
              className="w-[calc(75*var(--scale))] h-[calc(100*var(--scale))] ml-auto"
              alt="360 One Wealth Management"
              title="360 One Wealth Management"
            />
            <div className="w-full p-[calc(57*var(--scale))] bg-[#fd7740] flex flex-col gap-[calc(16*var(--scale))] z-10">
              <h3 className="text-[calc(1*var(--size-38))] leading-[1.21] max-w-[calc(465*var(--scale))] text-white mb-[calc(8*var(--scale))] font-bold">
                Enabling growth, building legacies
              </h3>
              <p className="text-[calc(1*var(--size-20))] text-white leading-[1.5] opacity-[0.8]">
                As individuals, businesses or families, we understand that your
                priorities and ambitions are unique and evolving. Tailored to
                suit you, we offer investment expertise with the help of our
                deep research, our thorough investment framework and a uniquely
                comprehensive platform. Our focus is on advising you on the most
                suited avenues for investments, by always aligning with your
                interests.
              </p>
            </div>
            <div className="absolute w-[calc(195*var(--scale))] h-[calc(112*var(--scale))] top-[calc(96*var(--scale))] bg-[#fd9266] right-[calc(55*var(--scale))]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
