import Image from "next/image";
import { getAboutHeroSection } from "@/services/about";
import { getStrapiMedia } from "@/utils/api-helpers";
import VideoPLayer from "@/components/video-player";

const AboutBannerSection = async () => {
  const response = await getAboutHeroSection();
  const { title, text, video, bannerImage, icon } =
    response?.data?.attributes?.hero;
  const bannerImageUrl = getStrapiMedia(bannerImage?.data?.attributes?.url);
  const videoUrl = getStrapiMedia(video?.data?.attributes?.url);
  const playIconUrl = getStrapiMedia(icon?.data?.attributes?.url);

  return (
    <section className="relative">
      <div className="max-sm:pt-[calc(100.5*var(--scale))] max-sm:mb-0 max-sm:p-[calc(20*var(--scale))calc(28*var(--scale))] max-md:pt-[calc(92.5*var(--scale))] max-md:mb-[calc(100*var(--scale))] max-md:px-[calc(28*var(--scale))] max-md:pb-[calc(19*var(--scale))] max-lg:px-[calc(80*var(--scale))] max-lg:pb-[calc(48*var(--scale))] max-lg:pt-[calc(122*var(--scale))] pt-[calc(176*var(--scale))] px-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-sm:w-full max-sm:flex max-sm:flex-col-reverse max-sm:h-auto max-md:h-[calc(330*var(--scale))] max-md:w-full max-sm:before:h-0 max-md:before:bottom-[calc(-160*var(--scale))] max-md:before:right-[calc(57*var(--scale))] max-md:before:w-[calc(652*var(--scale))] max-lg:before:bottom-[calc(-43*var(--scale))] max-lg:before:w-[calc(540*var(--scale))] max-lg:before:right-[calc(80*var(--scale))] max-lg:h-[calc(441*var(--scale))] h-[calc(689*var(--scale))] w-[109.32%] relative before:content-[''] before:absolute before:w-[calc(843*var(--scale))] before:h-[calc(2*var(--scale))] before:bg-black before:bottom-[calc(-67*var(--scale))] before:right-[calc(128*var(--scale))]">
          <div className="max-sm:hidden max-md:w-[calc(553*var(--scale))] max-md:h-[calc(312*var(--scale))] max-md:left-[calc(-62*var(--scale))] max-md:bottom-[calc(-19*var(--scale))] max-lg:w-[calc(738*var(--scale))] max-lg:h-[calc(416*var(--scale))] max-lg:left-[calc(-79*var(--scale))] max-lg:bottom-[calc(-25*var(--scale))] absolute bottom-[calc(-39*var(--scale))] left-[calc(-125*var(--scale))] w-[calc(1152*var(--scale))] h-[calc(650*var(--scale))] bg-[#c1b7b199]"></div>
          <div
            className="max-sm:w-full max-sm:max-w-full max-sm:static max-md:min-h-[calc(215*var(--scale))] max-md:gap-[calc(6*var(--scale))] max-sm:mt-[calc(-30*var(--scale))] max-sm:p-[calc(21*var(--scale))calc(26*var(--scale))]
           max-md:p-[calc(21*var(--scale))calc(40*var(--scale))] max-md:bottom-[calc(-141*var(--scale))] max-md:left-[calc(-2*var(--scale))] max-md:max-w-[calc(658*var(--scale))]
           max-lg:p-[calc(36*var(--scale))calc(50*var(--scale))] max-lg:max-w-[calc(391*var(--scale))] max-lg:min-h-[calc(301*var(--scale))] max-lg:left-[calc(-50*var(--scale))] max-lg:bottom-[calc(-35*var(--scale))] max-lg:gap-[calc(12*var(--scale))] absolute bottom-[calc(-68*var(--scale))] left-[calc(-84*var(--scale))] max-w-[calc(528*var(--scale))] max-h-[calc(463*var(--scale))] bg-black z-10 p-[calc(54*var(--scale))calc(75*var(--scale))] flex flex-col gap-[calc(18*var(--scale))]"
          >
            <h3 className="max-lg:max-w-[calc(180*var(--scale))] text-white text-[calc(1*var(--size-38))] max-w-[calc(287*var(--scale))] leading-[1.37] font-bold">
              {title}
            </h3>
            <p className="max-lg:text-[calc(14*var(--scale))] max-lg:leading-[1.43] text-white text-[calc(1*var(--size-20))] leading-[1.3] opacity-[0.8]">
              {text}
            </p>
          </div>
          <div className="max-sm:left-[calc(-28*var(--scale))] max-sm:w-[117.5%] max-sm:h-[calc(203*var(--scale))] max-sm:p-0 max-md:pl-[calc(38*var(--scale))] max-md:right-0 relative h-full bg-black">
            <video
              className="max-md:w-[calc(702*var(--scale))] h-full w-full opacity-1 transition ease-in duration-500 object-contain bg-black"
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
            <VideoPLayer iconUrl={playIconUrl} videoUrl={videoUrl} />
            <div className="absolute w-full h-full top-0 left-0 bg-[#00000080]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;
