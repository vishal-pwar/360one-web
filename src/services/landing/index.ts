import { fetchContent } from "@/utils/fetch-content";

export async function getHeroSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/landing-page`;
  const urlParamsObject = {
    populate: { hero: { populate: ["video", "icon"] } },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getCommitmentSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/landing-page`;
  const urlParamsObject = {
    populate: {
      commitment: {
        populate: {
          sections: { populate: { cards: { populate: { icon: true } } } },
          image: true,
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getOfferingsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/landing-page`;
  const urlParamsObject = {
    populate: {
      offering: {
        populate: {
          products: { populate: ["clearImage", "blurImage", "logo"] },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getHomePerspectiveSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/landing-page`;
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
