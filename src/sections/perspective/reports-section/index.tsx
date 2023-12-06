import React from "react";
import ReportsSlider from "@/components/slider-perspective/slider-reports";
import { getReportsSection } from "@/services/perspective";

const Reports = async () => {
  const response = await getReportsSection();

  return (
    // <section className="mt-5 sm:mt-8 phablet:mt-12 tablet:mt-20">
    <section className="p-6 phablet:p-12 tablet:p-0 tablet:container desktop:mt-32">
      <div className="flex flex-col desktop:flex-row">
        {/* <div className="flex flex-col bg-black desktop:flex-[5] desktop:py-24 phablet:pl-5"> */}
        <div className="flex flex-col bg-black desktop:flex-[5]">
          <div className="text-white font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
            {response?.data?.attributes?.Reports?.title}
          </div>
          <div className="font-normal text-white text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-9 tablet:mt-4 tablet:mb-8">
            {response?.data?.attributes?.Reports?.subtitle}
          </div>
        </div>
        <div className="flex flex-col-reverse phablet:flex-row tablet:flex-col-reverse desktop:flex-row bg-white desktop:flex-[7] justify-between">
          {response?.data?.attributes?.Reports?.cards?.map((card: any) => {
            return (
              <>
                {card?.is_featured === true && card?.is_selected === false ? (
                  <>
                    <div className="flex flex-col py-6 px-4 tablet:py-8 tablet:px-14 tablet:justify-between tablet:items-center tablet:flex-row desktop:flex-col tablet:flex-[4] desktop:items-start phablet:relative ">
                      <div className="hidden phablet:flex phablet:absolute tablet:hidden desktop:flex mt-9 px-5 py-2 bg-[#FD7740] font-bold text-sm text-white top-0">
                        FEATURED
                      </div>
                      <div className="tablet:max-w-sm phablet:mt-16 tablet:mt-0 desktop:mt-24">
                        <div className="text-black font-bold text-base tablet:text-2xl desktop:text-[32px]">
                          {card?.title}
                        </div>
                        <div className="text-black font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-8 tablet:mt-4 ">
                          {card?.subtitle}
                        </div>
                      </div>
                      <button className="border-2 border-black py-4 font-bold text-sm phablet:w-full tablet:h-12 tablet:w-52">
                        DOWNLOAD NOW
                      </button>
                    </div>
                    <div className="flex tablet:flex-[3] relative">
                      <div className="phablet:hidden absolute tablet:flex desktop:hidden bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 tablet:px-16 tablet:py-4 tablet:mt-6">
                        FEATURED
                      </div>
                      {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={card?.image?.data?.attributes?.url}
                          alt="featured card"
                          className="flex w-full desktop:flex-[5] h-44 phablet:h-72 tablet:h-52 desktop:h-96 object-cover"
                        />
                      }
                    </div>
                  </>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
      <ReportsSlider response={response?.data?.attributes?.Reports} />
    </section>
  );
};

export default Reports;
