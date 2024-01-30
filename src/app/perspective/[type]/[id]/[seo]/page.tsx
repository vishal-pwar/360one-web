import {
  getCuratedExperienceSection,
  getOurIpsSection,
  getViewpointSection,
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
  } else if (params.type === "ips") {
    response = await getOurIpsSection();
  } else if (params.type === "viewpoint") {
    response = await getViewpointSection();
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
                // relatedcards={response?.data?.attributes?.[page]}
              />
            );
          case "viewpoint":
            return (
              <ArticlePost
                response={
                  response?.data?.attributes?.[page]?.viewpoint_cards.data[
                    parseInt(params?.id) - 1
                  ]
                }
              />
            );
          case "ips":
            return (
              <ArticlePost
                response={
                  response?.data?.attributes?.[page]?.ips_cards.data[
                    parseInt(params?.id) - 1
                  ]
                }
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
