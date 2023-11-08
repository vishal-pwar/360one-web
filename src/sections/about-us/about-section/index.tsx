import { getAboutUsSection } from "@/services/about";
import { getStrapiMedia } from "@/utils/api-helpers";
import AboutUsCards from "../about-us-cards";

const AboutUsSection = async () => {
  const response = await getAboutUsSection();
  const title = response?.data?.attributes?.aboutUs?.title;
  const text = response?.data?.attributes?.aboutUs?.text;
  const video = response?.data?.attributes?.aboutUs?.video;
  const cards = response?.data?.attributes?.aboutUs?.cards;
  const videoUrl = getStrapiMedia(video?.data?.attributes?.url);

  return (
    <section>
      <div className="max-sm:pt-[calc(30*var(--scale))] max-sm:pb-0 max-md:pt-[calc(103*var(--scale))] max-md:p-[calc(48*var(--scale))calc(28*var(--scale))] max-lg:px-[calc(80*var(--scale))] max-lg:pb-[calc(48*var(--scale))] pt-[calc(103*var(--scale))] px-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-sm:items-start max-sm:gap-[calc(8*var(--scale))] max-sm:flex-col max-md:gap-[calc(40*var(--scale))] max-lg:gap-[calc(37*var(--scale))] flex items-center justify-center gap-[calc(58*var(--scale))]">
          <h2 className="max-sm:text-[calc(20*var(--scale))] max-md:text-[calc(18*var(--scale))] max-md:min-w-[calc(74*var(--scale))] max-lg:min-w-[calc(100*var(--scale))] text-[calc(1*var(--size-38))] min-w-[calc(189*var(--scale))] leading-[1.36] font-bold">
            {title}
          </h2>
          <div className="max-sm:hidden max-md:h-[calc(90*var(--scale))] max-lg:min-h-[calc(55*var(--scale))] min-w-[calc(2*var(--scale))] min-h-[calc(86*var(--scale))] bg-black"></div>
          <p className="max-sm:text-[calc(14*var(--scale))] max-md:text-[calc(14*var(--scale))] max-lg:text-[calc(1*var(--size-16))] max-lg:leading-[1.43] text-[calc(1*var(--size-20))] leading-[1.7]">
            {text}
          </p>
        </div>
        <div className="max-sm:flex-col max-sm:py-[calc(18*var(--scale))] max-sm:gap-[calc(35*var(--scale))] max-sm:mt-[calc(10*var(--scale))] max-md:flex-col max-md:gap-[calc(47*var(--scale))] max-md:py-[calc(34*var(--scale))] max-md:mt-[calc(10*var(--scale))] max-lg:gap-[calc(86*var(--scale))] max-lg:py-[calc(23*var(--scale))] max-lg:mt-[calc(30*var(--scale))] flex justify-between py-[calc(38*var(--scale))] mt-[calc(30*var(--scale)) gap-[calc(17*var(--scale))] border-black border-solid border-b-[calc(2*var(--scale))]">
          <div className="max-sm:w-full max-sm:h-[calc(158*var(--scale))] max-md:w-full max-md:h-[calc(220*var(--scale))] max-lg:w-[calc(280*var(--scale))] w-[calc(438*var(--scale))] bg-black flex justify-center items-center relative overflow-hidden">
            <div className="max-sm:w-[33%] max-md:w-[17%] w-[45%] h-full flex justify-center items-center">
              <video
                className="max-sm:block w-full object-contain"
                src={videoUrl}
                muted
                playsInline
                loop
                autoPlay
              />
            </div>
          </div>
          <AboutUsCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
