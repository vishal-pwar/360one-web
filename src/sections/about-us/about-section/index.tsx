import { getAboutUsSection } from "@/services/about";
import { getStrapiMedia } from "@/utils/api-helpers";
import AboutUsCards from "../about-us-cards";

const AboutUsSection = async () => {
  const response = await getAboutUsSection();
  const { title, text, video, cards } = response?.data?.attributes?.aboutUs;
  const videoUrl = getStrapiMedia(video?.data?.attributes?.url);

  return (
    <section>
      <div className="pt-[calc(103*var(--scale))] px-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex items-center justify-center gap-[calc(58*var(--scale))]">
          <h2 className="text-[calc(1*var(--size-38))] min-w-[calc(189*var(--scale))] leading-[1.36] font-bold">
            {title}
          </h2>
          <div className="min-w-[calc(2*var(--scale))] min-h-[calc(86*var(--scale))] bg-black"></div>
          <p className="text-[calc(1*var(--size-20))] leading-[1.7]">{text}</p>
        </div>
        <div className="flex justify-between py-[calc(38*var(--scale))] mt-[calc(30*var(--scale)) gap-[calc(17*var(--scale))] border-black border-solid border-b-[calc(2*var(--scale))]">
          <div className="w-[calc(438*var(--scale))] bg-black flex justify-center items-center relative overflow-hidden">
            <div className="w-[45%] h-full flex justify-center items-center">
              <video
                className="w-full object-contain"
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
