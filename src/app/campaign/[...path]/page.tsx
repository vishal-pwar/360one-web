import CampaignSection from "@/sections/campaign";
import { getCampaignDetailByCampaignUrl } from "@/services/campaign";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { path: string[] } }) => {
  const url = "/campaign/" + params.path.join("/");

  const response: any = await getCampaignDetailByCampaignUrl(url);

  if (response.data?.length !== 1) {
    notFound();
  }

  return (
    <>
      <CampaignSection responseData={response?.data} />
    </>
  );
};

export default Page;
