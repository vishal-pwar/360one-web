import { getAssetLeadersSection } from "@/services/leadership";
import AssetSliderSection from "./asset-section";

const AssetLeadersWrapper = async () => {
  const response = await getAssetLeadersSection();
  const cards = response?.data?.attributes?.asset?.cards;
  const cardTitle = response?.data?.attributes?.asset?.cardTitle;
  const cardText = response?.data?.attributes?.asset?.cardText;
  const content = {
    text: cardText,
    title: cardTitle,
  };
  return <AssetSliderSection cards={cards} content={content} />;
};

export default AssetLeadersWrapper;
