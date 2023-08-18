import { Link } from "@/ui";
import Image from "next/image";
import PlayIcon from "../../../../public/assets/icons/playIcon.svg";

const JourneySection = () => {
  return (
    <section className="relative before:content-[''] before:absolute before:w-[96%] before:h-[100%] before:top-0 before:left-0 before:bg-black before:-z-10">
      <div className="px-[calc(117*var(--scale))] pt-[calc(126*var(--scale))] pb-[calc(48*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <h2 className="text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] text-white mb-[calc(8*var(--scale))] font-bold">
          THE 360 ONE Story
        </h2>
        <div className="flex justify-between items-start w-full">
          <p className="text-[calc(1*var(--size-20))] text-white leading-[1.7] max-w-[calc(893*var(--scale))] mb-[calc(47*var(--scale))]">
            We are proud of our roots and the journey that we have traversed so
            far. Today, we are one of India&#39;s largest asset and wealth
            management firms with an AUM of over $40 billion. Our new identity
            reflects our founding principles and commitment to strong
            relationships. We look back to where we started from, even as we
            forge ahead to where we want to go.
          </p>
          <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] w-[calc(212*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
            <Link
              href="/assets/360ONE_OurJourney.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full h-full flex justify-center items-center"
            >
              View PDF
            </Link>
          </button>
        </div>
        <div className="h-[calc(600*var(--scale))] w-[108.55%] relative bg-black">
          <video
            className="object-contain bg-black h-full w-full"
            src="/assets/videos/360onejourney.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
          />
          <Image
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer w-[calc(101*var(--scale))] h-[calc(101*var(--scale))] z-10"
            src={PlayIcon}
            alt="play-icon"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[#00000080] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
