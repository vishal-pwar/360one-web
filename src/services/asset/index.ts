import { fetchContent } from "@/utils/fetch-content";

export async function getAssetHeroSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/asset`;
  const urlParamsObject = {
    populate: { hero: { populate: { icon: true, image: true } } },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getAssetSuiteSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/asset`;
  const urlParamsObject = {
    populate: {
      suite: {
        populate: {
          cards: { populate: { icon: true } },
          clearImage: true,
          blurImage: true,
          icon: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getAssetPerspectiveSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/asset`;
  const urlParamsObject = {
    populate: {
      perspective: {
        populate: {
          posts: { populate: ["thumbnail"] },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getAssetReachUsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/asset`;
  const urlParamsObject = {
    populate: {
      reachUs: true,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getAssetFooter() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/asset`;
  const urlParamsObject = {
    populate: {
      footer: {
        populate: {
          socials: {
            populate: ["icon"],
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
