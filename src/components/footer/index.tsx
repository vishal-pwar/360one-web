import BrandLogoBlack from "@/public/assets/icons/360-one-brand-logo-black.svg";
import { getFooter } from "@/services/footer";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";

const copyrightBannerList = [
  {
    title: "Copyright © 2023",
  },
  {
    title: "360 ONE WAM LIMITED.",
  },
  {
    title: "All rights Reserved.",
  },
];

const Footer = async () => {
  const response = await getFooter();

  return (
    <footer className="max-sm:p-[calc(20*var(--scale))calc(22*var(--scale))] max-md:p-[calc(34*var(--scale))calc(62*var(--scale))] max-lg:p-[calc(34*var(--scale))calc(80*var(--scale))] w-full p-[calc(50*var(--scale))calc(125*var(--scale))]">
      <div className="border-t-[calc(2*var(--scale))] border-black pt-[calc(41*var(--scale))]">
        <div className="max-sm:flex-col max-sm:relative max-sm:pb-0 max-md:gap-[calc(20*var(--scale))] max-lg:gap-[calc(28.2*var(--scale))] flex gap-[calc(61*var(--scale))]">
          {response?.data?.attributes?.sections?.map(
            (item: any, index: number) => {
              return (
                <div className="max-sm:w-fit" key={item.title}>
                  <h2 className="max-sm:mb-[calc(17*var(--scale))] max-md:mb-[calc(24*var(--scale))] max-lg:mb-[calc(12*var(--scale))] text-[calc(1*var(--size-18))] mb-[calc(24*var(--scale))] font-bold">
                    {item.title}
                  </h2>
                  <ul className="max-sm:gap-[calc(12*var(--scale))] max-md:gap-[calc(24*var(--scale))] max-lg:gap-[calc(14*var(--scale))] list-none m-0 p-0 flex flex-col gap-[calc(16*var(--scale))]">
                    {item.links.map((item: any, index: number) => {
                      return (
                        <li key={item.name + index}>
                          <Link
                            className={`max-md:text-[calc(14*var(--scale))] max-md:tracking-[calc(0.49*var(--scale))] max-lg:tracking-[calc(0.89*var(--scale))] ${
                              item.external ? "underline" : "no-underline"
                            } text-[calc(1*var(--size-16))] tracking-wide block text-black`}
                            href={item.href || "/"}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          )}
          <div className="max-sm:right-0 max-sm:flex max-sm:w-full max-sm:justify-between max-sm:flex-row-reverse ml-auto flex flex-col justify-between items-end min-h-full relative">
            <Image
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
              className="max-sm:absolute max-sm:top-[calc(-672*var(--scale))] max-lg:h-[calc(62*var(--scale))] max-lg:w-[calc(60*var(--scale))] w-[calc(80*var(--scale))] h-[calc(82.6*var(--scale))] rotate-90"
            />
            <div className="max-sm:mr-auto max-sm:relative flex gap-[calc(16*var(--scale))] absolute bottom-0 right-0">
              {response?.data?.attributes?.socials?.map(
                (item: any, index: number) => {
                  return (
                    <Link
                      className="max-md:h-[calc(30*var(--scale))] max-md:w-[calc(30*var(--scale))] max-lg:h-[calc(37*var(--scale))] max-lg:w-[calc(37*var(--scale))] w-[calc(50*var(--scale))] h-[calc(50*var(--scale))]"
                      key={item.name}
                      href={item.href || "/"}
                    >
                      <Image
                        className="w-full h-full"
                        src={getStrapiMedia(item?.icon?.data?.attributes?.url)}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="max-sm:flex-wrap max-sm:gap-[calc(16*var(--scale))] max-lg:py-[calc(20*var(--scale))] max-lg:px-0 max-lg:gap-[calc(18*var(--scale))] max-lg:border-y-[calc(1.3*var(--scale))] max-lg:mt-[calc(20*var(--scale))] p-[calc(29*var(--scale))0] flex items-center gap-[calc(23*var(--scale))] border-y-[calc(2*var(--scale))] border-black mt-[calc(32*var(--scale))] text-[calc(1*var(--size-14))]">
          {response?.data?.attributes?.legals?.map(
            (item: any, index: number) => {
              return (
                <>
                  <Link
                    className="text-black"
                    key={item.name}
                    href={item.href || "/"}
                  >
                    {item.name}
                  </Link>
                  {index ===
                  response?.data?.attributes?.legals?.length - 1 ? undefined : (
                    <span>|</span>
                  )}
                </>
              );
            }
          )}
          <span className="max-sm:w-full max-sm:ml-0 max-sm:text-left max-sm:flex-row max-sm:flex-wrap max-md:w-[calc(203*var(--scale))] max-md:text-right max-md:flex max-md:flex-col max-lg:w-auto max-lg:text-right ml-auto flex gap-[5px]">
            {copyrightBannerList.map((item) => {
              return (
                <span
                  className="max-sm:w-full max-sm:justify-start max-md:text-right max-lg:flex max-lg:flex-row max-md:justify-end max-md:w-full"
                  key={item.title}
                >
                  {item.title}
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
