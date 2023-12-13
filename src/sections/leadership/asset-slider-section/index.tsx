import {
  getAssetLeadersSection,
  getWealthLeadersSection,
} from "@/services/leadership";
import AssetSliderSection from "./asset-section";

const AssetLeadersWrapper = async () => {
  const response = await getAssetLeadersSection();
  const cards = response?.data?.attributes?.asset;
  const cardTitle = response?.data?.attributes?.asset;
  const cardText = response?.data?.attributes?.asset;
  const content = {
    text: cardText,
    title: cardTitle,
  };
  return <AssetSliderSection cards={cards} content={content} />;
};

export default AssetLeadersWrapper;
