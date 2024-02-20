"use client";

import { formatDate } from "@/utils/api-helpers";
import { paramCase } from "@pantelwar/js-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ArticleResponse {
  response: any;
}

const Article = ({ response: articleResponse }: ArticleResponse) => {
  const router = useRouter();

  // const centerAlignImages = (content: any) => {
  //   // Regular expression to match image Markdown syntax ![...](...)
  //   const imageRegex = /!\[.*?\]\((.*?)\)/g;
  //   // Replace images with centered images
  //   const centeredContent = content.replace(
  //     imageRegex,
  //     (match: any, p1: any) =>
  //       `<img src="${p1}" style="display: block; margin: 0 auto;" />`
  //   );
  //   return <div dangerouslySetInnerHTML={{ __html: centeredContent }} />;
  // };

  return (
    <section>
      <div className="flex flex-col gap-14 bg-black pt-40 px-72">
        <div className="flex justify-between">
          <div className="p-5">
            <div className="font-hanken-grotesk font-semibold text-[16px] text-white">
              {articleResponse?.attributes?.tag}
            </div>
            <div className="font-bold text-[36px] text-white my-5">
              {articleResponse?.attributes?.title}
            </div>
            <div className="font-hanken-grotesk font-semibold text-[16px] text-white">
              {formatDate(articleResponse?.attributes?.date)}
            </div>
          </div>
          <div className="h-200 bg-[#4F4F4F] w-[1px]"></div>
          <div className="p-8">
            <div className="font-normal text-sm text-[#9A9A9A]">By:</div>
            <div className="font-medium text-[22px] text-white my-1">
              {articleResponse?.attributes?.written_by}
            </div>
            <div className="font-normal text-sm text-white">
              {articleResponse?.attributes?.designation}
            </div>
            <div className="font-normal text-sm text-white">
              {articleResponse?.attributes?.company_name}
            </div>
          </div>
        </div>
        <div className="flex">
          {articleResponse?.attributes?.type?.length > 0 ? (
            <div className="absolute uppercase mt-14 text-lg font-bold text-white bg-[#FD7740] py-3 px-6">
              {articleResponse?.attributes?.type}
            </div>
          ) : null}
          {articleResponse?.attributes?.cover?.data?.attributes?.url?.length >
          0 ? (
            <img
              src={articleResponse?.attributes?.cover?.data?.attributes?.url}
              alt={
                articleResponse?.attributes?.cover?.data?.attributes
                  ?.alternativeText
              }
              className="w-full object-cover mt-8"
            />
          ) : null}
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="bg-white mx-72 p-10">
          {articleResponse?.attributes?.read_time?.length > 0 ? (
            <div className="mb-6">
              <span className="whitespace-nowrap font-hanken-grotesk font-semibold text-base text-[#B1532D] px-4 py-2 bg-[#FFE4D9]">
                <span>Read time - </span>
                <span className="mx-1">
                  {articleResponse?.attributes?.read_time}
                </span>
                <span>mins</span>
              </span>
            </div>
          ) : null}
          <Markdown rehypePlugins={[rehypeRaw]} className="markdown">
            {articleResponse?.attributes?.body}
          </Markdown>
          {/* <div className="text-[20px] leading-[32px]">
            {articleResponse && articleResponse.attributes && (
              <div>{centerAlignImages(articleResponse.attributes.body)}</div>
            )}
          </div> */}

          <div className="mt-10">
            {articleResponse?.attributes?.article?.data?.attributes
              .publication_source !== null ? (
              <div className="flex gap-2 items-center text-2xl font-normal">
                <div>Original Article :</div>
                <Link
                  className="underline text-blue-600 text-2xl font-semibold"
                  href={
                    articleResponse?.attributes?.publication_source_link || "#"
                  }
                  target="_blank"
                >
                  {articleResponse?.attributes?.publication_source}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        <div>
          {articleResponse?.attributes?.seo_dropdown?.length > 0 ? (
            <div className="flex mx-[268px] flex-wrap">
              {articleResponse?.attributes?.seo_dropdown?.map((values: any) => {
                return (
                  <div key={values?.id} className="p-6">
                    <div className="text-[#B1532D] p-3 bg-[#FFE4D9]">
                      {values}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="bg-[#F8F8F8] px-32 py-28 flex flex-wrap gap-7">
        <div className="flex gap-9 h-full flex-row align-end justify-start w-full phablet:w-[calc(50%-16px)] tablet:w-[calc(33%-16px)] mt-[5%]">
          <div className="w-2 h-32 bg-[#FD7740]"></div>
          <div className="flex flex-col align-center justify-start">
            <div className="font-bold text-[42px]">Latest</div>
            <div className="font-bold text-[42px]">News</div>
          </div>
        </div>
        {articleResponse?.attributes?.related_articles?.data?.map((i: any) => {
          return (
            <div
              key={i}
              onClick={() =>
                router.push(
                  `/perspective/${paramCase(i?.attributes?.type)}/${i?.id}/${i
                    ?.attributes?.params_url}`
                )
              }
              className="w-full cursor-pointer h-[450px] phablet:w-[calc(50%-16px)] tablet:w-[calc(33%-16px)]"
            >
              <div className="bg-white flex flex-col justify-between h-full p-4">
                <div className="absolute font-bold text-xs px-5 py-3 bg-[#FD7740] text-white mt-4">
                  {i?.attributes?.tag}
                </div>
                <div>
                  <div>
                    {
                      <img
                        src={i?.attributes?.cover?.data?.attributes?.url}
                        alt={
                          i?.attributes?.attributes?.cover?.data?.attributes
                            ?.alternativeText
                        }
                        className="w-full h-64 object-cover"
                      />
                    }
                  </div>
                  <div className="mt-4 font-bold text-[22px] leading-[28px]">
                    {i?.attributes?.title}
                  </div>
                </div>
                <div className="mt-4 font-normal text-slate-700 text-[16px] leading-[20px]">
                  - {i?.attributes?.publication_source}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Article;
