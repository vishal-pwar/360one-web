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
          <section className="bg-black p-6 phablet:p-12 tablet:pl-20 tablet:pr-0 windowDesktop:pl-20 windowDesktop:pt-16">
            <div className="flex flex-col windowDesktop:flex-row windowDesktop:gap-10">
              <div className="flex mt-[5%] flex-col bg-black windowDesktop:flex-[5]">
                <div className="text-white font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
                  {response?.data?.attributes?.reports?.title}
                </div>
                <div className="font-normal text-white text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-9 tablet:mt-4 tablet:mb-8">
                  {response?.data?.attributes?.reports?.subtitle}
                </div>
              </div>
              {reportsData?.featured?.data !== null && (
                <div className="flex flex-col-reverse phablet:flex-row tablet:flex-col-reverse windowDesktop:flex-row bg-white windowDesktop:flex-[7] justify-between">
                  <div className="flex flex-col py-6 px-4 tablet:py-8 tablet:px-14 tablet:justify-between tablet:items-center tablet:flex-row windowDesktop:flex-col tablet:flex-[4] windowDesktop:items-start phablet:relative ">
                    <div className="hidden phablet:flex phablet:absolute tablet:hidden windowDesktop:flex mt-9 px-5 py-2 bg-[#FD7740] font-bold text-sm text-white top-0">
                      FEATURED
                    </div>
                    <div className="phablet:mt-16 tablet:mt-0 windowDesktop:mt-24">
                      <div className="text-black font-bold text-base tablet:text-2xl windowDesktop:text-[32px]">
                        {
                          response?.data?.attributes?.reports?.featured?.data
                            ?.attributes?.title
                        }
                      </div>
                      <div className="text-black font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-8 tablet:mt-4 ">
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
                      <button className="border-2 border-black py-4 font-bold text-sm phablet:w-full tablet:h-12 tablet:w-52 items-center flex justify-center">
                        DOWNLOAD NOW
                      </button>
                    </Link>
                  </div>
                  <div className="flex tablet:flex-[3] relative">
                    <div className="phablet:hidden absolute tablet:flex windowDesktop:hidden bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 tablet:px-16 tablet:py-4 tablet:mt-6">
                      FEATURED
                    </div>
                    {
                      // eslint-disable-next-line @next/next/no-img-element
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
                        className="flex w-full windowDesktop:flex-[5] h-44 phablet:h-72 tablet:h-52 windowDesktop:h-full object-cover"
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
