import ReportsSlider from "@/components/slider-perspective/slider-reports";
import { getReportsSection } from "@/services/perspective";

const Reports = async () => {
  const response = await getReportsSection();
  return (
    <section className="bg-black p-6 phablet:p-12 tablet:pl-20 tablet:pr-0 desktop:pl-20 desktop:pt-16">
      <div className="flex flex-col desktop:flex-row desktop:gap-10">
        <div className="flex mt-[5%] flex-col bg-black desktop:flex-[5]">
          <div className="text-white font-bold text-[28px] phablet:text-[32px] tablet:text-[42px]">
            {response?.data?.attributes?.Reports?.title}
          </div>
          <div className="font-normal text-white text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-9 tablet:mt-4 tablet:mb-8">
            {response?.data?.attributes?.Reports?.subtitle}
          </div>
        </div>
        <div className="flex flex-col-reverse phablet:flex-row tablet:flex-col-reverse desktop:flex-row bg-white desktop:flex-[7] justify-between">
          <div className="flex flex-col py-6 px-4 tablet:py-8 tablet:px-14 tablet:justify-between tablet:items-center tablet:flex-row desktop:flex-col tablet:flex-[4] desktop:items-start phablet:relative ">
            <div className="hidden phablet:flex phablet:absolute tablet:hidden desktop:flex mt-9 px-5 py-2 bg-[#FD7740] font-bold text-sm text-white top-0">
              FEATURED
            </div>
            <div className="tablet:max-w-sm phablet:mt-16 tablet:mt-0 desktop:mt-24">
              <div className="text-black font-bold text-base tablet:text-2xl desktop:text-[32px]">
                {
                  response?.data?.attributes?.Reports?.featured?.data
                    ?.attributes?.title
                }
              </div>
              <div className="text-black font-normal text-base phablet:text-lg tablet:text-xl mt-3 mb-6 phablet:mb-8 tablet:mt-4 ">
                {
                  response?.data?.attributes?.Reports?.featured?.data
                    ?.attributes?.subtitle
                }
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
                src={
                  response?.data?.attributes?.Reports?.featured?.data
                    ?.attributes?.media?.data?.attributes?.url
                }
                alt={
                  response?.data?.attributes?.Reports?.featured?.data
                    ?.attributes?.thumbnail?.data?.attributes?.alternativeText
                }
                className="flex w-full desktop:flex-[5] h-44 phablet:h-72 tablet:h-52 desktop:h-96 object-cover"
              />
            }
          </div>
        </div>
      </div>
      <ReportsSlider response={response?.data?.attributes?.Reports} />
    </section>
  );
};

export default Reports;
