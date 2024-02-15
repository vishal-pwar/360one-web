import { fetchContent } from "@/utils/fetch-content";

export async function getBannerSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      banner: {
        populate: {
          articles: {
            populate: {
              cover: true,
              video_thumbnail: true,
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

export async function getViewpointSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      viewpoint: {
        populate: {
          articles: {
            populate: {
              cover: true,
              video_thumbnail: true,
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

export async function getCuratedExperienceSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      experiences: {
        populate: {
          articles: {
            populate: {
              cover: true,
              video_thumbnail: true,
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

export async function getOurIpsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      ips: {
        populate: {
          articles: {
            populate: {
              cover: true,
              video_thumbnail: true,
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

export async function getReportsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      reports: {
        populate: {
          reports_and_publications_cards: {
            populate: { media: true, pdf: true },
          },
          featured: {
            populate: { media: true, pdf: true },
          },
        },
      },
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
          articles: {
            populate: {
              cover: true,
              video_thumbnail: true,
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
