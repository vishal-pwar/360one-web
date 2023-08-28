import { getBoardOfDirectorsSection } from "@/services/leadership";
import BodSliderSection from "./board-section";

const BoardOfDirectorsSectionWrapper = async () => {
  const response = await getBoardOfDirectorsSection();
  const { cards, cardTitle, cardText } =
    response?.data?.attributes?.boardOfDirectors;
  const content = {
    text: cardText,
    title: cardTitle,
  };
  return <BodSliderSection cards={cards} content={content} />;
};

export default BoardOfDirectorsSectionWrapper;
