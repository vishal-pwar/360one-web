import { fetchContent } from "@/utils/fetch-content";

export async function getBoardOfDirectorsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/leadership`;
  const urlParamsObject = {
    populate: {
      boardOfDirectors: {
        populate: {
          cards: { populate: { image: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getTeamLeadersSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/leadership`;
  const urlParamsObject = {
    populate: {
      team: {
        populate: {
          cards: { populate: { image: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
export async function getAssetLeadersSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/leadership`;
  const urlParamsObject = {
    populate: {
      asset: {
        populate: {
          cards: { populate: { image: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
export async function getWealthLeadersSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/leadership`;
  const urlParamsObject = {
    populate: {
      wealth: {
        populate: {
          cards: { populate: { image: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
