import { fetchContent } from "@/utils/fetch-content";

export async function getArticle(id: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/articles/${id}`;
  const urlParamsObject = {
    populate: {
      cover: true,
      related_articles: {
        populate: {
          cover: true,
          video_thumbnail: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
