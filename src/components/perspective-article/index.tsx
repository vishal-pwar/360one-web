"use client";

interface ArticleResponse {
  response: any;
}

const Article = ({ response: articleResponse }: ArticleResponse) => {
  const relatedcards = [
    ...(articleResponse?.attributes?.article?.data?.attributes
      ?.curated_experiences_cards?.data || []),
    ...(articleResponse?.attributes?.article?.data?.attributes?.ips_cards
      ?.data || []),
    ...(articleResponse?.attributes?.article?.data?.attributes?.viewpoint_cards
      ?.data || []),
  ];

  console.log("relatedcards", articleResponse);

  return (
    <section>
      <div className="flex flex-col gap-14 bg-black pt-40 px-72">
        <div className="flex justify-between">
          <div>
            <div className="font-hanken-grotesk font-semibold text-base text-white">
              {articleResponse?.attributes?.title}
            </div>
            <div className="font-bold text-4xl text-white my-5">
              {articleResponse?.attributes?.subtitle}
            </div>
            <div className="font-hanken-grotesk font-semibold text-base text-white">
              {articleResponse?.attributes?.article?.data?.attributes?.date}
            </div>
          </div>
          <div className="h-200 bg-[#4F4F4F] w-[1px]"></div>
          <div>
            <div className="font-normal text-sm text-[#9A9A9A]">
              written by:
            </div>
            <div className="font-medium text-[22px] text-white my-1">
              {
                articleResponse?.attributes?.article?.data?.attributes
                  ?.written_by
              }
            </div>
            <div className="font-normal text-sm text-white">
              {
                articleResponse?.attributes?.article?.data?.attributes
                  ?.designation
              }
            </div>
            <div className="font-normal text-sm text-white">
              {
                articleResponse?.attributes?.article?.data?.attributes
                  ?.company_name
              }
            </div>
          </div>
        </div>
        <div className="flex">
          {articleResponse?.attributes?.category?.length > 0 ? (
            <div className="absolute mt-14 text-lg font-bold text-white bg-[#FD7740] py-3 px-6">
              {articleResponse?.attributes?.attributes?.category}
            </div>
          ) : null}
          {articleResponse?.attributes?.media?.data?.attributes?.url?.length >
          0 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={articleResponse?.attributes?.media?.data?.attributes?.url}
              alt={
                articleResponse?.attributes?.media?.data?.attributes
                  ?.alternativeText
              }
              className="w-full h-[426px] object-cover mt-8"
            />
          ) : null}
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="bg-white mx-72 p-10">
          {articleResponse?.attributes?.article?.data?.attributes?.read_time
            ?.length > 0 ? (
            <span className="w-48 mb-6 flex flex-row font-hanken-grotesk font-semibold text-base text-[#B1532D] px-4 py-2 bg-[#FFE4D9]">
              <span>Read time - </span>
              <span className="mx-1">
                {
                  articleResponse?.attributes?.article?.data?.attributes
                    ?.read_time
                }
              </span>
              <span>mins</span>
            </span>
          ) : null}
          {articleResponse?.attributes?.article?.data?.attributes?.card?.map(
            (i: any) => {
              return (
                <>
                  {i?.image?.data?.attributes?.url?.length > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={i?.image?.data?.attributes?.url}
                      alt={i?.image?.data?.attributes?.alternativeText}
                      className="w-full h-[500px]"
                    />
                  ) : null}
                  {i?.text?.length > 0 ? (
                    <div className="font-hanken-grotesk font-medium text-[22px]">
                      {i?.text}
                    </div>
                  ) : null}
                </>
              );
            }
          )}
        </div>
      </div>
      <div className="bg-[#F8F8F8] px-32 py-28 flex flex-wrap gap-7">
        <div className="flex gap-9 h-full flex-row align-end justify-start w-full tablet:w-[calc(50%-16px)] desktop:w-[calc(33%-16px)] mt-[5%]">
          <div className="w-2 h-32 bg-[#FD7740]"></div>
          <div className="flex flex-col align-center justify-start">
            <div className="font-bold text-[42px]">Related</div>
            <div className="font-bold text-[42px]">
              {articleResponse?.attributes?.component_name}
            </div>
          </div>
        </div>
        {relatedcards?.map((i: any) => {
          return (
            <div
              key={i}
              className="w-full tablet:w-[calc(50%-16px)] desktop:w-[calc(33%-16px)]"
            >
              <div className="bg-white p-4">
                <div className="absolute font-bold text-xs px-5 py-3 bg-[#FD7740] text-white mt-4">
                  {i?.attributes?.banner_tag}
                </div>
                <div>
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={i?.attributes?.media?.data?.attributes?.url}
                      alt={
                        i?.attributes?.attributes?.media?.data?.attributes
                          ?.alternativeText
                      }
                      className="w-full h-64 object-cover"
                    />
                  }
                </div>
                <div className="mt-4 font-bold text-[22px]">
                  {i?.attributes?.title}
                </div>

                <div className="mt-4 font-bold text-[22px]">
                  {i?.attributes?.publication_source}
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
