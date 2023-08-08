import { Link } from "@/ui";
import { Fragment } from "react";

const countsList = [
  {
    count: "08",
    title: "Outcome-based outreach programs",
  },
  {
    count: "48,597",
    title: "Beneficiaries",
  },
];

const CountsSection = () => {
  return (
    <section className="h-[calc(288*var(--scale))] flex items-center bg-black">
      <div className="py-[calc(51*var(--scale))] flex justify-between px-[calc(126*var(--scale))] text-white items-center gap-[calc(262*var(--scale))] w-full max-w-[calc(1600*var(--scale))] m-auto">
        <div className="flex flex-1 gap-[calc(102*var(--scale))] items-center text-white">
          {countsList.map((countItem, index) => {
            return (
              <Fragment key={countItem.title}>
                <div className="flex flex-col items-center gap-[calc(5*var(--scale))]">
                  <span className="text-[calc(1*var(--size-42))] tracking-[calc(-1*var(--scale))] text-white font-bold">
                    {countItem.count}
                  </span>
                  <span className="text-[calc(1*var(--size-20))] text-white text-center max-w-[calc(187*var(--scale))]">
                    {countItem.title}
                  </span>
                </div>
                <div className="w-[calc(1*var(--scale))] h-[calc(92*var(--scale))] opacity-[0.5] bg-[#979797]"></div>
              </Fragment>
            );
          })}
          <button className="text-white border-white p-[calc(4*var(--scale))calc(12*var(--scale))] tracking-[calc(0.91*var(--scale))] border-solid border-[calc(2*var(--scale))] bg-transparent min-w-[calc(160*var(--scale))] w-[calc(212*var(--scale))] h-[calc(50*var(--scale))] flex justify-center items-center cursor-pointer font-bold uppercase text-[calc(1*var(--size-14))]">
            <Link
              href="https://www.iiflwealth.com/csr/our-philosophy"
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
