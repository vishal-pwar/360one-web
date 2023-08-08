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
    <footer className="w-full p-[calc(50*var(--scale))calc(125*var(--scale))]">
      <div className="border-t-[calc(2*var(--scale))] border-black pt-[calc(41*var(--scale))]">
        <div className="flex gap-[calc(61*var(--scale))]">
          {response?.data?.attributes?.sections?.map(
            (item: any, index: number) => {
              return (
                <div key={item.title}>
                  <h2 className="text-[calc(1*var(--size-18))] mb-[calc(24*var(--scale))] font-bold">
                    {item.title}
                  </h2>
                  <ul className="list-none m-0 p-0 flex flex-col gap-[calc(16*var(--scale))]">
                    {item.links.map((item: any, index: number) => {
                      return (
                        <li key={item.name + index}>
                          <Link
                            className={`${
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
          <div className="ml-auto flex flex-col justify-between items-end min-h-full relative">
            <Image
              src={BrandLogoBlack}
              alt="360 ONE - Asset & Wealth management"
              title="360 One"
              className="w-[calc(80*var(--scale))] h-[calc(82.6*var(--scale))] rotate-90"
            />
            <div className="flex gap-[calc(16*var(--scale))] absolute bottom-0 right-0">
              {response?.data?.attributes?.socials?.map(
                (item: any, index: number) => {
                  return (
                    <Link
                      className="w-[calc(50*var(--scale))] h-[calc(50*var(--scale))]"
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
        <div className="p-[calc(29*var(--scale))0] flex items-center gap-[calc(23*var(--scale))] border-y-[calc(2*var(--scale))] border-black mt-[calc(32*var(--scale))] text-[calc(1*var(--size-14))]">
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
          <span className="ml-auto flex gap-[5px]">
            {copyrightBannerList.map((item) => {
              return <span key={item.title}>{item.title}</span>;
            })}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
