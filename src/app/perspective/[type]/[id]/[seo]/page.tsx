import {
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
  if (params.type === "experiences") {
    response = await getCuratedExperienceSection();
  } else if (params.type === "Ips") {
    response = await getOurIpsSection();
  }

  return (
    <>
      {(() => {
        switch (params.type) {
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
