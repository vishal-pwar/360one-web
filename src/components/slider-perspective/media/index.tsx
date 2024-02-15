"use client";
import VideoPLayer from "@/components/video-player";
import PlayIcon from "@/public/assets/icons/playIcon.svg";
import { formatDate } from "@/utils/api-helpers";
import { useRouter } from "next/navigation";

interface inMediaProps {
  response: any;
}

export default function InMediaCards({ response }: inMediaProps) {
  const featuredCard = response?.data?.attributes?.media?.articles?.data?.[0];

  const router = useRouter();

  return (
    <>
      <div className="w-full h-[80px] tablet:h-24 desktop:h-28 bg-[#F4F0EF]" />
      <section className="tablet:flex flex-1 tablet:h-[950px] mb-36">
        <div className="bg-black flex flex-col tablet:flex-[6] px-6 py-10 phablet:p-12 tablet:py-14 tablet:px-20">
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
              src={featuredCard?.attributes?.cover?.data?.attributes?.url}
              alt={
                featuredCard?.attributes?.cover?.data?.attributes
                  ?.alternativeText
              }
              className="flex w-full h-56 phablet:h-72 tablet:h-[300px] desktop:h-80 object-cover"
            />
          </div>
          <div className="flex font-normal text-white text-sm tablet:text-base mt-6 phablet:mt-7 desktop:mt-9 mb-2">
            <div>{featuredCard?.attributes?.publication_source}</div>
            <div className="mx-1">|</div>
            <div>{formatDate(featuredCard?.attributes?.date)}</div>
          </div>
          <div className="font-bold text-base text-white phablet:text-lg tablet:text-2xl">
            {featuredCard?.attributes?.title}
          </div>

          <button
            className={`border-2 border-white py-3 text-white mt-6 mb-11 tablet:mt-9 w-full sm:w-52 ${
              featuredCard?.attributes?.is_article === false ? "hidden" : "flex"
            }`}
            onClick={() =>
              router.push(
                `/perspective/${featuredCard?.attributes?.type}/${featuredCard?.id}/${featuredCard?.attributes?.params_url}`
              )
            }
          >
            READ FULL ARTICLE
          </button>
        </div>
        {response?.data?.attributes?.media?.articles?.data?.length ===
        0 ? null : (
          <div className="tablet:h-[950px] overflow-y-scroll tablet:flex-[6] bg-[#F4F0EF] px-6 phablet:px-12 tablet:px-0">
            <div className="flex flex-col overflow-hidden flex-[6] tablet:px-11">
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
                            className={`flex flex-col cursor-pointer phablet:flex-row phablet:gap-4 tablet:gap-0 tablet:flex-col ${
                              index >= 3 ? "hidden tablet:block" : ""
                            }`}
                            onClick={() =>
                              router.push(
                                `/perspective/${blog?.attributes?.type}/${blog?.id}/${blog?.attributes?.params_url}`
                              )
                            }
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={
                                blog?.attributes?.cover?.data?.attributes?.url
                              }
                              alt={
                                blog?.attributes?.cover?.data?.attributes
                                  ?.alternativeText
                              }
                              className="w-full object-cover h-[135px] phablet:h-[135px] tablet:h-[300px] desktop:h-[326px] mt-5 tablet:mb-5 desktop:mb-0"
                            />
                          </div>
                        ) : (
                          <div className="w-full relative flex items-center justify-center">
                            <div className="w-full bg-black">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={
                                  blog?.attributes?.thumbnail?.data?.attributes
                                    ?.url
                                }
                                alt={
                                  blog?.attributes?.thumbnail?.data?.attributes
                                    ?.alternativeText
                                }
                                className="flex w-[100%] object-cover h-[135px] phablet:h-[135px] tablet:h-[300px] desktop:h-[326px] mt-5 tablet:mb-5 desktop:mb-0 opacity-60"
                              />
                            </div>
                            <VideoPLayer
                              iconUrl={PlayIcon}
                              videoUrl={
                                blog?.attributes?.cover?.data?.attributes?.url
                              }
                            />
                          </div>
                        )}
                      </>
                    )}

                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        router.push(
                          `/perspective/${blog?.attributes?.type}/${blog?.id}/${blog?.attributes?.params_url}`
                        )
                      }
                    >
                      <div>
                        {/* <div className="font-light text-sm mt-5 mb-2">
                          {blog?.attributes?.tag}
                        </div> */}
                        <div className="font-medium tablet:font-bold text-base mt-2">
                          {blog?.attributes?.title}
                        </div>
                        <div className="flex font-normal text-sm mt-3 mb-6">
                          <div>{blog?.attributes?.publication_source}</div>
                          <div className="mx-1">|</div>
                          <div>{formatDate(blog?.attributes?.date)}</div>
                        </div>
                      </div>
                      <div className="phablet:hidden tablet:flex w-full bg-black h-[2px] opacity-5">
                        -
                      </div>

                      <div
                        className={`hidden phablet:flex tablet:hidden w-full ${
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
