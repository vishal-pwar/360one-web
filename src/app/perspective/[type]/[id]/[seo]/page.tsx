import {
  getBannerSection,
  getCuratedExperienceSection,
  getInMediaSection,
  getOurIpsSection,
  getViewpointSection,
} from "@/services/perspective";
import ArticlePost from "../../../../../components/perspective-article";

const PerspectiveArticle = async ({
  params,
  searchParams,
}: {
  params: { type: string; id: string };
  searchParams: { from: string };
}) => {
  let response;
  let page = params?.type;
  if (searchParams.from === "banner") {
    response = await getBannerSection();
  } else if (params.type === "experiences") {
    response = await getCuratedExperienceSection();
  } else if (params.type === "ips") {
    response = await getOurIpsSection();
  } else if (params.type === "viewpoint") {
    response = await getViewpointSection();
  } else if (params.type === "media") {
    response = await getInMediaSection();
  }

  const cardKey = (() => {
    if (page === "experiences") {
      return "curated_experiences_cards";
    }
    if (page === "media") {
      return "media_cards";
    }
    if (page === "viewpoint") {
      return "viewpoint_cards";
    }
    if (page === "ips") {
      return "ips_cards";
    }
    return "";
  })();

  return (
    <>
      {(() => {
        if (searchParams.from === "banner") {
          return (
            <ArticlePost
              response={response?.data?.attributes?.banner?.[cardKey].data.find(
                (f: any) => f.id === +params.id
              )}
            />
          );
        } else {
          return (
            <ArticlePost
              response={response?.data?.attributes?.[page]?.[cardKey].data.find(
                (f: any) => f.id === +params.id
              )}
            />
          );
        }
      })()}
    </>
  );
};

export default PerspectiveArticle;
