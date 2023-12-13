import { ScrollImage } from "@/components/scroll-image";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import { getCommitmentSection } from "@/services/landing";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import CardsList from "../cards-list";

const CommitmentSection = async () => {
  const response = await getCommitmentSection();
  const title = response?.data?.attributes?.commitment?.title;
  const text = response?.data?.attributes?.commitment?.text;
  const clearImage = response?.data?.attributes?.commitment?.clearImage;
  const blurImage = response?.data?.attributes?.commitment?.blurImage;
  const sections = response?.data?.attributes?.commitment?.sections;
  const clearImageUrl = getStrapiMedia(clearImage?.data?.attributes?.url);
  const blurImageUrl = getStrapiMedia(blurImage?.data?.attributes?.url);

  const firstSection = sections?.[0];
  const secondSection = sections?.[1];

  if (!title || !text || !clearImage || !sections) return null;

  return (
    <section className="max-sm:pt-[calc(40*var(--scale))] max-sm:pb-0 max-sm:px-[calc(22*var(--scale))] max-lg:pt-[calc(60*var(--scale))] max-lg:px-[calc(62*var(--scale))] max-md:pb-[calc(48*var(--scale))] max-lg:pb-[calc(24*var(--scale))] p-[calc(100*var(--scale))calc(125*var(--scale))calc(50*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <div className="flex flex-col">
        <h2 className="max-sm:mb-[calc(14*var(--scale))] max-lg:mb-[calc(8*var(--scale))] text-[calc(1*var(--size-42))] mt-0 mb-[calc(16*var(--scale))] font-bold">
          {title}
        </h2>
        <p className="max-sm:mb-[calc(22*var(--scale))] max-md:mb-[calc(16*var(--scale))] max-md:leading-[1.5] max-lg:mb-[calc(24*var(--scale))] max-lg:max-w-[calc(822*var(--scale))] text-[calc(1*var(--size-20))] mt-0 mb-[calc(32*var(--scale))] max-w-[calc(1278*var(--scale))] leading-[1.5]">
          {text}
        </p>
        <div className="max-sm:h-[calc(172*var(--scale))] max-sm:ml-[calc(22*var(--scale))] max-md:h-[calc(268*var(--scale))] max-lg:h-[calc(358*var(--scale))] w-full h-[calc(560*var(--scale))] relative">
          <ScrollImage
            src={clearImageUrl}
            blurImageUrl={blurImageUrl}
            // alt="360 ONE Commitment"
            alt={getStrapiMedia(clearImage?.data?.attributes?.alternativeText)}
            title="The 360 ONE Commitment"
            height={1680}
            width={3990}
          />
          <div className="max-sm:bottom-[calc(-54*var(--scale))] max-sm:left-[calc(16*var(--scale))] max-md:w-[calc(70*var(--scale))] max-md:h-[calc(70*var(--scale))] max-md:p-[calc(15*var(--scale))calc(16*var(--scale))] max-md:bottom-[calc(-60*var(--scale))] max-md:left-[calc(20*var(--scale))] max-lg:w-[calc(93*var(--scale))] max-lg:h-[calc(92*var(--scale))] max-lg:p-[calc(20*var(--scale))calc(21*var(--scale))] max-lg:bottom-[calc(-52*var(--scale))] w-[calc(146*var(--scale))] h-[calc(146*var(--scale))] absolute p-[calc(30*var(--scale))calc(33*var(--scale))] bg-white b-[calc(-41*var(--scale))] left-[calc(53*var(--scale))] bottom-[calc(-50*var(--scale))] z-10 -translate-y-[31.7409px] transition ease-in duration-150">
            <Image
              className="w-full h-full rotate-90"
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
            />
          </div>
        </div>
        <div className="max-sm:block max-md:flex-col max-md:gap-0 flex gap-[calc(77*var(--scale))]">
          <div className="max-sm:pt-[calc(50*var(--scale))] max-sm:pb-[calc(20*var(--scale))] max-sm:pr-[calc(40*var(--scale))] max-sm:before:w-[calc(100%+(22*var(--scale)))] max-sm:before:h-[calc(380*var(--scale))] max-sm:before:left-[-4.5%] max-sm:before:translate-x-0 max-sm:before:translate-y-0 max-md:py-[calc(40*var(--scale))] max-md:w-full max-md:before:w-[calc(100%+(60*var(--scale)))] max-md:before:h-[calc(100%+(80*var(--scale)))] max-md:left-[50%] max-md:-translate-x-[45.5%] max-md:flex-col max-lg:pl-[calc(21*var(--scale))] max-lg:pr-[calc(53*var(--scale))] max-lg:py-[calc(70*var(--scale))] max-lg:relative w-[40%] py-[calc(105*var(--scale))] pl-[calc(53*var(--scale))] pr-[calc(74*var(--scale))] relative before:content[''] before:absolute before:w-[calc(100%+(53*var(--scale)))] before:h-[calc(100%+(180*var(--scale)))] before:bg-[#c1b6b1] before:bottom-0 before:right-0 before:-z-10">
            <h2 className="max-md:max-w-[calc(300*var(--scale))] max-md:gap-0 max-md:leading-[1.2] max-lg:mb-[calc(8*var(--scale))] max-lg:leading-[1.42] text-[calc(1*var(--size-32))] mt-0 mb-[calc(23*var(--scale))] mr-[3rem] leading-[1] font-bold">
              {firstSection?.title}
            </h2>
            <p className="m-0 text-[calc(1*var(--size-20))] leading-[1.6]">
              {firstSection?.text}
            </p>
          </div>
          {firstSection?.cards && (
            <CardsList cardsList={firstSection?.cards} hasDivider />
          )}
        </div>
        <div className="max-sm:block max-md:flex-col max-md:gap-0 flex gap-[calc(77*var(--scale))]">
          <div className="max-sm:pt-[calc(50*var(--scale))] max-sm:pb-[calc(20*var(--scale))] max-sm:pr-[calc(40*var(--scale))] max-md:pt-[calc(40*var(--scale))] max-md:pb-0 max-md:w-full max-lg:pl-[calc(21*var(--scale))] max-lg:pr-[calc(53*var(--scale))] max-lg:py-[calc(70*var(--scale))] max-lg:relative py-[calc(105*var(--scale))] pl-[calc(53*var(--scale))] pr-[calc(74*var(--scale))] relative w-[40%]">
            <h3 className="max-md:max-w-[calc(300*var(--scale))] max-md:leading-[1.2] max-lg:mb-[calc(8*var(--scale))] max-lg:leading-[1.42] text-[calc(1*var(--size-32))] leading-[1] max-w-[calc(346*var(--scale))] mt-[0] mb-[calc(23*var(--scale))] font-bold">
              {secondSection?.title}
            </h3>
            <p className="text-[calc(1*var(--size-20))] leading-[1.6]">
              {secondSection?.text}
            </p>
          </div>
          {secondSection?.cards && (
            <CardsList cardsList={secondSection?.cards} />
          )}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
