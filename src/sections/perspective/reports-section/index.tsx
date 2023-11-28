import React from "react";
import ReportsSlider from "@/components/slider-perspective/slider-reports";
import { getReportsSection } from "@/services/perspective";

const Reports = async () => {
  const response = await getReportsSection();

  return (
    <section className="mt-20">
      <div className="flex gap-20 flex-1">
        <div className="flex flex-col gap-4 bg-black py-24 flex-[5]">
          <div className="font-space-grotesk font-bold text-[42px] text-white">
            {response.data.attributes.Reports.title}
          </div>
          <div className="font-space-grotesk font-normal text-xl text-white">
            {response.data.attributes.Reports.subtitle}
          </div>
        </div>

        <div className="bg-white flex gap-20 flex-[7]">
          <div>
            {response.data.attributes.Reports.cards.map((i: any) => {
              return (
                <>
                  {i.is_featured === true && i.is_selected === false ? (
                    <div className="flex">
                      <div className="flex flex-col flex-[4]">
                        <div className="w-52 px-16 py-4 mt-11 bg-[#FD7740] font-space-grotesk font-bold text-sm text-white">
                          FEATURED
                        </div>
                        <div className="p-11">
                          <div className="font-space-grotesk font-bold text-4xl text-black">
                            {i.title}
                          </div>
                          <div className="font-space-grotesk font-normal text-xl text-black mt-3 mb-6">
                            {i.subtitle}
                          </div>
                          <button className="border-2 border-black py-4 font-space-grotesk font-bold text-sm w-2/5">
                            DOWNLOAD NOW
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-[3]">
                        {
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={i.image.data.attributes.url}
                            alt="featured card"
                          />
                        }
                      </div>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      </div>

      <ReportsSlider response={response.data.attributes.Reports} />
    </section>
  );
};

export default Reports;
