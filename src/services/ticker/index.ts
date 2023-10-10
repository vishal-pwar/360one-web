import { fetchContent } from "@/utils/fetch-content";

export async function getTicker() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/tickers`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, {}, options);
  return response;
}
