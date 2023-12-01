import React from "react";
import ReportsSlider from "@/components/slider-perspective/slider-reports";
import { getReportsSection } from "@/services/perspective";

const Reports = async () => {
  const response = await getReportsSection();

  return (
    <section className="mt-5 sm:mt-8 md:mt-12 xl:mt-20">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-col bg-black 2xl:flex-[5] 2xl:py-24 md:pl-5">
          <div className="font-bold text-white text-2xl md:text-3xl lg:text-[42px]">
            {response?.data?.attributes?.Reports?.title}
          </div>

          <div className="font-normal text-white text-base sm:text-[18px] md:text-xl mt-3 mb-6 sm:mb-9 lg:mt-4 lg:mb-8">
            {response?.data?.attributes?.Reports?.subtitle}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row xl:flex-col-reverse 2xl:flex-row bg-white xl:flex-[7] justify-between">
          {response?.data?.attributes?.Reports?.cards?.map((card: any) => {
            return (
              <>
                {card?.is_featured === true && card?.is_selected === false ? (
                  <>
                    <div className="flex flex-col py-6 px-4 xl:py-8 xl:px-14 xl:justify-between xl:items-center xl:flex-row 2xl:flex-col xl:flex-[4] 2xl:items-start md:relative ">
                      <div className="hidden md:flex md:absolute xl:hidden 2xl:flex mt-9 px-5 py-2 bg-[#FD7740] font-bold text-sm text-white top-0">
                        FEATURED
                      </div>
                      <div className="xl:max-w-sm md:mt-16 xl:mt-0 2xl:mt-24">
                        <div className="font-bold text-base xl:text-2xl 2xl:text-4xl text-black">
                          {card?.title}
                        </div>
                        <div className="font-normal text-sm xl:text-xl text-black mt-3 mb-6">
                          {card?.subtitle}
                        </div>
                      </div>
                      <button className="border-2 border-black py-4 font-bold text-sm md:w-full xl:h-12 xl:w-52">
                        DOWNLOAD NOW
                      </button>
                    </div>

                    <div className="flex xl:flex-[3] relative">
                      <div className="md:hidden absolute xl:flex 2xl:hidden bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 xl:px-16 xl:py-4 xl:mt-6">
                        FEATURED
                      </div>
                      {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={card?.image?.data?.attributes?.url}
                          alt="featured card"
                          className="flex w-full 2xl:flex-[5] h-52 md:h-72 xl:h-52 2xl:h-96 object-cover"
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
