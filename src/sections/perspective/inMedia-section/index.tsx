import React from "react";
import { getInMediaSection } from "@/services/perspective/index";
import { formatDate } from "@/utils/api-helpers";

const Media = async () => {
  const response = await getInMediaSection();
  return (
    <section className="tablet:flex flex-1 tablet:h-[900px] mt-36 mb-36">
      <div className="bg-black flex flex-col tablet:flex-[6] px-6 py-10 phablet:p-12 tablet:py-16 tablet:px-40">
        <div className="font-bold text-[28px] phablet:text-[32px] tablet:text-[42px] text-white">
          {response?.data?.attributes?.media?.title}
        </div>
        <div className="font-normal text-base phablet:text-lg tablet:text-xl text-white mt-3 tablet:mt-4 mb-10">
          {response?.data?.attributes?.media?.subtitle}
        </div>
        <div className="relative">
          <div className="absolute bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 tablet:px-16 tablet:py-4 tablet:mt-6">
            FEATURED
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              response?.data?.attributes?.media?.featured?.data?.attributes
                ?.thumbnail?.data?.attributes?.url
            }
            alt="featured card"
            className="flex w-full h-56 phablet:h-72 tablet:h-[300px] desktop:h-80 object-cover"
          />
        </div>
        <div className="flex font-normal text-white text-sm tablet:text-base mt-6 phablet:mt-7 desktop:mt-9 mb-2">
          <div>
            {
              response?.data?.attributes?.media?.featured?.data?.attributes
                ?.publishers
            }
          </div>
          <div className="mx-1">|</div>
          <div>
            {formatDate(
              response?.data?.attributes?.media?.featured?.data?.attributes
                ?.publishedAt
            )}
          </div>
        </div>
        <div className="font-bold text-base text-white phablet:text-lg tablet:text-2xl">
          {response?.data?.attributes?.media?.featured?.data?.attributes?.title}
        </div>
        <button className="border-2 border-white py-3 text-white mt-6 mb-11 tablet:mt-9 w-full sm:w-52">
          READ FULL ARTICLE
        </button>
      </div>
      <div className="tablet:h-[900px] overflow-y-scroll tablet:flex-[6] bg-[#F4F0EF] px-6 py-10 phablet:px-12 tablet:py-11 tablet:px-14">
        <div className="flex flex-col tablet:h-[3300px] desktop:h-[2100px] overflow-hidden desktop:flex-wrap desktop:gap-7 flex-[6] tablet:pt-9 tablet:px-11">
          {response?.data?.attributes?.media?.blog_posts?.data
            ?.slice(0, 13)
            ?.map((blog: any, index: number) => (
              <>
                <div
                  key={index}
                  className={`flex flex-col desktop:w-1/2 phablet:flex-row phablet:gap-4 tablet:gap-0 tablet:flex-col ${
                    index >= 3 ? "hidden tablet:block" : ""
                  }`}
                >
                  {blog?.attributes?.thumbnail?.data !== null && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blog?.attributes?.thumbnail?.data?.attributes?.url}
                      alt="blog-post"
                      className="w-full object-cover h-[135px] phablet:h-[135px] tablet:h-[300px] tablet:w-96 desktop:h-[326px] mt-5 tablet:mb-5 desktop:mb-0"
                    />
                  )}

                  <div>
                    <div className="font-light text-sm mt-5 mb-2">
                      {blog?.attributes?.tag}
                    </div>
                    <div className="font-medium tablet:font-bold text-base">
                      {blog?.attributes?.title}
                    </div>
                    <div className="flex font-normal text-sm mt-3 mb-6">
                      <div>{blog?.attributes?.publishers}</div>
                      <div className="mx-1">|</div>
                      <div>{formatDate(blog?.attributes?.publishedAt)}</div>
                    </div>
                  </div>
                  <div className="phablet:hidden tablet:flex w-full bg-black h-[2px] opacity-5">
                    -
                  </div>
                </div>
                <div
                  className={`hidden phablet:flex tablet:hidden w-full ${
                    index >= 3 ? "hidden" : "bg-black h-[2px] opacity-5"
                  }`}
                ></div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Media;
