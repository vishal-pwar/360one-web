import Image from "next/image";
import ErrorImage from "../../../public/assets/images/404.png";
import { Link } from "@/ui";
import HeaderWrapper from "../header";

const Custom404Page = () => {
  return (
    <main className="h-screen flext mt-0 flex flex-col overflow-hidden">
      <HeaderWrapper />
      <section className="max-sm:h-[89%] max-sm:p-[calc(24*var(--scale))calc(22*var(--scale))] max-md:h-[55%] max-md:p-[calc(20*var(--scale))calc(29*var(--scale))] max-md:mb-auto max-md:mt-[calc(100*var(--scale))] max-lg:h-[89%] max-lg:p-[calc(30*var(--scale))calc(37*var(--scale))] h-[86%] w-full flex justify-center items-center mt-auto p-[calc(49*var(--scale))calc(51*var(--scale))]">
        <div className="max-sm:max-h-[calc(614*var(--scale))] max-md:max-h-[calc(280*var(--scale))] max-lg:max-h-[calc(424*var(--scale))] relative w-full h-full max-h-[calc(730*var(--scale))] flex justify-center items-center z-10">
          <div className="max-md:gap-[calc(20*var(--scale))] flex flex-col items-center gap-[calc(40*var(--scale))]">
            <Image
              className="max-sm:w-[calc(260*var(--scale))] max-sm:h-[calc(103*var(--scale))] max-md:w-[calc(280*var(--scale))] max-md:h-[calc(110*var(--scale))] max-lg:w-[calc(350*var(--scale))] max-lg:h-[calc(138*var(--scale))] w-[calc(402*var(--scale))] h-[calc(158*var(--scale))] object-contain"
              src={ErrorImage}
              alt="404"
            />
            <p className="max-sm:max-w-[calc(177*var(--scale))] max-sm:text-center max-sm:leading-[1.81] max-sm:text-[calc(14*var(--scale))] text-[calc(1*var(--size-18))]">
              We couldn&#39;t find the page you were looking for
            </p>
            <button className="max-sm:text-[calc(12*var(--scale))] max-md:w-[calc(140*var(--scale))] max-md:h-[calc(40*var(--scale))] max-lg:w-[calc(156*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-black border-black p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
              <Link
                href="/"
                className="w-full h-full flex justify-center items-center"
              >
                Back to Home
              </Link>
            </button>
          </div>
          <div className="max-sm:bottom-[inherit] max-sm:top-[calc(-20*var(--scale))] max-md:bottom-[calc(38*var(--scale))] max-lg:bottom-[calc(173*var(--scale))] absolute bottom-[calc(289*var(--scale))] left-0 flex">
            <div className="max-sm:w-[calc(50*var(--scale))] max-sm:h-[calc(50*var(--scale))] max-sm:mb-[calc(-22*var(--scale))] max-sm:mr-[calc(-30*var(--scale))] max-md:w-[calc(52*var(--scale))] max-md:h-[calc(50*var(--scale))] max-md:mb-[calc(-14*var(--scale))] max-md:mr-[calc(-18*var(--scale))] max-lg:w-[calc(72*var(--scale))] max-lg:h-[calc(68*var(--scale))] max-lg:mb-[calc(-22*var(--scale))] max-lg:mr-[calc(-35*var(--scale))] w-[calc(160*var(--scale))] h-[calc(147*var(--scale))] bg-black mt-auto mb-[calc(-90*var(--scale))] mr-[calc(-80*var(--scale))] z-10"></div>
            <div className="max-sm:w-[calc(85*var(--scale))] max-sm:h-[calc(85*var(--scale))] max-md:w-[calc(120*var(--scale))] max-md:h-[calc(120*var(--scale))] max-lg:w-[calc(160*var(--scale))] max-lg:h-[calc(160*var(--scale))] w-[calc(252*var(--scale))] h-[calc(252*var(--scale))] bg-wealth-orange"></div>
            <div className="max-sm:w-[calc(39*var(--scale))] max-sm:h-[calc(39*var(--scale))] max-sm:mb-[calc(-39*var(--scale))] max-md:w-[calc(30*var(--scale))] max-md:h-[calc(30*var(--scale))] max-md:mb-[calc(-30*var(--scale))] max-lg:w-[calc(32*var(--scale))] max-lg:h-[calc(34*var(--scale))] max-lg:mb-[calc(-34*var(--scale))] w-[calc(32*var(--scale))] h-[calc(32*var(--scale))] bg-black mt-auto mb-[calc(-32*var(--scale))] opacity-[0.8]"></div>
          </div>
          <div className="max-sm:bottom-[calc(39*var(--scale))] max-md:bottom-[calc(-116*var(--scale))] max-lg:bottom-[calc(65*var(--scale))] absolute bottom-[calc(111*var(--scale))] right-0 flex">
            <div className="max-sm:w-[calc(21*var(--scale))] max-sm:h-[calc(111*var(--scale))] max-sm:right-[calc(-22*var(--scale))] max-sm:top-[calc(-59*var(--scale))] max-md:w-[calc(28*var(--scale))] max-md:h-[calc(97*var(--scale))] max-md:right-[calc(-29*var(--scale))] max-md:top-[calc(-58*var(--scale))] max-lg:w-[calc(35*var(--scale))] max-lg:h-[calc(129*var(--scale))] max-lg:right-[calc(-37*var(--scale))] max-lg:top-[calc(-75*var(--scale))] w-[calc(32*var(--scale))] h-[calc(201*var(--scale))] bg-black absolute right-[calc(-51*var(--scale))] top-[calc(-149*var(--scale))]"></div>
            <div className="max-sm:h-[calc(76*var(--scale))] max-sm:w-[calc(76*var(--scale))] max-md:w-[calc(111*var(--scale))] max-md:h-[calc(111*var(--scale))] max-md:mr-[calc(-1*var(--scale))] max-lg:w-[calc(134*var(--scale))] max-lg:h-[calc(134*var(--scale))] max-lg:mr-[calc(-3*var(--scale))] w-[calc(210*var(--scale))] h-[calc(210*var(--scale))] bg-asset-purple mr-[calc(-19*var(--scale))]"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Custom404Page;
