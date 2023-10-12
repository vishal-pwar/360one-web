import { fetchContent } from "@/utils/fetch-content";

export async function getPages() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/pages`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent<any, true>(path, {}, options);
  return response;
}
