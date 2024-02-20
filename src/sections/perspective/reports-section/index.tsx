import ReportsSlider from "@/components/slider-perspective/slider-reports";
import { getReportsSection } from "@/services/perspective";
import Link from "next/link";

const Reports = async () => {
  const response = await getReportsSection();
  const reportsData = response?.data?.attributes?.reports;

  return (
    <>
      {reportsData?.title !== null &&
        reportsData?.subtitle !== null &&
        reportsData?.featured?.data !== null &&
        reportsData?.reports_and_publications_cards?.data?.length !== 0 && (
          <section className="bg-black p-6 sm:p-12 md:pr-0 xl:pl-20 xl:pt-16">
            <div className="flex flex-col xl:flex-row xl:gap-10">
              <div className="flex mt-[5%] flex-col bg-black xl:flex-[5]">
                <div className="text-white font-bold text-[28px] sm:text-[32px] md:text-[42px]">
                  {response?.data?.attributes?.reports?.title}
                </div>
                <div className="font-normal text-white text-base sm:text-lg md:text-xl mt-3 mb-6 sm:mb-9 md:mt-4 md:mb-8">
                  {response?.data?.attributes?.reports?.subtitle}
                </div>
              </div>
              {reportsData?.featured?.data !== null && (
                <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse xl:flex-row bg-white xl:flex-[7] justify-between">
                  <div className="flex flex-col py-6 px-4 md:py-8 md:px-14 md:justify-between md:items-center md:flex-row xl:flex-col md:flex-[4] xl:items-start sm:relative ">
                    <div className="hidden sm:flex sm:absolute md:hidden xl:flex mt-9 px-5 py-2 bg-[#FD7740] font-bold text-sm text-white top-0">
                      FEATURED
                    </div>
                    <div className="sm:mt-16 md:mt-0 xl:mt-24">
                      <div className="text-black font-bold text-base md:text-2xl xl:text-[32px]">
                        {
                          response?.data?.attributes?.reports?.featured?.data
                            ?.attributes?.title
                        }
                      </div>
                      <div className="text-black font-normal text-base sm:text-lg md:text-xl mt-3 mb-6 sm:mb-8 md:mt-4 ">
                        {
                          response?.data?.attributes?.reports?.featured?.data
                            ?.attributes?.subtitle
                        }
                      </div>
                    </div>
                    <Link
                      href={
                        response?.data?.attributes?.reports?.featured?.data
                          ?.attributes?.pdf?.data?.attributes?.url || ""
                      }
                      target="_blank"
                    >
                      <button className="border-2 border-black py-2 font-bold text-sm w-full md:h-12 md:w-52 items-center flex justify-center">
                        DOWNLOAD NOW
                      </button>
                    </Link>
                  </div>
                  <div className="flex md:flex-[3] relative">
                    <div className="sm:hidden absolute md:flex xl:hidden bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 md:px-16 md:py-4 md:mt-6">
                      FEATURED
                    </div>
                    {
                      <img
                        src={
                          response?.data?.attributes?.reports?.featured?.data
                            ?.attributes?.media?.data?.attributes?.url
                        }
                        alt={
                          response?.data?.attributes?.reports?.featured?.data
                            ?.attributes?.thumbnail?.data?.attributes
                            ?.alternativeText
                        }
                        className="flex w-full xl:flex-[5] h-44 sm:h-72 md:h-52 xl:h-full object-cover"
                      />
                    }
                  </div>
                </div>
              )}
            </div>
            {response?.data?.attributes?.reports?.reports_and_publications_cards
              ?.data?.length > 0 ? (
              <ReportsSlider response={response?.data?.attributes?.reports} />
            ) : null}
          </section>
        )}
    </>
  );
};

export default Reports;
