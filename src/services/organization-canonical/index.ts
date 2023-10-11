import { fetchContent } from "@/utils/fetch-content";

export async function getOrganizationCanonical() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/organization-canonicals`;
  const urlParamsObject = {
    populate: {
      address: true,
      sameAs: true,
      contactPoint: {
        availableLanguage: true,
      },
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
