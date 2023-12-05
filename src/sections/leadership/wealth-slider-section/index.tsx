import { getWealthLeadersSection } from "@/services/leadership";
import WealthSliderSection from "./wealth-section";

const WealthLeadersWrapper = async () => {
  const response = await getWealthLeadersSection();
  const cards = response?.data?.attributes?.wealth;
  const cardTitle = response?.data?.attributes?.wealth;
  const cardText = response?.data?.attributes?.wealth;
  const content = {
    text: cardText,
    title: cardTitle,
  };
  return <WealthSliderSection cards={cards} content={content} />;
};

export default WealthLeadersWrapper;
