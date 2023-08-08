import { ScrollImage } from "@/components/scroll-image";
import { getOfferingsSection } from "@/services/landing";
import { getStrapiMedia } from "@/utils/api-helpers";
import Image from "next/image";
import Link from "next/link";

const OfferingsSection = async () => {
  const response = await getOfferingsSection();

  const firstProduct = response?.data?.attributes?.offering?.products?.[0];
  const secondProduct = response?.data?.attributes?.offering?.products?.[1];

  const firstImageUrl = getStrapiMedia(
    firstProduct?.image?.data?.attributes?.url
  );
  const firstIconUrl = getStrapiMedia(
    firstProduct?.logo?.data?.attributes?.url
  );
  const secondImageUrl = getStrapiMedia(
    secondProduct?.image?.data?.attributes?.url
  );
  const secondIconUrl = getStrapiMedia(
    secondProduct?.logo?.data?.attributes?.url
  );

  return (
    <section className="mt-[calc(40*var(--scale))]">
      <div
        className="relative p-[calc(82*var(--scale))calc(125*var(--scale))calc(215*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto 
      before:content-[''] before:w-[85%] before:h-[calc(800*var(--scale))] before:bg-black before:top-0 before:left-0 before:absolute before:z-0 after:content-[''] 
      after:w-[80%] after:h-[calc(900*var(--scale))] after:bg-black after:bottom-0 after:right-0 after:absolute after:-z-10"
      >
        <h2 className="text-[calc(1*var(--size-38))] -tracking-[calc(0.9*var(--scale))] leading-[1.16] text-white mb-[calc(16*var(--scale))] font-bold relative">
          {response?.data?.attributes?.offering?.title}
        </h2>
        <p className="text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(40*var(--scale))] max-w-[calc(995*var(--scale))] opacity-[0.8]">
          {response?.data?.attributes?.offering?.text}
        </p>
        <div className="w-full h-[calc(632*var(--scale))] relative">
          {/* translate-y-[11.315px] transition ease-linear duration-150 */}
          <div className="h-full w-[91.4%] ml-auto relative">
            <ScrollImage
              src={firstImageUrl}
              alt="Wealth management"
              width={1234}
              height={633}
              title="Wealth management services"
            />
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
              src={firstImageUrl}
              width={1234}
              height={633}
              alt="Wealth management"
              title="Wealth management services"
            />
          </div>
          {/* use parallex */}
          <div className="absolute bottom-[-18%] w-[calc(667*var(--scale))] min-h-[calc(418*var(--scale))] z-10">
            <div
              className={`w-full h-full px-[calc(60*var(--scale))] pb-[calc(40*var(--scale))] pt-[calc(60*var(--scale))] text-white bg-[${
                firstProduct?.color || "#fd7740"
              }]`}
            >
              <h2 className="text-[calc(1*var(--size-38))] mb-[calc(16*var(--scale))] font-bold">
                {firstProduct?.title}
              </h2>
              <p className="text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(30*var(--scale))] max-w-[calc(480*var(--scale))]">
                {firstProduct?.text}
              </p>
              <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href={firstProduct?.link}
                  className="w-full h-full flex justify-center items-center"
                >
                  {firstProduct?.cta}
                </Link>
              </button>
            </div>
            {/* translate-x-[50%] -translate-y-[50%] */}
            <div className="h-[calc(144*var(--scale))] w-[calc(146*var(--scale))] absolute top-[50%] right-[calc(-70*var(--scale))] bg-white flex justify-center items-center">
              <Image
                className="w-[calc(75*var(--scale))] h-[calc(100*var(--scale))]"
                src={firstIconUrl}
                alt="360 ONE Wealth Management"
                title="360 ONE Wealth Management"
                width={76}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="mt-[calc(266*var(--scale))] w-full h-[calc(632*var(--scale))] relative">
          <div className="ml-0 mr-auto w-[91.4%] h-full relative z-10">
            <ScrollImage
              src={secondImageUrl}
              width={1234}
              height={633}
              alt="Asset management services"
              title="Asset management services in India"
            />
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
              src={secondImageUrl}
              width={1234}
              height={633}
              alt="Asset management services"
              title="Asset management services in India"
            />
          </div>
          <div className="right-0 absolute bottom-[-18%] w-[calc(667*var(--scale))] min-h-[calc(418*var(--scale))] z-10">
            <div
              className={`w-full h-full px-[calc(60*var(--scale))] pb-[calc(40*var(--scale))] pt-[calc(60*var(--scale))] text-white bg-[${
                secondProduct?.color || "#5a32ff"
              }]`}
            >
              <h2 className="text-[calc(1*var(--size-38))] mb-[calc(16*var(--scale))] font-bold">
                {secondProduct?.title}
              </h2>
              <p className="text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(30*var(--scale))] max-w-[calc(480*var(--scale))]">
                {secondProduct?.text}
              </p>
              <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href={secondProduct?.link}
                  className="w-full h-full flex justify-center items-center"
                >
                  {secondProduct?.cta}
                </Link>
              </button>
            </div>
            <div className="top-[-18%] left-[40%] h-[calc(144*var(--scale))] w-[calc(146*var(--scale))] absolute right-[calc(-70*var(--scale))] bg-white flex justify-center items-center">
              <Image
                className="w-[calc(75*var(--scale))] h-[calc(100*var(--scale))]"
                src={secondIconUrl}
                width={76}
                height={100}
                alt="360 ONE Asset Management"
                title="360 ONE Asset Management"
              />
            </div>
            <div className="absolute h-[calc(62*var(--scale))] w-[calc(112*var(--scale))] bg-[#7b5bff] top-[calc(-34*var(--scale))] right-[calc(54*var(--scale))] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
