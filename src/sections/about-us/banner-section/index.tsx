import Image from "next/image";
import { getAboutHeroSection } from "@/services/about";
import { getStrapiMedia } from "@/utils/api-helpers";

const AboutBannerSection = async () => {
  const response = await getAboutHeroSection();
  const { title, text, video, bannerImage, icon } =
    response?.data?.attributes?.hero;
  const bannerImageUrl = getStrapiMedia(bannerImage?.data?.attributes?.url);
  const videoUrl = getStrapiMedia(video?.data?.attributes?.url);
  const playIconUrl = getStrapiMedia(icon?.data?.attributes?.url);

  return (
    <section className="relative">
      <div className="pt-0 px-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="h-[calc(689*var(--scale))] w-[109.32%] relative before:content-[''] before:absolute before:w-[calc(843*var(--scale))] before:h-[calc(2*var(--scale))] before:bg-black before:bottom-[calc(-67*var(--scale))] before:right-[calc(128*var(--scale))]">
          <div className="absolute bottom-[calc(-39*var(--scale))] left-[calc(-125*var(--scale))] w-[calc(1152*var(--scale))] h-[calc(650*var(--scale))] bg-[#c1b7b199]"></div>
          <div className="absolute bottom-[calc(-68*var(--scale))] left-[calc(-84*var(--scale))] max-w-[calc(528*var(--scale))] max-h-[calc(463*var(--scale))] bg-black z-10 p-[calc(54*var(--scale))calc(75*var(--scale))] flex flex-col gap-[calc(18*var(--scale))]">
            <h3 className="text-white text-[calc(1*var(--size-38))] max-w-[calc(287*var(--scale))] leading-[1.37] font-bold">
              {title}
            </h3>
            <p className="text-white text-[calc(1*var(--size-20))] leading-[1.3] opacity-[0.8]">
              {text}
            </p>
          </div>
          <div className="relative h-full bg-black">
            <video
              className="h-full w-full opacity-1 transition ease-in duration-500 object-contain bg-black"
              src={videoUrl}
              muted
              controlsList="nodownload"
            />
            <Image
              className="w-full h-full object-contain object-center absolute top-0 left-0 opacity-[1]"
              src={bannerImageUrl}
              alt="about-us-banner"
              title="about-us-banner"
              height={4501}
              width={8001}
            />
            <Image
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[calc(101*var(--scale))] h-[calc(101*var(--scale))] z-10"
              src={playIconUrl}
              alt="play-icon"
              height={101}
              width={101}
            />
            <div className="absolute w-full h-full top-0 left-0 bg-[#00000080]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;
