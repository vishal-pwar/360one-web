import { Link } from "@/ui";
import Image from "next/image";
import { getJourneySection } from "@/services/about";
import { getStrapiMedia } from "@/utils/api-helpers";

const JourneySection = async () => {
  const response = await getJourneySection();
  const { title, text, document, video, icon } =
    response?.data?.attributes?.journey;
  const documentUrl = getStrapiMedia(document?.data?.attributes?.url);
  const videoUrl = getStrapiMedia(video?.data?.attributes?.url);
  const playIconUrl = getStrapiMedia(icon?.data?.attributes?.url);

  return (
    <section className="relative before:content-[''] before:absolute before:w-[96%] before:h-[100%] before:top-0 before:left-0 before:bg-black before:-z-10">
      <div className="max-lg:px-[calc(80*var(--scale))] max-lg:pt-[calc(75*var(--scale))] max-lg:pb-[calc(36*var(--scale))] px-[calc(117*var(--scale))] pt-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <h2 className="text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] text-white mb-[calc(8*var(--scale))] font-bold">
          {title}
        </h2>
        <div className="flex justify-between items-start w-full">
          <p className="max-lg:max-w-[calc(590*var(--scale))] max-lg:mb-[calc(31*var(--scale))] text-[calc(1*var(--size-20))] text-white leading-[1.7] max-w-[calc(893*var(--scale))] mb-[calc(47*var(--scale))]">
            {text}
          </p>
          <button className="max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:w-[calc(118*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] w-[calc(212*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
            <Link
              href={documentUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full h-full flex justify-center items-center"
            >
              View PDF
            </Link>
          </button>
        </div>
        <div className="max-lg:h-[calc(384*var(--scale))] max-lg:w-[109.5%] h-[calc(600*var(--scale))] w-[108.55%] relative bg-black">
          <video
            className="object-contain bg-black h-full w-full"
            src={videoUrl}
            autoPlay
            loop
            muted
            controlsList="nodownload"
          />
          <Image
            className="max-lg:w-[calc(64.6*var(--scale))] max-lg:h-[calc(64.6*var(--scale))] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[calc(101*var(--scale))] h-[calc(101*var(--scale))] z-10"
            src={playIconUrl}
            alt="play-icon"
            width={101}
            height={101}
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[#00000080] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
