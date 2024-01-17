import { fetchContent } from "@/utils/fetch-content";

export async function getLogoSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/logo`;
  const urlParamsObject = {
    populate: {
      media: true,
      logo_360One: {
        populate: {
          logo_348x348: true,
          logo_278x278: true,
          logo_200x200: true,
        },
      },
      logo_360ONe_wealth: {
        populate: {
          logo_348x348: true,
          logo_278x278: true,
          logo_200x200: true,
        },
      },
      Logo_360One_asset: {
        populate: {
          logo_348x348: true,
          logo_278x278: true,
          logo_200x200: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
