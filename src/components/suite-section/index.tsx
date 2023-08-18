import { Link } from "@/ui";
import Image, { StaticImageData } from "next/image";
import { ScrollImage } from "../scroll-image";
import { getAssetSuiteSection } from "@/services/asset-management";
import { getStrapiMedia } from "@/utils/api-helpers";
import SuiteCards from "../suite-cards";
import { getWealthSuiteSection } from "@/services/wealth-management";

interface SuiteSectionProps {
  page: string;
}

const SuiteSection = async ({ page }: SuiteSectionProps) => {
  const response =
    page === "asset"
      ? await getAssetSuiteSection()
      : await getWealthSuiteSection();
  const { title, text, link, image, icon, cards } =
    response?.data?.attributes?.suite;
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url);
  const iconUrl = getStrapiMedia(icon?.data?.attributes?.url);

  return (
    <section className="overflow-x-clip">
      <div className="p-[calc(50*var(--scale))calc(125*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="relative before:content-[''] before:absolute before:bg-black before:w-[calc(1247*var(--scale))] before:h-[calc(735*var(--scale))] before:top-[calc(-91*var(--scale))] before:left-[calc(-125*var(--scale))] before:-z-10">
          <div className="flex text-white gap-[calc(53*var(--scale))] mb-[calc(80*var(--scale))]">
            <h2 className="text-[calc(1*var(--size-38))] leading-[1.16] tracking-[calc(-0.9*var(--scale))] font-bold my-auto mx-0 max-w-[calc(228*var(--scale))]">
              {title}
            </h2>
            <div className="w-[calc(1*var(--scale))] bg-[#979797]"></div>
            <div>
              <p className="text-[calc(1*var(--size-20))] mb-[calc(24*var(--scale))] leading-[1.7] max-w-[calc(725*var(--scale))]">
                {text}
              </p>
              <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full h-full flex justify-center items-center"
                >
                  Know More
                </Link>
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-[calc(56*var(--scale))] before:content-[''] before:absolute before:bg-[#e7e2e0] before:w-[calc(1517*var(--scale))] before:h-[calc(1117*var(--scale))] before:top-[calc(-91*var(--scale))] before:left-[calc(-43*var(--scale))] before:-z-20">
            <div className="h-[calc(560*var(--scale))] w-full relative">
              <ScrollImage
                className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
                src={imageUrl}
                alt="The 360 ONE Wealth Suite"
                title="The 360 ONE Wealth Suite"
                fill={true}
              />
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
                src={imageUrl}
                alt="The 360 ONE Wealth Suite"
                title="The 360 ONE Wealth Suite"
                fill={true}
              />
              <div className="flex justify-center items-center absolute w-[calc(117*var(--scale))] h-[calc(115*var(--scale))] top-[calc(-45*var(--scale))] right-[calc(37*var(--scale))] z-10 bg-white">
                <Image
                  src={iconUrl}
                  className="w-[calc(56.5*var(--scale))] h-[calc(75*var(--scale))]"
                  alt="360 One Wealth Management"
                  title="360 One Wealth Management"
                  height={75}
                  width={56.5}
                />
              </div>
            </div>
            <div className="h-[calc(358*var(--scale))] w-[109%] mt-auto flex items-end z-10">
              <SuiteCards cards={cards} page={page} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
