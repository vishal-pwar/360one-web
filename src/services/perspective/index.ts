import { fetchContent } from "@/utils/fetch-content";

export async function getPerspectiveSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      viewpoint: { populate: { cards: { populate: { media: true } } } },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getCuratedExperienceSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      experiences: { populate: { cards: { populate: { image: true } } } },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getOurIpsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      Ips: { populate: { cards: { populate: { image: true } } } },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getReportsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      Reports: { populate: { cards: { populate: { image: true } } } },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getInMediaSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      media: {
        populate: {
          blog_posts: { populate: { thumbnail: true } },
          featured: { populate: { thumbnail: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
