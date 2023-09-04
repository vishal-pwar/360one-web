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

  if (!firstProduct || !secondProduct) return null;

  return (
    <section className="max-sm:mt-0 mt-[calc(40*var(--scale))] max-sm:pb-[calc(330*var(--scale))] max-md:mb-[calc(40*var(--scale))]">
      <div
        className="max-sm:py-[calc(22*var(--scale))] max-sm:px-[calc(20*var(--scale))] max-sm:before:w-full max-sm:before:h-[40%] max-sm:after:w-[93%] max-sm:after:h-[calc(447*var(--scale))] max-sm:after:bottom-[calc(-80*var(--scale))] max-md:pb-[calc(121*var(--scale))] max-md:p-[calc(48*var(--scale))calc(62*var(--scale))] max-md:before:left-0 max-md:before:w-[90%] max-md:before:h-[33%] max-md:after:right-0 max-md:after:w-[85%] max-md:after:h-[37%] max-md:bottom-0  max-lg:pt-[calc(60*var(--scale))] max-lg:pb-[calc(110*var(--scale))] max-lg:px-[calc(80*var(--scale))] max-lg:before:h-[calc(600*var(--scale))] max-lg:before:left-[calc(36*var(--scale))] max-lg:before:w-[82%] max-lg:after:h-[calc(560*var(--scale))] relative p-[calc(82*var(--scale))calc(125*var(--scale))calc(215*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto 
      before:content-[''] before:w-[85%] before:h-[calc(800*var(--scale))] before:bg-black before:top-0 before:left-0 before:absolute before:z-0 after:content-[''] 
      after:w-[80%] after:h-[calc(900*var(--scale))] after:bg-black after:bottom-0 after:right-0 after:absolute after:-z-10"
      >
        <h2 className="max-sm:mb-[calc(8*var(--scale))] text-[calc(1*var(--size-38))] -tracking-[calc(0.9*var(--scale))] leading-[1.16] text-white mb-[calc(16*var(--scale))] font-bold relative">
          {response?.data?.attributes?.offering?.title}
        </h2>
        <p className="max-sm:leading-[1.71] max-sm:mb-[calc(16*var(--scale))] max-md:max-w-[calc(583*var(--scale))] max-lg:max-w-[calc(741*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(40*var(--scale))] max-w-[calc(995*var(--scale))] opacity-[0.8]">
          {response?.data?.attributes?.offering?.text}
        </p>
        <div className="max-sm:flex max-sm:flex-col max-sm:h-auto max-sm:items-center max-md:ml-0 max-md:h-[calc(303*var(--scale))] max-lg:h-[calc(404*var(--scale))] max-lg:ml-[calc(50*var(--scale))] w-full h-[calc(632*var(--scale))] relative">
          {/* translate-y-[11.315px] transition ease-linear duration-150 */}
          <div className="max-sm:ml-0 max-sm:w-[111.5%] max-sm:h-[calc(303*var(--scale))] max-md:w-[92%] max-md:ml-[calc(98*var(--scale))] h-full w-[91.4%] ml-auto relative">
            <ScrollImage
              src={firstImageUrl}
              alt="Wealth management"
              width={1234}
              height={633}
              title="Wealth management services"
            />
            <Image
              className="max-sm:object-right absolute top-0 left-0 w-full h-full object-cover object-[left_center]"
              src={firstImageUrl}
              width={1234}
              height={633}
              alt="Wealth management"
              title="Wealth management services"
            />
          </div>
          {/* use parallex */}
          <div className="max-sm:left-0 max-sm:top-0 max-sm:relative max-sm:w-full max-sm:mt-[calc(-50*var(--scale))] max-md:left-[calc(-40*var(--scale))] max-md:w-[calc(351*var(--scale))] max-md:h-auto max-md:bottom-[inherit] max-md:top-[calc(70*var(--scale))] max-lg:bottom-[calc(-70*var(--scale))] max-lg:w-[calc(472*var(--scale))] max-lg:min-h-[calc(347*var(--scale))] max-lg:z-10 absolute bottom-[-18%] w-[calc(667*var(--scale))] min-h-[calc(418*var(--scale))] z-10">
            <div className="max-sm:p-[calc(26*var(--scale))calc(22*var(--scale))]  max-md:p-[calc(24*var(--scale))calc(40*var(--scale))] max-md:pr-[calc(61*var(--scale))] max-lg:p-[calc(38*var(--scale))] w-full h-full px-[calc(60*var(--scale))] pb-[calc(40*var(--scale))] pt-[calc(60*var(--scale))] text-white bg-wealth-orange">
              <h2 className="text-[calc(1*var(--size-38))] mb-[calc(16*var(--scale))] font-bold">
                {firstProduct?.title}
              </h2>
              <p className="max-sm:leading-[1.71] max-md:mb-[calc(24*var(--scale))] max-lg:max-w-[calc(358*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(30*var(--scale))] max-w-[calc(480*var(--scale))]">
                {firstProduct?.text}
              </p>
              <button className="max-sm:text-[calc(12*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href={firstProduct?.link || "/"}
                  className="w-full h-full flex justify-center items-center"
                >
                  {firstProduct?.cta}
                </Link>
              </button>
            </div>
            {/* translate-x-[50%] -translate-y-[50%] */}
            <div className="max-sm:right-0 max-sm:top-[calc(-40*var(--scale))] max-sm:translate-x-0 max-md:w-[calc(70*var(--scale))] max-md:h-[calc(70*var(--scale))] max-md:top-[45%] max-md:right-[calc(-34*var(--scale))] max-lg:w-[calc(93*var(--scale))] max-lg:h-[calc(93*var(--scale))] max-lg:right-[calc(-45*var(--scale))] h-[calc(144*var(--scale))] w-[calc(146*var(--scale))] absolute top-[50%] right-[calc(-70*var(--scale))] bg-white flex justify-center items-center">
              <Image
                className="max-md:w-[calc(36*var(--scale))] max-md:h-[calc(48*var(--scale))] max-lg:w-[calc(48*var(--scale))] max-lg:h-[calc(64*var(--scale))] w-[calc(75*var(--scale))] h-[calc(100*var(--scale))]"
                src={firstIconUrl}
                alt="360 ONE Wealth Management"
                title="360 ONE Wealth Management"
                width={76}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="max-sm:mt-[calc(120*var(--scale))] max-md:mt-[calc(300*var(--scale))] max-md:h-[calc(303*var(--scale))] max-lg:ml-0 max-lg:mt-[calc(150*var(--scale))] max-lg:h-[calc(404*var(--scale))] mt-[calc(266*var(--scale))] w-full h-[calc(632*var(--scale))] relative">
          <div className="max-sm:mr-0 max-sm:ml-0 max-sm:w-[112%] max-sm:left-[-6%] max-sm:h-[calc(303*var(--scale))] max-md:ml-[calc(-37*var(--scale))] max-md:w-[92%] ml-0 mr-auto w-[91.4%] h-full relative z-10">
            {/* <ScrollImage
              src={secondImageUrl}
              width={1234}
              height={633}
              alt="Asset management services"
              title="Asset management services in India"
            /> */}
            <Image
              className="absolute top-0 w-full h-full object-cover object-[left_center]"
              src={secondImageUrl}
              width={1234}
              height={633}
              alt="Asset management services"
              title="Asset management services in India"
            />
          </div>
          <div className="max-sm:left-0 max-sm:top-0 max-sm:w-full max-sm:mt-[calc(-50*var(--scale))] max-sm:relative max-sm:translate-y-[11.89px] max-md:right-[calc(-40*var(--scale))] max-md:left-[inherit] max-md:w-[calc(351*var(--scale))] max-md:h-auto max-md:bottom-[inherit] max-md:top-[calc(136*var(--scale))] max-lg:bottom-[calc(-70*var(--scale))] max-lg:w-[calc(472*var(--scale))] max-lg:min-h-[calc(347*var(--scale))] max-lg:z-10 right-0 absolute bottom-[-18%] w-[calc(667*var(--scale))] min-h-[calc(418*var(--scale))] z-10">
            <div className="max-sm:p-[calc(26*var(--scale))calc(22*var(--scale))] max-md:p-[calc(24*var(--scale))calc(40*var(--scale))] max-md:pr-[calc(61*var(--scale))] max-lg:p-[calc(38*var(--scale))] max-lg:mr-[calc(-50*var(--scale))] w-full h-full px-[calc(60*var(--scale))] pb-[calc(40*var(--scale))] pt-[calc(60*var(--scale))] text-white bg-asset-purple">
              <h2 className="text-[calc(1*var(--size-38))] mb-[calc(16*var(--scale))] font-bold">
                {secondProduct?.title}
              </h2>
              <p className="max-sm:leading-[1.71] max-md:mb-[calc(24*var(--scale))] max-lg:max-w-[calc(358*var(--scale))] text-[calc(1*var(--size-20))] leading-[1.5] text-white mb-[calc(30*var(--scale))] max-w-[calc(480*var(--scale))]">
                {secondProduct?.text}
              </p>
              <button className="max-sm:text-[calc(12*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
                <Link
                  href={secondProduct?.link || "/"}
                  className="w-full h-full flex justify-center items-center"
                >
                  {secondProduct?.cta}
                </Link>
              </button>
            </div>
            <div className="max-sm:left-auto max-sm:right-0 max-sm:top-[calc(-40*var(--scale))] max-md:w-[calc(70*var(--scale))] max-md:h-[calc(70*var(--scale))] max-md:left-[44%] max-md:top-[-12%] max-md:right-[calc(-34*var(--scale))] max-lg:w-[calc(93*var(--scale))] max-lg:h-[calc(93*var(--scale))] max-lg:right-[calc(-45*var(--scale))] max-lg:top-[-7%] max-lg:left-[50%] top-[-18%] left-[40%] h-[calc(144*var(--scale))] w-[calc(146*var(--scale))] absolute right-[calc(-70*var(--scale))] bg-white flex justify-center items-center">
              <Image
                className="max-md:w-[calc(36*var(--scale))] max-md:h-[calc(48*var(--scale))] max-lg:w-[calc(48*var(--scale))] max-lg:h-[calc(64*var(--scale))] w-[calc(75*var(--scale))] h-[calc(100*var(--scale))]"
                src={secondIconUrl}
                width={76}
                height={100}
                alt="360 ONE Asset Management"
                title="360 ONE Asset Management"
              />
            </div>
            <div className="max-sm:hidden max-md:w-[calc(93*var(--scale))] max-md:h-[calc(53*var(--scale))] max-md:right-[calc(26*var(--scale))] max-md:top-[calc(-20*var(--scale))] max-lg:right-[calc(12*var(--scale))] absolute h-[calc(62*var(--scale))] w-[calc(112*var(--scale))] bg-[#7b5bff] top-[calc(-34*var(--scale))] right-[calc(54*var(--scale))] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
