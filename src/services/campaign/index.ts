import { getStrapiURL } from "@/utils/api-helpers";
import { fetchContent } from "@/utils/fetch-content";

export async function getCampaignDetailByCampaignUrl(
  campaign_url: string = ""
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/campaigns`;
  const urlParamsObject = {
    filters: {
      url: {
        $endsWith: campaign_url,
      },
    },
    pagination: {
      pageSize: 1,
    },
    populate: {
      logo: true,
      image_mobile: true,
      image_phablet: true,
      image_tablet: true,
      image_desktop: true,
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function saveCampaignUserInterest(
  campaignId: number,
  payload: any
) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const requestUrl = `${getStrapiURL(
      `/api/campaign/save-customer-interest/${campaignId}`
    )}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(requestUrl, options);
    return response;
  } catch (error) {
    console.error(error);
  }
}
