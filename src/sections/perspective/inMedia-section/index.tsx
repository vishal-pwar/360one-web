import React from "react";
import { getInMediaSection } from "@/services/perspective/index";
import { formatDate } from "@/utils/api-helpers";

const Media = async () => {
  const response = await getInMediaSection();
  return (
    <section className="mt-16 xl:mt-20 xl:flex flex-1 xl:h-[900px]">
      <div className="bg-black flex flex-col xl:flex-[6] pt-10 xl:pt-16 xl:pr-20">
        <div className="font-bold text-[28px] md:text-[32px] xl:text-[42px] text-white">
          {response?.data?.attributes?.media?.title}
        </div>
        <div className="font-normal text-base md:text-lg xl:text-xl mt-3 xl:mt-4 mb-10 text-white">
          {response?.data?.attributes?.media?.subtitle}
        </div>
        <div className="relative">
          <div className="absolute bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 xl:px-16 xl:py-4 xl:mt-6">
            FEATURED
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              response?.data?.attributes?.media?.featured?.data?.attributes
                ?.thumbnail?.data?.attributes?.url
            }
            alt="featured card"
            className="flex w-full h-56 sm:h-64 md:h-72 xl:h-[330px] object-cover"
          />
        </div>
        <div className="flex font-normal text-white text-sm mt-6 mb-2 xl:text-base md:mt-7 2xl:mt-9">
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
        <div className="font-bold text-base text-white md:text-lg lg:text-2xl">
          {response?.data?.attributes?.media?.featured?.data?.attributes?.title}
        </div>
        <button className="border-2 border-white py-3 text-white mt-6 mb-11 xl:mt-9 w-full sm:w-52">
          READ FULL ARTICLE
        </button>
      </div>
      <div className="xl:h-[900px] overflow-y-scroll xl:flex-[6]">
        <div className="flex flex-col xl:h-[3300px] 2xl:h-[2100px] overflow-hidden 2xl:flex-wrap 2xl:gap-7 flex-[6] xl:pt-9 xl:px-11">
          {response?.data?.attributes?.media?.blog_posts?.data
            ?.slice(0, 13)
            ?.map((blog: any, index: number) => (
              <>
                <div
                  key={index}
                  className={`flex flex-col 2xl:w-1/2 md:flex-row md:gap-4 xl:gap-0 xl:flex-col ${
                    index >= 4 ? "hidden xl:block" : ""
                  }`}
                >
                  {blog?.attributes?.thumbnail?.data !== null && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blog?.attributes?.thumbnail?.data?.attributes?.url}
                      alt="blog-post"
                      className="w-full object-cover h-[135px] sm:h-40 md:h-[135px] lg:h-48 xl:w-96 xl:h-96 mt-5 lg:mb-5 xl:mb-0"
                    />
                  )}

                  <div>
                    <div className="font-light text-sm mt-5 mb-2">
                      {blog?.attributes?.tag}
                    </div>
                    <div className="font-medium xl:font-bold text-base">
                      {blog?.attributes?.title}
                    </div>
                    <div className="flex font-normal text-sm mt-3 mb-6">
                      <div>{blog?.attributes?.publishers}</div>
                      <div className="mx-1">|</div>
                      <div>{formatDate(blog?.attributes?.publishedAt)}</div>
                    </div>
                  </div>
                  <div className="md:hidden xl:flex w-full bg-black h-[2px] opacity-5">
                    -
                  </div>
                </div>
                <div
                  className={`hidden md:flex xl:hidden w-full ${
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
