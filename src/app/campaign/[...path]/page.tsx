import CampaignSection from "@/sections/campaign";
import { getCampaignDetailByCampaignUrl } from "@/services/campaign";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { path: string[] } }) => {
  const url = "/campaign/" + params.path.join("/");

  const response = await getCampaignDetailByCampaignUrl(url);

  const currentCampaignObj = response.data?.attributes?.campaigns?.find(
    (obj: any) => obj?.url?.endsWith(url)
  );

  if (!currentCampaignObj) {
    notFound();
  }

  return (
    <>
      <CampaignSection
        respCountryCodeOptions={response.data?.attributes?.country_code_options}
        campaignObj={currentCampaignObj}
      />
    </>
  );
};

export default Page;
