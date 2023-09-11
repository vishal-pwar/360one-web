import { fetchContent } from "@/utils/fetch-content";

export async function getAboutHeroSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      hero: { populate: { video: true, icon: true, bannerImage: true } },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getAboutUsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      aboutUs: {
        populate: {
          video: true,
          cards: { populate: { icon: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getLeadershipSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      leadership: {
        populate: {
          cards: {
            populate: {
              clearImage: true,
              blurImage: true,
              mobileImage: true,
              imageVerticalOffset: true,
            },
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getJourneySection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      journey: {
        populate: {
          document: true,
          video: true,
          icon: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getRecognitionSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      recognition: {
        populate: {
          cards: { populate: { icon: true, image: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getPledgeSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      pledge: {
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

export async function getCountSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/about`;
  const urlParamsObject = {
    populate: {
      count: {
        populate: {
          cards: { populate: { count: true } },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
