import { ScrollImage } from "@/components/scroll-image";
import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import { getCommitmentSection } from "@/services/landing";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import CardsList from "../cards-list";

const CommitmentSection = async () => {
  const response = await getCommitmentSection();
  const { title, text, image, sections } = response.data.attributes.commitment;
  const url = getStrapiMedia(image.data.attributes.url);

  const firstSection = sections[0];
  const secondSection = sections[1];

  return (
    <section className="p-[calc(100*var(--scale))calc(125*var(--scale))calc(50*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <div className="flex flex-col">
        <h2 className="text-[calc(1*var(--size-42))] mt-0 mb-[calc(16*var(--scale))] font-bold">
          {title}
        </h2>
        <p className="text-[calc(1*var(--size-20))] mt-0 mb-[calc(32*var(--scale))] max-w-[calc(1278*var(--scale))] leading-[1.5]">
          {text}
        </p>
        <div className="w-full h-[calc(560*var(--scale))] relative">
          <ScrollImage
            src={url}
            alt="360 ONE Commitment"
            title="The 360 ONE Commitment"
            height={1680}
            width={3990}
          />
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
            src={url}
            alt="360 ONE Commitment"
            title="The 360 ONE Commitment"
            height={1680}
            width={3990}
          />
          <div className="w-[calc(146*var(--scale))] h-[calc(146*var(--scale))] absolute p-[calc(30*var(--scale))calc(33*var(--scale))] bg-white b-[calc(-41*var(--scale))] left-[calc(53*var(--scale))] bottom-[calc(-41*var(--scale))] z-10 -translate-y-[31.7409px] transition ease-in duration-150">
            <Image
              className="w-full h-full rotate-90"
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
            />
          </div>
        </div>
        <div className="flex gap-[calc(77*var(--scale))]">
          <div className="w-[40%] py-[calc(105*var(--scale))] pl-[calc(53*var(--scale))] pr-[calc(74*var(--scale))] relative before:content[''] before:absolute before:w-[calc(100%+(53*var(--scale)))] before:h-[calc(100%+(180*var(--scale)))] before:bg-[#c1b6b1] before:bottom-0 before:right-0 before:-z-10">
            <h2 className="text-[calc(1*var(--size-32))] mt-0 mb-[calc(23*var(--scale))] mr-[3rem] leading-[1] font-bold">
              {firstSection.title}
            </h2>
            <p className="m-0 text-[calc(1*var(--size-20))] leading-[1.6]">
              {firstSection.text}
            </p>
          </div>
          <CardsList cardsList={firstSection.cards} />
        </div>
        <div className="flex gap-[calc(77*var(--scale))]">
          <div className="py-[calc(105*var(--scale))] pl-[calc(53 * var(--scale))] pr-[calc(74*var(--scale))] relative w-[40%]">
            <h3 className="text-[calc(1*var(--size-32))] leading-[1] max-w-[calc(346*var(--scale))] mt-[0] mb-[calc(23*var(--scale))] font-bold">
              {secondSection.title}
            </h3>
            <p className="text-[calc(1*var(--size-20))] leading-[1.6]">
              {secondSection.text}
            </p>
          </div>
          <CardsList cardsList={secondSection.cards} />
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;