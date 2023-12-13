import { getBoardOfDirectorsSection } from "@/services/leadership";
import BodSliderSection from "./board-section";

const BoardOfDirectorsSectionWrapper = async () => {
  const response = await getBoardOfDirectorsSection();
  const cards = response?.data?.attributes?.boardOfDirectors?.cards;
  const cardTitle = response?.data?.attributes?.boardOfDirectors?.cardTitle;
  const cardText = response?.data?.attributes?.boardOfDirectors?.cardText;
  const content = {
    text: cardText,
    title: cardTitle,
  };

  return <BodSliderSection cards={cards} content={content} />;
};

export default BoardOfDirectorsSectionWrapper;
