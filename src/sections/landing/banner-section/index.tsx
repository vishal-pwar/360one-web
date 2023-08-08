import PlayIcon from "@/public/assets/icons/playIcon.svg";
import { getHeroSection } from "@/services/landing";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";

const BannerSection = async () => {
  const response = await getHeroSection();
  const url = getStrapiMedia(
    response?.data?.attributes?.hero?.video?.data?.attributes?.url
  );

  return (
    <section className="py-0 px-[calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <div className="flex flex-col">
        <div className="w-[115.41%] -ml-[10%] h-[calc(650*var(--scale))] relative bg-black">
          {url && (
            <video
              className="h-full w-full opacity-1 transition ease-in duration-500 object-contain bg-black"
              src={url}
              autoPlay
              loop
              muted
              controlsList="nodownload"
            />
          )}
          <Image
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[calc(101*var(--scale))] h-[calc(101*var(--scale))] z-10"
            src={PlayIcon}
            alt="play-icon"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[#00000080]"></div>
        </div>
        <div className="bg-black text-white flex gap-[calc(60*var(--scale))] p-[calc(35*var(--scale))calc(60*var(--scale))] mt-[calc(-110*var(--scale))] z-10">
          <h2 className="text-[calc(1*var(--size-38))] font-bold leading-[1.37] w-[calc(383*var(--scale))] m-auto">
            {response?.data?.attributes?.hero?.title}
          </h2>
          <span className="w-[calc(1*var(--scale))] bg-[#979797]"></span>
          <p className="flex-1 text-[calc(1*var(--size-20))] leading-[1.5]">
            {response?.data?.attributes?.hero?.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
