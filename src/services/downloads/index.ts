import { fetchContent } from "@/utils/fetch-content";

export async function getDownloads() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/downloads`;
  const urlParams = {
    populate: {
      file: {
        populate: {
          files: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent<any, true>(path, urlParams, options);
  return response;
}
