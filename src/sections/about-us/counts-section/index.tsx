import { getCountSection } from "@/services/about";
import { Link } from "@/ui";
import { Fragment } from "react";

const CountsSection = async () => {
  const response = await getCountSection();
  const link = response?.data?.attributes?.count?.links;
  const cards = response?.data?.attributes?.count?.cards;

  return (
    <section className="max-sm:h-auto h-[calc(288*var(--scale))] flex items-center bg-black">
      <div className="max-sm:flex-col max-md:gap-[calc(37*var(--scale))] max-md:p-[calc(48*var(--scale))calc(28*var(--scale))] max-lg:gap-[calc(173*var(--scale))] max-lg:p-[calc(48*var(--scale))calc(80*var(--scale))] py-[calc(51*var(--scale))] flex justify-between px-[calc(126*var(--scale))] text-white items-center gap-[calc(262*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="max-sm:flex-col max-sm:gap-[calc(30*var(--scale))] max-md:gap-[calc(20*var(--scale))] max-md:w-full max-md:justify-between flex flex-1 gap-[calc(102*var(--scale))] items-center text-white">
          {cards?.map((countItem: any, index: number) => {
            return (
              <Fragment key={countItem?.text}>
                <div className="flex flex-col items-center gap-[calc(5*var(--scale))]">
                  <span className="max-md:text-[calc(20*var(--scale))] text-[calc(1*var(--size-42))] tracking-[calc(-1*var(--scale))] text-white font-bold">
                    {countItem?.count}
                  </span>
                  <span className="max-md:text-[calc(14*var(--scale))] max-md:max-w-[calc(159*var(--scale))] max-lg:max-w-[calc(169*var(--scale))] text-[calc(1*var(--size-20))] text-white text-center max-w-[calc(187*var(--scale))] leading-[1.2]">
                    {countItem?.text}
                  </span>
                </div>
                <div className="max-sm:w-[70%] max-sm:h-[calc(1*var(--scale))] w-[calc(1*var(--scale))] h-[calc(92*var(--scale))] opacity-[0.5] bg-[#979797]"></div>
              </Fragment>
            );
          })}
          <button className="max-sm:text-[calc(12*var(--scale))] max-md:w-[calc(172*var(--scale))] max-md:h-[calc(40*var(--scale))] max-lg:p-[calc(4*var(--scale))calc(14*var(--scale))] max-lg:tracking-[calc(0.43*var(--scale))] max-lg:border-[calc(1.3*var(--scale))] max-lg:min-w-[calc(102*var(--scale))] max-lg:h-[calc(40*var(--scale))] max-lg:text-[calc(1*var(--size-14))] text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] w-[calc(212*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full h-full flex justify-center items-center"
            >
              Visit our CSR Page
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
