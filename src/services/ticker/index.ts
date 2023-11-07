import { fetchContent } from "@/utils/fetch-content";

export async function getTicker() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/tickers`;
  const urlParamsObject = {
    populate: {
      page: true,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent<any, true>(
    path,
    urlParamsObject,
    options
  );
  return response;
}
