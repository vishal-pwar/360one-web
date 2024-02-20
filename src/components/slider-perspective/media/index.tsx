"use client";
import VideoPLayer from "@/components/video-player";
import { formatDate } from "@/utils/api-helpers";
import { paramCase } from "@pantelwar/js-utils";
import { useRouter } from "next/navigation";

interface inMediaProps {
  response: any;
}

export default function InMediaCards({ response }: inMediaProps) {
  const featuredCard = response?.data?.attributes?.media?.articles?.data?.[0];
  const router = useRouter();

  return (
    <>
      <div className="w-full h-[50px] md:h-12 xl:h-16 bg-[#F4F0EF]" />
      <section className="lg:flex flex-1 lg:h-[950px] mb-12">
        <div className="bg-black flex flex-col lg:flex-[6] px-6 py-10 sm:p-12 md:py-14 md:px-20">
          <div className="font-bold text-[28px] sm:text-[32px] md:text-[42px] text-white">
            {response?.data?.attributes?.media?.title}
          </div>
          <div className="font-normal text-base sm:text-lg md:text-xl text-white mt-3 md:mt-4 mb-10">
            {response?.data?.attributes?.media?.subtitle}
          </div>
          <div className="relative">
            <div className="absolute bg-[#FD7740] font-bold text-sm text-white px-6 py-2 mt-6 md:px-16 md:py-4 md:mt-6">
              FEATURED
            </div>
            <img
              src={featuredCard?.attributes?.cover?.data?.attributes?.url}
              alt={
                featuredCard?.attributes?.cover?.data?.attributes
                  ?.alternativeText
              }
              className="flex w-full h-56 sm:h-72 md:h-[300px] xl:h-80 object-cover"
            />
          </div>
          <div className="flex font-normal text-white text-sm md:text-base mt-6 sm:mt-7 xl:mt-9 mb-2">
            <div>{featuredCard?.attributes?.publication_source}</div>
            <div className="mx-1">|</div>
            <div>{formatDate(featuredCard?.attributes?.date)}</div>
          </div>
          <div className="font-bold text-base text-white sm:text-lg md:text-2xl">
            {featuredCard?.attributes?.title}
          </div>

          <button
            className={`border-2 border-white justify-center py-3 text-white mt-6 mb-11 md:mt-9 w-full sm:w-52 ${
              featuredCard?.attributes?.is_article === false ? "hidden" : "flex"
            }`}
            onClick={() =>
              router.push(
                `/perspective/${paramCase(
                  featuredCard?.attributes?.type
                )}/${featuredCard?.id}/${featuredCard?.attributes?.params_url}`
              )
            }
          >
            READ FULL ARTICLE
          </button>
        </div>
        {response?.data?.attributes?.media?.articles?.data?.length ===
        0 ? null : (
          <div className="lg:h-[950px] overflow-y-scroll lg:flex-[6] bg-[#F4F0EF] px-6 sm:px-12 lg:px-0">
            <div className="flex flex-col overflow-hidden flex-[6] md:px-11">
              {response?.data?.attributes?.media?.articles?.data
                ?.slice(0, 13)
                ?.map((blog: any, index: number) => (
                  <>
                    {blog?.attributes?.cover?.data !== null && (
                      <>
                        {blog?.attributes?.cover?.data?.attributes?.mime.includes(
                          "image"
                        ) ? (
                          <div
                            className={`flex flex-col cursor-pointer sm:flex-row sm:gap-4 md:gap-0 md:flex-col ${
                              index >= 3 ? "hidden lg:block" : ""
                            }`}
                            onClick={() =>
                              router.push(
                                `/perspective/${paramCase(
                                  blog?.attributes?.type
                                )}/${blog?.id}/${blog?.attributes?.params_url}`
                              )
                            }
                          >
                            <img
                              src={
                                blog?.attributes?.cover?.data?.attributes?.url
                              }
                              alt={
                                blog?.attributes?.cover?.data?.attributes
                                  ?.alternativeText
                              }
                              className="w-full object-cover h-[135px] sm:h-[135px] md:h-[300px] xl:h-[326px] mt-5 md:mb-5 xl:mb-0"
                            />
                          </div>
                        ) : (
                          <div className="w-full relative flex items-center justify-center">
                            <div className="w-full bg-black">
                              <img
                                src={
                                  blog?.attributes?.thumbnail?.data?.attributes
                                    ?.url
                                }
                                alt={
                                  blog?.attributes?.thumbnail?.data?.attributes
                                    ?.alternativeText
                                }
                                className="flex w-[100%] object-cover h-[135px] sm:h-[135px] md:h-[300px] xl:h-[326px] mt-5 md:mb-5 xl:mb-0 opacity-60"
                              />
                            </div>
                            <VideoPLayer
                              iconUrl={"assets/icons/playIcon.svg"}
                              videoUrl={
                                blog?.attributes?.cover?.data?.attributes?.url
                              }
                            />
                          </div>
                        )}
                      </>
                    )}

                    <div
                      className={`cursor-pointer ${
                        index >= 3 ? "hidden lg:block" : ""
                      }`}
                      onClick={() =>
                        router.push(
                          `/perspective/${paramCase(
                            blog?.attributes?.type
                          )}/${blog?.id}/${blog?.attributes?.params_url}`
                        )
                      }
                    >
                      <div>
                        {/* <div className="font-light text-sm mt-5 mb-2">
                          {blog?.attributes?.tag}
                        </div> */}
                        <div className="font-medium md:font-bold text-base mt-2">
                          {blog?.attributes?.title}
                        </div>
                        <div className="flex font-normal text-sm mt-3 mb-6">
                          <div>{blog?.attributes?.publication_source}</div>
                          <div className="mx-1">|</div>
                          <div>{formatDate(blog?.attributes?.date)}</div>
                        </div>
                      </div>
                      <div className="sm:hidden md:flex w-full bg-black h-[2px] opacity-5">
                        -
                      </div>

                      <div
                        className={`hidden sm:flex md:hidden w-full ${
                          index >= 3 ? "hidden" : "bg-black h-[2px] opacity-5"
                        }`}
                      ></div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
