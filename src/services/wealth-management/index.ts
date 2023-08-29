import { fetchContent } from "@/utils/fetch-content";

export async function getWealthHeroSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/wealth`;
  const urlParamsObject = {
    populate: { hero: { populate: { icon: true, image: true } } },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getWealthSuiteSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/wealth`;
  const urlParamsObject = {
    populate: {
      suite: {
        populate: {
          cards: { populate: { icon: true } },
          image: true,
          icon: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getWealthPerspectiveSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/wealth`;
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

export async function getWealthReachUsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/wealth`;
  const urlParamsObject = {
    populate: {
      reachUs: true,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getWealthFooter() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/wealth`;
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
