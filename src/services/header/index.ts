import { fetchContent } from "@/utils/fetch-content";

export async function getHeader() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/header`;
  const urlParamsObject = {
    populate: "links",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
