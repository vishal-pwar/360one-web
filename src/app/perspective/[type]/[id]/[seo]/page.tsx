import React from "react";
import ArticlePost from "../../../../../components/perspective-article";
import {
  getBannerSection,
  getCuratedExperienceSection,
  getOurIpsSection,
} from "@/services/perspective";

const PerspectiveArticle = async ({
  params,
}: {
  params: { type: string; id: string };
}) => {
  let response;
  let page = params?.type;
  if (params.type === "Banner") {
    response = await getBannerSection();
  } else if (params.type === "experiences") {
    response = await getCuratedExperienceSection();
  } else if (params.type === "Ips") {
    response = await getOurIpsSection();
  }
  return (
    <ArticlePost
      response={
        response?.data?.attributes?.[page]?.cards[parseInt(params?.id) - 1]
      }
      relatedcards={response?.data?.attributes?.[page]}
    />
  );
};

export default PerspectiveArticle;
