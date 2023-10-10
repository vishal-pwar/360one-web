import { fetchContent } from "@/utils/fetch-content";

export async function getPopup() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/popups`;
  const urlParams = {
    populate: "image",
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParams, options);
  return response;
}
