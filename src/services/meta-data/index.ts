import { fetchContent } from "@/utils/fetch-content";

export async function getMetadata() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/metatags`;
  const urlParams = {
    populate: {
      metaTag: true,
      page: true,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent<any, true>(path, urlParams, options);
  return response;
}
