import {
  getBannerSection,
  getCuratedExperienceSection,
  getOurIpsSection,
} from "@/services/perspective";
import ArticlePost from "../../../../../components/perspective-article";

const PerspectiveArticle = async ({
  params,
}: {
  params: { type: string; id: string };
}) => {
  let response;
  let page = params?.type;
  let bannerCards;
  if (params.type === "Banner") {
    response = await getBannerSection();
    bannerCards = [
      ...response?.data?.attributes?.Banner?.media_cards?.data,
      ...response?.data?.attributes?.Banner?.curated_experiences_cards?.data,
      ...response?.data?.attributes?.Banner?.ips_cards?.data,
      ...response?.data?.attributes?.Banner?.viewpoint_cards?.data,
    ];
  } else if (params.type === "experiences") {
    response = await getCuratedExperienceSection();
  } else if (params.type === "Ips") {
    response = await getOurIpsSection();
  }
  return (
    <>
      {(() => {
        switch (params.type) {
          case "Banner":
            return bannerCards && bannerCards.length > 0 ? (
              <ArticlePost
                response={bannerCards[parseInt(params?.id) - 1]}
                relatedcards={response?.data?.attributes?.[page]}
              />
            ) : null;
          case "experiences":
            return (
              <ArticlePost
                response={
                  response?.data?.attributes?.[page]?.curated_experiences_cards
                    .data[parseInt(params?.id) - 1]
                }
                relatedcards={response?.data?.attributes?.[page]}
              />
            );
          case "Ips":
            return (
              <ArticlePost
                response={
                  response?.data?.attributes?.[page]?.ips_cards.data[
                    parseInt(params?.id) - 1
                  ]
                }
                relatedcards={response?.data?.attributes?.[page]}
              />
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default PerspectiveArticle;
