import { getHomePerspectiveSection } from "@/services/landing";
import { getAssetPerspectiveSection } from "@/services/asset-management";
import { formatDate, getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";
import { getWealthPerspectiveSection } from "@/services/wealth-management";

interface PerspectiveSectionProps {
  page: string;
}

const PerspectiveSection = async ({ page }: PerspectiveSectionProps) => {
  const response =
    page === "asset"
      ? await getAssetPerspectiveSection()
      : page === "wealth"
      ? await getWealthPerspectiveSection()
      : await getHomePerspectiveSection();

  const firstPost = response?.data?.attributes?.perspective?.posts?.data?.[0];
  const otherPosts = [
    ...(response?.data?.attributes?.perspective?.posts?.data || []),
  ]?.slice(1, 5);
  const url = getStrapiMedia(
    firstPost?.attributes?.thumbnail?.data?.attributes?.url
  );

  if (!firstPost || !otherPosts) return null;

  return (
    <section className="max-sm:pt-[calc(16*var(--scale))] max-sm:p-[calc(20*var(--scale))calc(22*var(--scale))] max-md:pt-[calc(40*var(--scale))] max-md:px-[calc(62*var(--scale))] max-md:pb-[calc(48*var(--scale))] max-lg:pt-[calc(50*var(--scale))] max-lg:p-[calc(24*var(--scale))calc(80*var(--scale))] px-[calc(125*var(--scale))] pt-[calc(100*var(--scale))] pb-[calc(50*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
      <h2 className="max-md:mb-[calc(8*var(--scale))] max-lg:mb-[calc(8*var(--scale))] text-[calc(1*var(--size-42))] tracking-[calc(-1*var(--scale))] font-bold mb-[calc(24*var(--scale))]">
        {response?.data?.attributes?.perspective?.title}
      </h2>
      <p className="max-md:max-w-[calc(560*var(--scale))] max-lg:mb-[calc(35*var(--scale))] max-lg:leading-[1.5] max-lg:max-w-[calc(822*var(--scale))] text-[calc(1*var(--size-20))] mb-[calc(50*var(--scale))] leading-[1.5] max-w-[calc(1009*var(--scale))]">
        {response?.data?.attributes?.perspective?.text}
      </p>
      <div className="max-md:flex-col max-md:gap-[calc(30*var(--scale))] flex gap-[calc(95*var(--scale))]">
        <div
          className="max-sm:w-full max-sm:ml-[calc(166*var(--scale))] max-sm:pl-0 max-sm:pb-[calc(27*var(--scale))] max-sm:before:w-[113%] max-sm:before:left-[-7%] max-sm:h-[89%] max-sm:-translate-x-[50%]
          max-md:w-[calc(560*var(--scale))] max-md:pl-[calc(18.6*var(--scale))] max-md:pb-[calc(40*var(--scale))] max-md:before:left-[calc(-32*var(--scale))] max-md:before:w-[calc(652*var(--scale))] max-md:before:translate-x-0 max-md:before:translate-y-0
          max-lg:w-[calc(340*var(--scale))] max-lg:h-fit max-lg:pb-[calc(132*var(--scale))] max-lg:before:left-[50%] max-lg:before:w-[calc(433*var(--scale))] max-lg:before:-translate-x-[50%] w-[44%] pb-[calc(94*var(--scale))] relative before:content-[''] before:absolute before:bg-[#e7e2e0] before:w-[121%] before:h-[calc(100%-(64*var(--scale)))] before:right-0 before:bottom-0 before:-z-10"
        >
          <Image
            className="max-sm:h-[calc(174*var(--scale))] max-sm:mb-[calc(25*var(--scale))] max-sm:w-full max-md:w-[calc(541*var(--scale))] max-md:h-[calc(285*var(--scale))] max-md:mb-[calc(35*var(--scale))] max-lg:w-[calc(340*var(--scale))] max-lg:h-[calc(237*var(--scale))] w-[calc(552*var(--scale))] max-w-[calc(552*var(--scale))] h-[calc(366*var(--scale))] mb-[calc(32*var(--scale))]"
            src={url}
            height={366}
            width={552}
            alt="Wealth Management Industry"
            title="Wealth Management Industry"
          />
          <span className="max-md:mb-[calc(10*var(--scale))] text-[calc(1*var(--size-16))] tracking-[calc(0.58*var(--scale))] leading-[1.63] mb-[calc(25*var(--scale))] block">
            {formatDate(firstPost?.attributes?.datePublished)}
          </span>
          <p className="max-sm:leading-[1.67] max-sm:tracking-[calc(-0.43*var(--scale))] max-md:leading-[1.19] max-md:tracking-[calc(0.51*var(--scale))] max-md:mb-[calc(20*var(--scale))] leading-[1.25] mb-[calc(25*var(--scale))] text-[calc(1*var(--size-24))] font-bold max-w-[calc(468*var(--scale))]">
            {firstPost?.attributes?.title}
          </p>
          <button className="max-sm:text-[calc(12*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-black border-black p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
            <Link
              href={firstPost?.attributes?.link || "/"}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full h-full flex justify-center items-center"
            >
              Read More
            </Link>
          </button>
          <div className="max-sm:hidden max-md:w-[calc(124*var(--scale))] max-md:h-[calc(188*var(--scale))] max-md:right-[calc(-95*var(--scale))] max-md:bottom-[calc(-28*var(--scale))] max-lg:w-[calc(124*var(--scale))] max-lg:h-[calc(188*var(--scale))] max-lg:right-[calc(-63*var(--scale))] w-[calc(195*var(--scale))] h-[calc(294*var(--scale))] absolute bg-black -z-20 right-[calc(-30*var(--scale))] bottom-[calc(-39*var(--scale))]"></div>
        </div>
        <div
          className="max-lg:flex max-lg:flex-col max-lg:gap-0 max-lg:p-0 max-lg:after:w-0 max-lg:before:h-0 grid grid-cols-2 gap-[calc(80*var(--scale))] relative py-[calc(20*var(--scale))] flex-1 
        before:content-[''] before:absolute before:w-full before:bg-[#979797] before:opacity-[0.5] before:h-[calc(1*var(--scale))] before:left-[50%] before:top-[57%] before:-translate-x-[50%] before:-translate-y-[50%] 
        after:content-[''] after:absolute after:w-[calc(1*var(--scale))] after:bg-[#979797] after:opacity-[0.5] after:h-[103%] after:left-[50%] after:top-[50%] after:-translate-x-[50%] after:-translate-y-[50%]"
        >
          {otherPosts.map((blogItem, index) => {
            return (
              <div
                key={index}
                className={`${index === 0 ? "max-lg:pt-0" : ""} ${
                  index === otherPosts.length - 1
                    ? "max-lg:pb-0 max-lg:before:h-0"
                    : "max-lg:before:h-[calc(1*var(--scale))]"
                } max-lg:py-[calc(23*var(--scale))] max-lg:relative max-lg:before:content-[''] max-lg:before:absolute max-lg:before:w-full max-lg:before:opacity-[0.5] max-lg:before:bg-[#979797] max-lg:before:bottom-0 flex flex-col pt-[52px] }`}
              >
                <span className="max-sm:text-[calc(12*var(--scale))] max-sm:tracking-[calc(0.43*var(--scale))] max-lg:flex max-lg:gap-[calc(10*var(--scale))]  text-[calc(1*var(--size-16))] leading-[1.25] tracking-[calc(0.58*var(--scale))] block pb-[calc(16*var(--scale))] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:bg-black before:w-[calc(35*var(--scale))] before:h-[calc(2*var(--scale))]">
                  {formatDate(blogItem.attributes.datePublished)}
                </span>
                <h3 className="max-sm:text-[calc(16*var(--scale))] max-sm:tracking-[calc(0.58*var(--scale))] max-lg:before:mt-[calc(16*var(--scale))] max-lg:mb-[calc(17*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.5] tracking-[calc(0.72*var(--scale))] block font-bold mt-[calc(20*var(--scale))] mb-[calc(44*var(--scale))]">
                  {blogItem.attributes.title}
                </h3>
                <button className="max-sm:text-[calc(12*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-black border-black mt-auto w-fit p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                  <Link
                    href={blogItem.attributes.link || "/"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full h-full flex justify-center items-center"
                  >
                    Read More
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;
