import {
  getAssetLeadersSection,
  getWealthLeadersSection,
} from "@/services/leadership";
import AssetSliderSection from "./asset-section";

const AssetLeadersWrapper = async () => {
  const response = await getAssetLeadersSection();
  const cards = response?.data?.attributes?.asset?.cards?.cards;
  const cardTitle = response?.data?.attributes?.asset?.cardTitle?.cardTitle;
  const cardText = response?.data?.attributes?.asset?.cardText?.cardText;
  const content = {
    text: cardText,
    title: cardTitle,
  };
  return <AssetSliderSection cards={cards} content={content} />;
};

export default AssetLeadersWrapper;
