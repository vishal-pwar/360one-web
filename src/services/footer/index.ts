import { fetchContent } from "@/utils/fetch-content";

export async function getFooter() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/footer`;
  const urlParamsObject = {
    populate: {
      sections: {
        populate: { links: true },
      },
      socials: {
        populate: ["icon"],
      },
      legals: true,
      copyrights: true,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
