import { getWealthLeadersSection } from "@/services/leadership";
import WealthSliderSection from "./wealth-section";

const WealthLeadersWrapper = async () => {
  const response = await getWealthLeadersSection();
  const { cards, cardTitle, cardText } = response?.data?.attributes?.wealth;
  const content = {
    text: cardText,
    title: cardTitle,
  };
  return <WealthSliderSection cards={cards} content={content} />;
};

export default WealthLeadersWrapper;
