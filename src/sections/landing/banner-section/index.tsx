import VideoPLayer from "@/components/video-player";
import { getHeroSection } from "@/services/landing";
import { getStrapiMedia } from "@/utils/api-helpers";

const BannerSection = async () => {
  const response = await getHeroSection();
  // const { title, text } = response?.data?.attributes?.hero;
  const title = response?.data?.attributes?.hero?.title;
  const text = response?.data?.attributes?.hero?.text;
  const videoUrl = getStrapiMedia(
    response?.data?.attributes?.hero?.video?.data?.attributes?.url
  );
  const iconUrl = getStrapiMedia(
    response?.data?.attributes?.hero?.icon?.data?.attributes?.url
  );

  if (!title || !text || !videoUrl) return null;

  return (
    <section className="max-sm:pt-[calc(100.5*var(--scale))] max-sm:px-[calc(22*var(--scale))] max-md:pt-[calc(92.5*var(--scale))] max-md:pb-0 max-md:px-[calc(62*var(--scale))] max-lg:px-[calc(80*var(--scale))] max-lg:pb-0 max-lg:pt-[calc(122*var(--scale))] pt-[calc(178*var(--scale))] pb-0 px-[calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <div className="max-lg:items-center flex flex-col">
        <div className="max-sm:w-[113.1%] max-sm:h-[calc(200*var(--scale))] max-md:w-[119.5%] max-md:h-[calc(312*var(--scale))] max-lg:w-[118.5%] max-lg:h-[calc(416*var(--scale))] max-lg:ml-0 w-[115.41%] -ml-[10%] h-[calc(650*var(--scale))] relative bg-black">
          {videoUrl && (
            <video
              className="h-full w-full opacity-1 transition ease-in duration-500 object-contain bg-black"
              src={videoUrl}
              autoPlay
              loop
              muted
              controlsList="nodownload"
            />
          )}
          <VideoPLayer iconUrl={iconUrl} videoUrl={videoUrl} />
          <div className="absolute w-full h-full top-0 left-0 bg-[#00000080]"></div>
        </div>
        <div className="max-sm:p-[calc(23*var(--scale))] max-sm:w-full max-sm:gap-[calc(23*var(--scale))] max-sm:mt-[calc(-20*var(--scale))] max-md:p-[calc(25*var(--scale))calc(50*var(--scale))] max-md:flex-col max-md:gap-[calc(20*var(--scale))] max-md:mt-[calc(-50*var(--scale))] max-lg:gap-[calc(34*var(--scale))] max-lg:p-[calc(48*var(--scale))calc(42*var(--scale))] max-lg:w-[109%] max-lg:mt-[calc(-60*var(--scale))] bg-black text-white flex gap-[calc(60*var(--scale))] p-[calc(35*var(--scale))calc(60*var(--scale))] mt-[calc(-110*var(--scale))] z-10">
          <h2 className="max-md:w-full max-lg:w-[calc(235*var(--scale))] text-[calc(1*var(--size-38))] font-bold leading-[1.37] w-[calc(383*var(--scale))] m-auto">
            {title}
          </h2>
          <span className="max-md:hidden w-[calc(1*var(--scale))] bg-[#979797]"></span>
          <p className="max-sm:text-[calc(14*var(--scale))] max-md:leading-[1.67] max-md:opacity-[0.8] max-md:text-[calc(18*var(--scale))] flex-1 text-[calc(1*var(--size-20))] leading-[1.5]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
